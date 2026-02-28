<script lang="ts">
  /**
   * @component CookieConsent
   * @description The primary cookie consent UI component for the application. Renders a
   * compact bottom-right banner for first-time visitors and a slide-in preferences sheet
   * for granular category management. Designed following Apple HIG layout principles
   * with Nord color scheme styling.
   *
   * Consent management UI following Apple's permission request UX patterns -- presents
   * choices via a right-side Sheet (macOS convention) with clear accept/reject/customize
   * options, similar to iOS App Tracking Transparency prompts. The banner and sheet use
   * Liquid Glass material (`my-glass`) and Nord color scheme for consistent SwiftUI-inspired
   * appearance across desktop (macOS), tablet (iPadOS), and mobile (iOS) viewports.
   *
   * This component serves as the bridge between the `vanilla-cookieconsent` library
   * (which handles persistence, bot detection, and script management) and the custom
   * Svelte-based UI. It dynamically imports `vanilla-cookieconsent` on mount to avoid
   * SSR issues and keeps the shared {@link cookieState} in sync with the library's
   * internal consent state.
   *
   * **Architecture overview:**
   * 1. On mount, initializes `vanilla-cookieconsent` with {@link cookieConsentConfig}
   * 2. Checks for existing valid consent; if none exists, shows the compact banner
   * 3. Listens for the custom `show-cookie-consent` window event (dispatched by
   *    {@link ConsentIframe.svelte} and other components) to re-open the preferences sheet
   * 4. Synchronizes accepted categories into {@link cookieState} on every consent change
   *
   * **UI sections:**
   * - Compact banner: shows title, description, accept/reject buttons, and link to preferences
   * - Preferences sheet: full category toggles (necessary, multimedia, socialMedia, contact),
   *   informational sections, language switcher, and action buttons
   *
   * @see {@link cookieConfig.ts} for the vanilla-cookieconsent configuration
   * @see {@link cookieState.svelte.ts} for the reactive consent state
   * @see {@link ConsentIframe.svelte} for the consent-gated iframe component
   */
  import { onMount } from "svelte";
  import { cookieConsentConfig } from "./cookieConfig";
  import { cookieState } from "./cookieState.svelte";
  import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";
  import Langswitcher from "$lib/components/Langswitcher.svelte";
  import { useIntlayer, useLocale } from "svelte-intlayer";
  import {
    Cookie,
    ExternalLink,
    Shield,
    Music,
    Share2,
    Phone,
    Globe,
  } from "@lucide/svelte";
  import { getLocalizedUrl } from "intlayer";
  import {cn} from "$lib/utils";

  /** @description Intlayer dictionary for all cookie consent UI strings. */
  const cookieConsent = useIntlayer("cookieConsent");
  /** @description Current locale from the intlayer locale context. */
  const { locale } = useLocale();

  /**
   * @description Reactive flag controlling the visibility of the compact consent banner.
   * Set to `true` when no valid consent exists; set to `false` after any consent action.
   * Uses Svelte 5 `$state` rune.
   */
  let isVisible = $state(false);

  /**
   * @description Reactive flag controlling the open/close state of the preferences sheet.
   * Toggled by user interaction or the `show-cookie-consent` custom window event.
   * Uses Svelte 5 `$state` rune.
   */
  let sheetOpen = $state(false);

  /**
   * Synchronizes the global {@link cookieState} with vanilla-cookieconsent's internal state.
   *
   * @description Dynamically imports the `vanilla-cookieconsent` module and reads the
   * accepted status of each optional category (`multimedia`, `socialMedia`, `contact`),
   * writing the boolean results into the shared reactive {@link cookieState} object.
   * This function is called on initial consent, on consent change, and whenever the
   * preferences sheet is opened.
   *
   * @returns {void}
   */
  function syncCategories() {
    import("vanilla-cookieconsent").then((CC) => {
      cookieState.multimedia = CC.acceptedCategory("multimedia");
      cookieState.socialMedia = CC.acceptedCategory("socialMedia");
      cookieState.contact = CC.acceptedCategory("contact");
    });
  }

  /**
   * Lifecycle hook: initializes the cookie consent system on component mount.
   *
   * @description Performs three key tasks on mount:
   * 1. Dynamically imports and runs `vanilla-cookieconsent` with the merged config
   *    (base config + event callbacks for `onFirstConsent`, `onConsent`, `onChange`).
   * 2. Checks for existing valid consent: if absent, shows the compact banner;
   *    if present, synchronizes categories immediately.
   * 3. Registers a `show-cookie-consent` window event listener so other components
   *    can programmatically open the preferences sheet. Returns a cleanup function
   *    that removes the listener on component destroy.
   */
  onMount(() => {
    import("vanilla-cookieconsent").then((CC) => {
      CC.run({
        ...cookieConsentConfig,
        onFirstConsent: () => {
          isVisible = false;
        },
        onConsent: () => syncCategories(),
        onChange: () => syncCategories(),
      });

      if (!CC.validConsent()) {
        isVisible = true;
      } else {
        syncCategories();
      }
    });

    const handleShowBanner = () => {
      syncCategories();
      sheetOpen = true;
    };
    window.addEventListener("show-cookie-consent", handleShowBanner);
    return () => {
      window.removeEventListener("show-cookie-consent", handleShowBanner);
    };
  });

  /**
   * Accepts all cookie categories and closes both the banner and preferences sheet.
   *
   * @description Dynamically imports `vanilla-cookieconsent` and calls `acceptCategory("all")`
   * to grant consent for every defined category. Both the compact banner and the
   * preferences sheet are hidden immediately after acceptance.
   *
   * @async
   * @returns {Promise<void>}
   */
  async function handleAcceptAll() {
    const CC = await import("vanilla-cookieconsent");
    CC.acceptCategory("all");
    isVisible = false;
    sheetOpen = false;
  }

  /**
   * Rejects all optional cookie categories and closes both the banner and preferences sheet.
   *
   * @description Dynamically imports `vanilla-cookieconsent` and calls `acceptCategory([])`
   * with an empty array, which rejects all optional categories while preserving the
   * `necessary` category (which is always enabled and read-only). Both the compact banner
   * and the preferences sheet are hidden immediately after rejection.
   *
   * @async
   * @returns {Promise<void>}
   */
  async function handleRejectAll() {
    const CC = await import("vanilla-cookieconsent");
    CC.acceptCategory([]);
    isVisible = false;
    sheetOpen = false;
  }

  /**
   * Saves the user's per-category preferences from the preferences sheet.
   *
   * @description Reads the current toggle states from {@link cookieState} and builds
   * an array of accepted category names (always including `"necessary"`). Passes the
   * array to `vanilla-cookieconsent`'s `acceptCategory()` to persist the selection.
   * Both the compact banner and the preferences sheet are hidden after saving.
   *
   * @async
   * @returns {Promise<void>}
   */
  async function handleSavePreferences() {
    const CC = await import("vanilla-cookieconsent");
    const accepted: string[] = ["necessary"];
    if (cookieState.multimedia) accepted.push("multimedia");
    if (cookieState.socialMedia) accepted.push("socialMedia");
    if (cookieState.contact) accepted.push("contact");
    CC.acceptCategory(accepted);
    isVisible = false;
    sheetOpen = false;
  }

  /**
   * Opens the preferences sheet for detailed category management.
   *
   * @description First synchronizes the {@link cookieState} with the library's current
   * accepted categories (so the toggles reflect the persisted state), then opens the
   * slide-in sheet. Called when the user clicks "Manage Preferences" on the compact banner.
   *
   * @returns {void}
   */
  function handleOpenSheet() {
    syncCategories();
    sheetOpen = true;
  }
</script>

<!-- Compact Banner (bottom-right) -->
{#if isVisible}
  <div
    class={cn("fixed bottom-22 md:bottom-4 right-4 z-50 max-w-sm print:hidden no-print animate-in slide-in-from-bottom-5 fade-in duration-300")}
  >
    <div class={cn("my-glass rounded-lg shadow-xl p-4 space-y-3")}>
      <div class={cn("flex items-start gap-3")}>
        <div class={cn("shrink-0 p-2 bg-primary/10 rounded-full")}>
          <Cookie class={cn("h-5 w-5 text-primary")} />
        </div>
        <div class={cn("flex-1 min-w-0")}>
          <h3 class={cn("text-sm font-semibold text-foreground")}>
            {$cookieConsent.title}
          </h3>
          <p class={cn("text-xs text-muted-foreground mt-1 line-clamp-3")}>
            {$cookieConsent.description}
          </p>
        </div>
      </div>

      <div class={cn("flex flex-wrap items-center gap-2")}>
        <Button onclick={handleAcceptAll} size="sm" class={cn("flex-1 text-xs")}>
          {$cookieConsent.acceptAll}
        </Button>
        <Button
          onclick={handleRejectAll}
          variant="outline"
          size="sm"
          class={cn("flex-1 text-xs")}
        >
          {$cookieConsent.rejectAll}
        </Button>
      </div>
      <div class={cn("flex items-center justify-between")}>
        <Button
          onclick={handleOpenSheet}
          variant="ghost"
          size="sm"
          class={cn("text-xs text-muted-foreground hover:text-foreground px-1")}
        >
          {$cookieConsent.managePreferences}
        </Button>
        <a
          href={getLocalizedUrl("/imprint", $locale)}
          class={cn("inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors")}
        >
          {$cookieConsent.moreInfo}
          <ExternalLink class={cn("h-3 w-3")} />
        </a>
      </div>
    </div>
  </div>
{/if}

<!-- Preferences Sheet (right side) -->
<Sheet.Root bind:open={sheetOpen}>
  <Sheet.Content side="right" class={cn("overflow-y-auto print:hidden no-print")}>
    <Sheet.Header>
      <Sheet.Title class={cn("flex items-center gap-2")}>
        <Cookie class={cn("h-5 w-5 text-primary")} />
        {$cookieConsent.managePreferences}
      </Sheet.Title>
      <Sheet.Description>
        {$cookieConsent.description}
      </Sheet.Description>
    </Sheet.Header>

    <div class={cn("px-6 space-y-4")}>
      <!-- Cookie Categories -->
      <div class={cn("space-y-3")}>
        <!-- Necessary - always on -->
        <label
          class={cn("flex items-center justify-between p-3 rounded-lg bg-muted/30")}
        >
          <span class={cn("flex items-center gap-2 text-sm text-foreground")}>
            <Shield class={cn("h-4 w-4 text-primary")} />
            {$cookieConsent.technicalCookies.title}
          </span>
          <input
            type="checkbox"
            checked
            disabled
            class={cn("h-4 w-4 accent-primary")}
          />
        </label>

        <!-- Multimedia -->
        <label
          class={cn("flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors")}
        >
          <div class={cn("flex-1 min-w-0")}>
            <span class={cn("flex items-center gap-2 text-sm text-foreground")}>
              <Music class={cn("h-4 w-4 text-primary")} />
              {$cookieConsent.categories.multimedia.title}
            </span>
            <p class={cn("text-xs text-muted-foreground mt-0.5 ml-6")}>
              {$cookieConsent.categories.multimedia.description}
            </p>
          </div>
          <input
            type="checkbox"
            bind:checked={cookieState.multimedia}
            class={cn("h-4 w-4 accent-primary cursor-pointer shrink-0")}
          />
        </label>

        <!-- Social Media -->
        <label
          class={cn("flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors")}
        >
          <div class={cn("flex-1 min-w-0")}>
            <span class={cn("flex items-center gap-2 text-sm text-foreground")}>
              <Share2 class={cn("h-4 w-4 text-primary")} />
              {$cookieConsent.categories.socialMedia.title}
            </span>
            <p class={cn("text-xs text-muted-foreground mt-0.5 ml-6")}>
              {$cookieConsent.categories.socialMedia.description}
            </p>
          </div>
          <input
            type="checkbox"
            bind:checked={cookieState.socialMedia}
            class={cn("h-4 w-4 accent-primary cursor-pointer shrink-0")}
          />
        </label>

        <!-- Contact -->
        <label
          class={cn("flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors")}
        >
          <div class={cn("flex-1 min-w-0")}>
            <span class={cn("flex items-center gap-2 text-sm text-foreground")}>
              <Phone class={cn("h-4 w-4 text-primary")} />
              {$cookieConsent.categories.contact.title}
            </span>
            <p class={cn("text-xs text-muted-foreground mt-0.5 ml-6")}>
              {$cookieConsent.categories.contact.description}
            </p>
          </div>
          <input
            type="checkbox"
            bind:checked={cookieState.contact}
            class={cn("h-4 w-4 accent-primary cursor-pointer shrink-0")}
          />
        </label>
      </div>

      <!-- Info Sections -->
      <div class={cn("space-y-3 pt-2 border-t border-border/50")}>
        <div class={cn("p-3 bg-muted/20 rounded-lg")}>
          <div class={cn("flex items-center gap-2 mb-1")}>
            <Shield class={cn("h-3.5 w-3.5 text-primary")} />
            <p class={cn("text-xs font-medium text-foreground")}>
              {$cookieConsent.technicalCookies.title}
            </p>
          </div>
          <p class={cn("text-xs text-muted-foreground")}>
            {$cookieConsent.technicalCookies.description}
          </p>
        </div>

        <div class={cn("p-3 bg-muted/20 rounded-lg")}>
          <div class={cn("flex items-center gap-2 mb-1")}>
            <Music class={cn("h-3.5 w-3.5 text-primary")} />
            <p class={cn("text-xs font-medium text-foreground")}>
              {$cookieConsent.thirdPartyCookies.title}
            </p>
          </div>
          <p class={cn("text-xs text-muted-foreground")}>
            {$cookieConsent.thirdPartyCookies.description}
          </p>
        </div>
      </div>

      <!-- Language Selector -->
      <div class={cn("pt-2 border-t border-border/50")}>
        <div class={cn("flex items-center gap-2 mb-2")}>
          <Globe class={cn("h-3.5 w-3.5 text-primary")} />
          <p class={cn("text-xs font-medium text-foreground")}>
            {$cookieConsent.language}
          </p>
        </div>
        <Langswitcher />
      </div>
    </div>

    <Sheet.Footer>
      <div class={cn("flex flex-col gap-2 w-full")}>
        <Button onclick={handleSavePreferences} class={cn("w-full")}>
          {$cookieConsent.savePreferences}
        </Button>
        <div class={cn("flex gap-2")}>
          <Button
            onclick={handleAcceptAll}
            variant="outline"
            size="sm"
            class={cn("flex-1 text-xs")}
          >
            {$cookieConsent.acceptAll}
          </Button>
          <Button
            onclick={handleRejectAll}
            variant="outline"
            size="sm"
            class={cn("flex-1 text-xs")}
          >
            {$cookieConsent.rejectAll}
          </Button>
        </div>
        <a
          href={getLocalizedUrl("/imprint", $locale)}
          class={cn("inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors pt-1")}
        >
          {$cookieConsent.moreInfo}
          <ExternalLink class={cn("h-3 w-3")} />
        </a>
      </div>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>
