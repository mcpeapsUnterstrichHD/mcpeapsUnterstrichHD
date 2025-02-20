<template>
  <div class="gap-2 p-2">
    <h1 className="gap-8 p-8 text-center text-6xl">Projekte</h1>

    <h2 className="gap-8 p-8 text-center text-5xl">Gepinte Projekte</h2>

    <div className="my-Project-grid-3">
      <ProjectCard
        projectImage="/pictures/my_Portfolio.jpeg"
        projectImageAlt="Portfolio Bild"
        projectImageBgColor=""
        projectTitle="Portfolio"
        :projectBadges="['FOSS', 'WEB', 'NEW']"
        projectLink="https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD"
      >
        Das project zu diesem Portfolio.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/OSZimt-Logo-l.png"
        projectImageAlt="Grosßes Logo vom OSZ IMT"
        projectImageBgColor="bg-white"
        projectTitle="Schul Repository"
        :projectBadges="['FOSS', 'SCHOOL']"
        projectLink="https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps"
      >
        Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/searxng.png"
        projectImageAlt="SearxNG Logo"
        projectImageBgColor=""
        projectTitle="Meine eigene Suchmaschine"
        :projectBadges="['FOSS', 'WEB', 'NEW', 'SEARCH ENGINE', 'DOCKER']"
        projectLink="https://github.com/mcpeapsUnterstrichHD/searxng"
      >
        Das project zu Meiner Suchmaschine basiernd auf SearxNG
      </ProjectCard>
    </div>

    <h2 className="gap-8 p-8 text-center text-4xl">Alle Projekte</h2>

    <div className="my-Project-grid-4">
      <ProjectCard
        projectImage="/pictures/my_Portfolio.jpeg"
        projectImageAlt="Portfolio Bild"
        projectImageBgColor=""
        projectTitle="Portfolio"
        :projectBadges="['FOSS', 'WEB', 'NEW']"
        projectLink="https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD"
      >
        Das project zu diesem Portfolio.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/OSZimt-Logo-l.png"
        projectImageAlt="Grosßes Logo vom OSZ IMT"
        projectImageBgColor="bg-white"
        projectTitle="Schul Repository"
        :projectBadges="['FOSS', 'SCHOOL']"
        projectLink="https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps"
      >
        Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/OSZimt-Logo-l.png"
        projectImageAlt="Grosßes Logo vom OSZ IMT"
        projectImageBgColor="bg-white"
        projectTitle="Klassen Website"
        :projectBadges="['FOSS', 'SCHOOL', 'WEB', 'MARKDOWN', 'WIKI']"
        projectLink="https://github.com/comboomPunkTsucht/OSZ_ITA12_Doc"
      >
        Das ist die Webseite der Klassen ITA 12 in der ich ich am OSZ IMT
        gewesen bin.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/Klassen_App_Icon_iOS_macOS_iPadOS.png"
        projectImageAlt="App Icon der Klassen App"
        projectImageBgColor=""
        projectTitle="Klassen App"
        :projectBadges="[
          'FOSS',
          'SCHOOL',
          'APP',
          'iOS',
          'SWIFT',
          'SWIFTUI',
          'HUB'
        ]"
        projectLink="https://github.com/comboomPunkTsucht/ITA-12_App"
      >
        Das ist die App der Klassen ITA 12 in der ich ich am OSZ IMT gewesen
        bin.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/ssqlr.png"
        projectImageAlt="Simple SQL Runner"
        projectImageBgColor="bg-black"
        projectTitle="Simple SQL Runner"
        :projectBadges="['FOSS', 'SCHOOL', 'JAVA', 'SQL']"
        projectLink="https://github.com/comboomPunkTsucht/Simple-SQL-Runner"
      >
        Das ist ein GUI-Programm zum ausführen und ausgeben von SQL
        Statements
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/searxng.png"
        projectImageBgColor=""
        projectImageAlt="SearxNG Logo"
        projectTitle="Meine eigene Suchmaschine"
        :projectBadges="['FOSS', 'WEB', 'NEW', 'SEARCH ENGINE', 'DOCKER']"
        projectLink="https://github.com/mcpeapsUnterstrichHD/searxng"
      >
        Das project zu Meiner Suchmaschine basiernd auf SearxNG
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/logo.png"
        projectImageAlt="mcpeaps_HD Logo"
        projectImageBgColor=""
        projectTitle="Meine eigenen Dotfiles"
        :projectBadges="['FOSS', 'WEB', 'NEW', 'Konfiguration', 'DOTFILES']"
        projectLink="https://github.com/mcpeapsUnterstrichHD/dotfiles"
      >
        Das Repository für meine Dotfiles.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/Logo-transparet.png"
        projectImageAlt="comboom.sucht Logo"
        projectImageBgColor="bg-black"
        projectTitle="comboom.sucht Website"
        :projectBadges="['FOSS', 'WEB', 'MARKDOWN', 'WIKI']"
        projectLink="https://github.com/comboomPunkTsucht/comboom.sucht-BLOG"
      >
        Das ist die Webseite meiner Freundes Gruppe.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/Logo-transparet.png"
        projectImageAlt="comboom.sucht Logo"
        projectImageBgColor="bg-black"
        projectTitle="comboom.sucht App"
        :projectBadges="['FOSS', 'APP', 'iOS', 'SWIFT', 'SWIFTUI', 'HUB']"
        projectLink="https://github.com/comboomPunkTsucht/comboomPunkTsucht-IOS-macOS-App"
      >
        Das ist die App meiner Freundes Gruppe.
      </ProjectCard>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>