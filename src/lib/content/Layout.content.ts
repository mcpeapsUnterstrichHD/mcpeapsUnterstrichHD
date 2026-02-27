import { Locales, t, type Dictionary } from "intlayer";

const layoutContent = {
  key: "layout",
  content: {
    title: t({
      [Locales.ENGLISH_UNITED_STATES]: "Fabian Aps Portfolio/Imprint",
      [Locales.GERMAN_GERMANY]: "Fabian Aps Portfolio/Impressum",
    }),
    description: t({
      [Locales.ENGLISH_UNITED_STATES]: "my own portfolio/imprint website",
      [Locales.GERMAN_GERMANY]: "meine eigene Portfolio/Impressum Webseite",
    }),
  },
} satisfies Dictionary;

export default layoutContent;
