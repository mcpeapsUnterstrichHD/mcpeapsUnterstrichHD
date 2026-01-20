<template>
  <!-- Extend the default layout -->
  <NuxtLayout name="default">
    <slot />

    <!-- CV-specific Action Buttons -->
    <template #actions>
      <div class="fixed bottom-4 right-4 z-50 print:hidden flex gap-2">
        <NuxtLinkLocale :to="isAtsPage ? '/cv' : '/cv/ats'">
          <Button
            variant="outline"
            class="bg-card/50 backdrop-blur-sm gap-2 shadow-lg"
            size="lg"
          >
            <FileText class="w-4 h-4" />
            {{ isAtsPage ? 'Normal' : 'ATS' }}
          </Button>
        </NuxtLinkLocale>
        <Button
          @click="handlePrint"
          class="gap-2 shadow-lg"
          size="lg"
        >
          <Download class="w-4 h-4" />
          PDF
        </Button>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted, onUnmounted, computed } from 'vue'
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'
import { Download, FileText } from 'lucide-vue-next'

const { t } = useI18n()
const route = useRoute()

const isAtsPage = computed(() => route.path.includes('/cv/ats'))

let intervalId: ReturnType<typeof setInterval> | null = null
let intervalId2: ReturnType<typeof setInterval> | null = null

// Toast notifications for printing tips
onMounted(() => {
  const toastValues = {
    title: t('Cv.recommendation.printingSettings.title'),
    description: t('Cv.recommendation.printingSettings.description'),
  }
  toast(toastValues.title, { description: toastValues.description })

  intervalId = setInterval(() => {
    toast(toastValues.title, { description: toastValues.description })
  }, 60_000)

  const toastValues2 = {
    title: t('Cv.recommendation.printingNotice.title'),
    description: t('Cv.recommendation.printingNotice.description'),
  }
  toast(toastValues2.title, { description: toastValues2.description })

  intervalId2 = setInterval(() => {
    toast(toastValues2.title, { description: toastValues2.description })
  }, 120_000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
  if (intervalId2) clearInterval(intervalId2)
})

const handlePrint = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1_000))
  globalThis.window.print()
}
</script>
