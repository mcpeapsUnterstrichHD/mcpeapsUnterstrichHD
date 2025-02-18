<template>
  <div class="fixed bottom-2 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw]">
    <div class="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg">
      <div class="flex flex-col items-center justify-center p-2 gap-1">
        <div class="flex items-center justify-center">
          <NuxtLink to="/" class="text-sm font-semibold hover:underline">
            &copy; {{ currentYear }} Fabian Aps
          </NuxtLink>
        </div>

        <div class="flex flex-row flex-wrap items-center justify-center gap-2 text-sm">
          <a
            href="https://link.me/mcpeaps_hd"
            target="_blank"
            class="font-medium hover:underline transition-colors"
          >
            Linksammlung
          </a>
          <span class="text-muted-foreground">•</span>
          <NuxtLink to="/" class="font-medium hover:underline transition-colors">
            Fabian Aps
          </NuxtLink>
          <span class="text-muted-foreground">•</span>
          <NuxtLink to="/impressum" class="font-medium hover:underline transition-colors">
            Impressum
          </NuxtLink>
          <span class="text-muted-foreground">•</span>
          <a
            href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD"
            target="_blank"
            class="hover:underline transition-colors"
          >
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcset="https://cdn.idx.dev/btn/open_light_32.svg"
              />
              <source
                media="(prefers-color-scheme: light)"
                srcset="https://cdn.idx.dev/btn/open_dark_32.svg"
              />
              <img
                height="32"
                width="32"
                alt="Open in IDX"
                src="https://cdn.idx.dev/btn/open_purple_32.svg"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.no-print {
  @media print {
    display: none;
  }
  @media --webkit-print {
    display: none;
  }
}
</style>