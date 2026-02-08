"use client";
import ProjectCard, {type ProjectCardProps} from "@/components/projekt-card";
import MasonryGrid, {Variants} from "@/components/MasonryGrid";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";
import { TypingAnimation } from "./ui/typing-animation";
import { Pin } from "lucide-react";
import type React from "react";

// Export function to get pinned projects - can be used in other components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPinnedProjects(t: ReturnType<typeof useTranslations>): ProjectCardProps[] {
  return [
    {
      projektImage: "/pictures/projects/my_Portfolio.png",
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
      projektImageBgColor: "",
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

/**
 * Skeleton for PinedProjects - mirrors exact layout
 * Usage: <PinedProjects.Skeleton />
 */
const PinedProjectsSkeleton: React.FC = () => {
  return (
    <div className="w-full px-4 animate-in fade-in duration-500">
      <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
        <Pin className="w-6 h-6 text-primary" />
        <Skeleton className="h-8 w-48" />
      </h2>
      <MasonryGrid variant={Variants.pinned_projects}>
        {Array.from({ length: 3 }).map((_, i) => (
          <ProjectCard.Skeleton key={i} />
        ))}
      </MasonryGrid>
    </div>
  );
};

const PinedProjects: React.FC & { Skeleton: typeof PinedProjectsSkeleton } = () => {
  const t = useTranslations();
  const pinnedProjects = getPinnedProjects(t);

  return (
    <div className="w-full px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
        <Pin className="w-6 h-6 text-primary" />
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
      </h2>
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
};

// Attach Skeleton as sub-component
PinedProjects.Skeleton = PinedProjectsSkeleton;

export { PinedProjectsSkeleton };
export default PinedProjects;
