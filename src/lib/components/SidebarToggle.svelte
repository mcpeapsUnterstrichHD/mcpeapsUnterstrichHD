<script lang="ts">
  /**
   * @component SidebarToggle
   *
   * macOS toolbar-style toggle button for controlling sidebar visibility.
   * Follows Apple HIG toolbar button conventions. Opens or closes the
   * {@link AppSidebar} via the `useSidebar()` context. Renders a
   * {@link PanelLeft} Lucide icon with a tooltip label sourced from the
   * `"sidebar"` Intlayer dictionary.
   *
   * Supports two visual variants controlled by the `variant` prop:
   *
   * - `"sidebar"` (default) -- full-width button styled for the sidebar footer,
   *   collapsing to a square icon when the sidebar is in icon-only mode
   *   (`group-data-[collapsible=icon]`).
   *
   * - `"header"` -- compact glass-card button with `my-glass` backdrop, used
   *   inside the fixed {@link NavBar} when the sidebar is collapsed.
   *
   * Both variants share `baseClasses` for consistent ring, hover, active, and
   * focus-visible styling aligned with the Nord accent palette.
   *
   * @example Sidebar footer (default variant)
   * ```svelte
   * <SidebarToggle />
   * ```
   *
   * @example Header variant (used in NavBar)
   * ```svelte
   * <SidebarToggle variant="header" />
   * ```
   *
   * @see {@link AppSidebar} -- Hosts SidebarToggle in its footer
   * @see {@link NavBar} -- Hosts SidebarToggle in header variant when sidebar is collapsed
   */
  import { useSidebar } from "$lib/components/ui/sidebar";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { useIntlayer } from "svelte-intlayer";
  import { t } from "$lib/i18n";
  import { PanelLeft } from "@lucide/svelte";
  import { cn } from "$lib/utils";

  /**
   * Props for the SidebarToggle component.
   *
   * @property {'header' | 'sidebar'} [variant='sidebar'] - Visual variant controlling
   *   the button's appearance. `"header"` adds frosted-glass styling for the navbar;
   *   `"sidebar"` renders a full-width button that shrinks in icon-collapsed mode.
   */
  interface Props {
    /** Show in header style (rounded, backdrop) vs sidebar style */
    variant?: "header" | "sidebar";
  }

  let { variant = "sidebar" }: Props = $props();

  /** Sidebar context providing the `toggle()` method invoked on click. */
  const sidebar = useSidebar();
  const sidebarText = useIntlayer("sidebar");

  /** Static base Tailwind classes shared by both variants (ring, hover, active, focus, layout). */
  const baseClasses =
    "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] focus-visible:ring-2 flex items-center overflow-hidden outline-hidden cursor-pointer";

  /** Derived variant-specific Tailwind classes appended to `baseClasses`. */
  const variantClasses = $derived(
    variant === "header"
      ? "rounded-sm text-foreground my-glass"
      : "w-full group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!",
  );
</script>

<Tooltip.Root>
  <Tooltip.Trigger
    class={cn(baseClasses, variantClasses)}
    onclick={() => sidebar.toggle()}
  >
    <PanelLeft class={cn("h-4 w-4")} />
    <span class={cn("group-data-[collapsible=icon]:hidden")}>
      {t($sidebarText, "toggleSidebar")}
    </span>
  </Tooltip.Trigger>
  <Tooltip.Content side="right">
    {t($sidebarText, "toggleSidebar")}
  </Tooltip.Content>
</Tooltip.Root>
