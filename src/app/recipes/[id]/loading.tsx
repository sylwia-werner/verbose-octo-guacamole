import { RecipeDetailSkeleton } from "@/features/components/detail/recipe-detail-skeleton";
import { Skeleton } from "@/shared/components/ui/skeleton";

export default function RecipeLoading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Skeleton className="mb-6 h-9 w-32 rounded-4xl" />
      <RecipeDetailSkeleton />
    </main>
  );
}
