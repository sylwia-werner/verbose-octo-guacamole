import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

export function RecipeCardSkeleton() {
  return (
    <Card className="flex flex-col overflow-hidden">
      <Skeleton className="aspect-video w-full rounded-none" />
      <CardHeader className="pb-2">
        <Skeleton className="h-4 w-3/4" />
        <div className="flex gap-1">
          <Skeleton className="h-5 w-16 rounded-4xl" />
          <Skeleton className="h-5 w-12 rounded-4xl" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-3 w-18" />
          <Skeleton className="h-3 w-16" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-3 w-16" />
      </CardFooter>
    </Card>
  );
}
