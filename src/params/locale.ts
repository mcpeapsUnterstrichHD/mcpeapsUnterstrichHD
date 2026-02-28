/**
 * @module params/locale
 * @description SvelteKit route parameter matcher for the `[[locale=locale]]` dynamic segment.
 * Validates that a URL path segment is a configured Intlayer locale (e.g. `"de-DE"`, `"en-US"`).
 *
 * Used in route definitions like `src/routes/[[locale=locale]]/+page.svelte` to make
 * the locale prefix optional — when omitted, the default locale is used.
 *
 * @see {@link https://svelte.dev/docs/kit/advanced-routing#matching} SvelteKit param matchers
 * @see {@link module:lang} — Supported locale definitions
 */

import { configuration, type Locale } from "intlayer";

/**
 * Checks whether the given route parameter is a valid Intlayer locale.
 *
 * @param param - The URL path segment to validate (defaults to the configured default locale)
 * @returns `true` if the param is a recognized locale, `false` otherwise
 *
 * @example
 * ```ts
 * match("de-DE"); // true (if German is configured)
 * match("fr-FR"); // false (not in configured locales)
 * ```
 */
export const match = (
  param: Locale = configuration.internationalization.defaultLocale
): boolean => {
  return configuration.internationalization.locales.includes(param);
};
