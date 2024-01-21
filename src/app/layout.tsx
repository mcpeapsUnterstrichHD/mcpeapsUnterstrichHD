import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/nav-bar";

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
      path: './fonts/CaskaydiaCoveNerdFontPropo-Itallic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-SemiBold.ttf',
      weight: '550',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-SemiBoldItalic.ttf',
      weight: '550',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-SemiLight.ttf',
      weight: '250',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-SemiLightItalic.ttf',
      weight: '250',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-ExtraLight.ttf',
      weight: '50',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-ExtraLightItalic.ttf',
      weight: '50',
      style: 'italic',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-Light.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/CaskaydiaCoveNerdFontPropo-LightItalic.ttf',
      weight: '100',
      style: 'italic',
    },
  ],
})

export const metadata: Metadata = {
  title: "Fabian Aps Portfolio/Impressum",
  description: "my own portfolio/impressum website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head />
      <body className={ccnfp.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
