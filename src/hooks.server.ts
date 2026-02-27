import type { Handle } from "@sveltejs/kit";
import { languages, type Language } from "$lib/lang";

const DEFAULT_LOCALE = languages[0].code;

export const handle: Handle = async ({ event, resolve }) => {
  const firstSegment = event.url.pathname.split("/")[1];
  let locale: Language  ['code'];
  let dir: Language['dir'];

  if (languages.map(l => l.code).includes(firstSegment as Language['code'])) {
    // URL has an explicit locale prefix → use it
    locale = firstSegment as Language['code'];
  } else {
    // No locale prefix → with prefix-no-default, this IS the default locale
    locale = DEFAULT_LOCALE;
  }
  dir = languages.find(l => l.code === locale)?.dir ?? 'ltr';

  event.locals.locale = locale;

  // Replace %lang% placeholder in HTML
  return resolve(event, {
    transformPageChunk: ({ html }) => {
      html = html.replace("%dir%", dir);
      return html.replace("%lang%", locale);
    },
  });
};
