import type { Metadata } from "next";
import localFont from 'next/font/local'
import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Particles from '@/components/particles';
const ccnfp = localFont({
  src: [
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-SemiLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-SemiLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-ExtraLightItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/CaskaydiaCoveNerdFontPropo-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
  ],
})

export const metadata: Metadata = {
  title: "Live Wallpaper",
  description: "customizable Live Wallpaper",
  keywords: "customizable, Live, Wallpaper",
  twitter: {
    card: 'summary_large_image',
    title: 'Live Wallpaper',
    description: 'customizable Live Wallpaper',
    siteId: '723191637950775296',
    creator: '@mcpeaps_HD',
    creatorId: '723191637950775296',
    images: [{
      url: '/pictures/logo.svg',
      alt: 'Logo of mcpeaps_HD', // Alt attribute for Twitter image
      width: 3000,
      height: 3000
    }], // Must be an absolute URL
  },
  openGraph: {
    type: 'website',
    title: 'Live Wallpaper',
    description: 'customizable Live Wallpaper',
    url: 'https://mahd.comboompunksucht.app/live-wallpaper',
    images: [{
      url: '/pictures/logo.svg',
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
  icons: {
    icon: '/pictures/logo.svg',
    shortcut: '/pictures/logo.svg',
    apple: '/pictures/logo.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/pictures/logo.svg',
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
        <link rel="apple-touch-icon" href="/pictures/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/pictures/logo.svg" />
        <meta name="theme-color" content="#010101" />
        <meta name="start_url" content="/" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#010101" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Live Wallpaper" />
        <meta name="application-name" content="Fabian Aps" />
        <meta name="msapplication-TileColor" content="#010101" />
        <meta name="msapplication-TileImage" content="/pictures/logo.svg" />
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="sitemap" href="/sitemap.xml" />
        <meta name="keywords" content="portfolio, website, impressum, github, linkedin, aps, fabian" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={ccnfp.className}>
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
      </body>
    </html>
  );
}