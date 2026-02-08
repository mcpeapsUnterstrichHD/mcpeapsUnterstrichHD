import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ViewTransition } from "react";

interface TimeLineCardProps {
  TimeLineImage: string;
  TimeLineImageAlt: string;
  TimeLineImageFallback: string;
  TimeLineTitle: string;
  TimeLineBadges: string[];
  children: React.ReactNode;
}

const TimeLineCard: React.FC<TimeLineCardProps> = ({
  TimeLineImage,
  TimeLineImageAlt,
  TimeLineImageFallback,
  TimeLineTitle,
  TimeLineBadges,
  children,
}) => {
  return (
    <ViewTransition enter="slide" exit="root" update="root">
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-row items-center justify-between gap-1">
          <Avatar>
            <AvatarImage src={TimeLineImage} alt={TimeLineImageAlt} />
            <AvatarFallback>{TimeLineImageFallback}</AvatarFallback>
          </Avatar>
          <CardTitle>{TimeLineTitle}</CardTitle>
        </div>
        <CardDescription>
          <div className="flex flex-wrap gap-2">
            {TimeLineBadges.map((badge) => (
              <Badge key={badge} variant="default">
                {badge}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
    </ViewTransition>
  );
};

/**
 * Skeleton for TimeLineCard
 */
const TimeLineCardSkeleton = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
      <CardHeader>
        <div className="flex flex-row items-center justify-between gap-1">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-6 w-48" />
        </div>
        <CardDescription>
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-5 w-24 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </CardContent>
    </Card>
  );
};

// Attack Skeleton as sub-component
const TimeLineCardWithSkeleton = TimeLineCard as typeof TimeLineCard & { Skeleton: typeof TimeLineCardSkeleton };
TimeLineCardWithSkeleton.Skeleton = TimeLineCardSkeleton;

export { TimeLineCardSkeleton };
export default TimeLineCardWithSkeleton;
