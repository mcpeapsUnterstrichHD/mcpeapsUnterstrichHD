import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { ViewTransition } from 'react';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <ViewTransition enter="slide" exit="root" update="root">
    <div>
      <footer className="fixed bottom-2 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw] print:hidden no-print">
        <div className="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col items-center justify-center p-2 gap-1">
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="text-sm font-semibold hover:underline"
              >
                &copy; {currentYear} {t("Aboutme.name")}
              </Link>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-sm">
              <Link href="/linkhub">
                {t("Sites.linkhub")}
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="/"
                className="font-medium hover:underline transition-colors"
              >
                {t("Aboutme.name")}
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="/imprint"
                className="font-medium hover:underline transition-colors"
              >
                {t("Sites.impressum")}
              </Link>
              <span className="text-muted-foreground">•</span>
              <a
                href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD"
                target="_blank"
                rel="noreferrer"
                className="hover:underline transition-colors"
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
                    preload={true}
                    height={32}
                    width={32}
                    alt="Open in IDX"
                    src="https://cdn.idx.dev/btn/open_purple_32.svg"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </ViewTransition>
  );
}
