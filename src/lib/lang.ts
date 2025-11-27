
// Routing locales (simple codes for URLs)
// Full locale codes (supporting regional variants)
export enum LanguagesNUM {
  de_DE = "de-DE",
  en_US = "en-US",
//  en_GB = "en-GB",
}
export const defaultLocale = LanguagesNUM.de_DE;


export const RoutingArray: string[] = [
  LanguagesNUM.de_DE,
  LanguagesNUM.en_US,
  //getRoutingLocale(LanguagesNUM.en_GB),
]

export type Language = {
  code: LanguagesNUM;
  name: string;
};

export const languages: Language[] = [
  {
    code: LanguagesNUM.de_DE,
    name: "Deutsch (Deutschland)"
  },
  {
    code: LanguagesNUM.en_US,
    name: "English (US)"
  },
  /*{
    code: LanguagesNUM.en_GB,
    name: "English (UK)"
  },*/
];

export function getLanguageName(code: LanguagesNUM): string {
  const lang = languages.find((lang) => lang.code === code);
  return lang ? lang.name : "Unknown Language";
}
