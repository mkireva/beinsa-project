"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Button } from "../ui/button";

interface BookCardProps {
  title: string;
  author: string;
  year: number;
  coverUrl: string;
  downloadUrl?: string;
}

export function BookCard({
  title,
  author,
  year,
  coverUrl,
  downloadUrl,
}: BookCardProps) {
  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('Download clicked for:', title, 'URL:', downloadUrl);

    if (!downloadUrl) {
      console.error('No download URL provided');
      return;
    }

    try {
      // Try direct download first
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${title}.pdf`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Download initiated');
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(downloadUrl, '_blank', 'noopener,noreferrer');
    }
  };
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
        <div className="flex items-stretch gap-2">
          <Badge variant="secondary" className="gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {year}
          </Badge>
          {downloadUrl ? (
            <Button
              variant={"outline"}
              onClick={handleDownload}
              className="cursor-pointer"
              type="button"
            >
              Download
            </Button>
          ) : (
            <Button variant={"outline"} disabled>
              No Download
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
