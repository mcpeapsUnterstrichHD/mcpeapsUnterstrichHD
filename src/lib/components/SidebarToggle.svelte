<script lang="ts">
  import { useSidebar } from "$lib/components/ui/sidebar";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { useIntlayer } from "svelte-intlayer";
  import { t } from "$lib/i18n";
  import { PanelLeft } from "@lucide/svelte";

  interface Props {
    /** Show in header style (rounded, backdrop) vs sidebar style */
    variant?: "header" | "sidebar";
  }

  let { variant = "sidebar" }: Props = $props();

  const sidebar = useSidebar();
  const sidebarText = useIntlayer("sidebar");

  const baseClasses =
    "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] focus-visible:ring-2 flex items-center overflow-hidden outline-hidden cursor-pointer";

  const variantClasses = $derived(
    variant === "header"
      ? "rounded-sm text-foreground my-glass"
      : "w-full group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!",
  );
</script>

<Tooltip.Root>
  <Tooltip.Trigger
    class={`${baseClasses} ${variantClasses}`}
    onclick={() => sidebar.toggle()}
  >
    <PanelLeft class="h-4 w-4" />
    <span class="group-data-[collapsible=icon]:hidden">
      {t($sidebarText, "toggleSidebar")}
    </span>
  </Tooltip.Trigger>
  <Tooltip.Content side="right">
    {t($sidebarText, "toggleSidebar")}
  </Tooltip.Content>
</Tooltip.Root>
