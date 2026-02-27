<script lang="ts">
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

  let canonicalUrl = $derived.by(() => {
    const path = page.url.pathname.replace(/\/$/, "") || "/";
    return `${path}`;
  });

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
