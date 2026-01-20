<template>
  <div class="flex gap-4 w-full">
    <!-- Separator (No opposite content for small, just separator and content) -->
    <!-- For small variant, we might want just content on the right, or left aligned.
         Original MUI Timeline has left/right/alternate.
         Small usually means generic flow.
         Let's stick to simple layout: Dot -> Content.
    -->
    <div class="flex flex-col items-center ml-4">
      <div class="w-3 h-3 rounded-full bg-muted-foreground/30 border border-muted-foreground/50 shrink-0 mt-2"></div>
      <div class="w-0.5 flex-1 bg-muted-foreground/20 min-h-[50px]"></div>
    </div>

    <!-- Content -->
    <div class="flex-1 pb-8">
      <TimeLineCard
        :TimeLineTitle="TimeLineTitle"
        :TimeLineBadges="combinedBadges"
        :TimeLineImage="TimeLineImage"
        :TimeLineImageAlt="TimeLineImageAlt"
        :TimeLineImageFallback="TimeLineImageFallback"
      >
        <slot />
      </TimeLineCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TimeLineCard from '@/components/TimeLineCard.vue'

const props = defineProps<{
  TimeLineImage: string
  TimeLineImageAlt: string
  TimeLineImageFallback: string
  TimeLineTitle: string
  TimeLineBadges: string[]
  startdate: string
  enddate: string
}>()

const combinedBadges = computed(() => {
  return [`${props.startdate} - ${props.enddate}`, ...props.TimeLineBadges]
})
</script>
