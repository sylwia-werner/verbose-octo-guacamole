import { Skeleton } from "@/shared/components/ui/skeleton";

export function RecipeDetailSkeleton() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <Skeleton className="aspect-video w-full rounded-xl" />

        <div className="flex flex-col gap-4">
          <Skeleton className="h-9 w-3/4" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-16 rounded-4xl" />
            <Skeleton className="h-5 w-12 rounded-4xl" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="rounded-lg border p-3">
                <Skeleton className="mb-1 h-3 w-16" />
                <Skeleton className="h-4 w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Skeleton className="mb-4 h-7 w-32" />
          <div className="space-y-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-full" />
            ))}
          </div>
        </div>
        <div>
          <Skeleton className="mb-4 h-7 w-32" />
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex gap-3">
                <Skeleton className="h-6 w-6 shrink-0 rounded-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
