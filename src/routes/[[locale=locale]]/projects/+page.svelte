<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import AuroraText from "$lib/components/AuroraText.svelte";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import MasonryGrid from "$lib/components/MasonryGrid.svelte";
  import * as ProjectCard from "$lib/components/project-card";
  import PinnedProjects from "$lib/components/PinnedProjects.svelte";
  import { FolderOpen, Grid3X3 } from "@lucide/svelte";
  import { getAllProjectsData } from "$lib/project-data";
  import { t } from "$lib/i18n";

  const projects = useIntlayer("projects");
  const aboutme = useIntlayer("aboutme");
  const layout = useIntlayer("layout");

  let completedProjects = $derived(
    getAllProjectsData().sort((a, b) =>
      String(t($projects, `items.${a.id}.title`)).localeCompare(
        String(t($projects, `items.${b.id}.title`)),
      ),
    ),
  );
</script>

<svelte:head>
  <title>{t($projects, "title")} | {$layout.title}</title>
</svelte:head>

<div class="flex flex-col gap-8 px-4 py-6 mx-auto">
  <!-- Hero Section -->
  <section class="text-center space-y-2">
    <AuroraText
      class="text-4xl md:text-5xl lg:text-6xl font-bold"
      colors={["#C16069", "#A2BF8A", "#C16069", "#A2BF8A"]}
      speed={3}
    >
      <TypingAnimation
        text={t($projects, "title")}
        typeSpeed={145}
        pauseDelay={1450}
        deleteSpeed={75}
        showCursor
        blinkCursor
        loop
        startOnView
        cursorStyle="underscore"
      />
    </AuroraText>
    <p class="text-muted-foreground flex items-center justify-center gap-2">
      <FolderOpen class="w-5 h-5" />
      {t($projects, "projectCount").replace(
        "{count}",
        completedProjects.length.toString(),
      )}
    </p>
  </section>

  <!-- Pinned Projects -->
  <section>
    <PinnedProjects />
  </section>

  <!-- All Projects -->
  <section class="space-y-4">
    <h2
      class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2"
    >
      <Grid3X3 class="w-6 h-6 text-primary" />
      <TypingAnimation
        text="{t($projects, 'all')}:"
        typeSpeed={145}
        pauseDelay={1450}
        deleteSpeed={75}
        showCursor
        blinkCursor
        loop
        startOnView
        cursorStyle="underscore"
      />
    </h2>
    <MasonryGrid variant="projects">
      {#each completedProjects as project}
        <ProjectCard.Root
          projektImage={project.image}
          projektImageAlt={t($projects, `items.${project.id}.imgAlt`)}
          projektImageBgColor={project.bgColor}
          projektTitle={t($projects, `items.${project.id}.title`)}
          projektBadges={project.badges}
          projektLink={project.link}
        >
          {#snippet children()}
            {t($projects, `items.${project.id}.description`)}
          {/snippet}
        </ProjectCard.Root>
      {/each}
    </MasonryGrid>
  </section>
</div>
