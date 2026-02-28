<script lang="ts">
  /**
   * @module routes/+layout
   * @description SwiftUI-inspired app shell providing the global UI framework.
   * On desktop, presents a macOS-style NavigationSplitView with persistent sidebar.
   * On mobile, provides an iOS-style UITabBar at the bottom with the sidebar drawer
   * accessible via the "More" tab.
   * Uses Liquid Glass material throughout (backdrop-blur, translucency) with Nord color scheme.
   * Applies a dark mode default via ModeWatcher.
   *
   * Wraps all pages with global UI shell elements including the sidebar navigation,
   * top navigation bar, animated particle background, page transition animations,
   * toast notifications, cookie consent banner, and the site footer.
   *
   * Key responsibilities:
   * - Provides the global `SidebarProvider` context for the `AppSidebar` drawer
   * - Renders the interactive `ClickSpark` effect layer on user clicks
   * - Applies fly/fade page transitions keyed on `page.url.pathname`
   * - Mounts global singletons: `Toaster`, `RecommendationToasts`, `CookieConsent`, `Footer`
   * - Renders the animated `Particles` background with 400 particles
   *
   * @property {Snippet} children - The child page content rendered inside the main area
   *
   * @see {@link $lib/components/AppSidebar.svelte} for sidebar navigation
   * @see {@link $lib/components/NavBar.svelte} for desktop navigation trigger
   * @see {@link $lib/components/TabBar.svelte} for iOS-style mobile tab bar
   * @see {@link $lib/components/Footer.svelte} for site footer
   * @see {@link $lib/components/cookie/CookieConsent.svelte} for GDPR cookie consent
   */

  //import "../reset.css";
  import "../app.css";
  import { SidebarProvider } from "$lib/components/ui/sidebar";
  import AppSidebar from "$lib/components/AppSidebar.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import TabBar from "$lib/components/TabBar.svelte";
  import ClickSpark from "$lib/components/ClickSpark.svelte";
  import Particles from "$lib/components/Particles.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import RecommendationToasts from "$lib/components/RecommendationToasts.svelte";
  import CookieConsent from "$lib/components/cookie/CookieConsent.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
  import { ModeWatcher } from "mode-watcher";
  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import { fly, fade } from "svelte/transition";
  import { cubicOut, cubicIn } from "svelte/easing";
  import { cn } from "$lib/utils";

  import Clarity from '@microsoft/clarity';

  let { children }: { children: Snippet; } =
    $props();
</script>

<ModeWatcher defaultMode="dark" />

<ClickSpark
  sparkColor="#ECEFF4"
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  <SidebarProvider
    style="--sidebar-width: var(--appsidebar-width, 16rem); --sidebar-width-mobile: var(--appsidebar-width-mobile, 18rem);"
  >
    <AppSidebar />

    <Particles quantity={400} refresh={true} />
    <div
      class={cn("app dark isolate relative z-10 flex flex-col min-h-svh flex-1 w-full pb-20 md:pb-0")}
    >
      <NavBar />

      <main class={cn("flex-1 w-full max-w-full relative grid")}>
        {#key page.url.pathname}
          <div
            class={cn("w-full col-start-1 row-start-1")}
            in:fly={{ x: 30, duration: 400, delay: 150, easing: cubicOut }}
            out:fly={{ x: -20, duration: 300, easing: cubicIn }}
          >
            <div
              in:fade={{ duration: 400, delay: 150, easing: cubicOut }}
              out:fade={{ duration: 300, easing: cubicIn }}
            >
              {@render children()}
            </div>
          </div>
        {/key}
      </main>

      <Toaster
        theme="dark"
        class={cn("rounded-sm my-glass shadow-lg print:hidden no-print")}
        expand={true}
      />
      <RecommendationToasts />
      <CookieConsent />
      <Footer />
      <TabBar />
    </div>
  </SidebarProvider>
</ClickSpark>
