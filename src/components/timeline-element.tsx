import TimeLineCard from "@/components/timeline-card";
[
  {
    "StartLine": 2,
    "EndLine": 2,
    "TargetContent": "// Trigger rebuild",
    "ReplacementContent": "",
    "AllowMultiple": false
  },
  {
    "StartLine": 105,
    "EndLine": 105,
    "TargetContent": "        {/* @ts-expect-error - TimeLineCardWithSkeleton handling */}",
    "ReplacementContent": "",
    "AllowMultiple": true
  },
  {
    "StartLine": 123,
    "EndLine": 123,
    "TargetContent": "        {/* @ts-expect-error - TimeLineCardWithSkeleton handling */}",
    "ReplacementContent": "",
    "AllowMultiple": true
  }
]
import { Badge } from "@/components/ui/badge";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Skeleton } from "@/components/ui/skeleton";
import type React from "react";

interface TimeLineElementProps {
  TimeLineImage: string;
  TimeLineImageAlt: string;
  TimeLineImageFallback: string;
  TimeLineTitle: string;
  TimeLineBadges: string[];
  children: React.ReactNode;
  startdate: string;
  enddate: string;
}

const TimeLineElementBig: React.FC<TimeLineElementProps> = ({
  TimeLineImage,
  TimeLineImageAlt,
  TimeLineImageFallback,
  TimeLineTitle,
  TimeLineBadges,
  children,
  startdate,
  enddate,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text-secondary">
        <Badge>
          {startdate} - {enddate}
        </Badge>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <TimeLineCard
          TimeLineTitle={TimeLineTitle}
          TimeLineBadges={TimeLineBadges}
          TimeLineImage={TimeLineImage}
          TimeLineImageAlt={TimeLineImageAlt}
          TimeLineImageFallback={TimeLineImageFallback}
        >
          {children}
        </TimeLineCard>
      </TimelineContent>
    </TimelineItem>
  );
};

const TimeLineElementSmall: React.FC<TimeLineElementProps> = ({
  TimeLineImage,
  TimeLineImageAlt,
  TimeLineImageFallback,
  TimeLineTitle,
  TimeLineBadges,
  children,
  startdate,
  enddate,
}) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <TimeLineCard
          TimeLineTitle={TimeLineTitle}
          // biome-ignore lint/style/useTemplate: <explanation>
          TimeLineBadges={[startdate + " - " + enddate].concat(TimeLineBadges)}
          TimeLineImage={TimeLineImage}
          TimeLineImageAlt={TimeLineImageAlt}
          TimeLineImageFallback={TimeLineImageFallback}
        >
          {children}
        </TimeLineCard>
      </TimelineContent>
    </TimelineItem>
  );
};

/**
 * Skeleton for TimeLineElementBig
 */
const TimeLineElementBigSkeleton = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text-secondary">
        <Skeleton className="h-5 w-32 ml-auto" />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {/* @ts-expect-error - TimeLineCardWithSkeleton handling */}
        <TimeLineCard.Skeleton />
      </TimelineContent>
    </TimelineItem>
  );
};

/**
 * Skeleton for TimeLineElementSmall
 */
const TimeLineElementSmallSkeleton = () => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {/* @ts-expect-error - TimeLineCardWithSkeleton handling */}
        <TimeLineCard.Skeleton />
      </TimelineContent>
    </TimelineItem>
  );
};

// Attack Skeleton as sub-component
// Removing sub-component assignment to fix Turbopack issue
// const TimeLineElementBigWithSkeleton = TimeLineElementBig as typeof TimeLineElementBig & { Skeleton: typeof TimeLineElementBigSkeleton };
// TimeLineElementBigWithSkeleton.Skeleton = TimeLineElementBigSkeleton;

// const TimeLineElementSmallWithSkeleton = TimeLineElementSmall as typeof TimeLineElementSmall & { Skeleton: typeof TimeLineElementSmallSkeleton };
// TimeLineElementSmallWithSkeleton.Skeleton = TimeLineElementSmallSkeleton;

export {
  TimeLineElementBig,
  TimeLineElementSmall,
  TimeLineElementBigSkeleton,
  TimeLineElementSmallSkeleton,
  type TimeLineElementProps
};
