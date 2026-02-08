import { Skeleton } from "@/components/ui/skeleton";

interface HeroSkeletonProps {
  showSubtitle?: boolean;
  showDescription?: boolean;
  buttonCount?: number;
}

/**
 * Skeleton for hero sections with animated title and optional elements
 */
export function HeroSkeleton({
  showSubtitle = true,
  showDescription = false,
  buttonCount = 0,
}: HeroSkeletonProps) {
  return (
    <section className="text-center space-y-4 animate-in fade-in duration-500">
      {/* Greeting/Subtitle above */}
      {showSubtitle && (
        <Skeleton className="h-6 w-48 mx-auto" />
      )}

      {/* Main title */}
      <Skeleton className="h-12 w-72 mx-auto md:h-16 md:w-96" />

      {/* Secondary title/tagline */}
      <Skeleton className="h-8 w-56 mx-auto" />

      {/* Description text */}
      {showDescription && (
        <div className="flex flex-col items-center gap-2 max-w-2xl mx-auto mt-4">
          <Skeleton className="h-4 w-full max-w-md" />
          <Skeleton className="h-4 w-full max-w-sm" />
          <Skeleton className="h-4 w-full max-w-xs" />
        </div>
      )}

      {/* CTA Buttons */}
      {buttonCount > 0 && (
        <div className="flex flex-wrap gap-3 mt-6 justify-center">
          {Array.from({ length: buttonCount }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-32 rounded-md" />
          ))}
        </div>
      )}
    </section>
  );
}

export default HeroSkeleton;
