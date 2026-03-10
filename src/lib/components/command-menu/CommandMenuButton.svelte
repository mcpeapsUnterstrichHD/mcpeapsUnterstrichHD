<script lang="ts">
import { onMount } from "svelte";
import { useIntlayer } from "svelte-intlayer";
import { Search } from "@lucide/svelte";
import { Button } from "$lib/components/ui/button";
import { Kbd, KbdGroup } from "$lib/components/ui/kbd";
import { toggleCommandMenu } from "$lib/components/command-menu/command-menu-state.svelte";
import { cn } from "$lib/utils";
import { createWebHaptics } from "web-haptics/svelte";
import { onDestroy } from "svelte";
import { t } from "$lib/i18n";
const { trigger, destroy } = createWebHaptics();
onDestroy(destroy);

let isMac = $state(false);

onMount(() => {
  isMac = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
});

const commandMenu = useIntlayer("commandMenu");
</script>

<Button
  variant="outline"
  class={cn("gap-2 text-muted-foreground")}
  onclick={() => {
    trigger([
  { duration: 60, intensity: 1 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60, intensity: 1 },
]);
    toggleCommandMenu();
    }}
>
  <Search class={cn("h-4 w-4")} />
  <span class={cn("hidden sm:inline")}>
    {t($commandMenu,"commandPalette")}
  </span>
  <KbdGroup>
    <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
    <Kbd>J</Kbd>
  </KbdGroup>
</Button>
