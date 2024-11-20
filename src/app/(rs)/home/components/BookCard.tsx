import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";

interface Book {
  title: string;
  year: {
    year: number;
    month: number;
    day: number;
  };
}

interface BookCardProps {
  genre: string;
  books: Book[];
}

const getGenreAbbreviation = (genre: string) => {
  // Normalize the genre name to handle slight variations
  if (genre.startsWith("Zusammenkunft")) {
    return "ZKV";
  }
  
  switch (genre) {
    // Okkult Classes
    case "Jugendokkultklasse":
      return "JOK";
    case "Allgemeine Okkultklasse":
      return "AOK";
      
    // Regular Lectures
    case "Frühe Vorträge":
      return "FV";
    case "Sonntagsvorträge":
      return "SV";
    case "Rila Vorträge":
      return "RV";
    case "Morgenwort":
      return "MW";
    case "Spezialvorträge":
      return "SpV";
    case "Außerlplanmäßige Vorträge":
      return "APV";
    case "Letztes Wort":
      return "LW";
    
    // Special Groups
    case "Vorträge bei den Jugenzusammenkünften":
      return "VJZ";
    case "Klasse der Tugenden":
      return "KdT";
    case "Vorträge vor den Schwestern":
      return "VvS";
    case "Vorträge von den Leitern":
      return "VvL";
    case "Besondere Vorträge":
      return "BV";
    default:
      return genre.substring(0, 3).toUpperCase();
  }
};

export function BookCard({ genre, books }: BookCardProps) {
  return (
    <Card
      className={`w-full ${
        genre === "Jugendokkultklasse"
          ? "bg-yellow-50/30 dark:bg-yellow-900/20"
          : genre === "Frühe Vorträge"
          ? "bg-sky-50/30 dark:bg-sky-900/20"
          : genre === "Sonntagsvorträge"
          ? "bg-purple-50/30 dark:bg-purple-900/20"
          : genre === "Morgenwort"
          ? "bg-red-50/30 dark:bg-red-900/20"
          : genre === "Rila Vorträge"
          ? "bg-pink-50/30 dark:bg-pink-900/20"
          : genre === "Allgemeine Okkultklasse"
          ? "bg-emerald-50/30 dark:bg-emerald-900/20"
          : genre === "Zusammenkunftsvorträge"
          ? "bg-indigo-50/30 dark:bg-indigo-900/20"
          : genre === "Außerlplanmäßige Vorträge"
          ? "bg-violet-50/30 dark:bg-violet-900/20"
          : genre === "Letztes Wort"
          ? "bg-blue-50/30 dark:bg-blue-900/20"
          : genre === "Vorträge bei den Jugenzusammenkünften"
          ? "bg-orange-50/30 dark:bg-orange-900/20"
          : genre === "Klasse der Tugenden"
          ? "bg-teal-50/30 dark:bg-teal-900/20"
          : genre === "Vorträge vor den Schwestern"
          ? "bg-cyan-50/30 dark:bg-cyan-900/20"
          : genre === "Vorträge von den Leitern"
          ? "bg-amber-50/30 dark:bg-amber-900/20"
          : "bg-sky-50/30 dark:bg-sky-900/20"
      } transition-all duration-300 hover:scale-[1.02]`}
    >
      <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 p-4 sm:p-6">
        <h1
          className={`text-xl sm:text-2xl font-semibold leading-tight sm:leading-none ${
            genre === "Jugendokkultklasse"
              ? "text-yellow-700 dark:text-yellow-400"
              : genre === "Frühe Vorträge"
              ? "text-sky-700 dark:text-sky-400"
              : genre === "Sonntagsvorträge"
              ? "text-purple-700 dark:text-purple-400"
              : genre === "Morgenwort"
              ? "text-red-700 dark:text-red-400"
              : genre === "Rila Vorträge"
              ? "text-pink-700 dark:text-pink-400"
              : genre === "Allgemeine Okkultklasse"
              ? "text-emerald-700 dark:text-emerald-400"
              : genre === "Zusammenkunftsvorträge"
              ? "text-indigo-700 dark:text-indigo-400"
              : genre === "Außerlplanmäßige Vorträge"
              ? "text-violet-700 dark:text-violet-400"
              : genre === "Letztes Wort"
              ? "text-blue-700 dark:text-blue-400"
              : genre === "Vorträge bei den Jugenzusammenkünften"
              ? "text-orange-700 dark:text-orange-400"
              : genre === "Klasse der Tugenden"
              ? "text-teal-700 dark:text-teal-400"
              : genre === "Vorträge vor den Schwestern"
              ? "text-cyan-700 dark:text-cyan-400"
              : genre === "Vorträge von den Leitern"
              ? "text-amber-700 dark:text-amber-400"
              : "text-sky-700 dark:text-sky-400"
          }`}
        >
          {genre}
        </h1>
        <div className="flex justify-start">
          <Badge
            variant="outline"
            className={`text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1 whitespace-nowrap ${
              genre === "Jugendokkultklasse"
                ? "border-yellow-700 text-yellow-700 dark:border-yellow-400 dark:text-yellow-400"
                : genre === "Frühe Vorträge"
                ? "border-sky-700 text-sky-700 dark:border-sky-400 dark:text-sky-400"
                : genre === "Sonntagsvorträge"
                ? "border-purple-700 text-purple-700 dark:border-purple-400 dark:text-purple-400"
                : genre === "Morgenwort"
                ? "border-red-700 text-red-700 dark:border-red-400 dark:text-red-400"
                : genre === "Rila Vorträge"
                ? "border-pink-700 text-pink-700 dark:border-pink-400 dark:text-pink-400"
                : genre === "Allgemeine Okkultklasse"
                ? "border-emerald-700 text-emerald-700 dark:border-emerald-400 dark:text-emerald-400"
                : genre === "Zusammenkunftsvorträge"
                ? "border-indigo-700 text-indigo-700 dark:border-indigo-400 dark:text-indigo-400"
                : genre === "Außerlplanmäßige Vorträge"
                ? "border-violet-700 text-violet-700 dark:border-violet-400 dark:text-violet-400"
                : genre === "Letztes Wort"
                ? "border-blue-700 text-blue-700 dark:border-blue-400 dark:text-blue-400"
                : genre === "Vorträge bei den Jugenzusammenkünften"
                ? "border-orange-700 text-orange-700 dark:border-orange-400 dark:text-orange-400"
                : genre === "Klasse der Tugenden"
                ? "border-teal-700 text-teal-700 dark:border-teal-400 dark:text-teal-400"
                : genre === "Vorträge vor den Schwestern"
                ? "border-cyan-700 text-cyan-700 dark:border-cyan-400 dark:text-cyan-400"
                : genre === "Vorträge von den Leitern"
                ? "border-amber-700 text-amber-700 dark:border-amber-400 dark:text-amber-400"
                : "border-sky-700 text-sky-700 dark:border-sky-400 dark:text-sky-400"
            }`}
          >
            {books.length} {getGenreAbbreviation(genre)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-6 pt-0 sm:pt-0">
        {books.map((book, index) => {
          // Create a dummy date for the year to format it nicely
          const dummyDate = new Date(
            book.year.year,
            book.year.month - 1,
            book.year.day
          );
          return (
            <div
              key={index}
              className={`rounded-md p-2 sm:p-3 backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md ${
                genre === "Jugendokkultklasse"
                  ? "bg-yellow-100/50 hover:bg-yellow-100/70 dark:bg-yellow-800/30 dark:hover:bg-yellow-800/50"
                  : genre === "Frühe Vorträge"
                  ? "bg-sky-100/50 hover:bg-sky-100/70 dark:bg-sky-800/30 dark:hover:bg-sky-800/50"
                  : genre === "Sonntagsvorträge"
                  ? "bg-purple-100/50 hover:bg-purple-100/70 dark:bg-purple-800/30 dark:hover:bg-purple-800/50"
                  : genre === "Morgenwort"
                  ? "bg-red-100/50 hover:bg-red-100/70 dark:bg-red-800/30 dark:hover:bg-red-800/50"
                  : genre === "Rila Vorträge"
                  ? "bg-pink-100/50 hover:bg-pink-100/70 dark:bg-pink-800/30 dark:hover:bg-pink-800/50"
                  : genre === "Allgemeine Okkultklasse"
                  ? "bg-emerald-100/50 hover:bg-emerald-100/70 dark:bg-emerald-800/30 dark:hover:bg-emerald-800/50"
                  : genre === "Zusammenkunftsvorträge"
                  ? "bg-indigo-100/50 hover:bg-indigo-100/70 dark:bg-indigo-800/30 dark:hover:bg-indigo-800/50"
                  : genre === "Außerlplanmäßige Vorträge"
                  ? "bg-violet-100/50 hover:bg-violet-100/70 dark:bg-violet-800/30 dark:hover:bg-violet-800/50"
                  : genre === "Letztes Wort"
                  ? "bg-blue-100/50 hover:bg-blue-100/70 dark:bg-blue-800/30 dark:hover:bg-blue-800/50"
                  : genre === "Vorträge bei den Jugenzusammenkünften"
                  ? "bg-orange-100/50 hover:bg-orange-100/70 dark:bg-orange-800/30 dark:hover:bg-orange-800/50"
                  : genre === "Klasse der Tugenden"
                  ? "bg-teal-100/50 hover:bg-teal-100/70 dark:bg-teal-800/30 dark:hover:bg-teal-800/50"
                  : genre === "Vorträge vor den Schwestern"
                  ? "bg-cyan-100/50 hover:bg-cyan-100/70 dark:bg-cyan-800/30 dark:hover:bg-cyan-800/50"
                  : genre === "Vorträge von den Leitern"
                  ? "bg-amber-100/50 hover:bg-amber-100/70 dark:bg-amber-800/30 dark:hover:bg-amber-800/50"
                  : "bg-sky-100/50 hover:bg-sky-100/70 dark:bg-sky-800/30 dark:hover:bg-sky-800/50"
              }`}
            >
              <div
                className={`text-base flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-2 ${
                  genre === "Jugendokkultklasse"
                    ? "text-yellow-700 dark:text-yellow-300"
                    : genre === "Frühe Vorträge"
                    ? "text-sky-700 dark:text-sky-300"
                    : genre === "Sonntagsvorträge"
                    ? "text-purple-700 dark:text-purple-300"
                    : genre === "Morgenwort"
                    ? "text-red-700 dark:text-red-300"
                    : genre === "Rila Vorträge"
                    ? "text-pink-700 dark:text-pink-300"
                    : genre === "Allgemeine Okkultklasse"
                    ? "text-emerald-700 dark:text-emerald-300"
                    : genre === "Zusammenkunftsvorträge"
                    ? "text-indigo-700 dark:text-indigo-300"
                    : genre === "Außerlplanmäßige Vorträge"
                    ? "text-violet-700 dark:text-violet-300"
                    : genre === "Letztes Wort"
                    ? "text-blue-700 dark:text-blue-300"
                    : genre === "Vorträge bei den Jugenzusammenkünften"
                    ? "text-orange-700 dark:text-orange-300"
                    : genre === "Klasse der Tugenden"
                    ? "text-teal-700 dark:text-teal-300"
                    : genre === "Vorträge vor den Schwestern"
                    ? "text-cyan-700 dark:text-cyan-300"
                    : genre === "Vorträge von den Leitern"
                    ? "text-amber-700 dark:text-amber-300"
                    : "text-sky-700 dark:text-sky-300"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0 w-full sm:w-auto">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm flex-shrink-0 ${
                      genre === "Jugendokkultklasse"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300"
                        : genre === "Frühe Vorträge"
                        ? "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300"
                        : genre === "Sonntagsvorträge"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
                        : genre === "Morgenwort"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                        : genre === "Rila Vorträge"
                        ? "bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300"
                        : genre === "Allgemeine Okkultklasse"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : genre === "Zusammenkunftsvorträge"
                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
                        : genre === "Außerlplanmäßige Vorträge"
                        ? "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300"
                        : genre === "Letztes Wort"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                        : genre === "Vorträge bei den Jugenzusammenkünften"
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300"
                        : genre === "Klasse der Tugenden"
                        ? "bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300"
                        : genre === "Vorträge vor den Schwestern"
                        ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300"
                        : genre === "Vorträge von den Leitern"
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                        : "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`font-medium transition-colors duration-300 truncate ${
                      genre === "Jugendokkultklasse"
                        ? "hover:text-yellow-500 dark:hover:text-yellow-200"
                        : genre === "Frühe Vorträge"
                        ? "hover:text-sky-500 dark:hover:text-sky-200"
                        : genre === "Sonntagsvorträge"
                        ? "hover:text-purple-500 dark:hover:text-purple-200"
                        : genre === "Morgenwort"
                        ? "hover:text-red-500 dark:hover:text-red-200"
                        : genre === "Rila Vorträge"
                        ? "hover:text-pink-500 dark:hover:text-pink-200"
                        : genre === "Allgemeine Okkultklasse"
                        ? "hover:text-emerald-500 dark:hover:text-emerald-200"
                        : genre === "Zusammenkunftsvorträge"
                        ? "hover:text-indigo-500 dark:hover:text-indigo-200"
                        : genre === "Außerlplanmäßige Vorträge"
                        ? "hover:text-violet-500 dark:hover:text-violet-200"
                        : genre === "Letztes Wort"
                        ? "hover:text-blue-500 dark:hover:text-blue-200"
                        : genre === "Vorträge bei den Jugenzusammenkünften"
                        ? "hover:text-orange-500 dark:hover:text-orange-200"
                        : genre === "Klasse der Tugenden"
                        ? "hover:text-teal-500 dark:hover:text-teal-200"
                        : genre === "Vorträge vor den Schwestern"
                        ? "hover:text-cyan-500 dark:hover:text-cyan-200"
                        : genre === "Vorträge von den Leitern"
                        ? "hover:text-amber-500 dark:hover:text-amber-200"
                        : "hover:text-sky-500 dark:hover:text-sky-200"
                    }`}
                  >
                    {book.title}
                  </span>
                </div>
                <span className="font-mono text-sm opacity-75 dark:opacity-60 pl-8 sm:pl-0">
                  {format(dummyDate, "dd.MM.yyyy", { locale: de })}
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
