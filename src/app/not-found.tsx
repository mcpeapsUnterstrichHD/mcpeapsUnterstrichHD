import {NextIntlClientProvider} from 'next-intl';
import {cookies, headers} from 'next/headers';
import './globals.css'
import NotFoundContent from "@/components/__not_found";
import ClientLayout from '@/components/ClientLayout';
import { LanguagesNUM, RoutingArray, defaultLocale } from '@/lib/lang';
import { cn } from "@/lib/utils";
import { CaskaydiaCoveNerdFontPropo, CaskaydiaCoveNerdFontMono, CaskaydiaCoveNerdFont } from './fonts'

async function getPreferredLocale(): Promise<LanguagesNUM> {
  // 1. Try to get locale from cookie (user's explicit preference)
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('MAHD_USER_LOCALE');

  if (localeCookie?.value && RoutingArray.includes(localeCookie.value)) {
    return localeCookie.value as LanguagesNUM;
  }

  // 2. Try to detect from Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');

  if (acceptLanguage) {
    // Parse Accept-Language header (e.g., "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7")
    const languages = acceptLanguage.split(',').map(lang => {
      const [code] = lang.trim().split(';');
      return code;
    });

    // Find first matching locale
    for (const lang of languages) {
      // Check exact match first
      if (RoutingArray.includes(lang)) {
        return lang as LanguagesNUM;
      }
      // Check language code without region (e.g., "de" matches "de-DE")
      const baseCode = lang.split('-')[0];
      const matchingLocale = RoutingArray.find(locale => locale.startsWith(baseCode + '-'));
      if (matchingLocale) {
        return matchingLocale as LanguagesNUM;
      }
    }
  }

  // 3. Fall back to default locale
  return defaultLocale;
}

export default async function NotFound() {
  // Get the user's preferred locale
  const locale = await getPreferredLocale();

  // Load messages for the locale
  const messages = (await import(`@/assets/lang/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
      <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={cn(`${CaskaydiaCoveNerdFontPropo.variable} ${CaskaydiaCoveNerdFontMono.variable} ${CaskaydiaCoveNerdFont.variable} isolate`)}>
        <NextIntlClientProvider now={new Date()} timeZone='Europe/Berlin'>
          <ClientLayout locale={locale} messages={messages}>
            <NotFoundContent />
          </ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
