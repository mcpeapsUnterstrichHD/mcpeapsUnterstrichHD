<script lang="ts">
  /**
   * @component LocalizedLink
   *
   * A drop-in replacement for the native `<a>` element that automatically
   * prefixes the `href` with the current Intlayer locale via
   * `getLocalizedUrl()`. All additional HTML anchor attributes are forwarded
   * through rest props, making this component fully transparent to consumers.
   *
   * The component accepts a `children` Svelte snippet for its inner content
   * and renders a standard `<a>` tag with the computed `localizedHref`.
   *
   * @example
   * ```svelte
   * <LocalizedLink href="/projects" class="underline">
   *   View Projects
   * </LocalizedLink>
   * ```
   *
   * @example External link (locale prefix is harmless but applied)
   * ```svelte
   * <LocalizedLink href="https://github.com" target="_blank" rel="noreferrer">
   *   GitHub
   * </LocalizedLink>
   * ```
   *
   * @see {@link AppSidebar} -- Uses LocalizedLink for all sidebar navigation items
   * @see {@link Footer} -- Uses LocalizedLink for all footer navigation items
   */
  import { getLocalizedUrl, type LocalesValues } from "intlayer";
  import { useLocale } from 'svelte-intlayer';

  let { href, children, ...attrs }: HTMLAnchorElement & { children: import('svelte').Snippet } = $props();
  const { locale } = useLocale();

  /** Derived locale-prefixed URL. Re-computes whenever `href` or `$locale` changes. */
  let localizedHref = $derived(getLocalizedUrl(href, $locale)) as HTMLAnchorElement['href'];
</script>

<a href={localizedHref} hreflang={$locale} {...Object.fromEntries(Object.entries(attrs).filter(([key]) => key !== 'children' && key !== 'href' && key !== 'hreflang'))} >
  {@render children()}
</a>
