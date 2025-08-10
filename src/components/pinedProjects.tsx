import ProjectCard from "@/components/projekt-card";

// pictures
import portfolioPicture from '@/assets/pictures/projects/my_Portfolio.jpeg'
import searxngPicture from '@/assets/pictures/projects/searxng.png'
import simpleSQLRunnerPicture from '@/assets/pictures/projects/ssqlr.png'
export default function PinedProjects() {
  return <div>
    <h2 className="gap-8 p-8 text-center text-5xl">Gepinte Projekte</h2>

    <div className="my-Project-grid-pinned gap-8 m-8">
      <ProjectCard
        projectImage={portfolioPicture}
        projectImageAlt="Portfolio Bild"
        projectImageBgColor=""
        projectTitle="Portfolio"
        projectBadges={['FOSS', 'WEB', 'NEW']}
        projectLink="https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD"
      >
        Das project zu diesem Portfolio.
      </ProjectCard>
      <ProjectCard
        projectImage={simpleSQLRunnerPicture}
        projectImageAlt="Simple SQL Runner"
        projectImageBgColor="bg-black"
        projectTitle="simplesql"
        projectBadges={['FOSS', 'RUST', 'SQL']}
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
        projectBadges={['FOSS', 'WEB', 'NEW', 'SEARCH ENGINE', 'DOCKER']}
        projectLink="https://github.com/mcpeapsUnterstrichHD/local-services"
      >
        Hier ist eine ansamlung an self hosted Services, wie meine Suchmaschine, die ich nutze.
      </ProjectCard>
    </div>
  </div>
}
