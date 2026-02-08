"use client"
import PinedProjects from "@/components/pinedProjects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Music, Disc3 } from "lucide-react";

export default function AboutMeLoading() {
  return (
    <div className="flex flex-col gap-8 px-4 py-6 mx-auto">
      {/* Hero Section - matches page structure */}
      <section className="text-center space-y-3">
        <Skeleton className="h-6 w-32 mx-auto" />
        <Skeleton className="h-12 w-72 mx-auto md:h-16 md:w-96" />
        <Skeleton className="h-8 w-56 mx-auto" />
      </section>

      {/* Description - matches page structure */}
      <section className="text-center max-w-2xl mx-auto">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5 mx-auto" />
        </div>
      </section>

      {/* Music Section - matches exact Card structure */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Playlist Card */}
        <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Music className="w-5 h-5 text-primary" />
              <Skeleton className="h-5 w-32" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="w-full h-[450px] rounded-lg" />
          </CardContent>
        </Card>

        {/* Current Song Card */}
        <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Disc3 className="w-5 h-5 text-primary animate-spin-slow" />
              <Skeleton className="h-5 w-40" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Skeleton className="w-full h-[450px] rounded-lg" />
          </CardContent>
        </Card>
      </section>

      {/* Pinned Projects - using component skeleton */}
      <section>
        <PinedProjects.Skeleton />
      </section>
    </div>
  );
}
