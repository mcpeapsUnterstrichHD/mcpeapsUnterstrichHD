<template>
  <footer class="w-full print:hidden no-print mt-auto p-2">
    <div class="border border-border/50 bg-card/50 backdrop-blur-sm rounded-sm">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <!-- Brand Section -->
          <div class="sm:col-span-2 md:col-span-1">
            <NuxtLinkLocale
              to="/"
              class="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              {{ t("Aboutme.name") }}
            </NuxtLinkLocale>
            <p class="mt-3 text-sm text-muted-foreground leading-relaxed hyphens-auto">
              {{ t("Aboutme.title") }}
            </p>
            <!-- Social Icons -->
            <div class="mt-4 flex flex-wrap items-center gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noreferrer"
                class="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-md"
                :aria-label="social.label"
              >
                <svg role="img" viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                   <path :d="social.icon.path" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div>
            <h3 class="text-sm font-semibold text-foreground mb-4">
              {{ t("Footer.navigation") }}
            </h3>
            <ul class="space-y-3">
              <li v-for="link in navigationLinks" :key="link.href">
                <NuxtLinkLocale
                  :to="link.href"
                  class="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {{ link.label }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>

          <!-- Connect -->
          <div>
            <h3 class="text-sm font-semibold text-foreground mb-4">
              {{ t("Footer.connect") }}
            </h3>
            <ul class="space-y-3">
              <li v-for="link in connectLinks" :key="link.href">
                 <NuxtLinkLocale
                  :to="link.href"
                  class="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {{ link.label }}
                </NuxtLinkLocale>
              </li>
              <li>
                <a
                  :href="contactDetails.email.link"
                  class="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail class="h-3.5 w-3.5" />
                  {{ t("Cv.about.email") }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="text-sm font-semibold text-foreground mb-4">
              {{ t("Footer.legal") }}
            </h3>
            <ul class="space-y-3">
              <li v-for="link in legalLinks" :key="link.href">
                <NuxtLinkLocale
                  :to="link.href"
                  class="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {{ link.label }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="mt-8 pt-8 border-t border-border/50">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <!-- Copyright -->
            <p class="text-sm text-muted-foreground">
              &copy; {{ currentYear }} {{ t("Aboutme.name") }}. {{ t("Footer.rights") }}
            </p>

            <!-- Language Switcher -->
            <Langswitcher />

            <!-- Development Only - Open in IDX -->
            <a
              v-if="isDev"
              href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD"
              target="_blank"
              rel="noreferrer"
              class="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <img
                height="20"
                width="66"
                alt="Open in IDX"
                src="https://cdn.idx.dev/btn/open_purple_32.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Mail } from 'lucide-vue-next'
import Langswitcher from '@/components/Langswitcher.vue'
import { contactDetails } from '@/lib/contact'
import {
  siGithub,
  siInstagram,
  siX,
  siTiktok,
  siThreads,
  siBluesky
} from 'simple-icons'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

// Check for development environment
// In Nuxt, we can use process.dev or import.meta.dev
const isDev = import.meta.dev

const navigationLinks = computed(() => [
  { href: "/", label: t("Sites.root") },
  { href: "/aboutme", label: t("Sites.aboutme") },
  { href: "/projects", label: t("Sites.projects") },
  { href: "/cv", label: t("Sites.cv") },
])

const connectLinks = computed(() => [
  { href: "/contact", label: t("Sites.contact") },
  { href: "/linkhub", label: t("Sites.linkhub") },
])

const legalLinks = computed(() => [
  { href: "/imprint", label: t("Sites.impressum") }
])

interface SocialLink {
  href: string
  icon: any // SimpleIcon type
  label: string
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/mcpeapsUnterstrichHD",
    icon: siGithub,
    label: "GitHub",
  },
  {
    href: "https://instagram.com/mcpeaps_hd",
    icon: siInstagram,
    label: "Instagram",
  },
  {
    href: "https://x.com/mcpeaps_HD",
    icon: siX,
    label: "X/Twitter",
  },
  {
    href: "https://tiktok.com/@mcpeaps_hd",
    icon: siTiktok,
    label: "TikTok",
  },
  {
    href: "https://threads.net/@mcpeaps_hd",
    icon: siThreads,
    label: "Threads",
  },
  {
    href: "https://bsky.mcpeapsunterstrichhd.dev",
    icon: siBluesky,
    label: "Bluesky",
  }
]
</script>
