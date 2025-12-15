"use client";
import DecryptedText from "@/components/DecryptedText";
import GradientText from "@/components/GradientText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Scale, User } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ImprintPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-8 px-4 py-6 max-w-9xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <GradientText
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          colors={["#C16069", "#A2BF8A", "#C16069", "#A2BF8A"]}
          animationSpeed={4}
        >
          <DecryptedText
            text={t("Imprint.title")}
            animate
            animateOn="view"
            speed={80}
            maxIterations={40}
          />
        </GradientText>
      </section>

      {/* Legal Info Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* § 5 TMG Section */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Scale className="w-5 h-5 text-primary" />
              {t("Imprint.tmg.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 mt-1 shrink-0" />
              <div>
                Aps, Fabian<br />
                Ludwig-Renn-Straße 33<br />
                12679 Berlin, {t("Imprint.tmg.germany")}
              </div>
            </a>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <User className="w-5 h-5 text-primary" />
              {t("Imprint.contact.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <a
              href="mailto:aps.fabian@mcpeapsunterstrichhd.dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              aps.fabian@mcpeapsunterstrichhd.dev
            </a>
            <a
              href="tel:+4917645172171"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +49 176 45172171
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Responsible Person Section */}
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Scale className="w-5 h-5 text-primary" />
            {t("Imprint.rstv.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-2 hover:text-primary transition-colors"
          >
            <MapPin className="w-4 h-4 mt-1 shrink-0" />
            <div>
              Aps, Fabian<br />
              Ludwig-Renn-Straße 33<br />
              12679 Berlin, {t("Imprint.tmg.germany")}
            </div>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
