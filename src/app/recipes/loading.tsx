import { RecipeListSkeleton } from "@/features/components/list/recipe-list-skeleton";
import { Skeleton } from "@/shared/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Skeleton className="mb-6 h-9 w-32" />
      <div className="mb-6 flex flex-wrap gap-3">
        <Skeleton className="h-9 w-56 rounded-4xl" />
        <Skeleton className="h-9 w-44 rounded-4xl" />
        <Skeleton className="h-9 w-44 rounded-4xl" />
        <Skeleton className="h-9 w-48 rounded-4xl" />
      </div>
      <RecipeListSkeleton />
      <div className="mt-6 flex items-center justify-center gap-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="size-8 rounded-md" />
        ))}
      </div>
    </main>
  );
}
