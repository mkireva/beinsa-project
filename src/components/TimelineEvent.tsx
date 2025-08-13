"use client";

import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  image?: string;
  index: number;
}

export function TimelineEvent({
  date,
  title,
  description,
  image,
  index,
}: TimelineEventProps) {
  return (
    <div
      className={cn(
        "timeline-item opacity-0 transition-all duration-700 ease-out translate-y-8",
        "mb-8 sm:mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className={cn(
          "md:text-right md:pr-8 lg:pr-12",
          index % 2 === 1 && "md:col-start-2 md:pl-8 lg:pl-12 md:pr-0 md:text-left"
        )}
      >
        <Card className="p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow">
          <div className={cn(
            "flex items-center gap-2 mb-2 sm:mb-4",
            index % 2 === 1 ? "justify-start" : "justify-start md:justify-end"
          )}>
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            <span className="text-xs sm:text-sm font-bold text-muted-foreground">
              {date}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 leading-tight">{title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-prose">
            {description}
          </p>
        </Card>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary border-4 border-background shadow-lg" />
      </div>

      {image && (
        <div
          className={cn(
            "group relative overflow-hidden rounded-lg h-[300px] sm:h-[400px] md:h-[500px]",
            "shadow-lg transition-all duration-500",
            index % 2 === 0 && "md:col-start-2"
          )}
        >
          <div className="absolute inset-0">
            <Image
              loading={"lazy"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      )}
    </div>
  );
}
