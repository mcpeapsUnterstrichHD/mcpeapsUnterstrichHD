import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ViewTransition } from "react";
import { Mail } from "lucide-react";
import {
  SiGithub as Github,
  SiInstagram as Instagram,
  SiX as Twitter,
  SiTiktok as TikTok,
  SiThreads as Threads,
  SiBluesky as Bluesky
} from "@icons-pack/react-simple-icons"
import { contactDetails } from "@/lib/contact"

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: "/", label: t("Sites.root") },
    { href: "/aboutme", label: t("Sites.aboutme") },
    { href: "/projects", label: t("Sites.projects") },
    { href: "/cv", label: t("Sites.cv") },
  ];

  const connectLinks = [
    { href: "/contact", label: t("Sites.contact") },
    { href: "/linkhub", label: t("Sites.linkhub") },
  ];

  const socialLinks = [
    {
      href: "https://github.com/mcpeapsUnterstrichHD",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://instagram.com/mcpeaps_hd",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://x.com/mcpeaps_HD",
      icon: Twitter,
      label: "X/Twitter",
    },
    {
      href: "https://tiktok.com/@mcpeaps_hd",
      icon: TikTok,
      label: "TikTok",
    },
    {
      href: "https://threads.net/@mcpeaps_hd",
      icon: Threads,
      label: "Threads",
    },
    {
      href: "https://bsky.mcpeapsunterstrichhd.dev",
      icon: Bluesky,
      label: "Bluesky",
    }
  ];

  const legalLinks = [{ href: "/imprint", label: t("Sites.impressum") }];

  return (
    <ViewTransition enter="slide" exit="root" update="root">
      <footer className="w-full z-40 print:hidden no-print mt-auto p-2">
        <div className="border border-border/50 bg-card/50 backdrop-blur-sm rounded-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand Section */}
              <div className="sm:col-span-2 md:col-span-1">
                <Link
                  href="/"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {t("Aboutme.name")}
                </Link>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed hyphens-auto">
                  {t("Aboutme.title")}
                </p>
                {/* Social Icons */}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-md"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  {t("Footer.navigation")}
                </h3>
                <ul className="space-y-3">
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  {t("Footer.connect")}
                </h3>
                <ul className="space-y-3">
                  {connectLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={contactDetails.email.link}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {t("Cv.about.email")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  {t("Footer.legal")}
                </h3>
                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <p className="text-sm text-muted-foreground">
                  &copy; {currentYear} {t("Aboutme.name")}. {t("Footer.rights")}
                </p>

                {/* Development Only - Open in IDX */}
                {process.env.NODE_ENV === "development" && (
                  <Link
                    href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <picture>
                      <source
                        media="(prefers-color-scheme: dark)"
                        srcSet="https://cdn.idx.dev/btn/open_light_32.svg"
                      />
                      <source
                        media="(prefers-color-scheme: light)"
                        srcSet="https://cdn.idx.dev/btn/open_dark_32.svg"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        height={20}
                        width={66}
                        alt="Open in IDX"
                        src="https://cdn.idx.dev/btn/open_purple_32.svg"
                      />
                    </picture>

                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ViewTransition>
  );
}
