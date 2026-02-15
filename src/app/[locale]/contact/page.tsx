"use client";
import { Android } from "@/components/ui/android";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Iphone } from "@/components/ui/iphone";
import { useTranslations } from "next-intl";
import { Calendar, Mail, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Safari } from "@/components/ui/safari";
import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "@/components/ui/typing-animation";

type Platform = "desktop" | "ios" | "android" | "unknown";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";
  const userAgent = navigator.userAgent;

  if (/iphone|ipad|ipod/i.test(userAgent)) return "ios";
  if (/android/i.test(userAgent)) return "android";
  if (!/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())) {
    return "desktop";
  }
  return "unknown";
}

function CalendarEmbed() {
  const calUrl = "https://cal.com/mcpeapsunterstrichhd";
  const [platform, setPlatform] = useState<Platform>("unknown");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const calendarIframe = (
    <iframe
      src={calUrl}
      title="cal.com calendar"
      className="size-full border-0"
    />
  );

  if (platform === "desktop") {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Safari url={calUrl} className="w-full">
          {calendarIframe}
        </Safari>
      </div>
    );
  }

  if (platform === "ios") {
    return (
      <div className="w-full max-w-sm mx-auto">
        <Iphone className="w-full">
          {calendarIframe}
        </Iphone>
      </div>
    );
  }

  if (platform === "android") {
    return (
      <div className="w-full max-w-sm mx-auto">
        <Android className="w-full">
          {calendarIframe}
        </Android>
      </div>
    );
  }

  // Fallback for SSR or unknown platforms - show loading state or simple iframe
  return (
    <iframe
      src={calUrl}
      title={calUrl}
      className="w-full h-200 rounded-lg border border-border"
    />
  );
}


export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-8 px-4 py-8 mx-auto min-h-[80vh]">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <AuroraText
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
          colors={['#C16069', '#A2BF8A', '#C16069', '#A2BF8A']}
          speed={3}
        >
          <TypingAnimation
            typeSpeed={145}
            pauseDelay={1450}
            deleteSpeed={75}
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
          >{t("Sites.contact")}</TypingAnimation>
        </AuroraText>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto flex items-center justify-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <TypingAnimation
            typeSpeed={145}
            pauseDelay={1450}
            deleteSpeed={75}
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
          >{t("Contact.description")}</TypingAnimation>
        </p>
      </section>

      {/* Calendar Card */}
      <Card className="my-glass w-full">
        <CardHeader className="text-center pb-4">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Calendar className="w-6 h-6 text-primary" />
            {t("Contact.bookMeeting")}
          </CardTitle>
          <CardDescription className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            {t("Contact.calDescription")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CalendarEmbed />
        </CardContent>
      </Card>
    </div>
  );
}
