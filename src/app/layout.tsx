import type { Metadata } from "next";
import "./globals.css";

import Particles from "@/components/particles";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar"
import { WebVitals } from "@/components/web-vitals";
import { CaskaydiaCoveNerdFontPropo, CaskaydiaCoveNerdFontMono, CaskaydiaCoveNerdFont } from './fonts'

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Fabian Aps Portfolio/Impressum",
  description: "my own portfolio/impressum website",
  keywords: "portfolio, website, impressum, github, linkedin, aps, fabian",
  twitter: {
    card: "summary_large_image",
    title: "Fabian Aps Portfolio/Impressum",
    description: "my own portfolio/impressum website",
    siteId: "723191637950775296",
    creator: "@mcpeaps_HD",
    creatorId: "723191637950775296",
    images: [
      {
        url: "https://mcpeapsunterstrichhd.dev/pictures/logo.PNG",
        alt: "Logo of mcpeaps_HD", // Alt attribute for Twitter image
        width: 3000,
        height: 3000,
      },
    ], // Must be an absolute URL
  },
  openGraph: {
    type: "website",
    title: "Fabian Aps Portfolio/Impressum",
    description: "my own portfolio/impressum website",
    url: "https://mcpeapsunterstrichhd.dev",
    images: [
      {
        url: "https://mcpeapsunterstrichhd.dev/pictures/logo.PNG",
        alt: "Logo of mcpeaps_HD", // Alt attribute for Twitter image
        width: 3000,
        height: 3000,
      },
    ],
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

//<link rel="manifest" href="/manifest.webmanifest" />
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const values = { example_flag: true };
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2E3440" />
        <meta name="start_url" content="https://mcpeapsunterstrichhd.dev/" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2E3440" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="Fabian Aps Portfolio/Impressum"
        />
        <meta name="application-name" content="Fabian Aps" />
        <meta name="msapplication-TileColor" content="#2E3440" />
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="sitemap" href="/sitemap" />
        <meta
          name="keywords"
          content="portfolio, website, impressum, github, linkedin, aps, fabian"
        />
        <meta
          name="format-detection"
          content="telephone=yes, date=no, email=yes, address=yes"
        />
      </head>
      <body className={cn(`${CaskaydiaCoveNerdFontPropo.variable} ${CaskaydiaCoveNerdFontMono.variable} ${CaskaydiaCoveNerdFont.variable}`)}>
        <WebVitals />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-gradient-to-tl from-primary-background via-primary-foreground to-primary-background">
            <Particles quantity={400} refresh={true} />
            <SidebarProvider>

              <div className="z-1">

                {children}
              </div>
            </SidebarProvider>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
