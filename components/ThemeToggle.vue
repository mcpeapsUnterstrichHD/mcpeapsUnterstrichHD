<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()

const menuItems = computed(() => {
  const items = []

  if (colorMode.preference === 'dark') {
    items.push({ value: 'light', label: 'Light' })
    items.push({ value: 'system', label: 'System' })
  } else if (colorMode.preference === 'light') {
    items.push({ value: 'dark', label: 'Dark' })
    items.push({ value: 'system', label: 'System' })
  } else if (colorMode.preference === 'system') {
    if (colorMode.value === 'dark') {
      items.push({ value: 'light', label: 'Light' });
    } else {
      items.push({ value: 'dark', label: 'Dark' });
    }
  }

  return items
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        v-for="item in menuItems"
        :key="item.value"
        @click="colorMode.preference = item.value"
      >
        {{ item.label }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>