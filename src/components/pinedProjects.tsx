import ProjectCard, {type ProjectCardProps} from "@/components/projekt-card";

// pictures
import portfolioPicture from "@/assets/pictures/projects/my_Portfolio.jpeg";
import searxngPicture from "@/assets/pictures/projects/searxng.png";
import simpleSQLRunnerPicture from "@/assets/pictures/projects/ssqlr.png";


export const PINNED_PROJECTS: ProjectCardProps[] = [
  {
    projectImage: portfolioPicture,
    projectImageAlt: "Portfolio Bild",
    projectImageBgColor: "",
    projectTitle: "Portfolio",
    projectBadges: ["FOSS", "WEB", "NEW"],
    projectLink: "https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD",
    children: "Das project zu diesem Portfolio.",
  },
  {
    projectImage: simpleSQLRunnerPicture,
    projectImageAlt: "Simple SQL Runner",
    projectImageBgColor: "bg-black",
    projectTitle: "simplesql",
    projectBadges: ["FOSS", "RUST", "SQL"],
    projectLink: "https://github.com/comboomPunkTsucht/simplesql",
    children: "Das ist ein TUI/GUI-Programm zum ausführen und ausgeben von SQL Statements",
  },
  {
    projectImage: searxngPicture,
    projectImageAlt: "SearxNG Logo",
    projectImageBgColor: "",
    projectTitle: "Meine eigene Localen Services",
    projectBadges: ["FOSS", "WEB", "NEW", "SEARCH ENGINE", "DOCKER"],
    projectLink: "https://github.com/mcpeapsUnterstrichHD/local-services",
    children: "Hier ist eine ansamlung an self hosted Services, wie meine Suchmaschine, die ich nutze.",
  },
].sort((projectA: ProjectCardProps, projectB: ProjectCardProps) =>
  projectA.projectTitle.localeCompare(projectB.projectTitle)
);

export default function PinedProjects() {
  return (
    <div>
      <h2 className="gap-8 p-8 text-center text-5xl">Gepinte Projekte</h2>

      <div className="my-Project-grid-pinned gap-8 m-8">
        {PINNED_PROJECTS.map((project) => (
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
