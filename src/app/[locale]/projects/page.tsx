"use client";
import PinedProjects, { getPinnedProjects } from "@/components/pinedProjects";
import ProjectCard, { type ProjectCardProps } from "@/components/projekt-card";
import MasonryGrid, { Variants } from "@/components/MasonryGrid";
import { useTranslations } from "next-intl";
import { FolderOpen, Grid3X3 } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function ProjectsPage() {
  const t = useTranslations();

  const allProjects: ProjectCardProps[] = [
    {
      projektImage: "/pictures/projects/OSZimt-Logo-l.png",
      projektImageAlt: t("Projects.items.schulRepo.imgAlt"),
      projektImageBgColor: "bg-white",
      projektTitle: t("Projects.items.schulRepo.title"),
      projektBadges: ["FOSS", "SCHOOL"],
      projektLink: "https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps",
      children: t("Projects.items.schulRepo.description"),
    },
    {
      projektImage: "/pictures/projects/OSZimt-Logo-l.png",
      projektImageAlt: t("Projects.items.klassenWebsite.imgAlt"),
      projektImageBgColor: "bg-white",
      projektTitle: t("Projects.items.klassenWebsite.title"),
      projektBadges: ["FOSS", "SCHOOL", "WEB", "MARKDOWN", "WIKI"],
      projektLink: "https://github.com/comboomPunkTsucht/OSZ_ITA12_Doc",
      children: t("Projects.items.klassenWebsite.description"),
    },
    {
      projektImage: "/pictures/projects/Klassen_App_Icon_iOS_macOS_iPadOS.png",
      projektImageAlt: t("Projects.items.klassenApp.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.klassenApp.title"),
      projektBadges: ["FOSS", "SCHOOL", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"],
      projektLink: "https://github.com/comboomPunkTsucht/ITA-12_App",
      children: t("Projects.items.klassenApp.description"),
    },
    {
      projektImage: "/pictures/projects/ssqlr.png",
      projektImageAlt: t("Projects.items.simpleSqlRunner.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.simpleSqlRunner.title"),
      projektBadges: ["FOSS", "SCHOOL", "JAVA", "SQL"],
      projektLink: "https://github.com/comboomPunkTsucht/Simple-SQL-Runner",
      children: t("Projects.items.simpleSqlRunner.description"),
    },
    {
      projektImage: "/pictures/logo.png",
      projektImageAlt: t("Projects.items.dotfilesMacos.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.dotfilesMacos.title"),
      projektBadges: ["FOSS", "WEB", "NEW", "Configuration", "DOTFILES", "MACOS"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/dotfiles-macos",
      children: t("Projects.items.dotfilesMacos.description"),
    },
    {
      projektImage: "/pictures/logo.png",
      projektImageAlt: t("Projects.items.nixConfig.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.nixConfig.title"),
      projektBadges: ["FOSS", "WEB", "NEW", "Configuration", "DOTFILES", "Linux", "NIXOS"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/nix-config",
      children: t("Projects.items.nixConfig.description"),
    },
    {
      projektImage: "/pictures/logo.png",
      projektImageAlt: t("Projects.items.dotfilesLinux.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.dotfilesLinux.title"),
      projektBadges: ["FOSS", "WEB", "NEW", "Configuration", "DOTFILES", "Linux"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/dotfiles-linux",
      children: t("Projects.items.dotfilesLinux.description"),
    },
    {
      projektImage: "/pictures/cbps_logo.png",
      projektImageAlt: t("Projects.items.cbpsWebsite.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.cbpsWebsite.title"),
      projektBadges: ["FOSS", "WEB", "MARKDOWN", "WIKI"],
      projektLink: "https://github.com/comboomPunkTsucht/comboom.sucht-BLOG",
      children: t("Projects.items.cbpsWebsite.description"),
    },
    {
      projektImage: "/pictures/cbps_logo.png",
      projektImageAlt: t("Projects.items.cbpsApp.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.cbpsApp.title"),
      projektBadges: ["FOSS", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"],
      projektLink: "https://github.com/comboomPunkTsucht/comboomPunkTsucht-IOS-macOS-App",
      children: t("Projects.items.cbpsApp.description"),
    },
    {
      projektImage: "/pictures/projects/LogoDerTUBerlin2020.svg",
      projektImageAlt: t("Projects.items.uniRepo.imgAlt"),
      projektImageBgColor: "bg-white",
      projektTitle: t("Projects.items.uniRepo.title"),
      projektBadges: ["FOSS", "UNIVERSITY"],
      projektLink: "https://github.com/comboomPunkTsucht/TU-Berlin-repo-aps",
      children: t("Projects.items.uniRepo.description"),
    },
    {
      projektImage: "/pictures/projects/live-wallpaper.png",
      projektImageAlt: t("Projects.items.liveWallpaper.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.liveWallpaper.title"),
      projektBadges: ["NATIVE", "WASM", "C++", "RAYLIB"],
      projektLink: "https://github.com/comboomPunkTsucht/comboom_punkt_sucht_native_wallpaper",
      children: t("Projects.items.liveWallpaper.description"),
    },
  ];

  // Get pinned projects from shared function and combine with all projects
  const pinnedProjects = getPinnedProjects(t);
  const completedProjects = pinnedProjects.concat(allProjects).sort(
    (projectA: ProjectCardProps, projectB: ProjectCardProps) =>
      projectA.projektTitle.localeCompare(projectB.projektTitle)
  );

  const totalProjectCount = completedProjects.length;

  return (
    <div className="flex flex-col gap-8 px-4 py-6 max-w-9xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-2">
        <AuroraText
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          colors={["#C16069", "#A2BF8A", "#C16069", "#A2BF8A"]}
          speed={3}
        >
          <TypingAnimation
            typeSpeed={145}
            pauseDelay={1450}
            deleteSpeed={75}
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
          >{t("Projects.title")}</TypingAnimation>
        </AuroraText>
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <FolderOpen className="w-5 h-5" />
          {t("Projects.projectCount", { count: totalProjectCount })}
        </p>
      </section>

      {/* Pinned Projects */}
      <section>
        <PinedProjects />
      </section>

      {/* All Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Grid3X3 className="w-6 h-6 text-primary" />
          <TypingAnimation
            typeSpeed={145}
            pauseDelay={1450}
            deleteSpeed={75}
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
          >{`${t("Projects.all")}:`}</TypingAnimation>
        </h2>
        <MasonryGrid variant={Variants.projects}>
          {completedProjects.map((project: ProjectCardProps) => (
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
      </section>
    </div>
  );
}
