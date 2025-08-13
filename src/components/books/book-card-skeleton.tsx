import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function BookCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative bg-neutral-100 dark:bg-neutral-800">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="p-4 space-y-3">
        <div className="space-y-2">
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-4 w-3/5" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
    </Card>
  );
}