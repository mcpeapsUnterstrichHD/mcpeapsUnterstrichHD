<script lang="ts">
  /**
   * @component ConsentIframe
   * @description A consent-gated iframe wrapper that conditionally renders an `<iframe>` element
   * or a placeholder block depending on whether the user has granted consent for the
   * specified cookie category. Designed to comply with GDPR/ePrivacy requirements by
   * preventing third-party content from loading until explicit user consent is given.
   *
   * Consent-gated iframe wrapper following iOS App Tracking Transparency patterns.
   * Blocks third-party content until explicit category consent is granted, displaying
   * a placeholder with a consent action button styled with Nord color scheme.
   *
   * **Rendering behavior:**
   * - When `hasConsent` is `true`: renders the standard `<iframe>` with all provided attributes.
   * - When `hasConsent` is `false`: renders a styled placeholder card with a shield icon,
   *   an explanatory message, and a button that opens the cookie preferences sheet
   *   (via the `show-cookie-consent` custom window event).
   *
   * The component reads from the shared {@link cookieState} to determine consent status
   * reactively. When the user updates their preferences in the {@link CookieConsent.svelte}
   * sheet, the iframe will automatically appear or disappear without a page reload.
   *
   * @see {@link cookieState.svelte.ts} for the reactive consent state this component reads
   * @see {@link CookieConsent.svelte} for the preferences sheet that listens to `show-cookie-consent`
   * @see {@link cookieConfig.ts} for the available consent categories
   */
  import { useIntlayer } from "svelte-intlayer";
  import { cookieState } from "./cookieState.svelte";
  import { ShieldOff, Settings } from "@lucide/svelte";
  import * as Button from "$lib/components/ui/button";
  import { t } from "$lib/i18n";
  import { cn } from "$lib/utils";


  /** @description Intlayer dictionary for cookie consent UI strings, including blocked content messages. */
  const cookieConsent = useIntlayer("cookieConsent");

  /**
   * Component props interface.
   *
   * @interface Props
   * @property {string} category - The cookie consent category that must be accepted for the
   *   iframe to render. Must match one of the keys in {@link cookieState}
   *   (e.g., `"multimedia"`, `"socialMedia"`, `"contact"`).
   * @property {string} [src] - The URL source for the iframe content.
   * @property {string} [title] - The accessible title attribute for the iframe element.
   * @property {string} [class] - Additional CSS class names to apply to both the iframe
   *   and the fallback placeholder container.
   * @property {string | number} [height] - The height of the iframe (in pixels when numeric).
   *   Also used to set the `min-height` of the fallback placeholder.
   * @property {string} [allow] - The iframe's feature policy / permissions policy string
   *   (e.g., `"autoplay *; encrypted-media *;"`).
   * @property {string} [sandbox] - The iframe's sandbox attribute defining security restrictions
   *   (e.g., `"allow-forms allow-popups allow-same-origin allow-scripts"`).
   * @property {boolean} [allowFullScreen] - Whether the iframe should allow fullscreen mode.
   * @property {unknown} [key: string] - Any additional attributes are spread onto the iframe element.
   */

  interface Props {
    category: string;
    src?: string;
    title?: string;
    class?: string;
    height?: string | number;
    allow?: string;
    sandbox?: string;
    allowFullScreen?: boolean;
    [key: string]: unknown;
  }

  let {
    category,
    src,
    title,
    class: className = "",
    height,
    allow,
    sandbox,
    allowFullScreen,
    ...rest
  }: Props = $props();

  /**
   * @description Derived reactive value that determines whether the user has granted consent
   * for the specified `category`. Reads from the global {@link cookieState} using the
   * `category` prop as a dynamic key. Defaults to `false` if the category key is not found.
   * Uses Svelte 5 `$derived` rune for automatic re-computation when consent state changes.
   * @type {boolean}
   */
  let hasConsent = $derived(
    cookieState[category as keyof typeof cookieState] || false,
  );

  /**
   * Dispatches a custom window event to open the cookie preferences sheet.
   *
   * @description Fires a `show-cookie-consent` CustomEvent on the `window` object,
   * which is listened for by {@link CookieConsent.svelte} to open the preferences
   * sheet. Includes a guard for SSR safety (`typeof window !== "undefined"`).
   *
   * @returns {void}
   */
  function showCookieSettings() {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("show-cookie-consent"));
    }
  }
</script>

{#if hasConsent}
  <iframe
    {src}
    {title}
    class={className}
    {height}
    {allow}
    {sandbox}
    allowfullscreen={allowFullScreen}
    {...rest}
  ></iframe>
{:else}
  <div
    class={cn("flex flex-col items-center justify-center gap-4 p-8 bg-muted/30 rounded-lg border border-border/50 {className}")}
    style="min-height: {height ? `${height}px` : '200px'}"
  >
    <div class="p-3 bg-muted/50 rounded-full">
      <ShieldOff class="h-8 w-8 text-muted-foreground" />
    </div>
    <div class="text-center space-y-2">
      <p class="text-sm font-medium text-foreground">
        {t($cookieConsent, "blockedContent.title")}
      </p>
      <p class={cn("text-xs text-muted-foreground max-w-sm")}>
        {t($cookieConsent, "blockedContent.description", {
          category: t($cookieConsent, `categories.${category}.title`),
        })}
      </p>
    </div>
    <Button.Root
      variant="outline"
      size="sm"
      onclick={showCookieSettings}
      class={cn("inline-flex items-center gap-2")}
    >
      <Settings class={cn("h-4 w-4 text-muted-foreground")} />
      {$cookieConsent.blockedContent.button}
    </Button.Root>
  </div>
{/if}
