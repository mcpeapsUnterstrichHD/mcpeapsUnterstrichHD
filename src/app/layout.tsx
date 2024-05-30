import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Particles from '@/components/particles';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const ccnfp = localFont({
  src: [
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-SemiLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-SemiLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-ExtraLightItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-ccnfp',
})

const ccnfm = localFont({
  src: [
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-SemiLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-SemiLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-ExtraLightItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontMono-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-ccnfm',
})

const ccnf = localFont({
  src: [
    {
      path: './fonts/CaskaydiaCoveNerdFont-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-SemiLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-SemiLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-ExtraLightItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFont-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-ccnf',
})

export const metadata: Metadata = {
  title: "Fabian Aps Portfolio/Impressum",
  description: "my own portfolio/impressum website",
  keywords: "portfolio, website, impressum, github, linkedin, aps, fabian",
  twitter: {
    card: 'summary_large_image',
    title: 'Fabian Aps Portfolio/Impressum',
    description: 'my own portfolio/impressum website',
    siteId: '723191637950775296',
    creator: '@mcpeaps_HD',
    creatorId: '723191637950775296',
    images: [{
      url: 'https://mahd.comboompunksucht.app/pictures/logo.PNG',
      alt: 'Logo of mcpeaps_HD', // Alt attribute for Twitter image
      width: 3000,
      height: 3000
    }], // Must be an absolute URL
  },
  openGraph: {
    type: 'website',
    title: 'Fabian Aps Portfolio/Impressum',
    description: 'my own portfolio/impressum website',
    url: 'https://mahd.comboompunksucht.app',
    images: [{
      url: 'https://mahd.comboompunksucht.app/pictures/logo.PNG',
      alt: 'Logo of mcpeaps_HD', // Alt attribute for Twitter image
      width: 3000,
      height: 3000
    }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
      noarchive: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
//<link rel="manifest" href="/manifest.webmanifest" />
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#010101" />
        <meta name="start_url" content="https://mahd.comboompunksucht.app/" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#010101" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Fabian Aps Portfolio/Impressum" />
        <meta name="application-name" content="Fabian Aps" />
        <meta name="msapplication-TileColor" content="#010101" />
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="sitemap" href="/sitemap" />
        <meta name="keywords" content="portfolio, website, impressum, github, linkedin, aps, fabian" />
        <meta name="format-detection" content="telephone=yes, date=no, email=yes, address=yes" />
      </head>
      <body className={ccnfp.className + " " + ccnfm.className + " " + ccnf.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

          <div className="bg-gradient-to-tl from-primary-background via-primary-foreground to-primary-background">
          <Particles
            quantity={400}
            refresh={true}
          />
            <div className="z-1">{children}</div>
          </div>
          </ThemeProvider>
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}