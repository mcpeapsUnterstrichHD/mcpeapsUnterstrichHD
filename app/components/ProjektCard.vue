<template>
  <component :is="linkComponent" v-bind="linkProps">
    <Card class="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>{{ projektTitle }}</CardTitle>
        <CardDescription>
          <section class="flex flex-wrap gap-2">
            <Badge v-for="badge in projektBadges" :key="badge" variant="default">
              {{ badge }}
            </Badge>
          </section>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section class="flex flex-col justify-between gap-4">
          <p><slot /></p>
        </section>
      </CardContent>
      <CardFooter class="flex grow flex-col items-center justify-center gap-4 p-4">
        <section class="flex items-center justify-center rounded-sm">
          <!-- Lens replacement: Just img for now, or find Vue Lens equivalent -->
          <!-- Next.js used @/components/ui/lens. Assuming we can port or skip Lens effect.
               Skipping Lens effect for simplicity for now, just render image. -->
          <img
            :src="projektImage"
            :alt="projektImageAlt"
            :class="[projektImageBgColor ? projektImageBgColor : 'bg-background', 'w-full p-4 rounded-sm object-contain']"
          />
        </section>
      </CardFooter>
    </Card>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { NuxtLinkLocale } from '#components'

const props = defineProps<{
  projektImage: string
  projektImageAlt: string
  projektImageBgColor: string
  projektTitle: string
  projektBadges: string[]
  projektLink: string
}>()

const isExternalLink = computed(() => props.projektLink?.startsWith('http://') || props.projektLink?.startsWith('https://'))

const linkComponent = computed(() => isExternalLink.value ? 'a' : NuxtLinkLocale)
const linkProps = computed(() => isExternalLink.value
  ? { href: props.projektLink, target: '_blank', rel: 'noopener noreferrer' }
  : { to: props.projektLink }
)
</script>
