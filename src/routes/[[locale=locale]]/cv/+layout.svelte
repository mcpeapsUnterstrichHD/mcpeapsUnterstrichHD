<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import { page } from "$app/state";
  import { getLocalizedUrl, type Locale } from "intlayer";
  import { useLocale } from "svelte-intlayer";
  import * as Button from "$lib/components/ui/button";

  const { locale } = useLocale();
  import { Download, FileText } from "@lucide/svelte";
  import { onMount } from "svelte";
  import { toast } from "svelte-sonner";
  import { t } from "$lib/i18n";

  const cv = useIntlayer("cv");

  let { children } = $props();

  let isAtsPage = $derived(page.url.pathname.includes("/cv/ats"));

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
<div class="fixed bottom-4 right-4 z-50 print:hidden flex gap-2">
  <a href={getLocalizedUrl(isAtsPage ? "/cv" : "/cv/ats", $locale)}>
    <Button.Root variant="outline" class="my-glass gap-2 shadow-lg" size="lg">
      <FileText class="w-4 h-4" />
      {isAtsPage ? "Normal" : "ATS"}
    </Button.Root>
  </a>
  <Button.Root onclick={handlePrint} class="gap-2 shadow-lg" size="lg">
    <Download class="w-4 h-4" />
    PDF
  </Button.Root>
</div>
