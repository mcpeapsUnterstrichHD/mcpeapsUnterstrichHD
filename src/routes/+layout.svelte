<script lang="ts">
  import "../app.css";
  import { SidebarProvider } from "$lib/components/ui/sidebar";
  import AppSidebar from "$lib/components/AppSidebar.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
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

  import Clarity from '@microsoft/clarity';

  Clarity.init("vns8mokhsm")

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
      class="app dark isolate relative z-10 flex flex-col min-h-svh flex-1 w-full"
    >
      <NavBar />

      <main class="flex-1 w-full max-w-full relative grid">
        {#key page.url.pathname}
          <div
            class="w-full col-start-1 row-start-1"
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
        class="rounded-sm my-glass shadow-lg print:hidden no-print"
        expand={true}
      />
      <RecommendationToasts />
      <CookieConsent />
      <Footer />
    </div>
  </SidebarProvider>
</ClickSpark>
