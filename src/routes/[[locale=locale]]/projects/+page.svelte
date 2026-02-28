<script lang="ts">
  /**
   * @module routes/[[locale=locale]]/projects/+page
   * @description Projects showcase page displaying all portfolio projects in a masonry grid
   * layout. The page is divided into three sections:
   *
   * 1. **Hero section** - Animated title with aurora gradient text and a project count summary
   * 2. **Pinned Projects** - Featured/highlighted projects pulled from GitHub pins
   * 3. **All Projects** - Complete alphabetically-sorted list of projects rendered
   *    as `ProjectCard` components inside a `MasonryGrid`
   *
   * Projects data is loaded from `$lib/project-data` and sorted alphabetically by their
   * localized title. Each project card displays an image, title, description, technology
   * badges, and an external link when available.
   *
   * All text content is internationalized via the Intlayer `projects` and `layout`
   * dictionaries. The project count is displayed using a `{count}` placeholder replacement.
   *
   * @reactive {Array} completedProjects - Derived list of all projects sorted alphabetically
   *   by their localized title using `String.localeCompare()`
   *
   * Projects gallery using platform-adaptive masonry columns -- 1 (iPhone),
   * 2 (iPad portrait), 3 (iPad landscape), 4 (Mac) -- following iPadOS
   * UICollectionView flow layout.
   *
   * @see {@link $lib/project-data} for the project data source and `getAllProjectsData()`
   * @see {@link $lib/components/PinnedProjects.svelte} for featured projects section
   * @see {@link $lib/components/project-card} for individual project card component
   * @see {@link $lib/components/MasonryGrid.svelte} for the masonry layout grid
   */

  import { useIntlayer } from "svelte-intlayer";
  import AuroraText from "$lib/components/AuroraText.svelte";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import MasonryGrid from "$lib/components/MasonryGrid.svelte";
  import * as ProjectCard from "$lib/components/project-card";
  import PinnedProjects from "$lib/components/PinnedProjects.svelte";
  import { FolderOpen, Grid3x3Icon as Grid3X3 } from "@lucide/svelte";
  import { getAllProjectsData } from "$lib/project-data";
  import { t } from "$lib/i18n";
  import { cn } from "$lib/utils";


  const projects = useIntlayer("projects");
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

<div class={cn("flex flex-col gap-12 px-6 py-10 lg:px-8 mx-auto")}>
  <!-- Hero Section -->
  <section class={cn("text-center space-y-4")}>
    <AuroraText
      class={cn("text-4xl md:text-5xl lg:text-6xl font-bold")}
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
    <p class={cn("text-muted-foreground text-lg flex items-center justify-center gap-2")}>
      <FolderOpen class={cn("w-6 h-6")} />
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
  <section class={cn("space-y-6")}>
    <h2
      class={cn("text-3xl md:text-4xl font-bold text-center flex items-center justify-center gap-3")}
    >
      <Grid3X3 class={cn("w-7 h-7 text-primary")} />
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
