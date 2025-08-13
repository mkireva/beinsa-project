import { BookGrid } from "@/components/books/book-grid";

export const metadata = {
  title: "Downloads",
};

export default function Downloads() {
  return (
    <main className="min-h-screen p-2 md:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-100">
           Bücher
          </h1>
          <p className="text-muted-foreground">
            Entdecken Sie Ihr nächstes Lieblingsbuch aus unserer Sammlung.
          </p>
        </div>
        <div className="p-6 md:p-8 lg:p-12 bg-zinc-100/50 dark:bg-card backdrop-blur-md rounded-xl">
          <BookGrid />
        </div>
      </div>
    </main>
  );
}
