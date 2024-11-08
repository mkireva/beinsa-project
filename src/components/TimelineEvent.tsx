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
        "mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 relative"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className={cn(
          "md:text-right md:pr-12",
          index % 2 === 1 && "md:col-start-2 md:pl-12 md:pr-0 md:text-left"
        )}
      >
        <Card className="p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4 justify-end">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-bold text-muted-foreground">
              {date}
            </span>
          </div>
          <h3 className="text-2xl font-semibold mb-3 leading-tight">{title}</h3>
          <p className="text-muted-foreground leading-relaxed max-w-prose">
            {description}
          </p>
        </Card>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />
      </div>

      {image && (
        <div
          className={cn(
            "group relative overflow-hidden rounded-lg h-[500px]",
            "shadow-lg transition-all duration-500",
            index % 2 === 0 && "md:col-start-2"
          )}
        >
          <div className="absolute inset-0">
            <Image
              loading={"lazy"}
              fill
              sizes="auto"
              src={image}
              alt={title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 md:w-full md:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      )}
    </div>
  );
}
