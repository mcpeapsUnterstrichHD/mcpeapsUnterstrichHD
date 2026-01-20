<template>
  <LinkCard v-bind="props">
    <CardFooter>
      <slot />
    </CardFooter>
  </LinkCard>
</template>

<script setup lang="ts">
import { LinkCard } from '#components'
import { CardFooter } from '@/components/ui/card'

const props = defineProps<{
  title: string
  url: string
  icon: string
  headding: string
  description: string
}>()
</script>
