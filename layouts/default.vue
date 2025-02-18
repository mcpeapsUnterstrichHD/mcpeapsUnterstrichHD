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

<script lang="ts">
import {default as AppFooter} from '~/components/AppFooter.vue';
import {default as  AppNavbar} from '~/components/AppNavbar.vue';
import {default as  AppSidebar} from '~/components/AppSidebar.vue';
</script>

<style>

</style>