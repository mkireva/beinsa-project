import { BookList } from "@/components/BookList";
import { DashboardCard } from "@/components/DashboardBooks";

export default function Board() {
  const cards = [
    {
      title: "Frühe Vorträge",
      content: (
        <>
          <BookList
            books={[
              { year: 2023, title: "The Creative Act", author: "Rick Rubin" },
              {
                year: 2022,
                title: "Building a Second Brain",
                author: "Tiago Forte",
              },
            ]}
          />
        </>
      ),
      badge: "EV",
      color:
        "from-blue-50/90 via-blue-100/50 to-blue-200/30 dark:from-blue-950/50 dark:via-blue-900/30 dark:to-blue-800/20",
      iconColor: "text-blue-500/20 dark:text-blue-300/20",
    },
    {
      title: " Sonntagsvorträge",
      content: (
        <BookList
          books={[
            { year: 2021, title: "Project Hail Mary", author: "Andy Weir" },
            { year: 2014, title: "The Martian", author: "Andy Weir" },
            { year: 1984, title: "Neuromancer", author: "William Gibson" },
          ]}
        />
      ),
      badge: "SV",
      color:
        "from-emerald-50/90 via-emerald-100/50 to-emerald-200/30 dark:from-emerald-950/50 dark:via-emerald-900/30 dark:to-emerald-800/20",
      iconColor: "text-emerald-500/20 dark:text-emerald-300/20",
    },
    {
      title: "Morgenwort",
      content: (
        <BookList
          books={[
            {
              year: 2018,
              title: "12 Rules for Life",
              author: "Jordan Peterson",
            },
            { year: 2017, title: "Skin in the Game", author: "Nassim Taleb" },
            {
              year: 1942,
              title: "The Myth of Sisyphus",
              author: "Albert Camus",
            },
          ]}
        />
      ),
      badge: "MW",
      color:
        "from-violet-50/90 via-violet-100/50 to-violet-200/30 dark:from-violet-950/50 dark:via-violet-900/30 dark:to-violet-800/20",
      iconColor: "text-violet-500/20 dark:text-violet-300/20",
    },
    {
      title: "Rila-Vorträge",
      content: (
        <BookList
          books={[
            { year: 2023, title: "The Age of AI", author: "Henry Kissinger" },
            { year: 2019, title: "Digital Minimalism", author: "Cal Newport" },
            { year: 2011, title: "Steve Jobs", author: "Walter Isaacson" },
          ]}
        />
      ),
      badge: "RV",
      color:
        "from-amber-50/90 via-amber-100/50 to-amber-200/30 dark:from-amber-950/50 dark:via-amber-900/30 dark:to-amber-800/20",
      iconColor: "text-amber-500/20 dark:text-amber-300/20",
    },
    {
      title: "Allgemeine Okkultklasse",
      content: (
        <BookList
          books={[
            { year: 2023, title: "The Age of AI", author: "Henry Kissinger" },
            { year: 2019, title: "Digital Minimalism", author: "Cal Newport" },
            { year: 2011, title: "Steve Jobs", author: "Walter Isaacson" },
          ]}
        />
      ),
      badge: "AOK",
      color:
        "from-amber-50/90 via-amber-100/50 to-amber-200/30 dark:from-amber-950/50 dark:via-amber-900/30 dark:to-amber-800/20",
      iconColor: "text-amber-500/20 dark:text-amber-300/20",
    },
    {
      title: "Jugendokkulklasse",
      content: (
        <BookList
          books={[
            { year: 2023, title: "The Age of AI", author: "Henry Kissinger" },
            { year: 2019, title: "Digital Minimalism", author: "Cal Newport" },
            { year: 2011, title: "Steve Jobs", author: "Walter Isaacson" },
          ]}
        />
      ),
      badge: "JOK",
      color:
        "from-amber-50/90 via-amber-100/50 to-amber-200/30 dark:from-amber-950/50 dark:via-amber-900/30 dark:to-amber-800/20",
      iconColor: "text-amber-500/20 dark:text-amber-300/20",
    },
    {
      title: "Zusammenkunftsvorträge",
      content: (
        <BookList
          books={[
            { year: 2023, title: "The Age of AI", author: "Henry Kissinger" },
            { year: 2019, title: "Digital Minimalism", author: "Cal Newport" },
            { year: 2011, title: "Steve Jobs", author: "Walter Isaacson" },
          ]}
        />
      ),
      badge: "ZV",
      color:
        "from-amber-50/90 via-amber-100/50 to-amber-200/30 dark:from-amber-950/50 dark:via-amber-900/30 dark:to-amber-800/20",
      iconColor: "text-amber-500/20 dark:text-amber-300/20",
    },
    {
      title: "Außerplanmäßige Vorträge",
      content: (
        <BookList
          books={[
            { year: 2023, title: "The Age of AI", author: "Henry Kissinger" },
            { year: 2019, title: "Digital Minimalism", author: "Cal Newport" },
            { year: 2011, title: "Steve Jobs", author: "Walter Isaacson" },
          ]}
        />
      ),
      badge: "AV",
      color:
        "from-amber-50/90 via-amber-100/50 to-amber-200/30 dark:from-amber-950/50 dark:via-amber-900/30 dark:to-amber-800/20",
      iconColor: "text-amber-500/20 dark:text-amber-300/20",
    },
    {
      title: "Letzte Vorträge",
      content: (
        <BookList
          books={[
            { year: 2023, title: "The Age of AI", author: "Henry Kissinger" },
            { year: 2019, title: "Digital Minimalism", author: "Cal Newport" },
            { year: 2011, title: "Steve Jobs", author: "Walter Isaacson" },
          ]}
        />
      ),
      badge: "LV",
      color:
        "from-amber-50/90 via-amber-100/50 to-amber-200/30 dark:from-amber-950/50 dark:via-amber-900/30 dark:to-amber-800/20",
      iconColor: "text-amber-500/20 dark:text-amber-300/20",
    },
  ];

  return (
    <main className="min-h-screen p-6 md:p-8 lg:p-12 bg-neutral-50/50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Übersicht aller Vorträge
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <DashboardCard
              key={index}
              title={card.title}
              badge={card.badge}
              color={card.color}
              iconColor={card.iconColor}
            >
              {card.content}
            </DashboardCard>
          ))}
        </div>
      </div>
    </main>
  );
}
