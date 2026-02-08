import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ViewTransition } from "react";

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

/**
 * Skeleton for LinkCard - mirrors exact layout
 */
const LinkCardSkeleton: React.FC = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
      <CardHeader>
        <div className="flex flex-row items-center justify-between gap-1">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-5 w-24" />
        </div>
        <Skeleton className="h-4 w-32 mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * Skeleton for LinkCardWithFooter - mirrors exact layout
 */
const LinkCardWithFooterSkeleton: React.FC = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
      <CardHeader>
        <div className="flex flex-row items-center justify-between gap-1">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-5 w-24" />
        </div>
        <Skeleton className="h-4 w-32 mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-[450px] w-full rounded-md" />
      </CardFooter>
    </Card>
  );
};

const LinkCard: React.FC<LinkCardProps> & { Skeleton: typeof LinkCardSkeleton } = ({
  title,
  url,
  icon,
  headding,
  description,
}) => {
  return (
    <ViewTransition enter="slide" exit="root" update="root">
    <a href={url} target="_blank" rel="noreferrer" className="flex flex-col gap-2">
      <Card className="bg-card/50 backdrop-blur-sm">
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
    </ViewTransition>
  )
}

// Attach Skeleton as sub-component
LinkCard.Skeleton = LinkCardSkeleton;

const LinkCardWithFooter: React.FC<LinkCardWithFooterProps> & { Skeleton: typeof LinkCardWithFooterSkeleton } = ({
  title,
  url,
  icon,
  headding,
  description,
  children,
}) => {
  return (
    <ViewTransition enter="slide" exit="root" update="root">
    <a href={url} target="_blank" rel="noreferrer" className="flex flex-col gap-2">
      <Card className="bg-card/50 backdrop-blur-sm">
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
    </ViewTransition>
  )
}

// Attach Skeleton as sub-component
LinkCardWithFooter.Skeleton = LinkCardWithFooterSkeleton;

export default LinkCard;
export { LinkCardWithFooter, LinkCardSkeleton, LinkCardWithFooterSkeleton };
