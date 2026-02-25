<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import { cookieState } from "./cookieState.svelte";
  import { ShieldOff, Settings } from "@lucide/svelte";
  import * as Button from "$lib/components/ui/button";
  import { t } from "$lib/i18n";

  const cookieConsent = useIntlayer("cookieConsent");

  interface Props {
    category: string;
    src?: string;
    title?: string;
    class?: string;
    height?: string | number;
    allow?: string;
    sandbox?: string;
    allowFullScreen?: boolean;
    [key: string]: unknown;
  }

  let {
    category,
    src,
    title,
    class: className = "",
    height,
    allow,
    sandbox,
    allowFullScreen,
    ...rest
  }: Props = $props();

  let hasConsent = $derived(
    cookieState[category as keyof typeof cookieState] || false,
  );

  function showCookieSettings() {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("show-cookie-consent"));
    }
  }
</script>

{#if hasConsent}
  <iframe
    {src}
    {title}
    class={className}
    {height}
    {allow}
    {sandbox}
    allowfullscreen={allowFullScreen}
    {...rest}
  ></iframe>
{:else}
  <div
    class="flex flex-col items-center justify-center gap-4 p-8 bg-muted/30 rounded-lg border border-border/50 {className}"
    style="min-height: {height ? `${height}px` : '200px'}"
  >
    <div class="p-3 bg-muted/50 rounded-full">
      <ShieldOff class="h-8 w-8 text-muted-foreground" />
    </div>
    <div class="text-center space-y-2">
      <p class="text-sm font-medium text-foreground">
        {t($cookieConsent, "blockedContent.title")}
      </p>
      <p class="text-xs text-muted-foreground max-w-sm">
        {t($cookieConsent, "blockedContent.description", {
          category: t($cookieConsent, `categories.${category}.title`),
        })}
      </p>
    </div>
    <Button.Root
      variant="outline"
      size="sm"
      onclick={showCookieSettings}
      class="inline-flex items-center gap-2"
    >
      <Settings class="h-4 w-4" />
      {$cookieConsent.blockedContent.button}
    </Button.Root>
  </div>
{/if}
