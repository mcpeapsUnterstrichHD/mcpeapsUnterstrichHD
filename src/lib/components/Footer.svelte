<script lang="ts">
  /**
   * @component Footer
   *
   * Platform-adaptive footer following Apple HIG responsive patterns. Renders as a
   * 4-column grid on macOS-class viewports (md+), 2-column on iPadOS-class (sm),
   * and single-column stack on iOS-class (mobile). Uses Liquid Glass material
   * (my-glass) for translucent Nord-themed background.
   *
   * Organises content into four sections (Brand, Navigation, Connect, Legal).
   *
   * **Brand section** -- displays the user name, title, and a row of social media
   * icon links (GitHub, Instagram, X/Twitter, TikTok, Threads, Bluesky) using
   * icons from `@icons-pack/svelte-simple-icons`.
   *
   * **Navigation section** -- internal page links mirroring the sidebar's
   * navigation group (Home, About Me, Projects, CV).
   *
   * **Connect section** -- contact and linkhub pages, plus a direct email link
   * sourced from the shared `contactDetails` module.
   *
   * **Legal section** -- imprint link and a cookie-settings button that dispatches
   * a `show-cookie-consent` custom DOM event to re-open the {@link CookieConsent}
   * banner.
   *
   * A bottom bar renders a copyright notice with the current year and an inline
   * {@link Langswitcher} for locale toggling.
   *
   * The footer is hidden in print layouts via `print:hidden` / `no-print` classes
   * and uses the `my-glass` utility for the frosted-glass card backdrop styled
   * with the Nord color palette.
   *
   * @see {@link AppSidebar} -- Primary navigation sidebar with the same link groups
   * @see {@link Langswitcher} -- Language picker embedded in the footer bottom bar
   * @see {@link LocalizedLink} -- Locale-aware anchor used for all internal links
   */
  import { useIntlayer } from 'svelte-intlayer';
  import { Mail, Cookie } from '@lucide/svelte';
  import LocalizedLink from '$lib/components/LocalizedLink.svelte';
  import Langswitcher from '$lib/components/Langswitcher.svelte';
  import CookieConsent from '$lib/components/cookie/CookieConsent.svelte';
  import { contactDetails } from '$lib/contact';
  import {
  SiGithub as Github,
  SiInstagram as Instagram,
  SiX as Twitter,
  SiTiktok as TikTok,
  SiThreads as Threads,
  SiBluesky as Bluesky
} from "@icons-pack/svelte-simple-icons";
import { cn } from '$lib/utils';

  const aboutme = useIntlayer('aboutme');
  const sites = useIntlayer('sites');
  const footer = useIntlayer('footer');
  const cookieConsent = useIntlayer('cookieConsent');
  const cv = useIntlayer('cv');

  const currentYear = new Date().getFullYear();

  /** Derived array of primary internal navigation links. Re-computes when locale changes. */
  let navigationLinks = $derived([
    { href: '/', label: () => $sites.root },
    { href: '/aboutme', label: () => $sites.aboutme },
    { href: '/projects', label: () => $sites.projects },
    { href: '/cv', label: () => $sites.cv },
  ]);

  /** Derived array of connect links (Contact, Linkhub). Re-computes when locale changes. */
  let connectLinks = $derived([
    { href: '/contact', label: () => $sites.contact },
    { href: '/linkhub', label: () => $sites.linkhub },
  ]);

  /** Static array of external social media links with their Simple Icons components. */
  const socialLinks = [
    { href: 'https://github.com/mcpeapsUnterstrichHD', label: 'GitHub', icon: Github },
    { href: 'https://instagram.com/mcpeaps_hd', label: 'Instagram', icon: Instagram },
    { href: 'https://x.com/mcpeaps_HD', label: 'X/Twitter', icon: Twitter },
    { href: 'https://tiktok.com/@mcpeaps_hd', label: 'TikTok', icon: TikTok },
    { href: 'https://threads.net/@mcpeaps_hd', label: 'Threads', icon: Threads },
    { href: 'https://bsky.mcpeapsunterstrichhd.dev', label: 'Bluesky', icon: Bluesky },
  ];

  /** Derived array of legal links (Imprint). Re-computes when locale changes. */
  let legalLinks = $derived([
    { href: '/imprint', label: () => $sites.impressum },
  ]);

  /**
   * Dispatches a `show-cookie-consent` custom event on the window to re-open
   * the {@link CookieConsent} dialog, allowing the user to update their cookie
   * preferences from the footer.
   */
  function showCookieSettings() {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('show-cookie-consent'));
    }
  }
</script>

<footer id="footer" class={cn("w-full z-10 print:hidden no-print mt-auto p-2 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] lg:pb-2")}>
  <div class={cn("my-glass rounded-sm")}>
    <div class={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12")}>
      <!-- Main Footer Content -->
      <div class={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12")}>
        <!-- Brand Section -->
        <div class={cn("sm:col-span-2 md:col-span-1")}>
          <LocalizedLink
            href="/"
            class={cn("text-lg font-semibold text-foreground hover:text-primary transition-colors")}
          >
            {$aboutme.name}
          </LocalizedLink>
          <p class={cn("mt-3 text-sm text-muted-foreground leading-relaxed hyphens-auto")}>
            {$aboutme.title}
          </p>
          <!-- Social Icons -->
          <div class={cn("mt-4 flex flex-wrap items-center gap-3")}>
            {#each socialLinks as social}
              <LocalizedLink
                href={social.href}
                target="_blank"
                rel="noreferrer"
                class={cn("text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-md")}
                aria-label={social.label}
              >
                <!-- svelte-ignore svelte_component_deprecated -->
                <svelte:component
                  this={social.icon}
                  title={social.label}
                />
              </LocalizedLink>
            {/each}
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class={cn("text-sm font-semibold text-foreground mb-4")}>
            {$footer.navigation}
          </h3>
          <ul class={cn("space-y-3")}>
            {#each navigationLinks as link}
              <li>
                <LocalizedLink
                  href={link.href}
                  class={cn("text-sm text-muted-foreground hover:text-foreground transition-colors")}
                >
                  {link.label()}
                </LocalizedLink>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class={cn("text-sm font-semibold text-foreground mb-4")}>
            {$footer.connect}
          </h3>
          <ul class={cn("space-y-3")}>
            {#each connectLinks as link}
              <li>
                <LocalizedLink
                  href={link.href}
                  class={cn("text-sm text-muted-foreground hover:text-foreground transition-colors")}
                >
                  {link.label()}
                </LocalizedLink>
              </li>
            {/each}
            <li>
              <LocalizedLink
                href={contactDetails.email.link}
                class={cn("text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5")}
              >
                <Mail class={cn("h-3.5 w-3.5")} />
                {$cv.about.email}
              </LocalizedLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class={cn("text-sm font-semibold text-foreground mb-4")}>
            {$footer.legal}
          </h3>
          <ul class={cn("space-y-3")}>
            {#each legalLinks as link}
              <li>
                <LocalizedLink
                  href={link.href}
                  class={cn("text-sm text-muted-foreground hover:text-foreground transition-colors")}
                >
                  {link.label()}
                </LocalizedLink>
              </li>
            {/each}
            <li>
              <button
                type="button"
                onclick={showCookieSettings}
                class={cn("text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5")}
              >
                <Cookie class={cn("h-3.5 w-3.5")} />
                {$cookieConsent.cookieSettings}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class={cn("mt-8 pt-8 border-t border-border/50")}></div>

      <!-- Bottom Bar -->
      <div
        class={cn("bg-muted/50 border-t border-border/50")}
      >
        <div class={cn("flex flex-col sm:flex-row items-center justify-between gap-4 p-4")}>
          <!-- Copyright -->
          <p class={cn("text-sm text-muted-foreground")}>
            &copy; {currentYear} {$aboutme.name}. {$footer.rights}
          </p>

          <!-- Language Switcher -->
          <Langswitcher />
        </div>
      </div>
    </div>
  </div>
</footer>
