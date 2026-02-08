"use client";
import LinkCard, { LinkCardSkeleton } from "@/components/LinkCard";
import MasonryGrid, { Variants } from "@/components/MasonryGrid";
import { Skeleton } from "@/components/ui/skeleton";
import { Share2, Globe, MoreHorizontal } from "lucide-react";

export default function LinkhubLoading() {
  return (
    <div className="flex flex-col gap-8 px-4 py-6 mx-auto">
      {/* Hero Section - matches page structure */}
      <section className="text-center space-y-3">
        <Skeleton className="h-12 w-64 mx-auto md:h-16 md:w-80" />
        <Skeleton className="h-6 w-80 mx-auto" />
      </section>

      {/* Social Media Section */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Share2 className="w-6 h-6 text-primary" />
          <Skeleton className="h-8 w-32" />
        </h2>
        <MasonryGrid variant={Variants.links}>
          {Array.from({ length: 7 }).map((_, i) => (
            <LinkCard.Skeleton key={`social-${i}`} />
          ))}
        </MasonryGrid>
      </section>

      {/* Websites Section */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          <Skeleton className="h-8 w-28" />
        </h2>
        <MasonryGrid variant={Variants.links}>
          {Array.from({ length: 3 }).map((_, i) => (
            <LinkCard.Skeleton key={`website-${i}`} />
          ))}
        </MasonryGrid>
      </section>

      {/* Other Section */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <MoreHorizontal className="w-6 h-6 text-primary" />
          <Skeleton className="h-8 w-24" />
        </h2>
        <MasonryGrid variant={Variants.links}>
          {/* Github */}
          <LinkCardSkeleton />
          {/* Playlist */}
          <LinkCardSkeleton />
          {/* Song */}
          <LinkCardSkeleton />
        </MasonryGrid>
      </section>
    </div>
  );
}
