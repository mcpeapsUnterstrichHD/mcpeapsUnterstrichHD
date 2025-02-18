<template>
  <Card class="bg-transparent backdrop-blur-sm">
    <CardHeader>
      <div class="flex flex-row items-center justify-between gap-1">
        <Avatar>
          <AvatarImage :src="currentImageSrc" :alt="skillImageAlt" />
          <AvatarFallback>{{ skillImageFallback }}</AvatarFallback>
        </Avatar>
        <CardTitle>{{ skillTitle }}</CardTitle>
      </div>
      <CardDescription>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="(badge, index) in skillBadges" :key="index" variant="default">
            {{ badge }}
          </Badge>
        </div>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Progress :model-value="skillLevel" />
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Props {
  skillImage: string
  skillImageAlt: string
  skillImageFallback: string
  skillTitle: string
  skillBadges: string[]
  skillLevel: number
}

const props = defineProps<Props>()
const colorMode = useColorMode()

// Map of images to their dark versions
const imageMap: Record<string, string> = {
  '/pictures/ios.png': '/pictures/ios-dark.png',
  '/pictures/windows.png': '/pictures/windows-dark.png',
  '/pictures/ansible.png': '/pictures/ansible-dark.png',
}

const currentImageSrc = computed(() => {
  return colorMode.value === 'dark' ? imageMap[props.skillImage] || props.skillImage : props.skillImage
})
</script>