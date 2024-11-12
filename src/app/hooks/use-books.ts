"use client";

import { useState, useEffect } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  coverUrl: string;
}

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchBooks() {
    try {
      setIsLoading(true);
      setError(null);

      // Simulated API call with sample data
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const sampleBooks: Book[] = [
        {
          id: "1",
          title: "Anhaltspunkte des Lebens",
          author: "Beinsa Duno",
          year: 2015,
          coverUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
        },
        {
          id: "2",
          title: "Gebetbuch",
          author: "Beinsa Duno",
          year: 2018,
          coverUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
        },
        {
          id: "3",
          title: "Kraft und Leben",
          author: "Beinsa Duno",
          year: 2021,
          coverUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
        },
        {
          id: "4",
          title: "Heilige Worte des Meisters",
          author: "Beinsa Duno",
          year: 2019,
          coverUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
        },
        {
          id: "5",
          title: "Umgang mit Gott",
          author: "Beinsa Duno",
          year: 2015,
          coverUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
        },
        {
          id: "6",
          title: "Er kommt - Frühe Vorträge",
          author: "Beinsa Duno",
          year: 2025,
          coverUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
        },
        {
          id: "7",
          title: "Liederbuch",
          author: "Beinsa Duno",
          year: 2025,
          coverUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
        },
        {
          id: "8",
          title: "Pentagramm",
          author: "Beinsa Duno",
          year: 2015,
          coverUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
        },
        {
          id: "9",
          title: "Wissenschaft und Erziehung",
          author: "Beinsa Duno",
          year: 2016,
          coverUrl:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
        },
      ].sort((a, b) => b.year - a.year);

      setBooks(sampleBooks);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch books"));
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    isLoading,
    error,
    retry: fetchBooks,
  };
}
