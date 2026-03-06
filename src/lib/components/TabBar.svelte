<script lang="ts">
/**
 * @component TabBar
 *
 * iOS 26 Liquid Glass pill tab bar for mobile navigation. Renders a floating,
 * pill-shaped bottom bar with translucent glass material containing 5 tabs:
 * Home, About Me, Projects, CV, and More. The "More" tab opens the sidebar
 * drawer for access to additional navigation items.
 *
 * Shown only on mobile viewports (below md/768px breakpoint) and hidden when
 * the sidebar drawer is already open. Uses the project's Liquid Glass material
 * system (my-glass) with safe area inset padding for notch/Dynamic Island.
 *
 * The active tab gets a pill-shaped highlight capsule behind it. All touch
 * targets meet Apple's 44pt minimum requirement.
 *
 * Built on shadcn-svelte NavigationMenu primitives.
 *
 * @see {@link AppSidebar} -- Full sidebar opened by the "More" tab
 * @see {@link NavBar} -- Desktop-only fallback header (complementary to TabBar)
 */
import { page } from "$app/state";
import { useSidebar } from "$lib/components/ui/sidebar";
import { useIntlayer, useLocale } from "svelte-intlayer";
import { getLocalizedUrl, type Locale } from "intlayer";
import { t } from "$lib/i18n";
import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
import { House, User, FolderKanban, FileText, Ellipsis } from "@lucide/svelte";
import { cn } from "$lib/utils";
import { createWebHaptics } from "web-haptics/svelte";
import { onDestroy } from "svelte";

const { trigger, destroy } = createWebHaptics();
onDestroy(destroy);

const sidebar = useSidebar();
const sites = useIntlayer("sites");
const sidebarContent = useIntlayer("sidebar");
const { locale } = useLocale();

const hapticPattern = [
  { duration: 60, intensity: 1 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60, intensity: 1 },
];

interface TabItem {
  title: string;
  url: string;
  url2?: string;
  icon: any;
}

let tabs: TabItem[] = $derived([
  { title: t($sites, "root"), url: "/", icon: House },
  { title: t($sites, "aboutme"), url: "/aboutme/", icon: User },
  { title: t($sites, "projects"), url: "/projects/", icon: FolderKanban },
  { title: t($sites, "cv"), url: "/cv/", url2: "/cv/ats/", icon: FileText },
]);

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

function localizedHref(url: string): string {
  return getLocalizedUrl(url, $locale as Locale);
}

/** Whether any of the sidebar-only routes (Contact, Linkhub, Imprint) are active */
let moreIsActive: boolean = $derived(
  ["/contact/", "/linkhub/", "/imprint/"].some((url) => {
    const currentLoc = $locale as Locale;
    const path = page.url.pathname.replace(/\/$/, "") || "/";
    const localized =
      getLocalizedUrl(url, currentLoc).replace(/\/$/, "") || "/";
    return path === localized;
  }),
);
</script>

<!-- Floating pill container with safe-area bottom offset -->
<div
  class={cn(
    "fixed bottom-2 left-2 right-2 z-40",
    "flex justify-center",
    "pointer-events-none",
    "transition-transform duration-300 ease-out",
    "md:hidden xl:hidden",
    "print:hidden no-print",
    sidebar.openMobile && "translate-y-full"
  )}
  style="padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 8px);"
>
  <NavigationMenu.Root
    viewport={false}
    class="pointer-events-auto my-glass max-w-none rounded-full px-2 py-1"
    aria-label="Main navigation"
  >
    <NavigationMenu.List class="flex items-center gap-1">
      {#each tabs as tab}
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href={localizedHref(tab.url)}
            data-active={isActive(tab.url, tab.url2)}
            class={cn(
              "relative flex flex-col items-center justify-center gap-0.5 rounded-full px-2 py-2 min-h-11 min-w-11",
              "bg-transparent transition-all duration-200",
              "hover:bg-card/20 focus:bg-card/20",
              isActive(tab.url, tab.url2)
                ? "bg-primary/15 text-primary data-[active=true]:bg-primary/15 data-[active=true]:hover:bg-primary/20 data-[active=true]:focus:bg-primary/20"
                : "text-muted-foreground"
            )}
            onclick={() => trigger(hapticPattern)}
          >
            <tab.icon class="size-5" />
            <span class="text-[10px] leading-tight font-medium">{tab.title}</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      {/each}

      <!-- More tab (opens sidebar drawer) -->
      <NavigationMenu.Item>
        <button
          onclick={() => {
            sidebar.setOpenMobile(true);
            trigger(hapticPattern);
          }}
          class={cn(
            "relative flex flex-col items-center justify-center gap-0.5 rounded-full px-4 py-2 min-h-11 min-w-11",
            "transition-all duration-200",
            moreIsActive
              ? "bg-primary/15 text-primary"
              : "text-muted-foreground hover:bg-card/20"
          )}
          aria-label={t($sidebarContent, "toggleSidebar")}
        >
          <Ellipsis class="size-5" />
          <span class="text-[10px] leading-tight font-medium">More</span>
        </button>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
</div>
