import PinedProjects, { PINNED_PROJECTS} from "@/components/pinedProjects";
import ProjectCard, { type ProjectCardProps} from "@/components/projekt-card";
import MasonryGrid, {Variants} from "@/components/MasonryGrid";
import { useTranslations } from "next-intl";

const ALL_PROJECTS: ProjectCardProps[] = [
  {
    projektImage: "/pictures/projects/OSZimt-Logo-l.png",
    projektImageAlt: "Grosßes Logo vom OSZ IMT",
    projektImageBgColor: "bg-white",
    projektTitle: "Schul Repository",
    projektBadges: ["FOSS", "SCHOOL"],
    projektLink: "https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps",
    children: "Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.",
  },
  {
    projektImage: "/pictures/projects/OSZimt-Logo-l.png",
    projektImageAlt: "Grosßes Logo vom OSZ IMT",
    projektImageBgColor: "bg-white",
    projektTitle: "Klassen Website",
    projektBadges: ["FOSS", "SCHOOL", "WEB", "MARKDOWN", "WIKI"],
    projektLink: "https://github.com/comboomPunkTsucht/OSZ_ITA12_Doc",
    children: "Das ist die Webseite der Klassen ITA 12 in der ich ich am OSZ IMT gewesen bin.",
  },
  {
    projektImage: "/pictures/projects/Klassen_App_Icon_iOS_macOS_iPadOS.png",
    projektImageAlt: "App Icon der Klassen App",
    projektImageBgColor: "",
    projektTitle: "Klassen App",
    projektBadges: ["FOSS", "SCHOOL", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"],
    projektLink: "https://github.com/comboomPunkTsucht/ITA-12_App",
    children: "Das ist die App der Klassen ITA 12 in der ich ich am OSZ IMT gewesen bin.",
  },
  {
    projektImage: "/pictures/projects/ssqlr.png",
    projektImageAlt: "Simple SQL Runner",
    projektImageBgColor: "bg-black",
    projektTitle: "Simple SQL Runner",
    projektBadges: ["FOSS", "SCHOOL", "JAVA", "SQL"],
    projektLink: "https://github.com/comboomPunkTsucht/Simple-SQL-Runner",
    children: "Das ist ein GUI-Programm zum ausführen und ausgeben von SQL Statements",
  },
  {
    projektImage: "/pictures/logo.png",
    projektImageAlt: "mcpeaps_HD Logo",
    projektImageBgColor: "",
    projektTitle: "Meine eigenen Dotfiles für macOS",
    projektBadges: ["FOSS", "WEB", "NEW", "Konfiguration", "DOTFILES", "MACOS"],
    projektLink: "https://github.com/mcpeapsUnterstrichHD/dotfiles-macos",
    children: "Das Repository für meine Dotfiles für macOS.",
  },
  {
    projektImage: "/pictures/logo.png",
    projektImageAlt: "mcpeaps_HD Logo",
    projektImageBgColor: "",
    projektTitle: "Meine eigenen NixOS Konfiguration",
    projektBadges: ["FOSS", "WEB", "NEW", "Konfiguration", "DOTFILES", "Linux", "NIXOS"],
    projektLink: "https://github.com/mcpeapsUnterstrichHD/nix-config",
    children: "Das Repository für meine Konfiguration von NixOS.",
  },
  {
    projektImage: "/pictures/logo.png",
    projektImageAlt: "mcpeaps_HD Logo",
    projektImageBgColor: "",
    projektTitle: "Meine eigenen Dotfiles für Linux",
    projektBadges: ["FOSS", "WEB", "NEW", "Konfiguration", "DOTFILES", "Linux"],
    projektLink: "https://github.com/mcpeapsUnterstrichHD/dotfiles-linux",
    children: "Das Repository für meine Dotfiles für macOS.",
  },
  {
    projektImage: "/pictures/cbps_logo.png",
    projektImageAlt: "comboom.sucht Logo",
    projektImageBgColor: "",
    projektTitle: "comboom.sucht Website",
    projektBadges: ["FOSS", "WEB", "MARKDOWN", "WIKI"],
    projektLink: "https://github.com/comboomPunkTsucht/comboom.sucht-BLOG",
    children: "Das ist die Webseite meiner Freundes Gruppe.",
  },
  {
    projektImage: "/pictures/cbps_logo.png",
    projektImageAlt: "comboom.sucht Logo",
    projektImageBgColor: "",
    projektTitle: "comboom.sucht App",
    projektBadges: ["FOSS", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"],
    projektLink: "https://github.com/comboomPunkTsucht/comboomPunkTsucht-IOS-macOS-App",
    children: "Das ist die App meiner Freundes Gruppe.",
  },
  {
    projektImage: "/pictures/projects/LogoDerTUBerlin2020.svg",
    projektImageAlt: "Langes Logo der Teschnischen Universität Berlin",
    projektImageBgColor: "bg-white",
    projektTitle: "Uni Repository",
    projektBadges: ["FOSS", "UNIVERSITY"],
    projektLink: "https://github.com/comboomPunkTsucht/TU-Berlin-repo-aps",
    children: "Das ist Das Repository zu meinen Studium an der TU Berlin.",
  },
  {
    projektImage: "/pictures/projects/live-wallpaper.png",
    projektImageAlt: "Standert Hintergrund",
    projektImageBgColor: "",
    projektTitle: "Native/Wasm Live Wallpaper",
    projektBadges: ["NATIVE", "WASM", "C++", "RAYLIB"],
    projektLink: "https://github.com/comboomPunkTsucht/comboom_punkt_sucht_native_wallpaper",
    children: "Ein plattformübergreifendes Live-Wallpaper mit interaktiven Partikeln im Nord-Design. Die native C++23-Implementierung bietet hohe Performance, Custom-Shader und läuft dank WebAssembly auch direkt im Browser.",
  },
].sort((projectA: ProjectCardProps, projectB: ProjectCardProps) =>
  projectA.projektTitle.localeCompare(projectB.projektTitle)
);

const COMPLETED_PROJECTS: ProjectCardProps[] = PINNED_PROJECTS.concat(ALL_PROJECTS).sort((projectA: ProjectCardProps, projectB: ProjectCardProps) =>
  projectA.projektTitle.localeCompare(projectB.projektTitle)
);

export default function RouteComponent() {
  const t = useTranslations()
  return (
    <div className="gap-2 p-2">
      <h1 className="gap-8 p-8 text-center text-6xl">{t('Projects.title')}</h1>

      <PinedProjects />

      <h2 className="gap-8 p-8 text-center text-4xl">{t('Projects.all')}:</h2>
      <div className="w-[calc(100vw-64px)] gap-8 m-8">
        <MasonryGrid variant={Variants.projects} className="m-8">
          {COMPLETED_PROJECTS.map((project: ProjectCardProps) => (
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
    </div>
  );
}
