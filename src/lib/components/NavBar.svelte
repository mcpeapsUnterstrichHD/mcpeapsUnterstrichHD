<script lang="ts">
  import { useSidebar } from "$lib/components/ui/sidebar";
  import SidebarToggle from "$lib/components/SidebarToggle.svelte";
  import { fly, fade } from "svelte/transition";
  import { cubicOut, cubicIn } from "svelte/easing";

  const sidebar = useSidebar();
</script>

{#if sidebar.state === "collapsed" || (sidebar.isMobile && !sidebar.openMobile)}
  <header
    class="fixed left-2 top-2 z-20 print:hidden"
    in:fly={{ x: -20, duration: 300, easing: cubicOut }}
    out:fly={{ x: -20, duration: 250, easing: cubicIn }}
  >
    <div
      in:fade={{ duration: 300, easing: cubicOut }}
      out:fade={{ duration: 250, easing: cubicIn }}
    >
      <nav class="flex justify-start py-2">
        <ul class="flex gap-2 pr-4">
          <li>
            <SidebarToggle variant="header" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
{/if}
