import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="ats-cv w-full max-w-[800px] mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-64" /> {/* Name */}
        <Skeleton className="h-6 w-48" /> {/* Subtitle */}
        <div className="flex gap-2">
          <Skeleton className="h-4 w-full max-w-2xl" /> {/* Contact Info */}
        </div>
      </div>

      {/* Sections (Education, Experience, Skills) */}
      {[1, 2, 3].map((section) => (
        <div key={section} className="space-y-6">
          <Skeleton className="h-8 w-32" /> {/* H2 Title */}

          <div className="space-y-6">
             {[1, 2, 3].map((item) => (
               <div key={item} className="space-y-2">
                 <div className="flex justify-between items-baseline">
                   <Skeleton className="h-5 w-48" /> {/* Entry Title */}
                   <Skeleton className="h-5 w-32" />  {/* Date */}
                 </div>
                 <div className="space-y-1">
                   <Skeleton className="h-4 w-full" />
                   <Skeleton className="h-4 w-11/12" />
                 </div>
               </div>
             ))}
          </div>
        </div>
      ))}
    </div>
  );
}
