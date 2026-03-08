<script lang="ts">
import { onMount } from "svelte";
import { toast } from "svelte-sonner";

async function detectSWUpdate() {
  const registration = await navigator.serviceWorker.ready;

  registration.addEventListener("updatefound", () => {
    const newSW = registration.installing;

    if (newSW) {
      newSW.addEventListener("statechange", () => {
        if (newSW.state === "installed") {
          toast("A new version is available. Please refresh the page.", {
            duration: Infinity,
            action: {
              label: "Refresh",
              onClick: () => {
                newSW.postMessage({ action: "skipWaiting" });
                window.location.reload();
              },
            },
          });
        }
      });
    }
  });
}

onMount(() => {
  detectSWUpdate();
});
</script>
