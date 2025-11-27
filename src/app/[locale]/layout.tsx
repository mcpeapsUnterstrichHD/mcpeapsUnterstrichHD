import "../globals.css";
import {hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import ClientLayout from '@/components/ClientLayout';
import { notFound } from "next/navigation";

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

  return (
    <html lang={locale.split('-')[0]}>
      <head>
      </head>
      <body>
        <ClientLayout locale={locale} messages={messages}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
