<template>
  <nav class="fixed top-2 right-2 z-50">
    <div class="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg">
      <NavigationMenu class="gap-4 p-2">
        <NavigationMenuList class="no-print flex items-center gap-2">
          <NavigationMenuItem class="rounded-full">
            <SideBarToggle />
          </NavigationMenuItem>
          <NavigationMenuItem class="rounded-full">
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
</script>

<style scoped>
.no-print {
  @media print {
    display: none;
  }
}
</style>