<template>
  <div>
    <h1 class="py-1 text-center text-xl">Hallo 👋</h1>
    <h1 class="text-center font-bold text-5xl">Ich bin Fabian Aps</h1>
    <h1 class="py-3 text-center font-bold text-3xl">
      ITler/DJ/Producher
    </h1>

    <a class="w-3/4 text-center">
      Ich bin ein {age} jähriger ITler/DJ/Producher und ich liebe es
      Software zu entwikeln aber durch mein Praktikum bei der KfW
      Bankengruppe hat mir gezeigt, dass mir Anwendungsbetreung auch nicht
      schwer liegt, denoch mach ich die Entwicklung gerne als Hobby. Musik
      ist dabei auch eine Leidenschaft von mir, egal ab hören oder
      Produzieren.
    </a>

    <h2 class="py-2 text-center font-bold text-2xl">Meine Playlist:</h2>
    <div class="flex w-full flex-auto flex-row flex-wrap items-center justify-center">
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        width="95%"
        height="450"
        style="max-width: 100%; overflow: hidden; border-radius: 10px;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
        frameborder="0"
      ></iframe>
    </div>
    <h2 class="py-2 text-center font-bold text-2xl">
      Mein aktueller Song:
    </h2>
    <div class="flex w-full flex-auto flex-row flex-wrap items-center justify-center">
      <iframe
        width="95%"
        height="52"
        src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
        frameborder="0"
        allowfullscreen
        sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
        allow="clipboard-read; clipboard-write"
      ></iframe>
    </div>

    <PinedProjects />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
</style>