<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <div class="flex flex-1">
      <AppSidebar />
      <main class="flex-1 flex flex-col items-center justify-center">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style>

</style>