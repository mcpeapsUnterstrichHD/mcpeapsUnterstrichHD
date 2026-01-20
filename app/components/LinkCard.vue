<template>
  <a :href="url" target="_blank" rel="noreferrer" class="flex flex-col gap-2">
    <Card class="bg-card/50 backdrop-blur-sm h-full">
      <CardHeader>
        <div class="flex flex-row items-center justify-between gap-1">
          <Avatar>
            <AvatarImage :src="icon" :alt="`${title} Logo`" />
            <AvatarFallback>{{ title }}</AvatarFallback>
          </Avatar>
          <CardTitle>{{ title }}</CardTitle>
        </div>
        <CardDescription>{{ headding }}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{{ description }}</p>
      </CardContent>
      <slot />
    </Card>
  </a>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

defineProps<{
  title: string
  url: string
  icon: string
  headding: string
  description: string
}>()
</script>
