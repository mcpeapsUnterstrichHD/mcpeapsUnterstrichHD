import { createFileRoute } from '@tanstack/react-router'
import { AuroraText } from "@/components/ui/aurora-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { contactDetails } from "@/lib/contact";
import { Mail, Phone, MapPin, Scale, User, Cookie } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "@/i18n/navigation";

export const Route = createFileRoute('/$locale/imprint')({
  component: ImprintPage,
})

function ImprintPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 px-4 py-6 mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <AuroraText
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          colors={["#C16069", "#A2BF8A", "#C16069", "#A2BF8A"]}
          speed={3}
        >
          <TypingAnimation
             className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >{t("Imprint.title")}</TypingAnimation>
        </AuroraText>
      </section>

      {/* Legal Info Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* § 5 TMG Section */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Scale className="size-5 text-primary" />
              {t("Imprint.tmg.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href={contactDetails.address.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="size-4 mt-1 shrink-0" />
              <div>
                Aps, Fabian<br />
                {contactDetails.address.street}<br />
                {contactDetails.address.zip} {t(contactDetails.address.city)}, {t(contactDetails.address.country)}
              </div>
            </a>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <User className="size-5 text-primary" />
              {t("Imprint.contact.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
              <Link
              href={contactDetails.email.link}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="size-4" />
              {contactDetails.email.display}
            </Link>
            <Link
              href={contactDetails.telephone.link}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="size-4" />
              {contactDetails.telephone.display}
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Responsible Person Section */}
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Scale className="size-5 text-primary" />
            {t("Imprint.rstv.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href={contactDetails.address.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-2 hover:text-primary transition-colors"
          >
            <MapPin className="size-4 mt-1 shrink-0" />
            <div>
              Aps, Fabian<br />
              {contactDetails.address.street}<br />
              {contactDetails.address.zip} {t(contactDetails.address.city)}, {t(contactDetails.address.country)}
            </div>
          </a>
        </CardContent>
      </Card>

      {/* Cookie Disclaimer Section */}
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Cookie className="size-5 text-primary" />
            {t("Imprint.cookies.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            {t("Imprint.cookies.description")}
          </p>

          {/* Technical Cookies */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium mb-2">{t("Imprint.cookies.technical.title")}</h4>
            <p className="text-sm text-muted-foreground">
              {t("Imprint.cookies.technical.description")}
            </p>
          </div>

          {/* Third-Party Cookies */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium mb-2">{t("Imprint.cookies.thirdParty.title")}</h4>
            <p className="text-sm text-muted-foreground">
              {t("Imprint.cookies.thirdParty.description")}
            </p>
            <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Cal.com ({t("Imprint.cookies.thirdParty.calcom")})</li>
              <li>Apple Music ({t("Imprint.cookies.thirdParty.appleMusic")})</li>
              <li>song.link ({t("Imprint.cookies.thirdParty.songlink")})</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
