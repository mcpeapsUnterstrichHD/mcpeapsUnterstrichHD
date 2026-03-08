<script lang="ts">
import { useRegisterSW } from "virtual:pwa-register/svelte";
import { toast } from "svelte-sonner";

let intervalId: ReturnType<typeof setInterval> | undefined;

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  onRegisteredSW(swUrl: string, r: ServiceWorkerRegistration | undefined) {
    console.log(`SW registered: ${swUrl}`);
    if (!r) return;
    intervalId = setInterval(
      async () => {
        if (r.installing || !navigator) return;
        if ("connection" in navigator && !navigator.onLine) return;
        const resp = await fetch(swUrl, {
          cache: "no-store",
          headers: { cache: "no-store", "cache-control": "no-cache" },
        });
        if (resp?.status === 200) await r.update();
      },
      60 * 60 * 1000,
    );
  },
  onOfflineReady() {
    console.log("PWA application ready to work offline");
  },
  onRegisterError(error: unknown) {
    console.log("SW registration error", error);
  },
});

$effect(() => {
  return () => {
    if (intervalId) clearInterval(intervalId);
  };
});

$effect(() => {
  if ($offlineReady) {
    toast.success("App ready to work offline.");
    offlineReady.set(false);
  }
});

$effect(() => {
  if ($needRefresh) {
    toast("New content available", {
      description: "Click reload to update.",
      duration: Infinity,
      action: {
        label: "Reload",
        onClick: () => updateServiceWorker(true),
      },
    });
    needRefresh.set(false);
  }
});
</script>
