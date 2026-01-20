<template>
  <Card class="bg-card/50 backdrop-blur-sm p-4">
    <CardHeader class="pb-1">
      <div class="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage :src="currentImage" :alt="SkillImageAlt" />
          <AvatarFallback>{{ SkillImageFallback }}</AvatarFallback>
        </Avatar>
        <CardTitle>{{ SkillTitle }}</CardTitle>
      </div>
      <CardDescription>
        <div class="flex flex-wrap gap-2 mt-3">
          <Badge v-for="(badge, index) in SkillBadges" :key="index" variant="default">
            {{ badge }}
          </Badge>
        </div>
      </CardDescription>
    </CardHeader>
    <CardContent class="pt-1 pb-2">
      <Progress :model-value="Skilllevel" />
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { usePrintSafe } from "@/contexts/PrintContext" // Need to handle print context if critical

const props = defineProps<{
  SkillImage: string
  SkillImagePrint?: string
  SkillImageAlt: string
  SkillImageFallback: string
  SkillTitle: string
  SkillBadges: string[]
  Skilllevel: number
  category?: string
}>()

// Mocking print context for now or implementing if needed globally.
// Assuming dark mode by default, so maybe default image is fine.
const isPrinting = false // Replace with inject if PrintContext is ported

const currentImage = computed(() => {
  const hasPrintImage = !!props.SkillImagePrint && props.SkillImagePrint !== props.SkillImage
  return hasPrintImage && isPrinting ? props.SkillImagePrint : props.SkillImage
})
</script>
