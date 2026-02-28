/**
 * @module getLocale
 * @description Server-side locale detection for SvelteKit request handling.
 * Determines the user's preferred language using a multi-step fallback strategy:
 * 1. Intlayer storage (cookies or custom HTTP headers)
 * 2. Browser `Accept-Language` header negotiation
 * 3. Application default locale
 *
 * Used exclusively in the server hooks (`src/hooks.server.ts`) to set the locale
 * for each incoming request before rendering.
 *
 * @see {@link module:lang} — Supported language definitions
 * @see {@link module:i18n} — Client-side translation resolution
 * @see `src/hooks.server.ts` — Where this function is called
 */

import {
  configuration,
  getLocaleFromStorage,
  localeDetector,
  type Locale,
} from "intlayer";
import type { RequestEvent } from "@sveltejs/kit";

/**
 * Get the user's locale from the request event.
 * This function is used in the `handle` hook in `src/hooks.server.ts`.
 *
 * It first tries to get the locale from the Intlayer storage (cookies or custom headers).
 * If the locale is not found, it falls back to the browser's "Accept-Language" negotiation.
 *
 * @param event - The request event from SvelteKit
 * @returns The user's locale
 */
export const getLocale = (event: RequestEvent): Locale => {
  const defaultLocale = configuration?.internationalization?.defaultLocale;

  // Try to get locale from Intlayer storage (Cookies or headers)
  const storedLocale = getLocaleFromStorage({
    // SvelteKit cookies access
    getCookie: (name: string) => event.cookies.get(name) ?? null,
    // SvelteKit headers access
    getHeader: (name: string) => event.request.headers.get(name) ?? null,
  });

  if (storedLocale) {
    return storedLocale;
  }

  // Fallback to Browser "Accept-Language" negotiation
  const negotiatorHeaders: Record<string, string> = {};

  // Convert SvelteKit Headers object to a plain Record<string, string>
  event.request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  // Check the locale from the `Accept-Language` header
  const userFallbackLocale = localeDetector(negotiatorHeaders);

  if (userFallbackLocale) {
    return userFallbackLocale;
  }

  // Return default locale if no match is found
  return defaultLocale;
};
