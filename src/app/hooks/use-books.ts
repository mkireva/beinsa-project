"use client";

import { useState, useEffect } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  coverUrl: string;
  downloadUrl?: string; // Optional field for download URL
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
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQwmki4XyFK2Nv4dsDCHg83rpqubyaWhYtL7cV",
          downloadUrl:
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQAHbxEdiJ1DykdOfsG3XcY8pmTVbt9N4UQrle",
        },
        {
          id: "2",
          title: "Gebetbuch",
          author: "Beinsa Duno",
          year: 2015,
          coverUrl:
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQVWxGITmkwsCUry048b3QIelhOJqxfNZj2BDT",
          downloadUrl:
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQQ5DaI6VU6D2ljuwxbRIfyrVpQ0N8JvikaHom",
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
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQ4h9VWsACpuKxrgECVa8tYeJWRfUT4jD5yv3B",
          downloadUrl:
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQtSbIpVkR1zQLchfZbJiNH7MoP0DKx9vygrae",
        },
        {
          id: "5",
          title: "Gemeinschaft mit Gott",
          author: "Beinsa Duno",
          year: 2017,
          coverUrl:
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQIlOUZyMDPEDmUC0VhgyjdRa5Ofx17wQcS2LT",
          downloadUrl:
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQQTDTrpoVU6D2ljuwxbRIfyrVpQ0N8JvikaHo",
        },
        {
          id: "6",
          title: "Frühe Vorträge",
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
          year: 2025,
          coverUrl:
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQPNTq0InetHXQErSuR92IBV4bmMhZ5zlDJd08",
           downloadUrl:
            "https://9avmcc5vs8.ufs.sh/f/XpskSe8ltAOQIkwtJlDPEDmUC0VhgyjdRa5Ofx17wQcS2LTz",
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
