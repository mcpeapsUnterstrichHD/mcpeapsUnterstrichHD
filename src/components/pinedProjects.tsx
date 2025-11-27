import ProjectCard, {type ProjectCardProps} from "@/components/projekt-card";
import { useTranslations } from "next-intl";

export const PINNED_PROJECTS: ProjectCardProps[] = [
  {
    projektImage: "/pictures/projects/my_Portfolio.jpeg",
    projektImageAlt: "Portfolio Bild",
    projektImageBgColor: "",
    projektTitle: "Portfolio",
    projektBadges: ["FOSS", "WEB", "NEW"],
    projektLink: "https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD",
    children: "Das project zu diesem Portfolio.",
  },
  {
    projektImage: "/pictures/projects/ssqlr.png",
    projektImageAlt: "Simple SQL Runner",
    projektImageBgColor: "bg-black",
    projektTitle: "simplesql",
    projektBadges: ["FOSS", "RUST", "SQL"],
    projektLink: "https://github.com/comboomPunkTsucht/simplesql",
    children: "Das ist ein TUI/GUI-Programm zum ausführen und ausgeben von SQL Statements",
  },
  {
    projektImage: "/pictures/projects/searxng.png",
    projektImageAlt: "SearxNG Logo",
    projektImageBgColor: "",
    projektTitle: "Meine eigene Localen Services",
    projektBadges: ["FOSS", "WEB", "NEW", "SEARCH ENGINE", "DOCKER"],
    projektLink: "https://github.com/mcpeapsUnterstrichHD/local-services",
    children: "Hier ist eine ansamlung an self hosted Services, wie meine Suchmaschine, die ich nutze.",
  },
].sort((projectA: ProjectCardProps, projectB: ProjectCardProps) =>
  projectA.projektTitle.localeCompare(projectB.projektTitle)
);

export default function PinedProjects() {
  const t = useTranslations()
  return (
    <div>
      <h2 className="gap-8 p-8 text-center text-5xl">{t('Projects.pinned')}:</h2>

      <div className="my-Project-grid-pinned gap-8 m-8">
        {PINNED_PROJECTS.map((project) => (
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
      </div>
    </div>
  );
}
