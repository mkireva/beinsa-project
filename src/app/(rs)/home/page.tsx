"use client";

import { useState, useMemo } from "react";
import { BookCard } from "./components/BookCard";
import { DashboardHeader } from "./components/DashboardHeader";

const metadata = {
  title: "Vorträge",
};

// Sample data structure with books
const booksByGenre = {
  "Frühe Vorträge": [
    {
      title: "Erster Vortrag - Wissenschaft und Erziehung",
      year: { year: 1895, month: 3, day: 15 },
    },
    { title: "Foundation", year: { year: 1897, month: 4, day: 12 } },
    { title: "Neuromancer", year: { year: 1898, month: 5, day: 20 } },
    { title: "Dune", year: { year: 1899, month: 6, day: 8 } },
    { title: "Foundation", year: { year: 1900, month: 7, day: 14 } },
    { title: "Neuromancer", year: { year: 1901, month: 8, day: 22 } },
    { title: "Dune", year: { year: 1902, month: 9, day: 25 } },
    { title: "Foundation", year: { year: 1903, month: 10, day: 28 } },
    { title: "Neuromancer", year: { year: 1904, month: 11, day: 30 } },
    { title: "Dune", year: { year: 1905, month: 12, day: 31 } },
    { title: "Foundation", year: { year: 1906, month: 1, day: 1 } },
    { title: "Neuromancer", year: { year: 1907, month: 2, day: 3 } },
  ],
  Sonntagsvorträge: [
    { title: "The Lord of the Rings", year: { year: 1914, month: 9, day: 7 } },
    { title: "A Game of Thrones", year: { year: 1915, month: 10, day: 15 } },
    { title: "The Name of the Wind", year: { year: 1916, month: 11, day: 23 } },
    {
      title: "The Lord of the Rings",
      year: { year: 1917, month: 12, day: 26 },
    },
    { title: "A Game of Thrones", year: { year: 1918, month: 1, day: 29 } },
    { title: "The Name of the Wind", year: { year: 1919, month: 2, day: 1 } },
  ],
  Morgenwort: [
    { title: "The Da Vinci Code", year: { year: 1920, month: 1, day: 5 } },
    { title: "Gone Girl", year: { year: 1921, month: 2, day: 18 } },
    {
      title: "The Girl with the Dragon Tattoo",
      year: { year: 1922, month: 3, day: 27 },
    },
    { title: "The Da Vinci Code", year: { year: 1923, month: 4, day: 30 } },
    { title: "Gone Girl", year: { year: 1924, month: 5, day: 31 } },
    {
      title: "The Girl with the Dragon Tattoo",
      year: { year: 1925, month: 6, day: 1 },
    },
  ],
  "Rila Vorträge": [
    { title: "Pride and Prejudice", year: { year: 1926, month: 7, day: 3 } },
    { title: "Outlander", year: { year: 1927, month: 8, day: 5 } },
    { title: "The Notebook", year: { year: 1928, month: 9, day: 7 } },
    { title: "Pride and Prejudice", year: { year: 1929, month: 10, day: 9 } },
    { title: "Outlander", year: { year: 1930, month: 11, day: 11 } },
    { title: "The Notebook", year: { year: 1931, month: 12, day: 13 } },
  ],
  Jugendokkultklasse: [
    { title: "Wolf Hall", year: { year: 1932, month: 1, day: 15 } },
    { title: "The Book Thief", year: { year: 1933, month: 2, day: 17 } },
    {
      title: "All the Light We Cannot See",
      year: { year: 1934, month: 3, day: 19 },
    },
    { title: "Wolf Hall", year: { year: 1935, month: 4, day: 21 } },
    { title: "The Book Thief", year: { year: 1936, month: 5, day: 23 } },
    {
      title: "All the Light We Cannot See",
      year: { year: 1937, month: 6, day: 25 },
    },
  ],
  "Allgemeine Okkultklasse": [
    { title: "Normal People", year: { year: 1938, month: 7, day: 27 } },
    { title: "The Midnight Library", year: { year: 1939, month: 8, day: 29 } },
    {
      title: "Beautiful World, Where Are You",
      year: { year: 1940, month: 9, day: 1 },
    },
    { title: "Normal People", year: { year: 1941, month: 10, day: 3 } },
    { title: "The Midnight Library", year: { year: 1942, month: 11, day: 5 } },
    {
      title: "Beautiful World, Where Are You",
      year: { year: 1943, month: 12, day: 7 },
    },
  ],
  Zusammenkuftsvorträge: [
    { title: "Beyond Good and Evil", year: { year: 1944, month: 1, day: 9 } },
    { title: "The Republic", year: { year: 1945, month: 2, day: 11 } },
    { title: "Meditations", year: { year: 1946, month: 3, day: 13 } },
    {
      title: "Thus Spoke Zarathustra",
      year: { year: 1947, month: 4, day: 15 },
    },
    {
      title: "Critique of Pure Reason",
      year: { year: 1948, month: 5, day: 17 },
    },
    { title: "Being and Time", year: { year: 1949, month: 6, day: 19 } },
  ],
  "Außerlplanmäßige Vorträge": [
    {
      title: "Thinking, Fast and Slow",
      year: { year: 1950, month: 7, day: 21 },
    },
    {
      title: "Man's Search for Meaning",
      year: { year: 1951, month: 8, day: 23 },
    },
    { title: "The Power of Habit", year: { year: 1952, month: 9, day: 25 } },
    {
      title: "Quiet: The Power of Introverts",
      year: { year: 1953, month: 10, day: 27 },
    },
    {
      title: "Flow: of Optimal Experience",
      year: { year: 1954, month: 11, day: 29 },
    },
    {
      title: "Mindset: The New of Success",
      year: { year: 1955, month: 12, day: 1 },
    },
  ],
  "Letztes Wort": [
    { title: "Good to Great", year: { year: 1956, month: 1, day: 3 } },
    { title: "Zero to One", year: { year: 1957, month: 2, day: 5 } },
    { title: "The Lean Startup", year: { year: 1958, month: 3, day: 7 } },
    { title: "Start with Why", year: { year: 1959, month: 4, day: 9 } },
    { title: "Deep Work", year: { year: 1960, month: 5, day: 11 } },
    { title: "Atomic Habits", year: { year: 1961, month: 6, day: 13 } },
  ],
  Jugendzusammenkunftsvorträge: [
    { title: "Steve Jobs", year: { year: 1962, month: 7, day: 15 } },
    { title: "Long Walk to Freedom", year: { year: 1963, month: 8, day: 17 } },
    {
      title: "The Diary of a Young Girl",
      year: { year: 1964, month: 9, day: 19 },
    },
    { title: "Becoming", year: { year: 1965, month: 10, day: 21 } },
    {
      title: "Einstein: His Life and Universe",
      year: { year: 1966, month: 11, day: 23 },
    },
    { title: "The Last Lion", year: { year: 1967, month: 12, day: 25 } },
  ],
  "Klasse Tugenden": [
    {
      title: "A Brief History of Time",
      year: { year: 1968, month: 1, day: 27 },
    },
    { title: "The Selfish Gene", year: { year: 1969, month: 2, day: 1 } },
    { title: "Cosmos", year: { year: 1970, month: 3, day: 3 } },
    { title: "The Origin of Species", year: { year: 1971, month: 4, day: 5 } },
    { title: "Silent Spring", year: { year: 1972, month: 5, day: 7 } },
    { title: "The Double Helix", year: { year: 1973, month: 6, day: 9 } },
  ],
  "Vorträge vor den Schwestern": [
    { title: "The Innovators", year: { year: 1974, month: 7, day: 11 } },
    { title: "Life 3.0", year: { year: 1975, month: 8, day: 13 } },
    { title: "Superintelligence", year: { year: 1976, month: 9, day: 15 } },
    { title: "The Code Book", year: { year: 1977, month: 10, day: 17 } },
    {
      title: "Artificial Intelligence",
      year: { year: 1978, month: 11, day: 19 },
    },
  ],
  "Vorträge von den Leitern": [
    {
      title: "The Art of Leadership",
      year: { year: 1979, month: 12, day: 21 },
    },
    { title: "Leading with Purpose", year: { year: 1980, month: 1, day: 23 } },
    { title: "Spiritual Leadership", year: { year: 1981, month: 2, day: 25 } },
    { title: "The Way of Wisdom", year: { year: 1982, month: 3, day: 27 } },
    { title: "Sacred Knowledge", year: { year: 1983, month: 4, day: 29 } },
  ],
};

// Define unique background colors for each genre
const genreColors = {
  "Frühe Vorträge": "bg-sky-50",
  Sonntagsvorträge: "bg-purple-50",
  Morgenwort: "bg-red-50",
  "Rila Vorträge": "bg-pink-50",
  Jugendokkultklasse: "bg-amber-50",
  "Allgemeine Okkultklasse": "bg-emerald-50",
  Zusammenkuftsvorträge: "bg-indigo-50",
  "Außerlplanmäßige Vorträge": "bg-violet-50",
  "Letztes Wort": "bg-blue-50",
  Jugendzusammenkunftsvorträge: "bg-orange-50",
  "Klasse der Tugenden": "bg-teal-50",
  "Vorträge vor den Schwestern": "bg-cyan-50",
  "Vorträge von den Leitern": "bg-yellow-50",
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
            return a.title.localeCompare(b.title, 'de');
          case "title-desc":
            return b.title.localeCompare(a.title, 'de');
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
  }, [booksByGenre, selectedCategory, searchQuery, sortOrder]);

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
            <BookCard
              key={genre}
              genre={genre}
              books={books}
              colorClass={genreColors[genre as keyof typeof genreColors]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
