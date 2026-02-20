
// Routing locales (simple codes for URLs)
// Full locale codes (supporting regional variants)
export enum LanguagesNUM {
  de_DE = "de-DE",
  en_US = "en-US",
//  en_GB = "en-GB",
}
export const defaultLocale = LanguagesNUM.de_DE;

export enum LangDir {
  ltr = "ltr",
  rtl = "rtl",
}


export const RoutingArray: string[] = [
  LanguagesNUM.de_DE,
  LanguagesNUM.en_US,
]

export type Language = {
  code: LanguagesNUM;
  name: string;
  country: string;
  dir: LangDir;
};

export const languages: Language[] = [
  {
    code: LanguagesNUM.de_DE,
    name: "Deutsch",
    country: "Deutschland",
    dir: LangDir.ltr,
  },
  {
    code: LanguagesNUM.en_US,
    name: "English",
    country: "USA",
    dir: LangDir.ltr,
  },
  /*{
    code: LanguagesNUM.en_GB,
    name: "English",
    country: "UK",
    dir: LangDir.ltr,
  },*/
];

export function getLanguageDisplayName(code: LanguagesNUM): string {
  const lang = languages.find((lang) => lang.code === code);
  return lang ? `${lang.name} (${lang.country})` : "Unknown Language";
}

export function getLanguageName(code: LanguagesNUM): string {
  const lang = languages.find((lang) => lang.code === code);
  return lang ? lang.name : "Unknown Language";
}

export function getLanguageCountry(code: LanguagesNUM): string {
  const lang = languages.find((lang) => lang.code === code);
  return lang ? lang.country : "Unknown Language";
}

export function getLanguageDir(code: LanguagesNUM): LangDir {
  const lang = languages.find((lang) => lang.code === code);
  return lang ? lang.dir : LangDir.ltr;
}
