"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  year: number;
  coverUrl: string;
}

export function BookCard({ title, author, year, coverUrl }: BookCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="aspect-square relative overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={coverUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold line-clamp-1">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-3.5 w-3.5" />
            <span className="line-clamp-1">{author}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {year}
          </Badge>
        </div>
      </div>
    </Card>
  );
}