<script lang="ts">
  /**
   * @module routes/[[locale=locale]]/cv/+layout
   * @description Shared layout wrapper for all CV (Curriculum Vitae) pages, including
   * the visual/styled CV (`/cv`) and the ATS-optimized plain-text CV (`/cv/ats`).
   *
   * This layout provides:
   * - **Fixed action buttons** (bottom-right corner, hidden during print) that allow
   *   toggling between Normal and ATS CV views, and triggering the browser print dialog
   *   for PDF export
   * - **Print recommendation toasts** - On mount, displays two recurring toast notifications
   *   advising users about recommended printing settings and a printing notice. The settings
   *   toast repeats every 60 seconds, the notice toast every 120 seconds. Both are cleared
   *   on component unmount.
   *
   * The layout detects the current CV sub-route (normal vs ATS) via `page.url.pathname`
   * to toggle the label and href of the view-switch button.
   *
   * @property {Snippet} children - The child CV page content to render
   *
   * @reactive {boolean} isAtsPage - Derived flag indicating whether the current route is `/cv/ats`
   *
   * CV section layout with fixed action toolbar following macOS toolbar patterns --
   * download and print buttons anchored to viewport edge.
   *
   * @see {@link routes/[[locale=locale]]/cv/+page.svelte} for the styled CV page
   * @see {@link routes/[[locale=locale]]/cv/ats/+page.svelte} for the ATS-optimized CV page
   */

  import { useIntlayer } from "svelte-intlayer";
  import { page } from "$app/state";
  import * as Button from "$lib/components/ui/button";

  import { Download, FileText } from "@lucide/svelte";
  import { onMount } from "svelte";
  import { toast } from "svelte-sonner";
  import { t } from "$lib/i18n";
  import { cn } from "$lib/utils";
  import LocalizedLink from "$lib/components/LocalizedLink.svelte";

  const cv = useIntlayer("cv");

  let { children } = $props();

  /** @reactive Derived flag that is true when the user is on the ATS variant of the CV page */
  let isAtsPage = $derived(page.url.pathname.includes("/cv/ats"));

  /**
   * Triggers the browser's native print dialog for PDF export.
   * The CV pages include print-specific CSS to ensure proper formatting.
   */
  function handlePrint() {
    window.print();
  }

  onMount(() => {
    // Toast for printing settings
    const printToast = () => {
      toast(t($cv, "recommendation.printingSettings.title"), {
        description: t($cv, "recommendation.printingSettings.description"),
      });
    };
    printToast();
    const id1 = setInterval(printToast, 60_000);

    // Toast for printing notice
    const noticeToast = () => {
      toast(t($cv, "recommendation.printingNotice.title"), {
        description: t($cv, "recommendation.printingNotice.description"),
      });
    };
    noticeToast();
    const id2 = setInterval(noticeToast, 120_000);

    return () => {
      clearInterval(id1);
      clearInterval(id2);
    };
  });
</script>

{@render children()}

<!-- Action Buttons - shared across all CV pages -->
<div class={cn("fixed top-4 right-4 z-50 print:hidden grid grid-cols-1 gap-2")}>
  <Button.Root onclick={handlePrint} class={cn("gap-2 shadow-lg")} size="lg">
    <Download class={cn("w-4 h-4")} />
    PDF
  </Button.Root>
  <LocalizedLink href={isAtsPage ? "/cv" : "/cv/ats"}>
    <Button.Root variant="outline" class={cn("my-glass gap-2 shadow-lg")} size="lg">
      <FileText class={cn("w-4 h-4")} />
      {isAtsPage ? "Normal" : "ATS"}
    </Button.Root>
  </LocalizedLink>

</div>
