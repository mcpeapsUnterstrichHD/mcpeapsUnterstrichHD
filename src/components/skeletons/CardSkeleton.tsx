import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface CardSkeletonProps {
  showImage?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  contentLines?: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Skeleton for Card components with configurable sections
 */
export function CardSkeleton({
  showImage = false,
  showHeader = true,
  showFooter = false,
  contentLines = 3,
  className = "",
  children,
}: CardSkeletonProps) {
  return (
    <Card className={`bg-card/50 backdrop-blur-sm animate-in fade-in duration-500 ${className}`}>
      {/* Image placeholder */}
      {showImage && (
        <Skeleton className="h-40 w-full rounded-t-lg rounded-b-none" />
      )}

      {/* Header with title and optional icon */}
      {showHeader && (
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-32" />
          </div>
        </CardHeader>
      )}

      {/* Content lines or children */}
      <CardContent className="space-y-2">
        {children ? children : (
          Array.from({ length: contentLines }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-4"
              style={{ width: `${100 - i * 15}%` }}
            />
          ))
        )}
      </CardContent>

      {/* Footer */}
      {showFooter && (
        <div className="px-4 pb-4 pt-2 flex gap-2">
          <Skeleton className="h-8 w-20 rounded-md" />
          <Skeleton className="h-8 w-20 rounded-md" />
        </div>
      )}
    </Card>
  );
}

export default CardSkeleton;
