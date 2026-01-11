"use client"
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { SidebarProvider } from "@/components/ui/sidebar";
import Particles from "@/components/Particles";
import { NavBar } from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { Toaster, toast } from "sonner";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { useEffect, useRef, ViewTransition } from "react";
import { useRouter } from "@/i18n/navigation";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/app/theme';
import ClickSpark from './ClickSpark';
import { nord6 } from '@/lib/NordColors';
import { PrintProvider } from '@/contexts/PrintContext';



type Props = {
  children: React.ReactNode;
  locale: string;
  messages: any;
};

export default function ClientLayout({ children, locale, messages }: Props) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Berlin" now={new Date()}>
          <PrintProvider>
            <ClickSpark
              sparkColor={nord6}
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              <ClientLayoutContent locale={locale}>
                {children}
              </ClientLayoutContent>
            </ClickSpark>
          </PrintProvider>
        </NextIntlClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}


function ClientLayoutContent({ children, locale }: { children: React.ReactNode; locale: string }) {
  const router = useRouter();
  const t = useTranslations();
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
        title: t("Recommendation.projects.title"),
        description: t("Recommendation.projects.description"),
        action: {
          label: t("Recommendation.projects.action.label"),
          onClick: () => {
            router.replace({
              pathname: "/projects",
            }, {
              locale
            });
          },
        },
      },
      {
        title: t("Recommendation.aboutme.title"),
        description: t("Recommendation.aboutme.description"),
        action: {
          label: t("Recommendation.aboutme.action.label"),
          onClick: () => {
            router.replace({
              pathname: "/aboutme",

            }, {
              locale
            });
          },
        },
      },
      {
        title: t("Recommendation.cv.title"),
        description: t("Recommendation.cv.description"),
        action: {
          label: t("Recommendation.cv.action.label"),
          onClick: () => {
            router.replace({
              pathname: "/cv",
            }, {
              locale
            });
          },
        },
      },
      {
        title: t("Recommendation.linkhub.title"),
        description: t("Recommendation.linkhub.description"),
        action: {
          label: t("Recommendation.linkhub.action.label"),
          onClick: () => {
            router.replace({
              pathname:"/linkhub",
            }, {
              locale
            });
          },
        },
      },
      {
        title: t("Recommendation.github.title"),
        description: t("Recommendation.github.description"),
        action: {
          label: t("Recommendation.github.action.label"),
          onClick: () => {
            window.open("https://github.com/mcpeapsUnterstrichHD", "_blank");
          },
        },
      },
      {
        title: t("Recommendation.twitter.title"),
        description: t("Recommendation.twitter.description"),
        action: {
          label: t("Recommendation.twitter.action.label"),
          onClick: () => {
            window.open("https://x.com/mcpeaps_HD", "_blank");
          },
        },
      },
      {
        title: t("Recommendation.instagram.title"),
        description: t("Recommendation.instagram.description"),
        action: {
          label: t("Recommendation.instagram.action.label"),
          onClick: () => {
            window.open("https://instagram.com/mcpeaps_hd", "_blank");
          },
        },
      },
      {
        title: t("Recommendation.tiktok.title"),
        description: t("Recommendation.tiktok.description"),
        action: {
          label: t("Recommendation.tiktok.action.label"),
          onClick: () => {
            window.open("https://tiktok.com/@mcpeaps_hd", "_blank");
          },
        },
      },
      {
        title: t("Recommendation.threads.title"),
        description: t("Recommendation.threads.description"),
        action: {
          label: t("Recommendation.threads.action.label"),
          onClick: () => {
            window.open("https://threads.com/@mcpeaps_hd", "_blank");
          },
        },
      },
      {
        title: t("Recommendation.bluesky.title"),
        description: t("Recommendation.bluesky.description"),
        action: {
          label: t("Recommendation.bluesky.action.label"),
          onClick: () => {
            window.open("https://bsky.mcpeapsunterstrichhd.dev", "_blank");
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

  return (
    <SidebarProvider>
      <AppSidebar variant='floating' />

          <Particles quantity={400} refresh={true} />
          <div className="relative z-10 flex flex-col min-h-svh flex-1 w-full">
              <NavBar />
              <ViewTransition enter="slide" exit="root" update="root">
              <main className="flex-1 w-full max-w-full">
                {children}
              </main>
              </ViewTransition>
              <Toaster className="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg print:hidden no-print" />
              <Footer />
              <CookieConsent />
          </div>
    </SidebarProvider>
  );
}
