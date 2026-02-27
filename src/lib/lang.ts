import { Locales, type Locale } from "intlayer";


export interface Language {
  code: Locale;
  name: string;
  country: string;
  dir: "ltr" | "rtl";
}

export const languages: Language[] = [
  { code: Locales.GERMAN_GERMANY, name: "Deutsch", country: "Deutschland", dir: "ltr" },
  { code: Locales.ENGLISH_UNITED_STATES, name: "English", country: "USA", dir: "ltr" },
];
