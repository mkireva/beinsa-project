import Image from "next/image";
import { ScrollText, Section } from "@/components/SectionScroll";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Musik",
};

const lectureSections: Section[] = [
  {
    content: [
      "Wenn die Natur sich erneuert, dann singen die Vögel. Am Anfang jeder göttlicher Kultur singen die Menschen. Wenn die Welt wieder erschaffen wird, dann singen die Engel. Aus dem ältesten Buch der Welt",
    ],
  },
  {
    content: [
      "Der Weg, die Wahrheit und das Leben – das sind die ersten Grundtöne der ideellen Harmonie, die im Kosmos existiert. Auf sie gründet das vernünftige Leben.",
    ],
  },
  {
    content: [
      "Die Melodie ist der musikalische, ideelle Ruf der menschlichen Seele zu Gott. Die Harmonie ist die Antwort Gottes.",
    ],
  },
  {
    title: "Okkulte Musikübungen",
    content: [
      "Petar Danov misst der Musik eine besondere Bedeutung bei. Sie ist eine der wichtigsten Methoden innerhalb der okkulten Schule und dient der Selbsterziehung und kultivierung geisiger Qualitäten. Während seiner Tätigkeit komponierte Petar Danov ca 190 musikalische Kompositionen, die er okkulte Übungen nannte. Sie haben eine mächtige Wirkkraft auf dem Zuhörer und Interpreten, die sich erst in der Praxis und insbesondere beim mehrmaligen Wiederholen der einzelen Melodien und Lieder entfalten kann. Ein Grund hierfür ist die einzigartige Harmonie zwischen Musik und Text, die sich in einer besonderen Weise auf dem Zuhörer auswirken. Denn nur derjenige kann diese Musik wertschätzen, der selbst Erfahrung mit ihr gemacht hat. Die musikalischen Kompositionen stellen Kammerformern dar, in denen verschiedene Bilder und Symbole dargestellt werden, die als Wegweiser im Leben dienen und die geistigen Entwicklung des Menschen fördern. Die musikalischen Kompositionen unterscheiden sich in iher Komplexität.",
    ],
  },
];

export default function Musik() {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-10 px-4 md:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full h-[250px] md:h-[500px] relative">
          <div
            className={cn(
              "group relative overflow-hidden rounded-lg h-full",
              "shadow-lg transition-all duration-500",
              "md:col-start-2"
            )}
          >
            <div className="absolute inset-0">
              <Image
                priority
                fill
                src={"/images/violine.jpg"}
                alt={"Beisa Duno"}
                className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mt-8 md:mt-14">Musik</h1>
      <div className="w-full max-w-4xl mx-auto">
        <ScrollText sections={lectureSections} />
      </div>
    </div>
  );
}
