<script lang="ts">
  import { getLocalizedUrl, type LocalesValues } from "intlayer";
  import { useLocale } from 'svelte-intlayer';

  let { href = "", children, ...attrs } = $props();
  const { locale } = useLocale();

  // Helper to prefix URL with current locale
  let localizedHref = $derived(getLocalizedUrl(href, $locale));
</script>

<a href={localizedHref} {...attrs}>
  {@render children()}
</a>
