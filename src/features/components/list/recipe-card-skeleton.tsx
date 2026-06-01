import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

export function RecipeCardSkeleton() {
  return (
    <Card className="relative flex flex-col overflow-hidden pt-0">
      <Skeleton className="aspect-video w-full rounded-t-xl rounded-b-none" />
      <CardHeader className="pb-2">
        <Skeleton className="h-5 w-3/4" />
        <div className="flex gap-1.5">
          <Skeleton className="h-5 w-16 rounded-4xl" />
          <Skeleton className="h-5 w-12 rounded-4xl" />
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-14" />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-3 w-16" />
      </CardFooter>
    </Card>
  );
}
