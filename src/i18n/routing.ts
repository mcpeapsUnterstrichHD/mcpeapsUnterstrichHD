import {defineRouting} from 'next-intl/routing';
import { defaultLocale, RoutingArray } from '@/lib/lang';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: RoutingArray,

  // Used when no locale matches
  defaultLocale: defaultLocale,
  localeDetection: true,
  localePrefix: 'as-needed',
  localeCookie: {
    // Custom cookie name
    name: 'MAHD_USER_LOCALE',
    // Expire in one year
    maxAge: 60 * 60 * 24 * 365
  },
});
