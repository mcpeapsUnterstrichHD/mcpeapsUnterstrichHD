import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {Link} from "@/i18n/navigation";
import type React from "react";
import { ViewTransition } from "react";
import { Lens } from "@/components/ui/lens";

export interface ProjectCardProps {
  projektImage: string;
  projektImageAlt: string;
  projektImageBgColor: string;
  projektTitle: string;
  projektBadges: string[];
  projektLink: string;
  children: React.ReactNode;
}

/**
 * Skeleton sub-component that mirrors the exact layout of ProjektCard
 * Usage: <ProjektCard.Skeleton /> or <ProjectCardSkeleton />
 */
const ProjectCardSkeleton: React.FC = () => {
  return (
    <Card className="my-glass animate-in fade-in duration-500">
      <CardHeader>
        {/* Title skeleton */}
        <CardTitle>
          <Skeleton className="h-6 w-3/4" />
        </CardTitle>
        {/* Badges skeleton */}
        <CardDescription>
          <section className="flex flex-wrap gap-2">
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-10 rounded-full" />
          </section>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Description text skeleton */}
        <section className="flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </section>
      </CardContent>
      <CardFooter className="flex grow flex-col items-center justify-center gap-4 p-4">
        {/* Image skeleton */}
        <section className="flex items-center justify-center rounded-sm w-full">
          <Skeleton className="w-full h-48 rounded-sm" />
        </section>
      </CardFooter>
    </Card>
  );
};

const ProjektCard: React.FC<ProjectCardProps> & { Skeleton: typeof ProjectCardSkeleton } = ({
  projektImage,
  projektImageAlt,
  projektImageBgColor,
  projektTitle,
  projektBadges,
  projektLink,
  children,
}) => {
  // Check if the link is external (starts with http:// or https://)
  const isExternalLink = projektLink?.startsWith('http://') || projektLink?.startsWith('https://');

  const cardContent = (
    <ViewTransition enter="slide" exit="root" update="root">
    <Card className="my-glass">
      <CardHeader>
        <CardTitle>{projektTitle}</CardTitle>
        <CardDescription>
          <section className="flex flex-wrap gap-2">
            {projektBadges.map((badge) => (
              <Badge key={badge} variant="default">
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
      <CardFooter className="flex grow flex-col items-center justify-center gap-4 p-4">
        <section className={`flex items-center justify-center rounded-sm`}
        >
          <ViewTransition enter="slide" exit="root" update="root">
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                src={projektImage}
                alt={projektImageAlt}
                className={`${projektImageBgColor ? projektImageBgColor : "bg-background"} w-full p-4 rounded-sm object-contain`}
                //width={480}
                //height={480}
              />
          </Lens>
          </ViewTransition>
        </section>
      </CardFooter>
    </Card>
    </ViewTransition>
  );

  // For external links, use a regular anchor tag
  if (isExternalLink) {
    return (
      <a href={projektLink} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  // For internal links, use the next-intl Link component
  return (
    <Link href={projektLink}>
      {cardContent}
    </Link>
  );
};

// Attach Skeleton as a sub-component
ProjektCard.Skeleton = ProjectCardSkeleton;

export { ProjectCardSkeleton };
export default ProjektCard;
