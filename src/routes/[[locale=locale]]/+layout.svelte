<script lang="ts">
  import { onMount } from "svelte";
  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import { useLocale, useIntlayer } from "svelte-intlayer";
  import { getLocalizedUrl, type Locale } from "intlayer";
  import { languages, type Language } from "$lib/lang";

  let { children, data }: { children: Snippet; data: { locale: Locale } } =
    $props();
  const { locale, availableLocales, setLocale } = useLocale();
  const layout = useIntlayer("layout");

  // Sync server-detected locale with client-side intlayer (once on mount only)
  onMount(() => {
    if (data.locale && $locale !== data.locale) {
      setLocale(data.locale);
    }
  });

  let canonicalUrl = $derived.by(() => {
    const path = page.url.pathname.replace(/\/$/, "") || "/";
    return `${page.url.host}${path}`;
  });

  let pathForAlternates = $derived.by(() => {
    let path: string = page.url.pathname;
    for (const loc of availableLocales) {
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
  <link rel="canonical" href={canonicalUrl} />
  {#each availableLocales as loc}
    <link rel="alternate" hreflang={loc} href="{page.url.host}{getLocalizedUrl(pathForAlternates , loc)}" />
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
