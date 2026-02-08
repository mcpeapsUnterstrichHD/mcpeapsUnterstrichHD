"use client";
import {PinedProjectsSkeleton} from "@/components/pinedProjects";
import {ProjectCardSkeleton} from "@/components/projekt-card";
import MasonryGrid, { Variants } from "@/components/MasonryGrid";
import { Skeleton } from "@/components/ui/skeleton";
import { FolderOpen, Grid3X3 } from "lucide-react";

export default function ProjectsLoading() {
  return (
    <div className="flex flex-col gap-8 px-4 py-6 mx-auto">
      {/* Hero Section - matches page structure */}
      <section className="text-center space-y-2">
        <Skeleton className="h-12 w-48 mx-auto md:h-16 md:w-64" />
        <div className="text-muted-foreground flex items-center justify-center gap-2">
          <FolderOpen className="w-5 h-5" />
          <Skeleton className="h-5 w-32" />
        </div>
      </section>

      {/* Pinned Projects - using component skeleton */}
      <section>
        <PinedProjectsSkeleton />
      </section>

      {/* All Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Grid3X3 className="w-6 h-6 text-primary" />
          <Skeleton className="h-8 w-40" />
        </h2>
        <MasonryGrid variant={Variants.projects}>
          {Array.from({ length: 11 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </MasonryGrid>
      </section>
    </div>
  );
}
