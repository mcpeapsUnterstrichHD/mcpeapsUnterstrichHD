"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Cookie, X, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "cookie-consent-accepted";

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 print:hidden no-print">
      <div className="mx-auto max-w-4xl">
        <div className="border border-border/50 bg-card/95 backdrop-blur-md rounded-lg shadow-xl p-6">
          <div className="flex items-start gap-4">
            {/* Cookie Icon */}
            <div className="shrink-0 p-3 bg-primary/10 rounded-full">
              <Cookie className="h-6 w-6 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                {t("title")}
              </h3>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{t("description")}</p>

                {/* Technical Cookies Section */}
                <div className="mt-3 p-3 bg-muted/30 rounded-md">
                  <p className="font-medium text-foreground mb-1">
                    {t("technicalCookies.title")}
                  </p>
                  <p className="text-xs">
                    {t("technicalCookies.description")}
                  </p>
                </div>

                {/* Third-party Cookies Section */}
                <div className="p-3 bg-muted/30 rounded-md">
                  <p className="font-medium text-foreground mb-1">
                    {t("thirdPartyCookies.title")}
                  </p>
                  <p className="text-xs">
                    {t("thirdPartyCookies.description")}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  onClick={handleAccept}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  {t("accept")}
                </Button>

                <Link
                  href="/imprint"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("moreInfo")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Close button (optional, still accepts)
            <Button
              onClick={handleAccept}
              className="shrink-0 p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
