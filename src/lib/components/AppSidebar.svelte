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
} from "@lucide/svelte";
import { useIntlayer, useLocale } from "svelte-intlayer";
import LocalizedLink from "$lib/components/LocalizedLink.svelte";
import { t, isActive } from "$lib/i18n";
import { cn } from "$lib/utils";
import { createWebHaptics } from "web-haptics/svelte";
import { onDestroy } from "svelte";
import { type Locale } from "intlayer";
import CommandMenuButton from "./command-menu/CommandMenuButton.svelte";
import { IsMobile } from "$lib/hooks/is-mobile.svelte";
import { IsTablet } from "$lib/hooks/is-tablet.svelte";
const { trigger, destroy } = createWebHaptics();
onDestroy(destroy);

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

const isMobile = new IsMobile();
const isTablet = new IsTablet();
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
          <Sidebar.MenuItem onclick={
            () => trigger([
  { duration: 60, intensity: 1 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60, intensity: 1 },
])
          }>
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
                    {t($aboutme, "name")}
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
              <Sidebar.MenuButton onclick={
            () => trigger([
  { duration: 60, intensity: 1 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60, intensity: 1 },
])
          }>
                {#snippet child({ props })}
                  <LocalizedLink href={item.url} {...props}>
                    {@const Icon = item.icon}
                    <Icon title={item.title} />
                    <span
                      class={cn("flex-1 truncate group-data-[collapsible=icon]:hidden")}
                      >{item.title}</span
                    >
                    {#if isActive($locale as Locale, item.url, item.url2)}
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
              <Sidebar.MenuButton onclick={
            () => trigger([
  { duration: 60, intensity: 1 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60, intensity: 1 },
])
          }>
                {#snippet child({ props })}
                  <LocalizedLink href={item.url} {...props}>
                    {@const Icon = item.icon}
                    <Icon title={item.title} />
                    <span
                      class={cn("flex-1 truncate group-data-[collapsible=icon]:hidden")}
                      >{item.title}</span
                    >
                    {#if isActive($locale as Locale, item.url)}
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
              <Sidebar.MenuButton onclick={
            () => trigger([
  { duration: 60, intensity: 1 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60, intensity: 1 },
])
          }>
                {#snippet child({ props })}
                  <LocalizedLink href={item.url} {...props}>
                    {@const Icon = item.icon}
                    <Icon title={item.title} />
                    <span
                      class={cn("flex-1 truncate group-data-[collapsible=icon]:hidden")}
                      >{item.title}</span
                    >
                    {#if isActive($locale as Locale, item.url)}
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
        &copy; {today.getFullYear()} {t($aboutme, "name")}
      </Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Langswitcher sidebar />
          </Sidebar.MenuItem>
          <Sidebar.MenuItem>
            {#if !isMobile.current && !isTablet.current}
              <CommandMenuButton />
            {/if}
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
