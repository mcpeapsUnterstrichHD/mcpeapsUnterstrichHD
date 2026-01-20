<template>
  <div class="flex gap-4 w-full">
    <!-- Opposite Content -->
    <div class="flex-1 flex justify-end pt-1">
      <Badge variant="outline" class="h-fit whitespace-nowrap">
        {{ startdate }} - {{ enddate }}
      </Badge>
    </div>

    <!-- Separator -->
    <div class="flex flex-col items-center">
      <div class="w-3 h-3 rounded-full bg-muted-foreground/30 border border-muted-foreground/50 shrink-0 mt-2"></div>
      <div class="w-0.5 flex-1 bg-muted-foreground/20 min-h-[50px]"></div>
    </div>

    <!-- Content -->
    <div class="flex-1 pb-8">
      <TimeLineCard
        :TimeLineTitle="TimeLineTitle"
        :TimeLineBadges="TimeLineBadges"
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
import { Badge } from '@/components/ui/badge'
import TimeLineCard from '@/components/TimeLineCard.vue'

defineProps<{
  TimeLineImage: string
  TimeLineImageAlt: string
  TimeLineImageFallback: string
  TimeLineTitle: string
  TimeLineBadges: string[]
  startdate: string
  enddate: string
}>()
</script>
