<script lang="ts">
  import { useIntlayer, useLocale } from 'svelte-intlayer';
  import { getLocalizedUrl, type Locale } from 'intlayer';
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

  const { locale } = useLocale();

  const aboutme = useIntlayer('aboutme');
  const sites = useIntlayer('sites');
  const footer = useIntlayer('footer');
  const cookieConsent = useIntlayer('cookieConsent');
  const cv = useIntlayer('cv');
  const logo = useIntlayer('logo');

  const currentYear = new Date().getFullYear();

  let navigationLinks = $derived([
    { href: '/', label: () => $sites.root },
    { href: '/aboutme', label: () => $sites.aboutme },
    { href: '/projects', label: () => $sites.projects },
    { href: '/cv', label: () => $sites.cv },
  ]);

  let connectLinks = $derived([
    { href: '/contact', label: () => $sites.contact },
    { href: '/linkhub', label: () => $sites.linkhub },
  ]);

  const socialLinks = [
    { href: 'https://github.com/mcpeapsUnterstrichHD', label: 'GitHub', icon: Github },
    { href: 'https://instagram.com/mcpeaps_hd', label: 'Instagram', icon: Instagram },
    { href: 'https://x.com/mcpeaps_HD', label: 'X/Twitter', icon: Twitter },
    { href: 'https://tiktok.com/@mcpeaps_hd', label: 'TikTok', icon: TikTok },
    { href: 'https://threads.net/@mcpeaps_hd', label: 'Threads', icon: Threads },
    { href: 'https://bsky.mcpeapsunterstrichhd.dev', label: 'Bluesky', icon: Bluesky },
  ];

  let legalLinks = $derived([
    { href: '/imprint', label: () => $sites.impressum },
  ]);

  function showCookieSettings() {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('show-cookie-consent'));
    }
  }
</script>

<footer id="footer" class="w-full z-40 print:hidden no-print mt-auto p-2 pb-24 lg:pb-2">
  <div class="my-glass rounded-sm">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand Section -->
        <div class="sm:col-span-2 md:col-span-1">
          <LocalizedLink
            href="/"
            class="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            {$aboutme.name}
          </LocalizedLink>
          <p class="mt-3 text-sm text-muted-foreground leading-relaxed hyphens-auto">
            {$aboutme.title}
          </p>
          <!-- Social Icons -->
          <div class="mt-4 flex flex-wrap items-center gap-3">
            {#each socialLinks as social}
              <LocalizedLink
                href={social.href}
                target="_blank"
                rel="noreferrer"
                class="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-md"
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
          <h3 class="text-sm font-semibold text-foreground mb-4">
            {$footer.navigation}
          </h3>
          <ul class="space-y-3">
            {#each navigationLinks as link}
              <li>
                <LocalizedLink
                  href={link.href}
                  class="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label()}
                </LocalizedLink>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-sm font-semibold text-foreground mb-4">
            {$footer.connect}
          </h3>
          <ul class="space-y-3">
            {#each connectLinks as link}
              <li>
                <LocalizedLink
                  href={link.href}
                  class="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label()}
                </LocalizedLink>
              </li>
            {/each}
            <li>
              <LocalizedLink
                href={contactDetails.email.link}
                class="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                <Mail class="h-3.5 w-3.5" />
                {$cv.about.email}
              </LocalizedLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="text-sm font-semibold text-foreground mb-4">
            {$footer.legal}
          </h3>
          <ul class="space-y-3">
            {#each legalLinks as link}
              <li>
                <LocalizedLink
                  href={link.href}
                  class="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label()}
                </LocalizedLink>
              </li>
            {/each}
            <li>
              <button
                type="button"
                onclick={showCookieSettings}
                class="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                <Cookie class="h-3.5 w-3.5" />
                {$cookieConsent.cookieSettings}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="mt-8 pt-8 border-t border-border/50">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <!-- Copyright -->
          <p class="text-sm text-muted-foreground">
            &copy; {currentYear} {$aboutme.name}. {$footer.rights}
          </p>

          <!-- Language Switcher -->
          <Langswitcher />
        </div>
      </div>
    </div>
  </div>
</footer>
