<script lang="ts">
  /**
   * @component Langswitcher
   *
   * An inline language-picker widget with real-time search, used in both the
   * {@link AppSidebar} footer (sidebar variant) and the {@link Footer} bottom bar
   * (standalone variant). The two layout modes are controlled by the `sidebar`
   * prop and affect container classes, chevron direction, and dropdown placement.
   *
   * **Sidebar variant** (`sidebar={true}`) -- renders inside a `Sidebar.MenuSub`
   * with `ChevronRight`, sized to match other sidebar menu items.
   *
   * **Footer / standalone variant** (`sidebar={false}`) -- renders with a
   * `ChevronDown` and opens an absolutely-positioned dropdown *above* the trigger
   * (bottom-anchored positioning).
   *
   * The search input doubles as the current-language display: when closed it shows
   * `"Language (Country)"`, when opened it becomes a text field with a
   * {@link Search} icon. An `$effect` watches for exact matches (by code, name,
   * or country) and auto-selects them immediately.
   *
   * Language data is sourced from `$lib/lang` (`languages` array of `Language`
   * objects) and locale switching is handled via `useLocale().setLocale()`, which
   * triggers a `goto()` to the new locale-prefixed path.
   *
   * @example Sidebar usage
   * ```svelte
   * <Langswitcher sidebar />
   * ```
   *
   * @example Footer / standalone usage
   * ```svelte
   * <Langswitcher />
   * ```
   *
   * @see {@link AppSidebar} -- Embeds Langswitcher in sidebar footer
   * @see {@link Footer} -- Embeds Langswitcher in the bottom bar
   */
  import { page } from "$app/state";
  import {
    getLocalizedUrl,
     type Locale,
  } from "intlayer";
  import { useLocale, useIntlayer } from "svelte-intlayer";
  import { goto } from "$app/navigation";
  import * as Collapsible from "$lib/components/ui/collapsible";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import * as Sidebar from "$lib/components/ui/sidebar";
  import {
    Globe,
    ChevronRight,
    ChevronDown,
    Search,
    Dot,
  } from "@lucide/svelte";
  import { t } from "$lib/i18n";
  import { languages , type Language } from "$lib/lang";
  import { cn } from "$lib/utils";

  /**
   * Props for the Langswitcher component.
   *
   * @property {boolean} [sidebar=false] - When true, renders in sidebar-optimised layout
   *   (smaller text, right-chevron, Sidebar.MenuSub dropdown). When false, renders as a
   *   standalone glass-card widget with an upward-opening dropdown.
   */
  interface Props {
    sidebar?: boolean;
  }

  let { sidebar = false }: Props = $props();

  /** Whether the language dropdown is currently expanded. */
  let open = $state(false);
  /** Current search query typed into the language filter input. */
  let search = $state("");

  const sidebarText = useIntlayer("sidebar");

  const { locale, setLocale } = useLocale({
    onLocaleChange: (newLocale) => {
      const localizedPath = getLocalizedUrl(page.url.pathname, newLocale);
      goto(localizedPath, { invalidateAll: true });
    },
  });



  /** Derived `Language` object for the currently active locale. */
  const currentLanguage = $derived(
    languages.find((l: Language) => l.code === $locale),
  );

  /** Derived subset of `languages` filtered by the current `search` query (name, country, or code). */
  const filteredLanguages = $derived(
    languages.filter((lang: Language) => {
      if (!search) return true;
      const v = `${lang.name} ${lang.country} ${lang.code}`.toLowerCase();
      return v.includes(search.toLowerCase());
    }),
  );

  /**
   * Applies the selected language: updates the locale store, closes the
   * dropdown, and clears the search input.
   *
   * @param {Language} lang - The language entry to activate.
   */
  function setLanguage(lang: Language) {
    setLocale(lang.code);
    open = false;
    search = "";
  }

  /**
   * Reactive effect that auto-selects a language when the search query exactly
   * matches a language code, name, or country (case-insensitive). This provides
   * a "type-to-select" shortcut for power users.
   */
  $effect(() => {
    if (!search) return;
    const lowerSearch = search.toLowerCase();
    const exactMatch = languages.find(
      (l) =>
        l.code.toLowerCase() === lowerSearch ||
        l.name.toLowerCase() === lowerSearch ||
        l.country.toLowerCase() === lowerSearch,
    );
    if (exactMatch) setLanguage(exactMatch);
  });

  /** Derived Tailwind classes for the outer trigger container, switching between sidebar and standalone styles. */
  const containerClasses = $derived(
    sidebar
      ? "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden"
      : "gap-2 rounded-md my-glass p-2 text-left text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground focus-visible:ring-2 flex items-center outline-hidden cursor-pointer",
  );

  /** Derived Tailwind classes for each language option button inside the dropdown list. */
  const buttonClasses = $derived(
    sidebar
      ? "cursor-pointer px-2 py-1.5 h-8 text-xs rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-left w-full"
      : "cursor-pointer px-2 py-1.5 h-8 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-left w-full",
  );
</script>

<Collapsible.Root
  class={cn("group/collapsible", sidebar ? '' : "relative")}
  bind:open
>
  <!-- Main trigger row -->
  <div
    class={cn(containerClasses)}
    onclick={() => {
      open = !open;
    }}
    role="button"
    tabindex="0"
    onkeydown={(e) => {
      if (e.key === "Enter") open = !open;
    }}
  >
    {#if sidebar}
      <Tooltip.Root>
        <Tooltip.Trigger class={cn("shrink-0 outline-none cursor-pointer")}>
          <Globe class={cn("size-4")} />
        </Tooltip.Trigger>
        <Tooltip.Content side="right">
          {currentLanguage?.name} ({currentLanguage?.country})
        </Tooltip.Content>
      </Tooltip.Root>
    {:else}
      <Globe class={cn("size-4 shrink-0 text-muted-foreground")} />
    {/if}

    <div
      class={cn(sidebar
        ? "flex flex-1 min-w-0 items-center gap-1.5 group-data-[collapsible=icon]:hidden"
        : "flex flex-1 min-w-0 items-center gap-1.5")}
    >
      {#if open}
        <Search class={cn("size-3.5 shrink-0 opacity-50")} />
      {/if}
      <input
        type="text"
        placeholder={t($sidebarText, "searchLanguage")}
        value={open
          ? search
          : `${currentLanguage?.name} (${currentLanguage?.country})`}
        oninput={(e) => {
          search = (e.target as HTMLInputElement).value;
          if (!open) open = true;
        }}
        onfocus={() => {
          open = true;
          search = "";
        }}
        onclick={(e) => e.stopPropagation()}
        class={cn("h-auto p-0 border-0 focus-visible:ring-0 focus:outline-none bg-transparent w-full cursor-pointer placeholder:text-muted-foreground/70 text-inherit")}
      />
    </div>

    <div
      class={cn("ml-auto cursor-pointer p-0.5 rounded-sm hover:bg-muted/50 outline-none focus-visible:ring-2")}
    >
      {#if sidebar}
        <ChevronRight
          class={cn("size-4 transition-transform duration-200", open
            ? 'rotate-90'
            : '', "group-data-[collapsible=icon]:hidden shrink-0 opacity-50")}
        />
      {:else}
        <ChevronDown
          class={cn("size-4 transition-transform duration-200", open
            ? ''
            : '-rotate-90', "shrink-0 opacity-50")}
        />
      {/if}
    </div>
  </div>

  <Collapsible.Content>
    {#if sidebar}
      <Sidebar.MenuSub
        class={cn("px-2 py-1.5 max-h-75 overflow-y-auto flex flex-col gap-2")}
      >
        {#if filteredLanguages.length === 0}
          <span class={cn("py-2 text-center text-xs text-muted-foreground")}
            >{t($sidebarText, "noLanguageFound")}</span
          >
        {:else}
          {#each filteredLanguages as lang}
            <a
              href={getLocalizedUrl(page.url.pathname, lang.code)}
              onclick={(e) => {
                e.preventDefault();
                setLanguage(lang);
              }}
              class={cn(buttonClasses, "flex items-center justify-between")}
            >
              <span class={cn(lang.code === $locale ? "font-bold" : "")}
                >{lang.name} ({lang.country})</span
              >
              {#if lang.code === $locale}
                <Dot class={cn("text-primary")} size={32} strokeWidth={6} />
              {/if}
            </a>
          {/each}
        {/if}
      </Sidebar.MenuSub>
    {:else}
      <div
        class={cn("absolute bottom-full left-0 right-0 mb-1 px-2 py-1.5 max-h-50 overflow-y-auto flex flex-col gap-2 my-glass rounded-md shadow-lg z-50")}
      >
        {#if filteredLanguages.length === 0}
          <span class={cn("py-2 text-center text-xs text-muted-foreground")}
            >{t($sidebarText, "noLanguageFound")}</span
          >
        {:else}
          {#each filteredLanguages as lang}
            <a
              href={getLocalizedUrl(page.url.pathname, lang.code)}
              onclick={(e) => {
                e.preventDefault();
                setLanguage(lang);
              }}
              class={cn(buttonClasses, "flex items-center justify-between")}
            >
              <span class={cn(lang.code === $locale ? "font-bold" : "")}
                >{lang.name} ({lang.country})</span
              >
              {#if lang.code === $locale}
                <Dot class={cn("text-primary")} size={32} strokeWidth={6} />
              {/if}
            </a>
          {/each}
        {/if}
      </div>
    {/if}
  </Collapsible.Content>
</Collapsible.Root>
