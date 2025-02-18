<template>
  <div>
    <div class="flex flex-col m-2 items-center justify-center">
      <LebenslaufContent />
    </div>
      <a href="/Lebenslauf_Fabian_Aps.pdf" download>
      <Button class="fixed bottom-2 right-2 z-50" type="button">
        <div class="flex flex-row gap-2 justify-center items-center">
        <div class="nf nf-oct-download" />
        <p>PDF</p>
      </div>
      </Button>
    </a>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<style>

</style>