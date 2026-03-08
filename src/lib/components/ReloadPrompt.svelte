<script lang="ts">
import { useRegisterSW } from "virtual:pwa-register/svelte";

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  onRegisteredSW(swUrl, r) {
    console.log(`SW registered: ${swUrl}`);
    r &&
      setInterval(
        async () => {
          if (r.installing || !navigator) return;
          if ("connection" in navigator && !navigator.onLine) return;
          const resp = await fetch(swUrl, {
            cache: "no-store",
            headers: { "cache-control": "no-cache" },
          });
          if (resp?.status === 200) await r.update();
        },
        60 * 60 * 1000,
      );
  },
  onOfflineReady() {
    console.log("PWA application ready to work offline");
  },
  onRegisterError(error) {
    console.log("SW registration error", error);
  },
});

function close() {
  offlineReady.set(false);
  needRefresh.set(false);
}
</script>

{#if $offlineReady || $needRefresh}
  <div
    class="fixed bottom-0 right-0 m-4 z-50 rounded-lg border border-[#4C566A] bg-[#2E3440]/95 p-4 shadow-lg backdrop-blur-sm"
    role="alert"
  >
    <div class="mb-2 text-sm text-[#ECEFF4]">
      {#if $offlineReady}
        App ready to work offline.
      {:else}
        New content available, click reload to update.
      {/if}
    </div>
    <div class="flex gap-2">
      {#if $needRefresh}
        <button
          class="rounded-md bg-[#88C0D0] px-3 py-1 text-sm font-medium text-[#2E3440] hover:bg-[#8FBCBB] transition-colors"
          onclick={() => updateServiceWorker(true)}
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
