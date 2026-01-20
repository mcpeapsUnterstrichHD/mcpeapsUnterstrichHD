<template>
  <Avatar>
    <AvatarImage :src="computedImage.src" :alt="computedImage.alt" />
    <AvatarFallback>{{ computedImageFallback }}</AvatarFallback>
  </Avatar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export interface ImageProps {
  src: string;
  alt: string;
}

const props = defineProps<{
  name: string;
  githubUserName: string;
  href?: string;
  image?: ImageProps;
  imageFallback?: string;
}>()

function getInitials(str: string): string {
  const words = str.split(" ").filter((word) => word.length > 0)
  const initials = words.map((word) => word.charAt(0))
  return initials.join("")
}

const computedImage = computed(() => {
  if (props.image) return props.image
  return {
    src: `https://github.com/${props.githubUserName}.png`,
    alt: props.name,
  }
})

const computedImageFallback = computed(() => {
  if (props.imageFallback) return props.imageFallback
  return getInitials(props.name)
})
</script>
