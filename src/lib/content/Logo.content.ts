/**
 * @module Logo.content
 *
 * @description
 * Intlayer content dictionary for the site logo image. Provides a single
 * localized alt text string for the mcpeaps_HD brand logo used in the sidebar
 * and footer. Translations are available in German (de-DE) and English (en-US).
 *
 * Dictionary key: `"logo"`
 *
 * @see {@link src/lib/components/AppSidebar.svelte} -- sidebar logo consuming `useIntlayer("logo")`
 * @see {@link src/lib/components/Footer.svelte} -- footer logo consuming `useIntlayer("logo")`
 */
import { Locales, t, type Dictionary } from "intlayer";

const logoContent = {
  key: "logo",
  content: {
    alt: t({
      [Locales.ENGLISH_UNITED_STATES]: "mcpeaps_HD Logo",
      [Locales.GERMAN_GERMANY]: "mcpeaps_HD Logo"
    }),
  }
} satisfies Dictionary;

export default logoContent;
