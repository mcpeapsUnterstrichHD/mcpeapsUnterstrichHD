<template>
  <h2 className="gap-8 p-8 text-center text-5xl">Gepinte Projekte</h2>

    <div className="my-Project-grid-3">
      <ProjectCard
        projectImage="/pictures/projects/my_Portfolio.jpeg"
        projectImageAlt="Portfolio Bild"
        projectImageBgColor=""
        projectTitle="Portfolio"
        :projectBadges="['FOSS', 'WEB', 'NEW']"
        projectLink="https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD"
      >
        Das project zu diesem Portfolio.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/projects/OSZimt-Logo-l.png"
        projectImageAlt="Grosßes Logo vom OSZ IMT"
        projectImageBgColor="bg-white"
        projectTitle="Schul Repository"
        :projectBadges="['FOSS', 'SCHOOL']"
        projectLink="https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps"
      >
        Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.
      </ProjectCard>
      <ProjectCard
        projectImage="/pictures/projects/searxng.png"
        projectImageAlt="SearxNG Logo"
        projectImageBgColor=""
        projectTitle="Meine eigene Localen Services"
        :projectBadges="['FOSS', 'WEB', 'NEW', 'SEARCH ENGINE', 'DOCKER']"
        projectLink="https://github.com/mcpeapsUnterstrichHD/local-services"
      >
        Hier ist eine ansamlung an self hosted Services, wie meine Suchmaschine, die ich nutze.
      </ProjectCard>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>