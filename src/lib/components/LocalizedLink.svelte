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
import { page } from "$app/state";
import { languages } from "$lib/lang";

// Wir nehmen das href-Attribut und alle weiteren Attribute (wie class, target) entgegen
let { href, children, ...attrs } = $props();

// Hole das aktuelle erste Segment der URL (z.B. "en" oder "de")
let currentLocale = $derived(page.url.pathname.split("/")[1]);

// Prüfe, ob dieses Segment eine unserer unterstützten Sprachen ist
let isSupported = $derived(languages.some((l) => l.code === currentLocale));

// Baue die finale, smarte URL zusammen
let localizedHref = $derived(() => {
  // 1. Externe Links oder E-Mails ignorieren wir
  if (href.startsWith("http") || href.startsWith("mailto:")) return href;

  // 2. Wenn wir uns auf der Default-Sprache (ohne Kürzel) befinden, bleibt der Link wie er ist
  if (!isSupported) return href;

  // 3. Wenn der Link bereits das korrekte Sprachkürzel hat (z.B. fest einprogrammiert), nichts tun
  if (href.startsWith(`/${currentLocale}/`) || href === `/${currentLocale}`)
    return href;

  // 4. Das aktuelle Sprachkürzel an den Link anhängen
  const cleanHref = href === "/" ? "" : href; // Verhindert doppelte Slashes bei Home
  return `/${currentLocale}${cleanHref}`;
});
</script>

<a href={localizedHref()} hreflang={currentLocale} {...Object.fromEntries(Object.entries(attrs).filter(([key]) => key !== 'children' && key !== 'href' && key !== 'hreflang'))} >
  {@render children()}
</a>
