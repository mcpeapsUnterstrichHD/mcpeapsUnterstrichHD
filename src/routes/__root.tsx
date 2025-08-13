import { AppSidebar } from "@/components/AppSidebar.tsx";
import Footer from "@/components/Footer.tsx";
import Particles from "@/components/Particles.tsx";
import NotFound from "@/components/__not_foud.tsx";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import { Toaster } from "@/components/ui/sonner";
import { setLanguage } from "@/lib/i18n";
import { LanguagesNUM } from "@/lib/lang.ts";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { zodValidator } from "@tanstack/zod-adapter";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod";
import { NavBar } from "../components/Header";
import appCss from "../styles.css?url";

export const RootSiteSearchParams = z.object({
  lang: z.enum(LanguagesNUM).optional(),
});

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Fabian Aps | Homepage/Portfolio/Impressum",
      },
      {
        short_name: "Fabian Aps",
      },
      {
        name: "description",
        content:
          "Fabian Aps personal portfolio and homepage showcasing projects, skills, and contact information.",
      },
      {
        name: "theme-color",
        content: "#2E3440",
      },

      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "#2E3440",
      },
      {
        name: "apple-mobile-web-app-title",
        content: "Fabian Aps",
      },
      {
        name: "application-name",
        content: "Fabian Aps",
      },
      {
        name: "msapplication-TileColor",
        content: "#2E3440",
      },
      {
        name: "msapplication-TileImage",
        content: "/logo512.png",
      },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Fabian Aps | Homepage/Portfolio/Impressum",
      },
      {
        name: "twitter:description",
        content: "A Streamelements streaming overlay by comboom.sucht",
      },
      {
        name: "twitter:image",
        content: "/logo512.png",
      },
      {
        name: "twitter:site",
        content: "@mcpeaps_HD",
      },
      {
        name: "twitter:creator",
        content: "@mcpeaps_HD",
      },
      {
        name: "og:title",
        content: "Fabian Aps | Homepage/Portfolio/Impressum",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:url",
        content: "https://mcpeapsunterstrichhd.dev/",
      },
      {
        name: "og:image",
        content: "/logo512.png",
      },
      {
        name: "og:image:type",
        content: "image/png",
      },
      {
        name: "og:image:width",
        content: "512",
      },
      {
        name: "og:image:height",
        content: "512",
      },
      {
        name: "og:description",
        content:
          "Fabian Aps personal portfolio and homepage showcasing projects, skills, and contact information.",
      },
      {
        name: "apple-touch-icon",
        content: "/logo512.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "manifest",
        href: "/manifest.webmanifest",
        content_type: "application/manifest+json",
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  validateSearch: zodValidator(RootSiteSearchParams),
});

function RootDocument() {
  const { t } = useTranslation();
  const search = Route.useSearch();
  const currentLang = search.lang ?? LanguagesNUM.de;
  useEffect(() => {
    if (currentLang) setLanguage(currentLang).then(r => console.table(r));
  }, [currentLang]);

  const navigateTo = useNavigate();
  const currentIndex = useRef(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const recommendations: {
      title: string;
      description?: string;
      action?: {
        label: string;
        onClick: () => Promise<void> | void;
      };
    }[] = [
      {
        title: t("recommendation.projects.title"),
        description: t("recommendation.projects.description"),
        action: {
          label: t("recommendation.projects.action.label"),
          onClick: async () => {
            await navigateTo({
              to: "/projects",
              search: {
                lang: currentLang,
              },
            });
          },
        },
      },
      {
        title: t("recommendation.aboutme.title"),
        description: t("recommendation.aboutme.description"),
        action: {
          label: t("recommendation.aboutme.action.label"),
          onClick: async () => {
            await navigateTo({
              to: "/aboutme",
              search: {
                lang: currentLang,
              },
            });
          },
        },
      },
      {
        title: t("recommendation.cv.title"),
        description: t("recommendation.cv.description"),
        action: {
          label: t("recommendation.cv.action.label"),
          onClick: async () => {
            await navigateTo({
              to: "/cv",
              search: {
                lang: currentLang,
              },
            });
          },
        },
      },
      {
        title: t("recommendation.linkhub.json.title"),
        description: t("recommendation.linkhub.json.description"),
        action: {
          label: t("recommendation.linkhub.json.action.label"),
          onClick: async () => {
            await navigateTo({
              href: "https://link.me/mcpeaps_hd",
            });
          },
        },
      },
      {
        title: t("recommendation.github.title"),
        description: t("recommendation.github.description"),
        action: {
          label: t("recommendation.github.action.label"),
          onClick: async () => {
            await navigateTo({
              href: "https://github.com/mcpeapsUnterstrichHD",
            });
          },
        },
      },
      {
        title: t("recommendation.twitter.title"),
        description: t("recommendation.twitter.description"),
        action: {
          label: t("recommendation.twitter.action.label"),
          onClick: async () => {
            await navigateTo({
              href: "https://x.com/mcpeaps_HD",
            });
          },
        },
      },
      {
        title: t("recommendation.instagram.title"),
        description: t("recommendation.instagram.description"),
        action: {
          label: t("recommendation.instagram.action.label"),
          onClick: async () => {
            await navigateTo({
              href: "https://instagram.com/mcpeaps_hd",
            });
          },
        },
      },
      {
        title: t("recommendation.tiktok.title"),
        description: t("recommendation.tiktok.description"),
        action: {
          label: t("recommendation.tiktok.action.label"),
          onClick: async () => {
            await navigateTo({
              href: "https://tiktok.com/@mcpeaps_hd",
            });
          },
        },
      },
      {
        title: t("recommendation.threads.title"),
        description: t("recommendation.threads.description"),
        action: {
          label: t("recommendation.threads.action.label"),
          onClick: async () => {
            await navigateTo({
              href: "https://threads.com/@mcpeaps_hd",
            });
          },
        },
      },
      {
        title: t("recommendation.bluesky.title"),
        description: t("recommendation.bluesky.description"),
        action: {
          label: t("recommendation.bluesky.action.label"),
          onClick: async () => {
            await navigateTo({
              href: "https://bsky.mcpeapsunterstrichhd.dev",
            });
          },
        },
      },
    ];
    // Erste Empfehlung direkt anzeigen
    const { title, description, action } =
      recommendations[currentIndex.current];
    toast(title, { description, action });

    // Intervall für weitere Empfehlungen
    intervalId.current = setInterval(
      () => {
        currentIndex.current =
          (currentIndex.current + 1) % recommendations.length;
        const { title, description, action } =
          recommendations[currentIndex.current];
        toast(title, { description, action });
      },
      10 * 60 * 1000,
    ); // 10 Minuten

    // Clean-up beim Unmount
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  // @ts-ignore
  return (
    <html lang={currentLang ?? "de-DE"}>
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
              <Toaster className="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg print:hidden no-print" />
              <Footer />
              <div className="print:hidden no-print">
                <TanStackRouterDevtools />
              </div>
              <Scripts />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
