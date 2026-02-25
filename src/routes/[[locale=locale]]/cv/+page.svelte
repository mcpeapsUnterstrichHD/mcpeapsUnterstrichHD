<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import * as Card from "$lib/components/ui/card";
  import AuroraText from "$lib/components/AuroraText.svelte";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import MasonryGrid from "$lib/components/MasonryGrid.svelte";
  import * as TimelineCard from "$lib/components/timeline-card";
  import * as SkillCard from "$lib/components/skill-card";
  import { contactDetails } from "$lib/contact";
  import {
    educationItems,
    experienceItems,
    skillItems,
    skillCategories,
    sortByEndDate,
    type SkillItem,
  } from "$lib/cv-data";
  import {
    GraduationCap,
    Briefcase,
    Wrench,
    Mail,
    Phone,
    MapPin,
    User,
    Calendar,
  } from "@lucide/svelte";
  import { Badge } from "$lib/components/ui/badge";
  import { t, tArr } from "$lib/i18n";

  const cv = useIntlayer("cv");
  const aboutme = useIntlayer("aboutme");
  const sites = useIntlayer("sites");

  const sortedEducation = sortByEndDate(educationItems);
  const sortedExperience = sortByEndDate(experienceItems);

  // Group skills by category
  function getSkillsByCategory(cat: string): SkillItem[] {
    return skillItems
      .filter((s) => s.category === cat)
      .sort((a, b) => b.level - a.level);
  }
  function getExperienceLabel(skill: SkillItem): string {
    if (!skill.experience) return "";
    const { type, count } = skill.experience;
    const key = `skills.badges.${type}`;
    const result = t($cv, key, { count });
    return result !== key ? result : `${count} ${type}`;
  }

  // Calculate age
  const today = new Date();
  const birthday = new Date("2003-06-06");
  let age = today.getFullYear() - birthday.getFullYear();
  const mo = today.getMonth() - birthday.getMonth();
  if (mo < 0 || (mo === 0 && today.getDate() < birthday.getDate())) age--;
</script>

<svelte:head>
  <title>{$sites.cv} — {$aboutme.name}</title>
</svelte:head>

<div class="flex flex-col gap-8 px-4 py-6 mx-auto">
  <!-- Personal Info Card -->
  <Card.Root class="my-glass print:bg-white print:shadow-none">
    <Card.Header class="text-center pb-2">
      <h1 class="text-3xl md:text-4xl font-bold">{$aboutme.name}</h1>
      <p class="text-lg text-muted-foreground">{$cv.about.title}</p>
    </Card.Header>
    <Card.Content>
      <div
        class="grid grid-cols-1 md:grid-cols-2 print:grid-cols-1 gap-4 text-sm"
      >
        <!-- Contact Info -->
        <div class="flex flex-col gap-2">
          <a
            href={contactDetails.email.link}
            class="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail class="w-4 h-4" />
            {contactDetails.email.display}
          </a>
          <a
            href={contactDetails.telephone.link}
            class="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone class="w-4 h-4" />
            {contactDetails.telephone.display}
          </a>
          <div class="flex items-center gap-2 text-muted-foreground">
            <Calendar class="w-4 h-4" />
            {$cv.about.birthday}: 06.06.2003
          </div>
        </div>
        <!-- Address -->
        <div class="flex flex-col gap-2">
          <a
            href={contactDetails.address.link}
            target="_blank"
            rel="noreferrer"
            class="flex items-start gap-2 hover:text-primary transition-colors"
          >
            <MapPin class="w-4 h-4 mt-0.5 shrink-0" />
            <div>
              {contactDetails.address.street}<br />
              {contactDetails.address.zip}
              {$cv.about.address.berlin}, {$cv.about.address.germany}
            </div>
          </a>
        </div>
      </div>
    </Card.Content>
  </Card.Root>

  <!-- Education Section -->
  <section class="space-y-4">
    <h2
      class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4"
    >
      <GraduationCap class="w-6 h-6 text-primary print:text-black" />
      {$cv.education.title}
    </h2>

    <!-- Large Timeline (Hidden on small screens) -->
    <div class="hidden sm:flex flex-col w-full mx-auto">
      {#each sortedEducation as item, i}
        <div class="flex flex-row w-full min-h-[100px]">
          <!-- Opposite content (Dates) -->
          <div class="w-[150px] shrink-0 text-right pr-4 pt-[18px]">
            <Badge
              variant="default"
              class="text-[10px] whitespace-nowrap opacity-80 font-normal tracking-wide"
            >
              {item.startdate} - {item.enddate}
            </Badge>
          </div>
          <!-- Separator (Line + Dot) -->
          <div
            class="flex flex-col items-center flex-none relative w-[11px] mx-6"
          >
            <!-- Continuous line -->
            <div
              class="absolute w-[2px] bg-border/50 min-h-[50px] {i === 0
                ? 'top-[24px]'
                : 'top-0'} {i === sortedEducation.length - 1
                ? 'bottom-[calc(100%-30px)]'
                : 'bottom-0'}"
            ></div>
            <div
              class="w-[11px] h-[11px] rounded-full bg-background border-2 border-muted-foreground mt-5 z-10 shadow-sm relative"
            ></div>
          </div>
          <!-- Content (Card) -->
          <div class="flex-1 pl-4 pb-8">
            <TimelineCard.Root
              image={item.image || ""}
              imageAlt={String(t($cv, item.imgAltKey))}
              imageFallback={item.imageFallback}
              title={String(t($cv, item.nameKey))}
              badges={item.badgeKeys.map((k) => {
                if (k.includes("semester"))
                  return String(t($cv, k, { semester: 6 }));
                if (k.includes("years")) return String(t($cv, k, { years: 3 }));
                return String(t($cv, k));
              })}
            >
              <p class="text-sm text-muted-foreground">
                {String(t($cv, item.descriptionKey))}
              </p>
            </TimelineCard.Root>
          </div>
        </div>
      {/each}
    </div>

    <!-- Small Timeline (Visible on small screens) -->
    <div
      class="block sm:hidden relative ml-3 border-l-[2px] border-border/50 pl-6 space-y-8 pb-4"
    >
      {#each sortedEducation as item}
        <div class="relative">
          <div
            class="absolute -left-[calc(1.5rem+6px)] top-5 w-[11px] h-[11px] rounded-full bg-transparent border-2 border-muted-foreground z-10 shadow-sm bg-background"
          ></div>
          <TimelineCard.Root
            image={item.image || ""}
            imageAlt={String(t($cv, item.imgAltKey))}
            imageFallback={item.imageFallback}
            title={String(t($cv, item.nameKey))}
            badges={[
              `${item.startdate} - ${item.enddate}`,
              ...item.badgeKeys.map((k) => {
                if (k.includes("semester"))
                  return String(t($cv, k, { semester: 6 }));
                if (k.includes("years")) return String(t($cv, k, { years: 3 }));
                return String(t($cv, k));
              }),
            ]}
          >
            <p class="text-sm text-muted-foreground">
              {String(t($cv, item.descriptionKey))}
            </p>
          </TimelineCard.Root>
        </div>
      {/each}
    </div>
  </section>

  <!-- Experience Section -->
  <section class="space-y-4">
    <h2
      class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4"
    >
      <Briefcase class="w-6 h-6 text-primary print:text-black" />
      {$cv.experience.title}
    </h2>

    <!-- Large Timeline (Hidden on small screens) -->
    <div class="hidden sm:flex flex-col w-full mx-auto">
      {#each sortedExperience as item, i}
        <div class="flex flex-row w-full min-h-[100px]">
          <!-- Opposite content (Dates) -->
          <div class="w-[150px] shrink-0 text-right pr-4 pt-[18px]">
            <Badge
              variant="default"
              class="text-[10px] whitespace-nowrap opacity-80 font-normal tracking-wide"
            >
              {item.startdate} - {item.enddate}
            </Badge>
          </div>
          <!-- Separator (Line + Dot) -->
          <div
            class="flex flex-col items-center flex-none relative w-[11px] mx-6"
          >
            <!-- Continuous line -->
            <div
              class="absolute w-[2px] bg-border/50 min-h-[50px] {i === 0
                ? 'top-[24px]'
                : 'top-0'} {i === sortedExperience.length - 1
                ? 'bottom-[calc(100%-30px)]'
                : 'bottom-0'}"
            ></div>
            <div
              class="w-[11px] h-[11px] rounded-full bg-background border-2 border-muted-foreground mt-5 z-10 shadow-sm relative"
            ></div>
          </div>
          <!-- Content (Card) -->
          <div class="flex-1 pl-4 pb-8">
            <TimelineCard.Root
              image={item.image || ""}
              imageAlt={String(t($cv, item.imgAltKey))}
              imageFallback={item.imageFallback}
              title={String(t($cv, item.nameKey))}
              badges={String(t($cv, item.badgesKey) ?? "")
                .split(",")
                .map((b) => b.trim())
                .filter(Boolean)}
            >
              <p class="text-sm text-muted-foreground whitespace-pre-line">
                {String(t($cv, item.descriptionKey))}
              </p>
            </TimelineCard.Root>
          </div>
        </div>
      {/each}
    </div>

    <!-- Small Timeline (Visible on small screens) -->
    <div
      class="block sm:hidden relative ml-3 border-l-[2px] border-border/50 pl-6 space-y-8 pb-4"
    >
      {#each sortedExperience as item}
        <div class="relative">
          <div
            class="absolute -left-[calc(1.5rem+6px)] top-5 w-[11px] h-[11px] rounded-full bg-transparent border-2 border-muted-foreground z-10 shadow-sm bg-background"
          ></div>
          <TimelineCard.Root
            image={item.image || ""}
            imageAlt={String(t($cv, item.imgAltKey))}
            imageFallback={item.imageFallback}
            title={String(t($cv, item.nameKey))}
            badges={[
              `${item.startdate} - ${item.enddate}`,
              ...String(t($cv, item.badgesKey) ?? "")
                .split(",")
                .map((b) => b.trim())
                .filter(Boolean),
            ]}
          >
            <p class="text-sm text-muted-foreground whitespace-pre-line">
              {String(t($cv, item.descriptionKey))}
            </p>
          </TimelineCard.Root>
        </div>
      {/each}
    </div>
  </section>

  <!-- Skills Section -->
  <section class="space-y-4">
    <h2
      class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4"
    >
      <Wrench class="w-6 h-6 text-primary print:text-black" />
      {$cv.skills.title}
    </h2>

    <div class="flex flex-col gap-8">
      {#each skillCategories as category}
        {@const skills = getSkillsByCategory(category.key)}
        {#if skills.length > 0}
          <div class="break-inside-avoid">
            <h3 class="text-xl font-semibold mb-4 ml-1 opacity-80">
              {String(t($cv, category.titleKey))}
            </h3>
            <MasonryGrid variant="skills">
              {#each skills as skill}
                <SkillCard.Root
                  image={skill.darkImage || skill.image || ""}
                  imagePrint={skill.darkImage ? skill.image : undefined}
                  imageAlt={String(t($cv, skill.imageAlt))}
                  imageFallback={skill.imageFallback}
                  title={skill.title}
                  level={skill.level}
                  badges={[
                    ...skill.badgeKeys.map((k) => String(t($cv, k))),
                    ...(skill.experience ? [getExperienceLabel(skill)] : []),
                    ...(skill.staticBadges || []),
                  ]}
                  category={skill.category}
                />
              {/each}
            </MasonryGrid>
          </div>
        {/if}
      {/each}
    </div>
  </section>
</div>
