import {NextIntlClientProvider} from 'next-intl';
import './globals.css'
import NotFoundContent from "@/components/__not_found";
import ClientLayout from '@/components/ClientLayout';
import { LanguagesNUM } from '@/lib/lang';
import { cn } from "@/lib/utils";
import { CaskaydiaCoveNerdFontPropo, CaskaydiaCoveNerdFontMono, CaskaydiaCoveNerdFont } from './fonts'

export default async function NotFound() {
  // Get the current locale from path for the 404 page
  const locale = LanguagesNUM.en_US;

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
