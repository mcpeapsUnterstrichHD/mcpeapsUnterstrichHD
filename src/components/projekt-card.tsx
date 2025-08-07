import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type React from "react";

interface ProjectCardProps {
  projectImage: string;
  projectImageAlt: string;
  projectImageBgColor: string;
  projectTitle: string;
  projectBadges: string[];
  projectLink: string;
  children: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                   projectImage,
                                                   projectImageAlt,
                                                   projectImageBgColor,
                                                   projectTitle,
                                                   projectBadges,
                                                   projectLink,
  children,
}) => {
  return (
    <a href={projectLink} target="_blank" rel="noreferrer">
      <Card className="projectCard">
        <CardHeader>
          <CardTitle>{projectTitle}</CardTitle>
          <CardDescription>
            <section className="flex flex-wrap gap-2">
              {projectBadges.map((badge, index) => (
                <Badge key={index} variant="default">
                  {badge}
                </Badge>
              ))}
            </section>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section className="flex flex-col justify-between gap-4">
            <p>{children}</p>
          </section>
        </CardContent>
        <CardFooter className="flex flex-grow flex-col items-center justify-center gap-4 p-4">
          <section className={`${projectImageBgColor}flex items-center justify-center rounded-sm`}
          >
            <img
              src={projectImage}
              alt={projectImageAlt}
              className={`${projectImageBgColor} rounded-sm object-contain`}
              width={480}
              height={480}
            />
          </section>
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
