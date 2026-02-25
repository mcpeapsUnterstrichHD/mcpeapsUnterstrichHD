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
