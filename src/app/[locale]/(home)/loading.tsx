import { HeroSkeleton } from "@/components/skeletons";

export default function HomeLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] w-full relative px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <HeroSkeleton showSubtitle buttonCount={4} />
      </div>
    </div>
  );
}
