<template>
  <Card class="bg-card/50 backdrop-blur-sm">
    <CardHeader>
      <div class="flex flex-row items-center justify-between gap-1">
        <Avatar>
          <AvatarImage :src="TimeLineImage" :alt="TimeLineImageAlt" />
          <AvatarFallback>{{ TimeLineImageFallback }}</AvatarFallback>
        </Avatar>
        <CardTitle>{{ TimeLineTitle }}</CardTitle>
      </div>
      <CardDescription>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="badge in TimeLineBadges" :key="badge" variant="default">
            {{ badge }}
          </Badge>
        </div>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

defineProps<{
  TimeLineImage: string
  TimeLineImageAlt: string
  TimeLineImageFallback: string
  TimeLineTitle: string
  TimeLineBadges: string[]
}>()
</script>
