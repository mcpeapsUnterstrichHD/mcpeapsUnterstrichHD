<template>
  <NuxtPwaManifest />
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <Toaster class="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg print:hidden"/>
  <SidebarProvider>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </SidebarProvider>

</template>

<script setup lang="ts">
import './assets/css/tailwind.css'
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
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