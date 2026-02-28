<script lang="ts">
  /**
   * @component TabBar
   *
   * iOS-style bottom tab bar for mobile navigation, following Apple HIG UITabBar
   * conventions. Renders a fixed bottom bar with 5 tabs: Home, About Me, Projects,
   * CV, and More. The "More" tab opens the sidebar drawer for access to additional
   * navigation items (Contact, Linkhub, Imprint, Language Switch).
   *
   * Shown only on iOS-class viewports (below md/768px breakpoint) and hidden when
   * the sidebar drawer is already open. Uses Liquid Glass material (my-glass) for
   * translucent Nord-themed background with safe area inset padding at the bottom
   * for iPhone notch/Dynamic Island support.
   *
   * Active tab is highlighted with the Nord Frost primary color. All touch targets
   * meet Apple's 44pt minimum requirement.
   *
   * @see {@link AppSidebar} -- Full sidebar opened by the "More" tab
   * @see {@link NavBar} -- Desktop-only fallback header (complementary to TabBar)
   */
  import { page } from "$app/state";
  import { useSidebar } from "$lib/components/ui/sidebar";
  import { useIntlayer, useLocale } from "svelte-intlayer";
  import { getLocalizedUrl, type Locale } from "intlayer";
  import LocalizedLink from "$lib/components/LocalizedLink.svelte";
  import { t } from "$lib/i18n";
  import {
    House,
    User,
    FolderKanban,
    FileText,
    Ellipsis,
  } from "@lucide/svelte";
  import { cn } from "$lib/utils";

  const sidebar = useSidebar();
  const sites = useIntlayer("sites");
  const sidebarContent = useIntlayer("sidebar");
  const { locale } = useLocale();

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

  /** Whether any of the sidebar-only routes (Contact, Linkhub, Imprint) are active */
  let moreIsActive: boolean = $derived(
    ["/contact/", "/linkhub/", "/imprint/"].some((url) => {
      const currentLoc = $locale as Locale;
      const path = page.url.pathname.replace(/\/$/, "") || "/";
      const localized = getLocalizedUrl(url, currentLoc).replace(/\/$/, "") || "/";
      return path === localized;
    })
  );
</script>

<nav
  class={cn(
    "fixed bottom-0 left-0 right-0 z-40",
    "bg-card/60 backdrop-blur-2xl saturate-150 border-t border-card/10",
    "transition-transform duration-300 ease-out",
    "md:hidden",
    "print:hidden no-print",
    sidebar.openMobile && "translate-y-full"
  )}
  style="padding-bottom: env(safe-area-inset-bottom, 0px);
         box-shadow: inset 0 1px 0 0 oklch(1 0 0 / 0.04);"
  aria-label="Main navigation"
>
  <ul class="flex items-stretch justify-around px-2" role="tablist">
    {#each tabs as tab}
      <li class="flex-1">
        <LocalizedLink
          href={tab.url}
          class={cn(
            "flex flex-col items-center justify-center gap-0.5 py-2 min-h-[50px]",
            "transition-colors duration-200",
            isActive(tab.url, tab.url2)
              ? "text-primary"
              : "text-muted-foreground"
          )}
          role="tab"
          aria-selected={isActive(tab.url, tab.url2)}
          aria-current={isActive(tab.url, tab.url2) ? "page" : undefined}
        >
          <tab.icon class="size-5" />
          <span class="text-[10px] leading-tight font-medium">{tab.title}</span>
        </LocalizedLink>
      </li>
    {/each}

    <!-- More tab (opens sidebar drawer) -->
    <li class="flex-1">
      <button
        onclick={() => sidebar.setOpenMobile(true)}
        class={cn(
          "flex flex-col items-center justify-center gap-0.5 py-2 w-full min-h-[50px]",
          "transition-colors duration-200",
          moreIsActive
            ? "text-primary"
            : "text-muted-foreground"
        )}
        role="tab"
        aria-selected={moreIsActive}
        aria-label={t($sidebarContent, "toggleSidebar")}
      >
        <Ellipsis class="size-5" />
        <span class="text-[10px] leading-tight font-medium">More</span>
      </button>
    </li>
  </ul>
</nav>
