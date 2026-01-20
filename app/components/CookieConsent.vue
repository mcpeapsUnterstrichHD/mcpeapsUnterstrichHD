<template>
  <div v-if="isVisible" class="fixed bottom-0 left-0 right-0 z-50 p-4 print:hidden no-print">
    <div class="mx-auto max-w-4xl">
      <div class="border border-border/50 bg-card/95 backdrop-blur-md rounded-lg shadow-xl p-6">
        <div class="flex items-start gap-4">
          <!-- Cookie Icon -->
          <div class="shrink-0 p-3 bg-primary/10 rounded-full">
            <Cookie class="h-6 w-6 text-primary" />
          </div>

          <!-- Content -->
          <div class="flex-1 space-y-3">
            <h3 class="text-lg font-semibold text-foreground">
              {{ t("CookieConsent.title") }}
            </h3>

            <div class="space-y-2 text-sm text-muted-foreground">
              <p>{{ t("CookieConsent.description") }}</p>

              <!-- Technical Cookies Section -->
              <div class="mt-3 p-3 bg-muted/30 rounded-md">
                <p class="font-medium text-foreground mb-1">
                  {{ t("CookieConsent.technicalCookies.title") }}
                </p>
                <p class="text-xs">
                  {{ t("CookieConsent.technicalCookies.description") }}
                </p>
              </div>

              <!-- Third-party Cookies Section -->
              <div class="p-3 bg-muted/30 rounded-md">
                <p class="font-medium text-foreground mb-1">
                  {{ t("CookieConsent.thirdPartyCookies.title") }}
                </p>
                <p class="text-xs">
                  {{ t("CookieConsent.thirdPartyCookies.description") }}
                </p>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <Button
                @click="handleAccept"
                class="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                {{ t("CookieConsent.accept") }}
              </Button>

              <NuxtLinkLocale
                to="/imprint"
                class="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {{ t("CookieConsent.moreInfo") }}
                <ExternalLink class="h-3.5 w-3.5" />
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Cookie, ExternalLink } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const COOKIE_CONSENT_KEY = "cookie-consent-accepted"

const { t } = useI18n()
const isVisible = ref(false)

onMounted(() => {
  const hasAccepted = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (!hasAccepted) {
    isVisible.value = true
  }
})

const handleAccept = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, "true")
  isVisible.value = false
}
</script>
