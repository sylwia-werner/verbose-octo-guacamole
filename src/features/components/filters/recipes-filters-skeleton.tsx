import { InputSkeleton } from "@/features/components/filters/input-skeleton";

export function RecipesFiltersSkeleton() {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <InputSkeleton />
      <InputSkeleton />
      <InputSkeleton />
      <InputSkeleton />
    </div>
  );
}
