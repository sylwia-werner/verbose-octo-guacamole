import { Skeleton } from "@/shared/components/ui/skeleton";

// TODO: Add proper skeletons
export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Skeleton className="mb-6 h-9 w-32" />
    </main>
  );
}
