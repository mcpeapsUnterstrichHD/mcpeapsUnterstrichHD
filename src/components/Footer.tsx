import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { ViewTransition } from 'react';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <ViewTransition enter="slide" exit="root" update="root">
      <footer className="w-full z-40 print:hidden no-print mt-auto p-2">
        <div className="border border-border/50 bg-background/80 backdrop-blur-md rounded-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
              {/* Copyright - Left side */}
              <div className="flex items-center text-sm text-muted-foreground">
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors"
                >
                  &copy; {currentYear} {t("Aboutme.name")}
                </Link>
              </div>

              {/* Links - Right side */}
              <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                <Link
                  href="/linkhub"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("Sites.linkhub")}
                </Link>
                <span className="text-muted-foreground not-sm:hidden">•</span>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("Aboutme.name")}
                </Link>
                <span className="text-muted-foreground not-sm:hidden">•</span>
                <Link
                  href="/imprint"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("Sites.impressum")}
                </Link>
                {process.env.NODE_ENV === "development" && (
                  <>
                    <span className="text-muted-foreground not-sm:hidden">•</span>
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
                        <Image
                          height={20}
                          width={66}
                          alt="Open in IDX"
                          src="https://cdn.idx.dev/btn/open_purple_32.svg"
                        />
                      </picture>
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </ViewTransition>
  );
}
