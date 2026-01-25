import { SidebarProvider } from "@/components/ui/sidebar";
import { PrintProvider } from "@/contexts/PrintContext";
import Particles from "@/components/Particles";
import { NavBar } from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { Toaster, toast } from "sonner";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ClickSpark from "@/components/ClickSpark";
import { ViewTransition } from "@/components/ViewTransition";
import { nord6 } from "@/lib/NordColors";
import { Outlet, useNavigate, useParams } from "@tanstack/react-router";
import "@/lib/i18n"; // Initialize i18n
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { ClientOnly } from "@/components/ClientOnly";

export default function ClientLayout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { locale } = useParams({ strict: false }) as any;
  const currentIndex = useRef(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!locale) return; // Don't run if locale isn't ready

    const recommendations = [
      {
        title: t("Recommendation.projects.title"),
        description: t("Recommendation.projects.description"),
        action: {
          label: t("Recommendation.projects.action.label"),
          onClick: () => {
             navigate({ to: "/$locale/projects", params: { locale } });
          },
        },
      },
      {
        title: t("Recommendation.aboutme.title"),
        description: t("Recommendation.aboutme.description"),
        action: {
          label: t("Recommendation.aboutme.action.label"),
          onClick: () => {
             navigate({ to: "/$locale/aboutme", params: { locale } });
          },
        },
      },
      {
        title: t("Recommendation.cv.title"),
        description: t("Recommendation.cv.description"),
        action: {
          label: t("Recommendation.cv.action.label"),
          onClick: () => {
             navigate({ to: "/$locale/cv", params: { locale } });
          },
        },
      },
      {
        title: t("Recommendation.linkhub.title"),
        description: t("Recommendation.linkhub.description"),
        action: {
          label: t("Recommendation.linkhub.action.label"),
          onClick: () => {
             navigate({ to: "/$locale/linkhub", params: { locale } });
          },
        },
      },
      {
        title: t("Recommendation.github.title"),
        description: t("Recommendation.github.description"),
        action: {
          label: t("Recommendation.github.action.label"),
          onClick: () => window.open("https://github.com/mcpeapsUnterstrichHD", "_blank"),
        },
      },
      {
        title: t("Recommendation.twitter.title"),
        description: t("Recommendation.twitter.description"),
        action: {
          label: t("Recommendation.twitter.action.label"),
          onClick: () => window.open("https://x.com/mcpeaps_HD", "_blank"),
        },
      },
      {
        title: t("Recommendation.instagram.title"),
        description: t("Recommendation.instagram.description"),
        action: {
          label: t("Recommendation.instagram.action.label"),
          onClick: () => window.open("https://instagram.com/mcpeaps_hd", "_blank"),
        },
      },
      {
        title: t("Recommendation.tiktok.title"),
        description: t("Recommendation.tiktok.description"),
        action: {
          label: t("Recommendation.tiktok.action.label"),
          onClick: () => window.open("https://tiktok.com/@mcpeaps_hd", "_blank"),
        },
      },
      {
        title: t("Recommendation.threads.title"),
        description: t("Recommendation.threads.description"),
        action: {
          label: t("Recommendation.threads.action.label"),
          onClick: () => window.open("https://threads.com/@mcpeaps_hd", "_blank"),
        },
      },
      {
        title: t("Recommendation.bluesky.title"),
        description: t("Recommendation.bluesky.description"),
        action: {
          label: t("Recommendation.bluesky.action.label"),
          onClick: () => window.open("https://bsky.mcpeapsunterstrichhd.dev", "_blank"),
        },
      },
    ];

    // Show first recommendation after mount
    // Using a timeout to not conflict with hydration or initial toasts
    const initialTimeout = setTimeout(() => {
        const item = recommendations[currentIndex.current];
        toast(item.title, { description: item.description, action: item.action });
    }, 2000);

    // Interval for further recommendations
    intervalId.current = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % recommendations.length;
      const item = recommendations[currentIndex.current];
       toast(item.title, { description: item.description, action: item.action });
    }, 10 * 60 * 1000); // 10 minutes

    return () => {
      clearTimeout(initialTimeout);
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [t, locale, navigate]);

  return (
      <PrintProvider>
        <ClientOnly>
          <ClickSpark
            sparkColor={nord6}
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <SidebarProvider
              style={{
                "--sidebar-width": "var(--appsidebar-width)",
                "--sidebar-width-mobile": "var(--appsidebar-width-mobile)",
              } as React.CSSProperties}
            >
              <AppSidebar variant="floating" />
              <ClientOnly>
                <Particles quantity={400} refresh={true} />
              </ClientOnly>
              <div className="relative z-10 flex flex-col min-h-svh flex-1 w-full">
                <NavBar />
                <main className="flex-1 w-full max-w-full">
                  <ViewTransition>
                  <Outlet />
                </ViewTransition>
                </main>
                <ClientOnly>
                  <Toaster className="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg print:hidden no-print" />
                </ClientOnly>
                <Footer />
                <ClientOnly>
                  <CookieConsent />
                </ClientOnly>
              </div>
            </SidebarProvider>
          </ClickSpark>
        </ClientOnly>
      </PrintProvider>

  );
}
