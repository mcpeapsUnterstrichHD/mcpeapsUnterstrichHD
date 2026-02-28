/**
 * @module hooks.server
 * @description SvelteKit server-side hooks for locale detection and HTML transformation.
 *
 * This hook runs on every incoming request and performs two tasks:
 * 1. **Locale detection** — Extracts the locale from the URL path's first segment
 *    (e.g. `/en-US/about` → `en-US`). Falls back to the default locale (German)
 *    when no locale prefix is present (prefix-no-default strategy).
 * 2. **HTML transformation** — Replaces `%lang%` and `%dir%` placeholders in `app.html`
 *    with the detected locale code and text direction, ensuring correct `<html lang="..." dir="...">`.
 *
 * @see {@link module:lang} — Language definitions and default locale
 * @see {@link module:getLocale} — Alternative locale detection using Intlayer storage
 * @see `src/app.html` — HTML template with `%lang%` and `%dir%` placeholders
 */

import type { Handle } from "@sveltejs/kit";
import { languages, type Language } from "$lib/lang";

/** The first language in the {@link languages} array serves as the default locale. */
const DEFAULT_LOCALE = languages[0].code;

/**
 * SvelteKit server hook that detects locale from URL and injects it into
 * `event.locals` and the HTML response.
 *
 * @param event - The SvelteKit request event
 * @param resolve - The resolve function to continue request processing
 * @returns The response with locale-aware HTML transformations applied
 */
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
