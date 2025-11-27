import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LinkCardProps {
  title: string;
  url: string;
  icon: string;
  headding: string;
  description: string;
}

interface LinkCardWithFooterProps extends LinkCardProps {
  children: React.ReactNode;
}

const LinkCard: React.FC<LinkCardProps> = ({
  title,
  url,
  icon,
  headding,
  description,
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="flex flex-col gap-2">
      <Card className="bg-transparent backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-row items-center justify-between gap-1">
            <Avatar>
              <AvatarImage src={icon} alt={`${title} Logo`} />
              <AvatarFallback>{title}</AvatarFallback>
            </Avatar>
            <CardTitle>{title}</CardTitle>
          </div>
          <CardDescription>{headding}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </a>
  )
}

const LinkCardWithFooter: React.FC<LinkCardWithFooterProps> = ({
  title,
  url,
  icon,
  headding,
  description,
  children,
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="flex flex-col gap-2">
      <Card className="bg-transparent backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-row items-center justify-between gap-1">
            <Avatar>
              <AvatarImage src={icon} alt={`${title} Logo`} />
              <AvatarFallback>{title}</AvatarFallback>
            </Avatar>
            <CardTitle>{title}</CardTitle>
          </div>
          <CardDescription>{headding}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      <CardFooter>
        {children}
        </CardFooter>
      </Card>
    </a>
  )
}

export default LinkCard;
export { LinkCardWithFooter };
