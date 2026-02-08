"use client"
import { SkillCardSkeleton } from "@/components/skill-card";
import {
  TimeLineElementBigSkeleton,
  TimeLineElementSmallSkeleton
} from "@/components/timeline-element";
import MasonryGrid, { Variants } from "@/components/MasonryGrid";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Mail,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";

export default function CVLoading() {
  return (
    <div className="flex flex-col gap-6 px-4 py-6 mx-auto">
      {/* Header / Personal Info - matches page structure */}
      <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
        <CardHeader className="text-center pb-2">
          <Skeleton className="h-10 w-48 mx-auto" />
          <Skeleton className="h-6 w-64 mx-auto mt-2" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-48 mt-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
          <GraduationCap className="w-6 h-6 text-primary" />
          <Skeleton className="h-8 w-32" />
        </h2>

        {/* Large Timeline */}
        <Timeline position="right" className="show-timeline-big">
          {Array.from({ length: 4 }).map((_, i) => (
            <TimeLineElementBigSkeleton key={`edu-big-${i}`} />
          ))}
        </Timeline>

        {/* Small Timeline */}
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="show-timeline-small"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <TimeLineElementSmallSkeleton key={`edu-small-${i}`} />
          ))}
        </Timeline>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
          <Briefcase className="w-6 h-6 text-primary" />
          <Skeleton className="h-8 w-40" />
        </h2>

        {/* Large Timeline */}
        <Timeline position="right" className="show-timeline-big">
          {Array.from({ length: 3 }).map((_, i) => (
            <TimeLineElementBigSkeleton key={`exp-big-${i}`} />
          ))}
        </Timeline>

        {/* Small Timeline */}
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="show-timeline-small"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <TimeLineElementSmallSkeleton key={`exp-small-${i}`} />
          ))}
        </Timeline>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
          <Wrench className="w-6 h-6 text-primary" />
          <Skeleton className="h-8 w-28" />
        </h2>

        <div className="flex flex-col gap-8">
          {/* Skill categories */}
          {Array.from({ length: 4 }).map((_, catIdx) => (
            <div key={`cat-${catIdx}`}>
              <Skeleton className="h-6 w-40 mb-4 ml-1" />
              <MasonryGrid variant={Variants.skills}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkillCardSkeleton key={`skill-${catIdx}-${i}`} />
                ))}
              </MasonryGrid>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
