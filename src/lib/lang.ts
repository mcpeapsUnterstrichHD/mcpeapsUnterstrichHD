import { Locales } from "intlayer";
import { z } from "zod";

/**
 * @module lang
 * @description Language configuration for the application's internationalization system.
 * Defines all supported locales with their display metadata (name, country, text direction).
 * Used by the language switcher, SEO hreflang tags, sitemap generation, and locale routing.
 *
 * To add a new language, append an entry to the {@link languages} array and ensure
 * corresponding Intlayer content dictionaries exist in `src/lib/content/`.
 *
 * @see {@link module:getLocale} — Server-side locale detection
 * @see {@link module:i18n} — Translation resolution helpers
 */

/**
 * Represents a supported language in the application.
 *
 * @property code - The Intlayer locale identifier (e.g. `Locales.GERMAN_GERMANY`)
 * @property name - Human-readable language name in its own language (e.g. "Deutsch")
 * @property country - Country name in its own language (e.g. "Deutschland")
 * @property dir - Text direction: `"ltr"` for left-to-right or `"rtl"` for right-to-left
 */
export const LanguageSchema = z.object({
  code: z.enum(Object.values(Locales) as [string, ...string[]]),
  name: z.string(),
  country: z.string(),
  dir: z.enum(["ltr", "rtl"]),
});
export type Language = z.infer<typeof LanguageSchema>;

/**
 * All languages supported by the application.
 * Currently supports German (Germany) and English (US), both left-to-right.
 *
 * @example
 * ```ts
 * import { languages } from "$lib/lang";
 * languages.forEach(lang => console.log(lang.name)); // "Deutsch", "English"
 * ```
 */
export const languages: Language[] = [
  {
    code: Locales.GERMAN_GERMANY,
    name: "Deutsch",
    country: "Deutschland",
    dir: "ltr",
  },
  {
    code: Locales.ENGLISH_UNITED_STATES,
    name: "English",
    country: "USA",
    dir: "ltr",
  },
];
