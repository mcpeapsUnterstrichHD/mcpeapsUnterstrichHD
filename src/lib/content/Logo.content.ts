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
