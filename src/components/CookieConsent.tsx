"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Cookie, ExternalLink, Shield, Music, Share2, Phone, Globe } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import * as CC from "vanilla-cookieconsent";
import { cookieConsentConfig } from "@/lib/cookieConfig";
import { Langswitcher } from "@/components/Langswitcher";

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const [isVisible, setIsVisible] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [multimediaEnabled, setMultimediaEnabled] = useState(false);
  const [socialMediaEnabled, setSocialMediaEnabled] = useState(false);
  const [contactEnabled, setContactEnabled] = useState(false);

  useEffect(() => {
    CC.run({
      ...cookieConsentConfig,
      onFirstConsent: () => {
        setIsVisible(false);
      },
      onConsent: () => {
        setMultimediaEnabled(CC.acceptedCategory("multimedia"));
        setSocialMediaEnabled(CC.acceptedCategory("socialMedia"));
        setContactEnabled(CC.acceptedCategory("contact"));
      },
      onChange: () => {
        setMultimediaEnabled(CC.acceptedCategory("multimedia"));
        setSocialMediaEnabled(CC.acceptedCategory("socialMedia"));
        setContactEnabled(CC.acceptedCategory("contact"));
      },
    });

    if (!CC.validConsent()) {
      setIsVisible(true);
    } else {
      setMultimediaEnabled(CC.acceptedCategory("multimedia"));
      setSocialMediaEnabled(CC.acceptedCategory("socialMedia"));
      setContactEnabled(CC.acceptedCategory("contact"));
    }

    const handleShowBanner = () => {
      setSheetOpen(true);
      setMultimediaEnabled(CC.acceptedCategory("multimedia"));
      setSocialMediaEnabled(CC.acceptedCategory("socialMedia"));
      setContactEnabled(CC.acceptedCategory("contact"));
    };
    window.addEventListener("show-cookie-consent", handleShowBanner);
    return () => {
      window.removeEventListener("show-cookie-consent", handleShowBanner);
    };
  }, []);

  const handleAcceptAll = useCallback(() => {
    CC.acceptCategory("all");
    setIsVisible(false);
    setSheetOpen(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    CC.acceptCategory([]);
    setIsVisible(false);
    setSheetOpen(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    const accepted: string[] = ["necessary"];
    if (multimediaEnabled) accepted.push("multimedia");
    if (socialMediaEnabled) accepted.push("socialMedia");
    if (contactEnabled) accepted.push("contact");
    CC.acceptCategory(accepted);
    setIsVisible(false);
    setSheetOpen(false);
  }, [multimediaEnabled, socialMediaEnabled, contactEnabled]);

  const handleOpenSheet = useCallback(() => {
    setMultimediaEnabled(CC.acceptedCategory("multimedia"));
    setSocialMediaEnabled(CC.acceptedCategory("socialMedia"));
    setContactEnabled(CC.acceptedCategory("contact"));
    setSheetOpen(true);
  }, []);

  return (
    <>
      {/* ── Compact Banner (bottom-right) ── */}
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm print:hidden no-print animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="my-glass rounded-lg shadow-xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="shrink-0 p-2 bg-primary/10 rounded-full">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground">
                  {t("title")}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-3">
                  {t("description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                onClick={handleAcceptAll}
                size="sm"
                className="flex-1 text-xs"
              >
                {t("acceptAll")}
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
              >
                {t("rejectAll")}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Button
                onClick={handleOpenSheet}
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground hover:text-foreground px-1"
              >
                {t("managePreferences")}
              </Button>
              <Link
                href="/imprint"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("moreInfo")}
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Preferences Sheet (right side) ── */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="overflow-y-auto print:hidden no-print">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary" />
              {t("managePreferences")}
            </SheetTitle>
            <SheetDescription>
              {t("description")}
            </SheetDescription>
          </SheetHeader>

          <div className="px-6 space-y-4">
            {/* ── Cookie Categories ── */}
            <div className="space-y-3">
              {/* Necessary - always on */}
              <label className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <span className="flex items-center gap-2 text-sm text-foreground">
                  <Shield className="h-4 w-4 text-primary" />
                  {t("technicalCookies.title")}
                </span>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="h-4 w-4 accent-primary"
                />
              </label>

              {/* Multimedia */}
              <label className="flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    <Music className="h-4 w-4 text-primary" />
                    {t("categories.multimedia.title")}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                    {t("categories.multimedia.description")}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={multimediaEnabled}
                  onChange={(e) => setMultimediaEnabled(e.target.checked)}
                  className="h-4 w-4 accent-primary cursor-pointer shrink-0"
                />
              </label>

              {/* Social Media */}
              <label className="flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    <Share2 className="h-4 w-4 text-primary" />
                    {t("categories.socialMedia.title")}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                    {t("categories.socialMedia.description")}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={socialMediaEnabled}
                  onChange={(e) => setSocialMediaEnabled(e.target.checked)}
                  className="h-4 w-4 accent-primary cursor-pointer shrink-0"
                />
              </label>

              {/* Contact */}
              <label className="flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    {t("categories.contact.title")}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                    {t("categories.contact.description")}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={contactEnabled}
                  onChange={(e) => setContactEnabled(e.target.checked)}
                  className="h-4 w-4 accent-primary cursor-pointer shrink-0"
                />
              </label>
            </div>

            {/* ── Info Sections ── */}
            <div className="space-y-3 pt-2 border-t border-border/50">
              <div className="p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-3.5 w-3.5 text-primary" />
                  <p className="text-xs font-medium text-foreground">
                    {t("technicalCookies.title")}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t("technicalCookies.description")}
                </p>
              </div>

              <div className="p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Music className="h-3.5 w-3.5 text-primary" />
                  <p className="text-xs font-medium text-foreground">
                    {t("thirdPartyCookies.title")}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t("thirdPartyCookies.description")}
                </p>
              </div>
            </div>

            {/* ── Language Selector ── */}
            <div className="pt-2 border-t border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-3.5 w-3.5 text-primary" />
                <p className="text-xs font-medium text-foreground">
                  {t("language")}
                </p>
              </div>
              <Langswitcher />
            </div>
          </div>

          <SheetFooter>
            <div className="flex flex-col gap-2 w-full">
              <Button onClick={handleSavePreferences} className="w-full">
                {t("savePreferences")}
              </Button>
              <div className="flex gap-2">
                <Button
                  onClick={handleAcceptAll}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  {t("acceptAll")}
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  {t("rejectAll")}
                </Button>
              </div>
              <Link
                href="/imprint"
                className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors pt-1"
              >
                {t("moreInfo")}
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

/**
 * Re-shows the cookie consent banner.
 * Used by the Footer's "Cookie Settings" link.
 */
export function showCookieConsentBanner() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("show-cookie-consent"));
  }
}
