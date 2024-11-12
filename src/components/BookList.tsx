import { cn } from "@/lib/utils";

interface Book {
  year: number;
  title: string;
  author: string;
}

interface BookListProps {
  books: Book[];
  className?: string;
}

export function BookList({ books, className }: BookListProps) {
  const sortedBooks = [...books].sort((a, b) => b.year - a.year);

  return (
    <ul className={cn("space-y-3", className)}>
      {sortedBooks.map((book, index) => (
        <li 
          key={index} 
          className="flex items-start space-x-3 text-sm"
        >
          <span className="font-mono text-neutral-600 dark:text-neutral-400 pt-0.5">
            {book.year}
          </span>
          <span className="flex-1">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">
              {book.title}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              by {book.author}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}