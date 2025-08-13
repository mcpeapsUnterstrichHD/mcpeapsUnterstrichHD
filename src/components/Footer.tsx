import { LanguagesNUM } from "@/lib/lang.ts";
import { Link, useSearch } from "@tanstack/react-router";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const search = useSearch({ strict: false });
  const currentLang = search.lang ?? LanguagesNUM.de;
  return (
    <div>
      <footer className="fixed bottom-2 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw] print:hidden no-print">
        <div className="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col items-center justify-center p-2 gap-1">
            <div className="flex items-center justify-center">
              <Link
                to="/"
                className="text-sm font-semibold hover:underline"
                search={{
                  lang: currentLang,
                }}
              >
                &copy; {currentYear} Fabian Aps
              </Link>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-sm">
              <a
                href="https://link.me/mcpeaps_hd"
                target="_blank"
                className="font-medium hover:underline transition-colors"
                rel="noreferrer"
              >
                Linksammlung
              </a>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/"
                className="font-medium hover:underline transition-colors"
                search={{
                  lang: currentLang,
                }}
              >
                Fabian Aps
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/impressum"
                className="font-medium hover:underline transition-colors"
                search={{
                  lang: currentLang,
                }}
              >
                Impressum
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
                  <img
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
  );
}
