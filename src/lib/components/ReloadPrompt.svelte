<script lang="ts">
import { pwaInfo } from "virtual:pwa-info";
import { onMount } from "svelte";

let offlineReady = $state(false);
let needRefresh = $state(false);

let registerSW: ((reloadPage?: boolean) => Promise<void>) | undefined;

onMount(async () => {
  const { registerSW: register } = await import("virtual:pwa-register");
  registerSW = register({
    immediate: true,
    onRegisteredSW(swScriptUrl: string) {
      console.log(`SW registered: ${swScriptUrl}`);
    },
    onOfflineReady() {
      offlineReady = true;
      console.log("PWA application ready to work offline");
    },
    onNeedRefresh() {
      needRefresh = true;
    },
  });
});

function close() {
  offlineReady = false;
  needRefresh = false;
}

async function updateServiceWorker() {
  if (registerSW) {
    await registerSW(true);
  }
}
</script>

<svelte:head>
  {#if pwaInfo}
    <link rel="manifest" href={pwaInfo.webManifest.href} crossorigin={pwaInfo.webManifest.useCredentials ? 'use-credentials' : undefined} />
  {/if}
</svelte:head>

{#if offlineReady || needRefresh}
  <div
    class="fixed bottom-0 right-0 m-4 z-50 rounded-lg border border-[#4C566A] bg-[#2E3440]/95 p-4 shadow-lg backdrop-blur-sm"
    role="alert"
  >
    <div class="mb-2 text-sm text-[#ECEFF4]">
      {#if offlineReady}
        App ready to work offline.
      {:else}
        New content available, click reload to update.
      {/if}
    </div>
    <div class="flex gap-2">
      {#if needRefresh}
        <button
          class="rounded-md bg-[#88C0D0] px-3 py-1 text-sm font-medium text-[#2E3440] hover:bg-[#8FBCBB] transition-colors"
          onclick={updateServiceWorker}
        >
          Reload
        </button>
      {/if}
      <button
        class="rounded-md border border-[#4C566A] px-3 py-1 text-sm text-[#D8DEE9] hover:bg-[#3B4252] transition-colors"
        onclick={close}
      >
        Close
      </button>
    </div>
  </div>
{/if}
