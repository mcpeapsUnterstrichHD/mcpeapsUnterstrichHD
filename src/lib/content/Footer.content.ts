/**
 * @module Footer.content
 *
 * @description
 * Intlayer content dictionary for the site-wide footer component. Provides
 * translations for the footer column headings (Navigation, Connect, Legal) and
 * the copyright notice ("All rights reserved."). Translations are available in
 * German (de-DE) and English (en-US).
 *
 * Dictionary key: `"footer"`
 *
 * @see {@link src/lib/components/Footer.svelte} -- footer component consuming `useIntlayer("footer")`
 * @see {@link src/lib/components/AppSidebar.svelte} -- sidebar footer section consuming `useIntlayer("footer")`
 */
import { Locales, t, type Dictionary } from "intlayer";

const footerContent = {
  key: "footer",
  content: {
    navigation: t({
      [Locales.ENGLISH_UNITED_STATES]: "Navigation",
      [Locales.GERMAN_GERMANY]: "Navigation"
    }),
    connect: t({
      [Locales.ENGLISH_UNITED_STATES]: "Connect",
      [Locales.GERMAN_GERMANY]: "Verbinden"
    }),
    legal: t({
      [Locales.ENGLISH_UNITED_STATES]: "Legal",
      [Locales.GERMAN_GERMANY]: "Rechtliches"
    }),
    rights: t({
      [Locales.ENGLISH_UNITED_STATES]: "All rights reserved.",
      [Locales.GERMAN_GERMANY]: "Alle Rechte vorbehalten."
    }),
  }
} satisfies Dictionary;

export default footerContent;
