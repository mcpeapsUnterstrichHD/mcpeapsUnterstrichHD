import {
  HeadContent,
  Scripts,
  Outlet,
  useNavigate,
  createRootRoute
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { z } from 'zod'
import { zodValidator } from '@tanstack/zod-adapter'
import {NavBar} from '../components/Header'
import {LanguagesNUM} from "@/lib/lang.ts";
import appCss from '../styles.css?url'
import Footer from "@/components/Footer.tsx";
import Particles from "@/components/Particles.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import {AppSidebar} from "@/components/AppSidebar.tsx";
import { Toaster } from '@/components/ui/sonner';
import { toast } from "sonner"
import { useEffect, useRef } from 'react';
import NotFound from "@/components/__not_foud.tsx";

export const RootSiteSearchParams = z.object({
  lang: z.enum(LanguagesNUM).optional(),
});

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Fabian Aps | Homepage/Portfolio/Impressum',
      },
      {
        short_name: 'Fabian Aps',
      },
      {
        name: 'description',
        content: 'Fabian Aps personal portfolio and homepage showcasing projects, skills, and contact information.',
      },
      {
        name: 'theme-color',
        content: '#2E3440',
      },

      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#2E3440',
      },
      {
        name: 'apple-mobile-web-app-title',
      content: 'Fabian Aps',
      },
      {
        name: 'application-name',
        content: 'Fabian Aps',
      },
      {
        name: 'msapplication-TileColor',
        content: '#2E3440',
      },
      {
        name: 'msapplication-TileImage',
        content: '/logo512.png',
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Fabian Aps | Homepage/Portfolio/Impressum',
      },
      {
        name: 'twitter:description',
        content: 'A Streamelements streaming overlay by comboom.sucht',
      },
      {
        name: 'twitter:image',
        content: '/logo512.png',
      },
      {
        name: 'twitter:site',
        content: '@mcpeaps_HD',
      },
      {
        name: 'twitter:creator',
        content: '@mcpeaps_HD',
      },
      {
        name: 'og:title',
        content: 'Fabian Aps | Homepage/Portfolio/Impressum',
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:url',
        content: 'https://mcpeapsunterstrichhd.dev/',
      },
      {
        name: 'og:image',
        content: '/logo512.png',
      },
      {
        name: 'og:image:type',
        content: 'image/png',
      },
      {
        name: 'og:image:width',
        content: '512',
      },
      {
        name: 'og:image:height',
        content: '512',
      },
      {
        name: 'og:description',
        content: 'Fabian Aps personal portfolio and homepage showcasing projects, skills, and contact information.'
      },
      {
        name: 'apple-touch-icon',
        content: '/logo512.png',
      },
],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
        content_type: 'application/manifest+json'
      }
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  validateSearch: zodValidator(RootSiteSearchParams),
})


function RootDocument() {
  const { lang } = Route.useSearch();
  const navigateTo = useNavigate();
  const recommendations: {
    title: string;
    description?: string;
    action?: {
      label: string;
      onClick: () => Promise<void> | void;
    };
  }[] = [
    {
      title: 'Meine Projekte',
      description: 'Alle meine Projekte auf einer Übersichtlichkeit.',
      action: {
        label: 'Projekte anzeigen',
        onClick: async () => {
          navigateTo({
            to: '/projects',
            search: z.object({
              lang: lang,
            }),
            reloadDocument: true,
          });
        },
      },
    },
    {
      title: 'Über mich',
      description: 'Ein kleiner Einblick in meine Person.',
      action: {
        label: 'Erfahre mehr',
        onClick: async () => {
          await navigateTo({
            to: '/aboutme',
            search: z.object({
              lang: lang,
            }),
            reloadDocument: true,
          });
        },
      },
    },
    {
      title: 'Lebenslauf',
      description: 'Meine Ausbildungen und Berufserfahrung.',
      action: {
        label: 'Mein Lebenslauf',
        onClick: async () => {
          await navigateTo({
            to: '/lebenslauf',
            search: z.object({
              lang: lang,
            }),
            reloadDocument: true,
          });
        },
      },
    },
    {
      title: 'Social Media',
      description: 'Hier bin ich zu finden.',
      action: {
        label: 'Folge mir',
        onClick: async () => {
          await navigateTo({
            href: 'https://link.me/mcpeaps_hd',
          });
        },
      },
    },
    {
      title: 'Mein GitHub-Profil',
      description: '@mcpeapsUnterstrichHD | Hier leben meine Projekte.',
      action: {
        label: 'Folge mir',
        onClick: async () => {
          await navigateTo({
            href: 'https://github.com/mcpeapsUnterstrichHD',
          });
        }
      }
    },
    {
      title: 'Mein X/Twitter',
      description: '@mcpeaps_HD | Hier kann man mich mal erwischen',
      action: {
        label: 'Folge mir',
        onClick: async () => {
          await navigateTo({
            href: 'https://x.com/mcpeaps_HD',
          });
        }
      }
    },
    {
      title: 'Mein Instagram',
      description: '@mcpeaps_hd | Hier bin ich am meisten aktiv',
      action: {
        label: 'Folge mir',
        onClick: async () => {
          await navigateTo({
            href: 'https://instagram.com/mcpeaps_hd',
          });
        }
      }
    },
    {
      title: 'Mein TikTok',
      description: '@mcpeaps_hd | Hier bin ich am meisten aktiv',
      action: {
        label: 'Folge mir',
        onClick: async () => {
          await navigateTo({
            href: 'https://tiktok.com/@mcpeaps_hd',
          });
        }
      }
    },
    {
      title: 'Mein Threads',
      description: '@mcpeaps_hd | Hier kann man mich erwischen',
      action: {
        label: 'Folge mir',
        onClick: async () => {
          await navigateTo({
            href: 'https://threads.com/@mcpeaps_hd'
          });
        }
      }
    },
    {
      title: 'Mein Bluesky',
      description: '@mcpeapsunterstrichhd.dev | Hier kann man mich erwischen',
      action:{
        label: 'Folge mir',
        onClick: async () => {
          await navigateTo({
            href: 'https://bsky.mcpeapsunterstrichhd.dev',
          });
        }
      }
    },
  ];

  const currentIndex = useRef(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Erste Empfehlung direkt anzeigen
    const { title, description, action } = recommendations[currentIndex.current];
    toast(title, { description, action });

    // Intervall für weitere Empfehlungen
    intervalId.current = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % recommendations.length;
      const { title, description, action } = recommendations[currentIndex.current];
      toast(title, { description, action });
    }, 10 * 60 * 1000); // 10 Minuten

    // Clean-up beim Unmount
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  return (
    <html lang={lang ?? "de-DE"}>
    <head>
      <HeadContent />
    </head>
    <body>
    <SidebarProvider>
    <div className="">
      <Particles quantity={400} refresh={true} />
      <div className="z-1">
        <NavBar />
        <AppSidebar />
        <Outlet />
        <Toaster className="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg print:hidden" />
        <Footer />
        <div className="print:hidden">
          <TanStackRouterDevtools />
        </div>
        <Scripts />
      </div>
    </div>
    </SidebarProvider>
    </body>
    </html>
  )
}
