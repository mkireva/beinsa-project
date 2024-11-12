import { Book } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  badge: string;
  color: string;
  iconColor: string;
  children: React.ReactNode;
}

export function DashboardCard({ 
  title, 
  badge, 
  color, 
  iconColor, 
  children 
}: DashboardCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden border-none group",
      "transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
      "bg-gradient-to-br from-white/90 to-white/50 dark:from-neutral-900/90 dark:to-neutral-900/50",
      color
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5" />
      <Book 
        className={cn(
          "absolute top-6 right-6 w-16 h-16 opacity-10 transition-transform duration-300",
          iconColor,
          "group-hover:rotate-3"
        )} 
      />
      <div className="p-8 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {title}
          </h2>
          <Badge 
            variant="secondary" 
            className={cn(
              "ml-2 px-3 py-1",
              "bg-neutral-900/5 dark:bg-neutral-100/10",
              "text-neutral-700 dark:text-neutral-200"
            )}
          >
            {badge}
          </Badge>
        </div>
        {children}
      </div>
    </Card>
  );
}