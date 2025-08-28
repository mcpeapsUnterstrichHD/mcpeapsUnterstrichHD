import PinedProjects from "@/components/pinedProjects";
import ProjectCard from "@/components/projekt-card";
import { createFileRoute } from "@tanstack/react-router";

// pictures
import logo from "@/assets/pictures/logo.png";
import klassenLogo from "@/assets/pictures/projects/Klassen_App_Icon_iOS_macOS_iPadOS.png";
import oszimtLogo from "@/assets/pictures/projects/OSZimt-Logo-l.png";
import cbpsLogo from "@/assets/pictures/cbps_logo.png";
import portfolioPicture from "@/assets/pictures/projects/my_Portfolio.jpeg";
import searxngPicture from "@/assets/pictures/projects/searxng.png";
import simpleSQLRunnerPicture from "@/assets/pictures/projects/ssqlr.png";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="gap-2 p-2">
      <h1 className="gap-8 p-8 text-center text-6xl">Projekte</h1>

      <PinedProjects />

      <h2 className="gap-8 p-8 text-center text-4xl">Alle Projekte</h2>

      <div className="my-Project-grid">
        <ProjectCard
          projectImage={portfolioPicture}
          projectImageAlt="Portfolio Bild"
          projectImageBgColor=""
          projectTitle="Portfolio"
          projectBadges={["FOSS", "WEB", "NEW"]}
          projectLink="https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD"
        >
          Das project zu diesem Portfolio.
        </ProjectCard>
        <ProjectCard
          projectImage={oszimtLogo}
          projectImageAlt="Grosßes Logo vom OSZ IMT"
          projectImageBgColor="bg-white"
          projectTitle="Schul Repository"
          projectBadges={["FOSS", "SCHOOL"]}
          projectLink="https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps"
        >
          Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.
        </ProjectCard>
        <ProjectCard
          projectImage={oszimtLogo}
          projectImageAlt="Grosßes Logo vom OSZ IMT"
          projectImageBgColor="bg-white"
          projectTitle="Klassen Website"
          projectBadges={["FOSS", "SCHOOL", "WEB", "MARKDOWN", "WIKI"]}
          projectLink="https://github.com/comboomPunkTsucht/OSZ_ITA12_Doc"
        >
          Das ist die Webseite der Klassen ITA 12 in der ich ich am OSZ IMT
          gewesen bin.
        </ProjectCard>
        <ProjectCard
          projectImage={klassenLogo}
          projectImageAlt="App Icon der Klassen App"
          projectImageBgColor=""
          projectTitle="Klassen App"
          projectBadges={[
            "FOSS",
            "SCHOOL",
            "APP",
            "iOS",
            "SWIFT",
            "SWIFTUI",
            "HUB",
          ]}
          projectLink="https://github.com/comboomPunkTsucht/ITA-12_App"
        >
          Das ist die App der Klassen ITA 12 in der ich ich am OSZ IMT gewesen
          bin.
        </ProjectCard>
        <ProjectCard
          projectImage={simpleSQLRunnerPicture}
          projectImageAlt="Simple SQL Runner"
          projectImageBgColor="bg-black"
          projectTitle="Simple SQL Runner"
          projectBadges={["FOSS", "SCHOOL", "JAVA", "SQL"]}
          projectLink="https://github.com/comboomPunkTsucht/Simple-SQL-Runner"
        >
          Das ist ein GUI-Programm zum ausführen und ausgeben von SQL Statements
        </ProjectCard>
        <ProjectCard
          projectImage={simpleSQLRunnerPicture}
          projectImageAlt="Simple SQL Runner"
          projectImageBgColor="bg-black"
          projectTitle="simplesql"
          projectBadges={["FOSS", "RUST", "SQL"]}
          projectLink="https://github.com/comboomPunkTsucht/simplesql"
        >
          Das ist ein TUI/GUI-Programm zum ausführen und ausgeben von SQL
          Statements
        </ProjectCard>
        <ProjectCard
          projectImage={searxngPicture}
          projectImageAlt="SearxNG Logo"
          projectImageBgColor=""
          projectTitle="Meine eigene Localen Services"
          projectBadges={["FOSS", "WEB", "NEW", "SEARCH ENGINE", "DOCKER"]}
          projectLink="https://github.com/mcpeapsUnterstrichHD/local-services"
        >
          Hier ist eine ansamlung an self hosted Services, wie meine
          Suchmaschine, die ich nutze.
        </ProjectCard>
        <ProjectCard
          projectImage={logo}
          projectImageAlt="mcpeaps_HD Logo"
          projectImageBgColor=""
          projectTitle="Meine eigenen Dotfiles für macOS"
          projectBadges={[
            "FOSS",
            "WEB",
            "NEW",
            "Konfiguration",
            "DOTFILES",
            "MACOS",
          ]}
          projectLink="https://github.com/mcpeapsUnterstrichHD/dotfiles-macos"
        >
          Das Repository für meine Dotfiles für macOS.
        </ProjectCard>
        <ProjectCard
          projectImage={logo}
          projectImageAlt="mcpeaps_HD Logo"
          projectImageBgColor=""
          projectTitle="Meine eigenen NixOS Konfiguration"
          projectBadges={[
            "FOSS",
            "WEB",
            "NEW",
            "Konfiguration",
            "DOTFILES",
            "Linux",
            "NIXOS",
          ]}
          projectLink="https://github.com/mcpeapsUnterstrichHD/nix-config"
        >
          Das Repository für meine Konfiguration von NixOS.
        </ProjectCard>
        <ProjectCard
          projectImage={logo}
          projectImageAlt="mcpeaps_HD Logo"
          projectImageBgColor=""
          projectTitle="Meine eigenen Dotfiles für Linux"
          projectBadges={[
            "FOSS",
            "WEB",
            "NEW",
            "Konfiguration",
            "DOTFILES",
            "Linux",
          ]}
          projectLink="https://github.com/mcpeapsUnterstrichHD/dotfiles-linux"
        >
          Das Repository für meine Dotfiles für macOS.
        </ProjectCard>
        <ProjectCard
          projectImage={cbpsLogo}
          projectImageAlt="comboom.sucht Logo"
          projectImageBgColor=""
          projectTitle="comboom.sucht Website"
          projectBadges={["FOSS", "WEB", "MARKDOWN", "WIKI"]}
          projectLink="https://github.com/comboomPunkTsucht/comboom.sucht-BLOG"
        >
          Das ist die Webseite meiner Freundes Gruppe.
        </ProjectCard>
        <ProjectCard
          projectImage={cbpsLogo}
          projectImageAlt="comboom.sucht Logo"
          projectImageBgColor=""
          projectTitle="comboom.sucht App"
          projectBadges={["FOSS", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"]}
          projectLink="https://github.com/comboomPunkTsucht/comboomPunkTsucht-IOS-macOS-App"
        >
          Das ist die App meiner Freundes Gruppe.
        </ProjectCard>
      </div>
    </div>
  );
}
