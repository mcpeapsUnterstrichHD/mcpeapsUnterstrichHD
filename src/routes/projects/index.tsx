import PinedProjects, { PINNED_PROJECTS} from "@/components/pinedProjects";
import ProjectCard, { type ProjectCardProps} from "@/components/projekt-card";
import { createFileRoute } from "@tanstack/react-router";

// pictures
import logo from "@/assets/pictures/logo.png";
import klassenLogo from "@/assets/pictures/projects/Klassen_App_Icon_iOS_macOS_iPadOS.png";
import oszimtLogo from "@/assets/pictures/projects/OSZimt-Logo-l.png";
import cbpsLogo from "@/assets/pictures/cbps_logo.png";
import simpleSQLRunnerPicture from "@/assets/pictures/projects/ssqlr.png";
import tuberlinLogo from "@/assets/pictures/projects/LogoDerTUBerlin2020.svg";
import liveWallpaperPicture from "@/assets/pictures/live-wallpaper.png";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

const ALL_PROJECTS: ProjectCardProps[] = [
  {
    projectImage: oszimtLogo,
    projectImageAlt: "Grosßes Logo vom OSZ IMT",
    projectImageBgColor: "bg-white",
    projectTitle: "Schul Repository",
    projectBadges: ["FOSS", "SCHOOL"],
    projectLink: "https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps",
    children: "Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.",
  },
  {
    projectImage: oszimtLogo,
    projectImageAlt: "Grosßes Logo vom OSZ IMT",
    projectImageBgColor: "bg-white",
    projectTitle: "Klassen Website",
    projectBadges: ["FOSS", "SCHOOL", "WEB", "MARKDOWN", "WIKI"],
    projectLink: "https://github.com/comboomPunkTsucht/OSZ_ITA12_Doc",
    children: "Das ist die Webseite der Klassen ITA 12 in der ich ich am OSZ IMT gewesen bin.",
  },
  {
    projectImage: klassenLogo,
    projectImageAlt: "App Icon der Klassen App",
    projectImageBgColor: "",
    projectTitle: "Klassen App",
    projectBadges: ["FOSS", "SCHOOL", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"],
    projectLink: "https://github.com/comboomPunkTsucht/ITA-12_App",
    children: "Das ist die App der Klassen ITA 12 in der ich ich am OSZ IMT gewesen bin.",
  },
  {
    projectImage: simpleSQLRunnerPicture,
    projectImageAlt: "Simple SQL Runner",
    projectImageBgColor: "bg-black",
    projectTitle: "Simple SQL Runner",
    projectBadges: ["FOSS", "SCHOOL", "JAVA", "SQL"],
    projectLink: "https://github.com/comboomPunkTsucht/Simple-SQL-Runner",
    children: "Das ist ein GUI-Programm zum ausführen und ausgeben von SQL Statements",
  },
  {
    projectImage: logo,
    projectImageAlt: "mcpeaps_HD Logo",
    projectImageBgColor: "",
    projectTitle: "Meine eigenen Dotfiles für macOS",
    projectBadges: ["FOSS", "WEB", "NEW", "Konfiguration", "DOTFILES", "MACOS"],
    projectLink: "https://github.com/mcpeapsUnterstrichHD/dotfiles-macos",
    children: "Das Repository für meine Dotfiles für macOS.",
  },
  {
    projectImage: logo,
    projectImageAlt: "mcpeaps_HD Logo",
    projectImageBgColor: "",
    projectTitle: "Meine eigenen NixOS Konfiguration",
    projectBadges: ["FOSS", "WEB", "NEW", "Konfiguration", "DOTFILES", "Linux", "NIXOS"],
    projectLink: "https://github.com/mcpeapsUnterstrichHD/nix-config",
    children: "Das Repository für meine Konfiguration von NixOS.",
  },
  {
    projectImage: logo,
    projectImageAlt: "mcpeaps_HD Logo",
    projectImageBgColor: "",
    projectTitle: "Meine eigenen Dotfiles für Linux",
    projectBadges: ["FOSS", "WEB", "NEW", "Konfiguration", "DOTFILES", "Linux"],
    projectLink: "https://github.com/mcpeapsUnterstrichHD/dotfiles-linux",
    children: "Das Repository für meine Dotfiles für macOS.",
  },
  {
    projectImage: cbpsLogo,
    projectImageAlt: "comboom.sucht Logo",
    projectImageBgColor: "",
    projectTitle: "comboom.sucht Website",
    projectBadges: ["FOSS", "WEB", "MARKDOWN", "WIKI"],
    projectLink: "https://github.com/comboomPunkTsucht/comboom.sucht-BLOG",
    children: "Das ist die Webseite meiner Freundes Gruppe.",
  },
  {
    projectImage: cbpsLogo,
    projectImageAlt: "comboom.sucht Logo",
    projectImageBgColor: "",
    projectTitle: "comboom.sucht App",
    projectBadges: ["FOSS", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"],
    projectLink: "https://github.com/comboomPunkTsucht/comboomPunkTsucht-IOS-macOS-App",
    children: "Das ist die App meiner Freundes Gruppe.",
  },
  {
    projectImage: tuberlinLogo,
    projectImageAlt: "Langes Logo der Teschnischen Universität Berlin",
    projectImageBgColor: "bg-white",
    projectTitle: "Uni Repository",
    projectBadges: ["FOSS", "UNIVERSITY"],
    projectLink: "https://github.com/comboomPunkTsucht/TU-Berlin-repo-aps",
    children: "Das ist Das Repository zu meinen Studium an der TU Berlin.",
  },
  {
    projectImage: liveWallpaperPicture,
    projectImageAlt: "Standert Hintergrund",
    projectImageBgColor: "",
    projectTitle: "Native/Wasm Live Wallpaper",
    projectBadges: ["NATIVE", "WASM", "C++", "RAYLIB"],
    projectLink: "https://github.com/comboomPunkTsucht/comboom_punkt_sucht_native_wallpaper",
    children: "Ein plattformübergreifendes Live-Wallpaper mit interaktiven Partikeln im Nord-Design. Die native C++23-Implementierung bietet hohe Performance, Custom-Shader und läuft dank WebAssembly auch direkt im Browser.",
  },
].sort((projectA: ProjectCardProps, projectB: ProjectCardProps) =>
  projectA.projectTitle.localeCompare(projectB.projectTitle)
);

const COMPLETED_PROJECTS: ProjectCardProps[] = PINNED_PROJECTS.concat(ALL_PROJECTS).sort((projectA: ProjectCardProps, projectB: ProjectCardProps) =>
  projectA.projectTitle.localeCompare(projectB.projectTitle)
);

function RouteComponent() {
  return (
    <div className="gap-2 p-2">
      <h1 className="gap-8 p-8 text-center text-6xl">Projekte</h1>

      <PinedProjects />

      <h2 className="gap-8 p-8 text-center text-4xl">Alle Projekte</h2>

      <div className="my-Project-grid">
        {COMPLETED_PROJECTS.map((project) => (
          <ProjectCard
            key={project.projectLink}
            projectImage={project.projectImage}
            projectImageAlt={project.projectImageAlt}
            projectImageBgColor={project.projectImageBgColor}
            projectTitle={project.projectTitle}
            projectBadges={project.projectBadges}
            projectLink={project.projectLink}
          >
            {project.children}
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}
