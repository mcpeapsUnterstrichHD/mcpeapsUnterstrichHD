<template>
  <main class="flex min-h-screen flex-col items-center justify-between p-4">
    <div class="mt-5 pb-12">
      <div class="mb-2 w-full font-bold text-3xl">Impressum</div>

      <div class="py-2 font-bold text-2xl">Angaben gemäß § 5 TMG:</div>
      <NuxtLink
        to="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
        external
      >
        <div class="py-1 text-lg">
          Aps, Fabian
          <br />
          Ludwig-Renn-Straße 33
          <br />
          12679 Berlin, Deutschland
        </div>
      </NuxtLink>

      <div class="py-2 font-bold text-2xl">Kontakt:</div>
      <div class="py-1 text-lg">
        <div class="flex flex-col items-start">
          <div class="flex flex-row items-center">
            <NuxtLink
              to="mailto:aps.fabian@outlook.com"
              external
            >
              <p class="cursor-context-menu">
                E-Mail: aps.fabian@outlook.com
              </p>
            </NuxtLink>
          </div>
          <div class="flex flex-row items-center">
            <NuxtLink to="tel:+4917645172171" external>
              <p class="cursor-context-menu">
                Telefonnummer: +4917645172171
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="py-2 font-bold text-2xl">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
      </div>
      <NuxtLink
        to="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
        external
      >
        <div class="py-1 text-lg">
          Aps, Fabian
          <br />
          Ludwig-Renn-Straße 33
          <br />
          12679 Berlin, Deutschland
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style>
</style>