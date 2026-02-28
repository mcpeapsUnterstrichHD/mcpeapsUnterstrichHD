<script lang="ts">
  /**
   * @component PinnedProjects
   *
   * Displays the portfolio's pinned (featured) projects in a responsive masonry
   * grid. The section heading uses a {@link TypingAnimation} with the localized
   * "pinned" label and a Lucide pin icon.
   *
   * Project data is sourced from `getPinnedProjectsData()` and rendered as
   * {@link ProjectCard.Root} components with i18n-resolved titles, descriptions,
   * image alt texts, and badge arrays. The masonry layout is handled by
   * {@link MasonryGrid} in its "pinned_projects" variant.
   *
   * This component has no external props -- it is a self-contained section widget
   * meant to be placed directly in a page layout.
   *
   * @see {@link TypingAnimation} for the animated heading
   * @see {@link MasonryGrid} for the responsive column layout
   * @see {@link project-card/project-card.svelte} for individual project cards
   */
  import { useIntlayer } from "svelte-intlayer";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import MasonryGrid from "$lib/components/MasonryGrid.svelte";
  import * as ProjectCard from "$lib/components/project-card";
  import { Pin } from "@lucide/svelte";
  import { t } from "$lib/i18n";
  import { getPinnedProjectsData } from "$lib/project-data";
  import { cn } from "$lib/utils";


  /** Intlayer dictionary for the "projects" content key, providing localized strings. */
  const projectsInt = useIntlayer("projects");

  /** Derived array of pinned project data objects, re-evaluated when locale changes. */
  let pinnedProjects = $derived(getPinnedProjectsData());
</script>

<div class={cn("w-full px-4")}>
  <h2
    class={cn("text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2")}
  >
    <Pin class={cn("w-6 h-6 text-primary")} />
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
