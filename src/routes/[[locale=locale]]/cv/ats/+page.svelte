<script lang="ts">
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

  const cv = useIntlayer("cv");
  const aboutme = useIntlayer("aboutme");
  const sites = useIntlayer("sites");

  function formatDate(d: string): string {
    const parts = d.split(".");
    if (parts.length === 2) return `${parts[0]}/${parts[1]}`;
    if (parts.length === 3) return `${parts[1]}/${parts[2]}`;
    return d;
  }

  const sortedEducation = sortByEndDate(educationItems);
  const sortedExperience = sortByEndDate(experienceItems);
</script>

<svelte:head>
  <title>{$sites.cv} ATS — {$aboutme.name}</title>
</svelte:head>

<div class="ats-cv">
  <!-- Header -->
  <h1>{$aboutme.name}</h1>
  <div class="text-foreground subtitle">{$cv.about.title}</div>

  <!-- Contact Info -->
  <div class="contact-info">
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
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">{t($cv, edu.nameKey)}</span>
        <span class="entry-date">{dateRange}</span>
      </div>
      <p class="entry-description">{description}</p>
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
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">{t($cv, exp.nameKey)}</span>
        <span class="entry-date">{dateRange}</span>
      </div>
      <p class="entry-description">{description}</p>
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
      <div class="skills-category">
        <span class="skills-title">{t($cv, cat.titleKey)}: </span>
        <span class="skills-list">{catSkills}</span>
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
