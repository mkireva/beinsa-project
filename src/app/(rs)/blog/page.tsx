import { getCategorisedArticles } from "@/app/lib/articles";
import ArticleItemList from "@/components/ArticlesList";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  const articles = getCategorisedArticles();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <header className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gedanken, Ereignisse, Erkenntnisse
          </p>
          <Separator className="max-w-24 mx-auto" />
        </header>

        <section className="grid lg:grid-cols-2 gap-12">
          {articles !== null &&
            Object.keys(articles).map((article) => (
              <ArticleItemList
                category={article}
                articles={articles[article]}
                key={article}
              />
            ))}
        </section>
      </div>
    </div>
  );
}
