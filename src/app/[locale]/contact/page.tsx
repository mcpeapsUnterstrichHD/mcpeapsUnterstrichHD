"use client";
import DecryptedText from "@/components/DecryptedText";
import GradientText from "@/components/GradientText";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Calendar, Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-8 px-4 py-8 max-w-9xl mx-auto min-h-[80vh]">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <GradientText
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
          colors={['#C16069', '#A2BF8A', '#C16069', '#A2BF8A']}
          animationSpeed={4}
        >
          <DecryptedText
            text={t("Sites.contact")}
            animate
            animateOn="view"
            speed={80}
            maxIterations={40}
          />
        </GradientText>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto flex items-center justify-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <DecryptedText
            text={t("Contact.description")}
            animate
            animateOn="view"
            speed={40}
            maxIterations={20}
          />
        </p>
      </section>

      {/* Calendar Card */}
      <Card className="bg-card/50 backdrop-blur-sm w-full">
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
          <iframe
            src="https://cal.com/mcpeapsunterstrichhd"
            title="cal.com"
            className="w-full h-200 rounded-lg border border-border"
          />
        </CardContent>
      </Card>
    </div>
  );
}
