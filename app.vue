<template>
  <NuxtPwaManifest />
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <SidebarProvider>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </SidebarProvider>

</template>

<script lang="ts">
import './assets/css/tailwind.css'
import NuxtPwaManifest from "@vite-pwa/nuxt"
import { SidebarProvider } from "@/components/ui/sidebar";
</script>

<style>
@import './assets/css/tailwind.css';

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>