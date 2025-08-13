"use client";

import { useState, useMemo } from "react";
import { BookCard } from "./components/BookCard";
import { DashboardHeader } from "./components/DashboardHeader";
// Sample data structure with books
const booksByGenre = {
  "Frühe Vorträge": [
    {
      title: "Erster Vortrag - Wissenschaft und Erziehung",
      year: { year: 1895, month: 3, day: 15 },
    },
    { title: "Hio Eli Meli Mesail - Die Geiheimnisse des Geistes", year: { year: 1897, month: 4, day: 12 } },
    { title: "Der Außerwählte Gottes und der Führer der Wahrhheit", year: { year: 1898, month: 5, day: 20 } },
    { title: "Aufruf an mein Volk - bulgarische Söhne der slawischen Familie", year: { year: 1899, month: 6, day: 8 } },
    { title: "Die Zeugnisse Gottes", year: { year: 1900, month: 7, day: 14 } },
    { title: "Gottes Versprechen", year: { year: 1901, month: 8, day: 22 } },
    { title: "Antworten auf die Zeugnisse Gottes", year: { year: 1902, month: 9, day: 25 } },
    { title: "Sieben Gespräche mit dem Geist Gottes - Erstes Gespräch - Anleitung", year: { year: 1903, month: 10, day: 28 } },
    { title: "Sieben Gespräche mit dem Geist Gottes - Zweites Gespräch - Das Herz und Gott", year: { year: 1904, month: 11, day: 30 } },
    { title: "Sieben Gespräche mit dem Geist Gottes - Drittes Gespräch - Nahrung und Wort", year: { year: 1905, month: 12, day: 31 } },
    { title: "Sieben Gespräche mit dem Geist Gottes - Fünftes Gespräch - Erhebung Geist und Seele", year: { year: 1906, month: 1, day: 1 } },
    { title: "Sieben Gespräche mit dem Geist Gottes - Viertes Gespräch - Das Leben und die Wiedergeburt", year: { year: 1907, month: 2, day: 3 } },
    { title: "Sieben Gespräche mit dem Geist Gottes - Sechstes Gespräch - Der Weg und die Wahrheit", year: { year: 1907, month: 2, day: 3 } },
    { title: "Sieben Gespräche mit dem Geist Gottes - Siebtes Gespräch - Beschluss", year: { year: 1907, month: 2, day: 3 } },
    { title: "Drei Dinge - Gespräch mit dem Geist Gottes", year: { year: 1907, month: 2, day: 3 } },
    { title: "Der Eigenwille", year: { year: 1907, month: 2, day: 3 } },
    { title: "Der richtige Zeitpunkt", year: { year: 1907, month: 2, day: 3 } },
    { title: "Gedanken und Anleitungen", year: { year: 1907, month: 2, day: 3 } },
    { title: "Wort 1903, Varna", year: { year: 1907, month: 2, day: 3 } },
    { title: "Der Wunsch Gottes", year: { year: 1907, month: 2, day: 3 } },
    { title: "Wort Russe 1903", year: { year: 1907, month: 2, day: 3 } },
    { title: "Wort Varna 1904", year: { year: 1907, month: 2, day: 3 } },

  ],
  Sonntagsvorträge: [
    { title: "Seht, der Mensch!", year: { year: 1914, month: 9, day: 7 } },
    { title: "Der Fest des Frühlings", year: { year: 1915, month: 10, day: 15 } },
    { title: "Das Weizenkorn", year: { year: 1916, month: 11, day: 23 } },
    {
      title: "Die vier Hauptelemente",
      year: { year: 1917, month: 12, day: 26 },
    },
    { title: "Erkennt die Wahrheit und die Wahrheit wird euch frei machen", year: { year: 1918, month: 1, day: 29 } },
    { title: "Die Erscheinung Des Heiligen Geistes", year: { year: 1919, month: 2, day: 1 } },
    { title: "Die Talente", year: { year: 1920, month: 1, day: 5 } },
    { title: "Die Liebe", year: { year: 1921, month: 2, day: 18 } },
    {
      title: "Die Träume des Joseph",
      year: { year: 1922, month: 3, day: 27 },
    },
    { title: "Das Gesetz des Dienens", year: { year: 1923, month: 4, day: 30 } },
    { title: "Die Wichtigkeit der kleinen Dinge", year: { year: 1924, month: 5, day: 31 } },
    { title: "Friede sei mit Euch!", year: { year: 1925, month: 6, day: 1 }, },
    { title: "Die Notwendigkeit, Gott zu erkennen", year: { year: 1925, month: 6, day: 1 }, },
    { title: "Wie viel mehr ist nun ein Mensch als ein Schaf!", year: { year: 1925, month: 6, day: 1 }, },
    { title: "Pharisäer und Zöllner", year: { year: 1925, month: 6, day: 1 }, },
    { title: "Die Bedingungen für das ewige Leben", year: { year: 1925, month: 6, day: 1 }, },
    { title: "Die Furcht", year: { year: 1925, month: 6, day: 1 }, },
    { title: "Im Anfang war", year: { year: 1925, month: 6, day: 1 }, },
    { title: "Vernünftige Milch", year: { year: 1925, month: 6, day: 1 }, },
  ],
  Morgenwort: [
    { title: "Vernünftige Milch", year: { year: 1925, month: 6, day: 1 }, },
  ],
  "Rila Vorträge": [
    { title: "In Vorbereitung ...", year: { year: 1926, month: 7, day: 3 } },
  ],
  Jugendokkultklasse: [
    { title: "In Vorbereitung ...", year: { year: 1932, month: 1, day: 15 } },

  ],
  "Allgemeine Okkultklasse": [
    { title: "In Vorbereitung ...", year: { year: 1938, month: 7, day: 27 } },

  ],
  Zusammenkunftsvorträge: [
    { title: "In Vorbereitung ...", year: { year: 1944, month: 1, day: 9 } },
  ],
  "Außerlplanmäßige Vorträge": [
    {
      title: "In Vorbereitung ...",
      year: { year: 1950, month: 7, day: 21 },
    },

  ],
  "Letztes Wort": [
    { title: "In Vorbereitung ...", year: { year: 1956, month: 1, day: 3 } },
  ],
  Jugenzusammenkünfte: [
    { title: "In Vorbereitung ...", year: { year: 1962, month: 7, day: 15 } },
  ],
  "Klasse Tugenden": [
    {
      title: "In Vorbereitung ...",
      year: { year: 1968, month: 1, day: 27 },
    },
  ],
  "Vorträge vor den Schwestern": [
    { title: "In Vorbereitung ...", year: { year: 1914, month: 7, day: 11 } },

  ],
  "Vorträge von den Leitern": [
    {
      title: "In Vorbereitung ...",
      year: { year: 1914, month: 12, day: 21 },
    },
  ],
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("oldest");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = Object.keys(booksByGenre);

  const filteredAndSortedBooks = useMemo(() => {
    const result = Object.entries(booksByGenre).reduce<{
      [key: string]: {
        title: string;
        year: { year: number; month: number; day: number };
      }[];
    }>((acc, [genre, books]) => {
      // Skip if category is selected and doesn't match
      if (selectedCategory !== "all" && selectedCategory !== genre) {
        return acc;
      }

      // Filter books based on search query
      let filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Sort books based on selected order
      filteredBooks = [...filteredBooks].sort((a, b) => {
        switch (sortOrder) {
          case "newest":
            return (
              new Date(b.year.year, b.year.month - 1, b.year.day).getTime() -
              new Date(a.year.year, a.year.month - 1, a.year.day).getTime()
            );
          case "oldest":
            return (
              new Date(a.year.year, a.year.month - 1, a.year.day).getTime() -
              new Date(b.year.year, b.year.month - 1, b.year.day).getTime()
            );
          case "title-asc":
            return a.title.localeCompare(b.title, "de");
          case "title-desc":
            return b.title.localeCompare(a.title, "de");
          default:
            return 0;
        }
      });

      // Only add books if they match the filter
      if (filteredBooks.length > 0) {
        acc[genre] = filteredBooks;
      }

      return acc;
    }, {});

    return result;
  }, [selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen bg-background dark:bg-slate-950 p-3 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader
          onSearch={setSearchQuery}
          onSort={setSortOrder}
          onCategoryChange={setSelectedCategory}
          categories={categories}
          selectedCategory={selectedCategory}
          sortOrder={sortOrder}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {Object.entries(filteredAndSortedBooks).map(([genre, books]) => (
            <BookCard key={genre} genre={genre} books={books} />
          ))}
        </div>
      </div>
    </div>
  );
}
