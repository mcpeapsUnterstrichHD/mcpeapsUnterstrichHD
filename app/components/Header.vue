<template>
  <header v-if="shouldShowHeader" class="fixed left-2 top-2 z-20 print:hidden">
    <nav class="flex justify-start py-2">
      <ul class="flex gap-2 pr-4">
        <li>
          <SidebarToggle variant="header" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SidebarToggle from '@/components/SidebarToggle.vue'
import { useSidebar } from '@/components/ui/sidebar'

const { state, isMobile, openMobile } = useSidebar()

const shouldShowHeader = computed(() => {
  const isCollapsed = state.value === "collapsed"
  return isCollapsed || (isMobile.value && !openMobile.value)
})
</script>
