import type { Handle } from "@sveltejs/kit";
import { languages, type Language } from "$lib/lang";

const LOCALE_COOKIE = "mahd-locale";

export const handle: Handle = async ({ event, resolve }) => {
  // 1. Try to get locale from URL path (e.g., /en-US/aboutme)
  const firstSegment = event.url.pathname.split("/")[1];
  let locale: string;
  let dir: Language['dir'];

  if (languages.map(l => l.code.toString()).includes(firstSegment)) {
    locale = firstSegment;
  } else {
    // 2. Fall back to locale cookie
    const cookieLocale = event.cookies.get(LOCALE_COOKIE);
    if (cookieLocale && languages.map(l => l.code.toString()).includes(cookieLocale)) {
      locale = cookieLocale;
    } else {
      // 3. Fall back to Accept-Language header
      const acceptLang = event.request.headers.get("accept-language") ?? "";
      locale = negotiateLocale(acceptLang) ?? languages[0].code.toString(); // Default to first language if no match
    }
  }
  dir = languages.find(l => l.code.toString() === locale)?.dir ?? 'ltr';

  event.locals.locale = locale as any;

  // Replace %lang% placeholder in HTML
  return resolve(event, {
    transformPageChunk: ({ html }) => {
      html = html.replace("%dir%", dir);
      return html.replace("%lang%", locale);
    },
  });
};

function negotiateLocale(acceptLang: string): string | null {
  // Parse Accept-Language header (e.g., "en-US,en;q=0.9,de;q=0.8")
  const entries = acceptLang
    .split(",")
    .map((entry) => {
      const [lang, qPart] = entry.trim().split(";");
      const q = qPart ? parseFloat(qPart.replace("q=", "")) : 1.0;
      return { lang: lang.trim(), q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of entries) {
    // Exact match
    if (languages.map(l => l.code.toString()).includes(lang)) return lang;
    // Prefix match (e.g., "en" matches "en-US", "de" matches "de-DE")
    const match = languages.find(
      (l) => l.code.toString().toLowerCase().startsWith(lang.toLowerCase()),
    )?.code.toString();
    if (match) return match;
  }

  return null;
}
