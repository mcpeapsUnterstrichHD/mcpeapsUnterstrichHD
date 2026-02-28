<script lang="ts">
  /**
   * @component NavBar
   *
   * Desktop-only navigation trigger shown when the macOS-style sidebar is collapsed.
   * Renders a single {@link SidebarToggle} button in the "header" variant so the
   * user can re-open the sidebar at any time.
   *
   * On mobile, the {@link TabBar} component provides iOS UITabBar bottom navigation
   * instead — this component is not rendered on mobile viewports.
   *
   * Visibility is driven by the `useSidebar()` context: the component mounts only
   * when `sidebar.state === "collapsed"` on desktop (non-mobile) viewports.
   *
   * Entrance/exit animations use Svelte `fly` (x: -20) and `fade` transitions
   * with `cubicOut`/`cubicIn` easing for a smooth slide-in from the left edge.
   *
   * The header carries `print:hidden` so it is excluded from printed output.
   *
   * @see {@link AppSidebar} -- The full sidebar that NavBar complements
   * @see {@link SidebarToggle} -- The toggle button rendered inside NavBar
   */
  import { useSidebar } from "$lib/components/ui/sidebar";
  import SidebarToggle from "$lib/components/SidebarToggle.svelte";
  import { fly, fade } from "svelte/transition";
  import { cubicOut, cubicIn } from "svelte/easing";
  import { cn } from "$lib/utils";


  /** Sidebar context providing current state, mobile detection, and toggle method. */
  const sidebar = useSidebar();
</script>

{#if sidebar.state === "collapsed" && !sidebar.isMobile}
  <header
    class={cn("fixed left-2 top-2 z-20 print:hidden")}
    in:fly={{ x: -20, duration: 300, easing: cubicOut }}
    out:fly={{ x: -20, duration: 250, easing: cubicIn }}
  >
    <div
      in:fade={{ duration: 300, easing: cubicOut }}
      out:fade={{ duration: 250, easing: cubicIn }}
    >
      <nav class={cn("flex justify-start py-2")}>
        <ul class={cn("flex gap-2 pr-4")}>
          <li>
            <SidebarToggle variant="header" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
{/if}
