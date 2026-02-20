"use client";

import { useState, useEffect, type ComponentProps } from "react";
import { useTranslations } from "next-intl";
import { ShieldOff, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as CC from "vanilla-cookieconsent";

type ConsentIframeProps = {
  /** The cookie consent category required (e.g. "marketing") */
  category: string;
} & ComponentProps<"iframe">;

/**
 * A wrapper around <iframe> that blocks loading until the user
 * has accepted the specified cookie consent category.
 *
 * If consent is not given, a styled placeholder is shown instead.
 */
export default function ConsentIframe({
  category,
  src,
  title,
  className,
  ...rest
}: ConsentIframeProps) {
  const t = useTranslations("CookieConsent");
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check initial consent state
    setHasConsent(CC.acceptedCategory(category));

    // Listen for consent changes via custom event
    const handleConsentChange = () => {
      setHasConsent(CC.acceptedCategory(category));
    };

    // vanilla-cookieconsent dispatches events on the window when consent changes
    window.addEventListener("cc:onConsent", handleConsentChange);
    window.addEventListener("cc:onChange", handleConsentChange);

    return () => {
      window.removeEventListener("cc:onConsent", handleConsentChange);
      window.removeEventListener("cc:onChange", handleConsentChange);
    };
  }, [category]);

  if (hasConsent) {
    return (
      <iframe
        src={src}
        title={title}
        className={className}
        {...rest}
      />
    );
  }

  // Placeholder when consent is not given
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 p-8 bg-muted/30 rounded-lg border border-border/50 ${className ?? ""}`}
      style={{ minHeight: rest.height ? `${rest.height}px` : "200px" }}
    >
      <div className="p-3 bg-muted/50 rounded-full">
        <ShieldOff className="h-8 w-8 text-muted-foreground" />
      </div>
      <div className="text-center space-y-2">
        <p className="text-sm font-medium text-foreground">
          {t("blockedContent.title")}
        </p>
        <p className="text-xs text-muted-foreground max-w-sm">
          {t("blockedContent.description", { category: t(`categories.${category}.title`) })}
        </p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("show-cookie-consent"));
          }
        }}
        className="inline-flex items-center gap-2"
      >
        <Settings className="h-4 w-4" />
        {t("blockedContent.button")}
      </Button>
    </div>
  );
}
