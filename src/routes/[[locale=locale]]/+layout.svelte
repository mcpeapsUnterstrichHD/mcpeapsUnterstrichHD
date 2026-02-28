<script lang="ts">
  /**
   * @module routes/[[locale=locale]]/+layout
   * @description Locale-aware layout component that wraps all pages under the optional
   * `[[locale=locale]]` route parameter. This layout is responsible for:
   *
   * 1. **Locale synchronization** - Syncs the server-detected locale (from `+layout.server.ts`)
   *    with the client-side Intlayer locale store on initial mount.
   * 2. **HTML lang/dir attributes** - Keeps `<html lang="..." dir="...">` in sync reactively
   *    whenever the client-side locale changes, supporting LTR/RTL directionality.
   * 3. **SEO meta tags** - Injects `<title>`, `<meta description>`, canonical URL, hreflang
   *    alternate links, Open Graph tags, and Twitter Card meta tags into `<svelte:head>`.
   * 4. **Canonical & hreflang** - Computes the canonical URL (trailing slash stripped) and
   *    generates hreflang alternate links for all supported languages plus `x-default`.
   *
   * The layout uses Intlayer's `useLocale()` for locale state management and `useIntlayer()`
   * for retrieving localized content dictionaries (title, description, etc.).
   *
   * @property {Snippet} children - The child page/layout content to render
   * @property {{ locale: Locale }} data - Server load data containing the detected locale
   *
   * @reactive {string} canonicalUrl - Derived canonical URL path with trailing slash removed
   * @reactive {string} pathForAlternates - Derived locale-stripped path used for hreflang href generation
   *
   * Locale-aware layout wrapper handling SEO metadata, canonical URLs, and hreflang
   * links. Functions as a SwiftUI NavigationStack-equivalent document head manager
   * for localized routes.
   *
   * @see {@link routes/[[locale=locale]]/+layout.server.ts} for server-side locale detection
   * @see {@link $lib/lang} for supported language definitions
   */

  import { onMount } from "svelte";
  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import { useLocale, useIntlayer } from "svelte-intlayer";
  import { getLocalizedUrl, type Locale } from "intlayer";
  import { languages } from "$lib/lang";

  let { children, data }: { children: Snippet; data: { locale: Locale } } =
    $props();
  const { locale, setLocale } = useLocale();
  const layout = useIntlayer("layout");

  // Sync server-detected locale with client-side intlayer (once on mount only)
  onMount(() => {
    if (data.locale && $locale !== data.locale) {
      setLocale(data.locale);
    }
  });

  // Keep <html lang="..." dir="..."> in sync on client-side locale changes
  $effect(() => {
    const lang = languages.find((l) => l.code === $locale);
    document.documentElement.lang = $locale;
    document.documentElement.dir = lang?.dir ?? "ltr";
  });

  /**
   * @reactive Derived canonical URL path for the current page.
   * Strips trailing slashes and defaults to "/" for the root path.
   * Used in the `<link rel="canonical">` tag.
   */
  let canonicalUrl = $derived.by(() => {
    const path = page.url.pathname.replace(/\/$/, "") || "/";
    return `${path}`;
  });

  /**
   * @reactive Derived locale-agnostic path used for generating hreflang alternate links.
   * Strips any locale prefix (e.g. `/en-US`) from the current pathname so each language
   * alternate can be constructed by prepending its own locale code.
   */
  let pathForAlternates = $derived.by(() => {
    let path: string = page.url.pathname;
    for (const loc of languages.map(l => l.code)) {
      if (path.startsWith(`/${loc}`)) {
        path = path.slice(`/${loc}`.length) || "/";
        break;
      }
    }
    return path as Parameters<typeof getLocalizedUrl>[0];
  });
</script>

<svelte:head>
  <title>{$layout.title}</title>
  <meta name="description" content={$layout.description} />
  <meta
    name="keywords"
    content="portfolio, website, impressum, github, linkedin, aps, fabian"
  />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

  <!-- Canonical & hreflang -->
  <link rel="canonical" href="{page.url.protocol}//{page.url.host}{canonicalUrl}" />
  <link rel="alternate" hreflang="x-default" href="{page.url.protocol}//{page.url.host}{pathForAlternates}" />
  {#each languages as lang}
    <link rel="alternate" hreflang={lang.code} href="{page.url.protocol}//{page.url.host}/{lang.code}{pathForAlternates === '/' ? '' : pathForAlternates}" />
  {/each}

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={$layout.title} />
  <meta property="og:title" content={$layout.title} />
  <meta property="og:description" content={$layout.description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta
    property="og:image"
    content="{page.url.host}/pictures/logo.png"
  />
  <meta property="og:image:width" content="3000" />
  <meta property="og:image:height" content="3000" />
  <meta property="og:image:alt" content="Logo of mcpeaps_HD" />
  <meta property="og:locale" content={$locale} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site:id" content="723191637950775296" />
  <meta name="twitter:title" content={$layout.title} />
  <meta name="twitter:description" content={$layout.description} />
  <meta name="twitter:creator" content="@mcpeaps_HD" />
  <meta name="twitter:creator:id" content="723191637950775296" />
  <meta
    name="twitter:image"
    content="{page.url.host}/pictures/logo.png"
  />
  <meta name="twitter:image:alt" content="Logo of mcpeaps_HD" />
</svelte:head>

{@render children()}
