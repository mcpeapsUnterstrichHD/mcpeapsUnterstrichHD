<template>
  <NuxtPwaManifest />
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color='#a3be8c' errorColor='#BF616A' />
  <Toaster class="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg print:hidden" />
  <SidebarProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </SidebarProvider>
</template>

<script setup lang="ts">
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
        await navigateTo('https://link.me/mcpeaps_hd', {
          external : true,
          open: { target: '_blank'}
        });
      },
    },
  },
  {
    title: 'Mein GitHub-Profil',
    description: '@mcpeapsUnterstrichHD | Hier leben meine Projekte.',
    action: {
      label: 'Folge mir',
      onClick: async () => {
        await navigateTo('https://github.com/mcpeapsUnterstrichHD', {
          external : true,
          open: { target: '_blank'}
        });
      }
    }
  },
  {
    title: 'Mein X/Twitter',
    description: '@mcpeaps_HD | Hier kann man mich mal erwischen',
    action: {
      label: 'Folge mir',
      onClick: async () => {
        await navigateTo('https://x.com/mcpeaps_HD', {
          external: true,
          open: { target: '_blank' },
        });
      }
    }
  },
  {
    title: 'Mein Instagram',
    description: '@mcpeaps_hd | Hier bin ich am meisten aktiv',
    action: {
      label: 'Folge mir',
      onClick: async () => {
        await navigateTo('https://instagram.com/mcpeaps_hd', {
          external: true,
          open: { target: '_blank' },
        });
      }
    }
  },
  {
    title: 'Mein TikTok',
    description: '@mcpeaps_hd | Hier bin ich am meisten aktiv',
    action: {
      label: 'Folge mir',
      onClick: async () => {
        await navigateTo('https://tiktok.com/@mcpeaps_hd', {
          external: true,
          open: { target: '_blank' },
        });
      }
    }
  },
  {
    title: 'Mein Threads',
    description: '@mcpeaps_hd | Hier kann man mich erwischen',
    action: {
      label: 'Folge mir',
      onClick: async () => {
        await navigateTo('https://threads.com/@mcpeaps_hd', {
          external: true,
          open: { target: '_blank' },
        });
      }
    }
  },
  {
    title: 'Mein Bluesky',
    description: '@mcpeapsunterstrichhd.dev | Hier kann man mich erwischen',
    action:{
      label: 'Folge mir',
      onClick: async () => {
        await navigateTo('https://bsky.mcpeapsunterstrichhd.dev', {
          external: true,
          open: { target: '_blank' },
        });
      }
    }
  },
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
  }, 10 * 60 * 1000 ); // 10 minute(s) in milliseconds
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

//css
import '@/assets/css/tailwind.css';
//fonts
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-Bold.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-BoldItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-ExtraLight.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-ExtraLightItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-Italic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-Light.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-LightItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-Regular.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-SemiBold.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-SemiBoldItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-SemiLight.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontPropo-SemiLightItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-Bold.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-BoldItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-ExtraLight.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-ExtraLightItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-Italic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-Light.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-LightItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-Regular.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-SemiBold.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-SemiBoldItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-SemiLight.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFont-SemiLightItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-Bold.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-BoldItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-ExtraLight.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-ExtraLightItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-Italic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-Light.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-LightItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-Regular.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-SemiBold.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-SemiBoldItalic.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-SemiLight.ttf';
import '@/assets/fonts/CaskaydiaCoveNerdFontMono-SemiLightItalic.ttf';
</script>

<style>
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