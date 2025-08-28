import type {Resource} from "i18next";

import deDE from "@/assets/lang/de-DE.json";
import enUS from "@/assets/lang/en-US.json"; // falls du eine englische Version hast

export enum LanguagesNUM {
  de = "de-DE",
  en_US = "en-US",
}

export type Language = {
  code: LanguagesNUM;
  name: string;
};

export const languages: Language[] = [
  {
    code: LanguagesNUM.de,
    name: "Deutsch",
  },
  {
    code: LanguagesNUM.en_US,
    name: "English (US)",
  },
];

export function getLanguageName(code: LanguagesNUM): string {
  const lang = languages.find((lang) => lang.code === code);
  return lang ? lang.name : "Unknown Language";
}

export const i18next_Language_Resource: Resource = {
  "de-DE": { translation: deDE },
  "en-US": { translation: enUS },
}
