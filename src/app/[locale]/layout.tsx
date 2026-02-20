import "../globals.css";
import {hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import ClientLayout from '@/components/ClientLayout';
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { CaskaydiaCoveNerdFontPropo, CaskaydiaCoveNerdFontMono, CaskaydiaCoveNerdFont } from '../fonts'
import { LanguagesNUM, getLanguageDir } from "@/lib/lang";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Await the params to get the locale
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  // Load messages for the locale
  const messages = (await import(`@/assets/lang/${locale}.json`)).default;
  const dir = getLanguageDir(locale as LanguagesNUM);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
      <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={cn(`${CaskaydiaCoveNerdFontPropo.variable} ${CaskaydiaCoveNerdFontMono.variable} ${CaskaydiaCoveNerdFont.variable} isolate`)} suppressHydrationWarning>
        <ClientLayout locale={locale as LanguagesNUM} messages={messages}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
