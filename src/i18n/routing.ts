// Routing configuration for i18n
// Adapted from Next.js next-intl/routing for TanStack Start

import { defaultLocale, RoutingArray, LanguagesNUM } from '@/lib/lang';

export const routing = {
  // A list of all locales that are supported
  locales: RoutingArray,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  // Locale detection from browser
  localeDetection: true,

  // 'as-needed' means: default locale has no prefix, others do
  localePrefix: 'as-needed' as const,

  // Cookie settings
  localeCookie: {
    name: 'MAHD_USER_LOCALE',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  },
};

// Helper to check if a locale is valid
export function isValidLocale(locale: string): locale is LanguagesNUM {
  return routing.locales.includes(locale);
}

// Get locale from URL path
export function getLocaleFromPath(pathname: string): LanguagesNUM {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // Check if first segment is a valid non-default locale
  if (firstSegment && isValidLocale(firstSegment) && firstSegment !== routing.defaultLocale) {
    return firstSegment;
  }

  return routing.defaultLocale;
}

// Build path with locale prefix (only for non-default locale)
export function getPathname(path: string, locale: LanguagesNUM): string {
  // 1. Remove any existing locale prefix
  const cleanPath = removeLocalePrefix(path);

  // 2. Otherwise prepend locale
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

// Remove locale prefix from path (for comparing routes)
export function removeLocalePrefix(pathname: string): string {
  const localePattern = routing.locales.map((l) => l.replace('-', '\\-')).join('|');
  const localeRegex = new RegExp(`^\\/(${localePattern})(\\/|$)`);
  return pathname.replace(localeRegex, '/');
}
