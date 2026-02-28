<script lang="ts">
  /**
   * @component AppSidebar
   *
   * macOS-style NavigationSplitView sidebar following Apple HIG application design.
   * Features grouped navigation sections (Navigation, Connect, Legal), collapsible
   * to icon-only mode like macOS sidebar compact representation. Uses Liquid Glass
   * material (my-glass) for translucent background with Nord color scheme. On mobile
   * (below md breakpoint), renders as an offcanvas Sheet drawer.
   *
   * Built on top of the shadcn-svelte Sidebar compound component with the "floating"
   * variant. The header displays the user avatar with a {@link TypingAnimation}
   * name loop, while the footer contains a {@link Langswitcher} and a
   * {@link SidebarToggle} for collapsing the sidebar.
   *
   * Active-page detection is handled by {@link isActive}, which compares the
   * current `page.url.pathname` against locale-prefixed versions of each link's
   * URL(s). Active links receive a prominent {@link Dot} indicator using the
   * Nord Frost primary color.
   *
   * The sidebar is hidden in print layouts via the `no-print` utility class.
   *
   * @see {@link NavBar} -- Fallback header shown when sidebar is collapsed
   * @see {@link SidebarToggle} -- Toggle button in the sidebar footer
   * @see {@link Langswitcher} -- Language picker embedded in the sidebar footer
   * @see {@link LocalizedLink} -- Locale-aware anchor used for all navigation links
   */
  import { page } from "$app/state";
  import * as Sidebar from "$lib/components/ui/sidebar";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import UserAvatar from "$lib/components/UserAvatar.svelte";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import Langswitcher from "$lib/components/Langswitcher.svelte";
  import SidebarToggle from "$lib/components/SidebarToggle.svelte";
  import {
    House,
    User,
    FolderKanban,
    FileText,
    Mail,
    Link as LinkIcon,
    Scale,
    Dot,
    type IconProps,
  } from "@lucide/svelte";
  import { useIntlayer, useLocale } from "svelte-intlayer";
  import { getLocalizedUrl, type Locale } from "intlayer";
  import LocalizedLink from "$lib/components/LocalizedLink.svelte";
  import { t } from "$lib/i18n";
  import { cn } from "$lib/utils";

  const footer = useIntlayer("footer");
  const sites = useIntlayer("sites");
  const aboutme = useIntlayer("aboutme");
  const logo = useIntlayer("logo");

  const { locale } = useLocale();

  /**
   * Shape of a single sidebar navigation entry.
   *
   * @property {string} title - Localized display text for the menu item.
   * @property {string} url - Internal route path (without locale prefix).
   * @property {string} [url2] - Optional secondary route that should also trigger the active indicator
   *   (e.g. `/cv/ats/` is an alternate view of `/cv/`).
   * @property {any} icon - Lucide icon component rendered beside the title.
   */
  interface SidebarLink {
    title: string;
    url: string;
    url2?: string;
    icon: any;
  }

  const today = new Date();

  /** Derived array of primary navigation links (Home, About Me, Projects, CV). Re-computes when locale changes. */
  let navigationLinks: SidebarLink[] = $derived([
    { title: t($sites, "root"), url: "/", icon: House },
    { title: t($sites, "aboutme"), url: "/aboutme/", icon: User },
    { title: t($sites, "projects"), url: "/projects/", icon: FolderKanban },
    { title: t($sites, "cv"), url: "/cv/", url2: "/cv/ats/", icon: FileText },
  ]);

  /** Derived array of connect/social links (Contact, Linkhub). Re-computes when locale changes. */
  let connectLinks: SidebarLink[] = $derived([
    { title: t($sites, "contact"), url: "/contact/", icon: Mail },
    { title: t($sites, "linkhub"), url: "/linkhub/", icon: LinkIcon },
  ]);

  /** Derived array of legal links (Imprint). Re-computes when locale changes. */
  let legalLinks: SidebarLink[] = $derived([
    { title: t($sites, "impressum"), url: "/imprint/", icon: Scale },
  ]);

  /**
   * Determines whether a navigation link is "active" by comparing the current
   * `page.url.pathname` against the locale-prefixed version(s) of the link's route.
   *
   * Trailing slashes are stripped before comparison to avoid false negatives.
   *
   * @param {string} itemUrl - Primary route path to check (e.g. "/cv/").
   * @param {string} [itemUrl2] - Optional secondary route path (e.g. "/cv/ats/").
   * @returns {boolean} True when the current page matches either localized URL.
   */
  function isActive(itemUrl: string, itemUrl2?: string): boolean {
    const currentLoc = $locale as Locale;
    const path = page.url.pathname.replace(/\/$/, "") || "/";
    const localized1 =
      getLocalizedUrl(itemUrl, currentLoc).replace(/\/$/, "") || "/";
    const localized2 = itemUrl2
      ? getLocalizedUrl(itemUrl2, currentLoc).replace(/\/$/, "") || "/"
      : undefined;
    return path === localized1 || (!!localized2 && path === localized2);
  }
</script>

<Sidebar.Root
  collapsible="offcanvas"
  variant="floating"
  class={cn("no-print my-glass rounded-sm")}
>
  <Sidebar.Header>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Tooltip.Root>
              <Tooltip.Trigger
                onclick={() => {}}
                class={cn("flex w-full items-center gap-2 rounded-md p-2 text-left text-xs hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors overflow-hidden")}
              >
                <LocalizedLink
                  href="/"
                  class={cn("flex w-full items-center gap-2 overflow-hidden")}
                >
                  <UserAvatar
                    name={t($aboutme, "name")}
                    githubUserName="mcpeapsUnterstrichHD"
                    image={{ src: "/pictures/logo.png", alt: t($logo, "alt") }}
                    imageFallback="MAHD"
                    class={cn("h-8 w-8 rounded-sm")}
                  />
                  <span class={cn("group-data-[collapsible=icon]:hidden")}>
                    <TypingAnimation
                      text={t($aboutme, "name")}
                      typeSpeed={145}
                      pauseDelay={1450}
                      deleteSpeed={75}
                      showCursor
                      blinkCursor
                      loop
                      startOnView
                      cursorStyle="underscore"
                    />
                  </span>
                </LocalizedLink>
              </Tooltip.Trigger>
              <Tooltip.Content side="right"
                >{t($aboutme, "name")}</Tooltip.Content
              >
            </Tooltip.Root>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Header>

  <Sidebar.Content>
    <!-- Navigation -->
    <Sidebar.Group>
      <Sidebar.GroupLabel>{t($footer, "navigation")}</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each navigationLinks as item}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <LocalizedLink href={item.url} {...props}>
                    {@const Icon = item.icon}
                    <Icon title={item.title} />
                    <span
                      class={cn("flex-1 truncate group-data-[collapsible=icon]:hidden")}
                      >{item.title}</span
                    >
                    {#if isActive(item.url, item.url2)}
                      <Dot
                        class={cn("text-primary shrink-0")}
                        size={72}
                        strokeWidth={6}
                      />
                    {/if}
                  </LocalizedLink>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>

    <!-- Connect -->
    <Sidebar.Group>
      <Sidebar.GroupLabel>{t($footer, "connect")}</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each connectLinks as item: S }
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <LocalizedLink href={item.url} {...props}>
                    {@const Icon = item.icon}
                    <Icon title={item.title} />
                    <span
                      class={cn("flex-1 truncate group-data-[collapsible=icon]:hidden")}
                      >{item.title}</span
                    >
                    {#if isActive(item.url)}
                      <Dot
                        class={cn("text-primary shrink-0")}
                        size={72}
                        strokeWidth={6}
                      />
                    {/if}
                  </LocalizedLink>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>

    <!-- Legal -->
    <Sidebar.Group>
      <Sidebar.GroupLabel>{t($footer, "legal")}</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each legalLinks as item}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <LocalizedLink href={item.url} {...props}>
                    {@const Icon = item.icon}
                    <Icon title={item.title} />
                    <span
                      class={cn("flex-1 truncate group-data-[collapsible=icon]:hidden")}
                      >{item.title}</span
                    >
                    {#if isActive(item.url)}
                      <Dot
                        class={cn("text-primary shrink-0")}
                        size={72}
                        strokeWidth={6}
                      />
                    {/if}
                  </LocalizedLink>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>

  <Sidebar.Footer>
    <Sidebar.Group>
      <Sidebar.GroupLabel class={cn("group-data-[collapsible=icon]:hidden")}>
        &copy; {today.getFullYear()}
        {t($aboutme, "name")}
      </Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Langswitcher sidebar />
          </Sidebar.MenuItem>
          <Sidebar.MenuItem>
            <SidebarToggle />
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Footer>

  <Sidebar.Rail />
</Sidebar.Root>
