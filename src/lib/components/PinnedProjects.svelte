<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import MasonryGrid from "$lib/components/MasonryGrid.svelte";
  import * as ProjectCard from "$lib/components/project-card";
  import { Pin } from "@lucide/svelte";
  import { t } from "$lib/i18n";
  import { getPinnedProjectsData } from "$lib/project-data";

  const projectsInt = useIntlayer("projects");

  let pinnedProjects = $derived(getPinnedProjectsData());
</script>

<div class="w-full px-4">
  <h2
    class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2"
  >
    <Pin class="w-6 h-6 text-primary" />
    <TypingAnimation
      text={`${t($projectsInt, "pinned")}:`}
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
  <MasonryGrid variant="pinned_projects">
    {#each pinnedProjects as project}
      <ProjectCard.Root
        projektImage={project.image}
        projektImageAlt={t($projectsInt, `items.${project.id}.imgAlt`)}
        projektImageBgColor={project.bgColor}
        projektTitle={t($projectsInt, `items.${project.id}.title`)}
        projektBadges={project.badges}
        projektLink={project.link}
      >
        {#snippet children()}{t(
            $projectsInt,
            `items.${project.id}.description`,
          )}{/snippet}
      </ProjectCard.Root>
    {/each}
  </MasonryGrid>
</div>
