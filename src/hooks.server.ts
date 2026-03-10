/**
 * @module hooks.server
 * @description SvelteKit server-side hooks for locale detection and HTML transformation.
 */

import type { Handle } from "@sveltejs/kit";
import { languages, type Language } from "$lib/lang";
import { getLocalizedUrl } from "$lib/i18n";

const DEFAULT_LOCALE = languages[0].code;
const SUPPORTED_LOCALES = languages.map((l) => l.code);

/**
 * Hilfsfunktion zum Auslesen der bevorzugten Browser-Sprache aus dem Header.
 */
function getPreferredLocale(acceptLanguage: Language["code"] | null): string {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const preferredLangs = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, q] = lang.split(";");
      return {
        code: code.trim(),
        weight: q && q.startsWith("q=") ? parseFloat(q.split("=")[1]) : 1.0,
      };
    })
    .sort((a, b) => b.weight - a.weight);

  for (const { code } of preferredLangs) {
    if (SUPPORTED_LOCALES.includes(code as Language["code"])) {
      return code;
    }
    const baseCode = code.split("-")[0];
    if (SUPPORTED_LOCALES.includes(baseCode as Language["code"])) {
      return baseCode;
    }
  }

  return DEFAULT_LOCALE;
}

export const handle: Handle = async ({ event, resolve }) => {
  // Ignoriere statische Assets (.png, .css, etc.) und API-Routen
  const isFileOrApi =
    event.url.pathname.match(/\.[a-zA-Z0-9]+$/) ||
    event.url.pathname.startsWith("/api");
  if (isFileOrApi) {
    return resolve(event);
  }

  const firstSegment = event.url.pathname.split("/")[1];
  const urlHasLocale = SUPPORTED_LOCALES.includes(
    firstSegment as Language["code"],
  );

  let locale: Language["code"];

  // REGEL 1: Die URL ist das oberste Gesetz.
  // Wenn ein unterstütztes Sprachkürzel (z.B. /en/...) in der URL steht, nutze es bedingungslos.
  if (urlHasLocale) {
    locale = firstSegment as Language["code"];
  } else {
    // REGEL 2: Kein Kürzel in der URL bedeutet, wir sind auf der Default-Sprache (z.B. Deutsch).
    locale = DEFAULT_LOCALE;
    const hasCookie = event.cookies.get("mahd-cookie-consent") !== undefined;

    // Nur beim allerersten Besuch (kein Cookie) versuchen wir, die UX durch einen
    // automatischen Redirect zu verbessern, falls der Browser eine ANDERE Sprache bevorzugt.
    if (!hasCookie) {
      const acceptLanguage = event.request.headers.get("accept-language");
      const browserLocaleTarget = getPreferredLocale(
        acceptLanguage as Language["code"],
      );

      // Wenn der Browser z.B. "en" will, die URL aber aktuell "/" (Default) ist -> Umleiten
      if (browserLocaleTarget !== DEFAULT_LOCALE) {
        // Pfad sauber zusammenbauen (z.B. "/" -> "/en" ODER "/projects" -> "/en/projects")
        const newPath = getLocalizedUrl(
          event.url.pathname,
          browserLocaleTarget as Language["code"],
        );

        return new Response(null, {
          status: 302, // 302 ist wichtig für SEO, da es ein *temporärer* Redirect ist
          headers: { location: newPath + event.url.search },
        });
      }
    }
  }

  // Spracheinstellungen für das HTML anwenden
  const dir = languages.find((l) => l.code === locale)?.dir ?? "ltr";
  event.locals.locale = locale;

  // Ersetze %lang% und %dir% Platzhalter in der app.html
  return resolve(event, {
    transformPageChunk: ({ html }) => {
      html = html.replace("%dir%", dir);
      return html.replace("%lang%", locale);
    },
  });
};
