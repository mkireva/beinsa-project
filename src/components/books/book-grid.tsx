"use client";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useBooks } from "@/app/hooks/use-books";
import { BookCardSkeleton } from "./book-card-skeleton";
import { BookCard } from "./book-card";

export function BookGrid() {
  const { books, isLoading, error, retry } = useBooks();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <BookCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex items-center gap-4">
          Failed to load books.
          <Button variant="outline" size="sm" onClick={retry}>
            Try Again
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
          coverUrl={book.coverUrl}
          downloadUrl={book.downloadUrl}
        />
      ))}
    </div>
  );
}