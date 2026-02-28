<script lang="ts">
  /**
   * @module routes/[[locale=locale]]/cv/ats/+page
   * @description ATS (Applicant Tracking System) optimized version of the CV page.
   * Renders the curriculum vitae in a plain-text, machine-readable format designed
   * to maximize compatibility with automated resume parsing systems.
   *
   * Unlike the styled CV page (`/cv`), this version:
   * - Uses simple semantic HTML without complex layouts or images
   * - Avoids masonry grids, skill level bars, and timeline cards
   * - Formats dates as `MM/YYYY` via the `formatDate()` helper
   * - Lists skills inline as comma-separated text grouped by category
   * - Strips bullet point characters and normalizes whitespace in descriptions
   * - Uses scoped CSS with plain fonts, borders, and minimal styling
   *
   * The page is structured as:
   * 1. **Header** - Name, title, and contact info (email, phone, address, birthday)
   * 2. **Education** - Entries with title, date range, and description
   * 3. **Experience** - Entries with title, date range, and description
   * 4. **Skills** - Categories with inline comma-separated skill names and details
   *
   * Data sources are shared with the styled CV page via `$lib/cv-data` and `$lib/contact`.
   * Includes scoped CSS providing ATS-friendly typography and layout.
   *
   * @see {@link routes/[[locale=locale]]/cv/+page.svelte} for the visually styled CV
   * @see {@link routes/[[locale=locale]]/cv/+layout.svelte} for the shared CV layout
   * @see {@link $lib/cv-data} for CV data structures
   * @see {@link $lib/contact} for contact details
   */

  import { useIntlayer } from "svelte-intlayer";
  import { contactDetails } from "$lib/contact";
  import {
    educationItems,
    experienceItems,
    skillItems,
    skillCategories,
    sortByEndDate,
  } from "$lib/cv-data";
  import { t } from "$lib/i18n";
  import { cn } from "$lib/utils";



  const cv = useIntlayer("cv");
  const aboutme = useIntlayer("aboutme");
  const sites = useIntlayer("sites");
  const layout = useIntlayer("layout");

  /**
   * Converts a German-style date string (e.g. "06.2003" or "01.06.2003")
   * into an ATS-friendly `MM/YYYY` format.
   *
   * @param {string} d - Date string in dot-separated format (e.g. "06.2003" or "01.06.2003")
   * @returns {string} Reformatted date string (e.g. "06/2003" or "06/2003"), or original if unparseable
   *
   * @example
   * formatDate("06.2023")     // => "06/2023"
   * formatDate("01.06.2003")  // => "06/2003"
   */
  function formatDate(d: string): string {
    const parts = d.split(".");
    if (parts.length === 2) return `${parts[0]}/${parts[1]}`;
    if (parts.length === 3) return `${parts[1]}/${parts[2]}`;
    return d;
  }

  /** @constant {Array} sortedEducation - Education entries sorted by end date (most recent first) */
  const sortedEducation = sortByEndDate(educationItems);
  /** @constant {Array} sortedExperience - Experience entries sorted by end date (most recent first) */
  const sortedExperience = sortByEndDate(experienceItems);
</script>

<svelte:head>
  <title>{$sites.cv} | {$layout.title}</title>
</svelte:head>

<div class={cn("ats-cv")}>
  <!-- Header -->
  <h1>{$aboutme.name}</h1>
  <div class={cn("text-foreground subtitle")}>{$cv.about.title}</div>

  <!-- Contact Info -->
  <div class={cn("contact-info")}>
    <span>{contactDetails.email.display}</span>
    <span>|</span>
    <span>{contactDetails.telephone.display}</span>
    <span>|</span>
    <span
      >{contactDetails.address.street}, {contactDetails.address.zip}
      {t($cv, contactDetails.address.city)}, {t(
        $cv,
        contactDetails.address.country,
      )}</span
    >
    <span>|</span>
    <span>{$cv.about.birthday}: 06.06.2003</span>
  </div>

  <!-- Education -->
  <h2>{$cv.education.title}</h2>
  {#each sortedEducation as edu}
    {@const dateRange = `${formatDate(edu.startdate)} – ${formatDate(edu.enddate)}`}
    {@const description = t($cv, edu.descriptionKey).replace(/[•]/g, "-")}
    <div class={cn("entry")}>
      <div class={cn("entry-header")}>
        <span class={cn("entry-title")}>{t($cv, edu.nameKey)}</span>
        <span class={cn("entry-date")}>{dateRange}</span>
      </div>
      <p class={cn("entry-description")}>{description}</p>
    </div>
  {/each}

  <!-- Experience -->
  <h2>{$cv.experience.title}</h2>
  {#each sortedExperience as exp}
    {@const dateRange = `${formatDate(exp.startdate)} – ${formatDate(exp.enddate)}`}
    {@const description = t($cv, exp.descriptionKey)
      .replace(/[•]/g, "")
      .replace(/\\n/g, " ")
      .trim()}
    <div class={cn("entry")}>
      <div class={cn("entry-header")}>
        <span class={cn("entry-title")}>{t($cv, exp.nameKey)}</span>
        <span class={cn("entry-date")}>{dateRange}</span>
      </div>
      <p class={cn("entry-description")}>{description}</p>
    </div>
  {/each}

  <!-- Skills -->
  <h2>{$cv.skills.title}</h2>
  {#each skillCategories as cat}
    {@const catSkills = skillItems
      .filter((s) => s.category === cat.key)
      .map((s) => {
        const detailsParts: string[] = [];
        if (s.experience) {
          detailsParts.push(
            t($cv, `skills.badges.${s.experience.type}`, {
              count: s.experience.count,
            }),
          );
        }
        if (s.badgeKeys && s.badgeKeys.length > 0) {
          detailsParts.push(
            ...s.badgeKeys
              .filter((k) => k !== "Cv.skills.badges.language")
              .map((k) => t($cv, k)),
          );
        }
        if (s.staticBadges && s.staticBadges.length > 0) {
          detailsParts.push(...s.staticBadges);
        }
        const details =
          detailsParts.length > 0 ? ` (${detailsParts.join(", ")})` : "";
        return `${s.title}${details}`;
      })
      .join(", ")}
    {#if catSkills}
      <div class={cn("skills-category")}>
        <span class={cn("skills-title")}>{t($cv, cat.titleKey)}: </span>
        <span class={cn("skills-list")}>{catSkills}</span>
      </div>
    {/if}
  {/each}
</div>

<style>
  .ats-cv h1 {
    font-size: 18pt;
    margin: 0 0 4px 0;
    text-align: center;
  }
  .ats-cv .subtitle {
    font-size: 12pt;
    text-align: center;
    margin-bottom: 12px;
  }
  .ats-cv .contact-info {
    text-align: center;
    margin-bottom: 16px;
    font-size: 10pt;
  }
  .ats-cv .contact-info span {
    margin: 0 8px;
  }
  .ats-cv h2 {
    font-size: 12pt;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 4px;
    margin: 16px 0 8px 0;
    text-transform: uppercase;
  }
  .ats-cv .entry {
    margin-bottom: 12px;
  }
  .ats-cv .entry-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .ats-cv .entry-title {
    font-weight: bold;
  }
  .ats-cv .entry-date {
    font-weight: normal;
    white-space: nowrap;
  }
  .ats-cv .entry-description {
    margin: 0;
  }
  .ats-cv .skills-category {
    margin-bottom: 8px;
  }
  .ats-cv .skills-title {
    font-weight: bold;
    display: inline;
  }
  .ats-cv .skills-list {
    display: inline;
  }
</style>
