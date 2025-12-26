"use client";
import ProjectCard, {type ProjectCardProps} from "@/components/projekt-card";
import MasonryGrid, {Variants} from "@/components/MasonryGrid";
import { useTranslations } from "next-intl";
import { TypingAnimation } from "./ui/typing-animation";

// Export function to get pinned projects - can be used in other components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPinnedProjects(t: ReturnType<typeof useTranslations>): ProjectCardProps[] {
  return [
    {
      projektImage: "/pictures/projects/my_Portfolio.jpeg",
      projektImageAlt: t("Projects.items.portfolio.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.portfolio.title"),
      projektBadges: ["FOSS", "WEB", "NEW"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD",
      children: t("Projects.items.portfolio.description"),
    },
    {
      projektImage: "/pictures/projects/ssqlr.png",
      projektImageAlt: t("Projects.items.simplesql.imgAlt"),
      projektImageBgColor: "bg-black",
      projektTitle: t("Projects.items.simplesql.title"),
      projektBadges: ["FOSS", "RUST", "SQL"],
      projektLink: "https://github.com/comboomPunkTsucht/simplesql",
      children: t("Projects.items.simplesql.description"),
    },
    {
      projektImage: "/pictures/projects/searxng.png",
      projektImageAlt: t("Projects.items.localServices.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.localServices.title"),
      projektBadges: ["FOSS", "WEB", "NEW", "SEARCH ENGINE", "DOCKER"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/local-services",
      children: t("Projects.items.localServices.description"),
    },
  ].sort((projectA: ProjectCardProps, projectB: ProjectCardProps) =>
    projectA.projektTitle.localeCompare(projectB.projektTitle)
  );
}

export default function PinedProjects() {
  const t = useTranslations();
  const pinnedProjects = getPinnedProjects(t);

  return (
    <div className="w-full px-4">
      <TypingAnimation
        typeSpeed={145}
        pauseDelay={1450}
        deleteSpeed={75}
        showCursor
        blinkCursor
        loop
        startOnView
        cursorStyle="underscore"
      >{`${t('Projects.pinned')}:`}</TypingAnimation>
      <MasonryGrid variant={Variants.pinned_projects}>
        {pinnedProjects.map((project) => (
          <ProjectCard
            key={project.projektLink}
            projektImage={project.projektImage}
            projektImageAlt={project.projektImageAlt}
            projektImageBgColor={project.projektImageBgColor}
            projektTitle={project.projektTitle}
            projektBadges={project.projektBadges}
            projektLink={project.projektLink}
          >
            {project.children}
          </ProjectCard>
        ))}
      </MasonryGrid>
    </div>
  );
}
