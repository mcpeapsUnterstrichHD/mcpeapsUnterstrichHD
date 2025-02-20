<template>
  <NuxtPwaManifest />
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <Toaster class="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg print:hidden" />
  <SidebarProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </SidebarProvider>
</template>

<script setup lang="ts">
import './assets/css/tailwind.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'vue-sonner';
import { onMounted, onUnmounted } from 'vue';

const recommendations: {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => Promise<void> | void;
  };
}[] = [
  {
    title: 'Meine Projekte',
    description: 'Alle meine Projekte auf einer Übersichtlichkeit.',
    action: {
      label: 'Projekte anzeigen',
      onClick: async () => {
        await navigateTo('/projects');
      },
    },
  },
  {
    title: 'Über mich',
    description: 'Ein kleiner Einblick in meine Person.',
    action: {
      label: 'Erfahre mehr',
      onClick: async () => {
        await navigateTo('/aboutme');
      },
    },
  },
  {
    title: 'Lebenslauf',
    description: 'Meine Ausbildungen und Berufserfahrung.',
    action: {
      label: 'Mein Lebenslauf',
      onClick: async () => {
        await navigateTo('/lebenslauf');
      },
    },
  },
  {
    title: 'Social Media',
    description: 'Hier bin ich zu finden.',
    action: {
      label: 'Folge mir',
      onClick: async () => {
        await navigateTo('https://link.me/mcpeaps_hd', { external : true, open: { target: '_blank'}});
      },
    },
  },
  { title: 'Mein GitHub-Profil', description: '@mcpeapsUnterstrichHD | Hier leben meine Projekte.' },
  { title: 'Mein X/Twitter', description: '@mcpeaps_HD | Hier kann man mich mal erwischen' },
  { title: 'Mein Instagram', description: '@mcpeaps_hd | Hier bin ich am meisten aktiv' },
  { title: 'Mein TikTok', description: '@mcpeaps_hd | Hier bin ich am meisten aktiv' },
  { title: 'Mein Threads', description: '@mcpeaps_hd | Hier kann man mich erwischen' },
  { title: 'Mein Bluesky', description: '@mcpeapsunterstrichhd.dev | Hier kann man mich erwischen' },
];

let currentIndex = 0;
let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  // Show first recommendation immediately
  const { title, description, action } = recommendations[currentIndex];
  toast(title, {
    description,
    action,
  });

  // Set up interval to show recommendations every 30 minutes
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % recommendations.length;
    const { title, description, action } = recommendations[currentIndex];
    toast(title, { description, action });
  }, 10 * 60 * 1000 ); // 10 minutes in milliseconds
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
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