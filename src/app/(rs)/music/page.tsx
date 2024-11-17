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
    title: "Die Musik als Methode",
    content: [
      "Petar Danov misst der Musik eine besondere Bedeutung bei. Denn sie ist eine der wichtigsten Methoden innerhalb der okkulten Schule, die vorweigernd der Selbsterziehung und kultivierung geisiger Qualitäten dient. Während seiner Tätigkeit komponiert Petar Danov ca 190 Lieder und Meldodien, die er okkulte Übungen nannte. Diese Musik, obwohl sie auf den ersten Blick einfach erscheint, hat eine mächtige Wirkkraft auf dem Zuhörer und Interpreten, die sich erst in der Praxis und insbesondere beim mehrmaligen Wiederholen der einzelen Melodien entfalten kann. Der Gründ für diese Wirkkraft ist die einzigartige Harmonie zwischen Musik und Text, die sich in einer besonderen Weise auf dem Zuhörer auswirken. Denn nur derjenige kann diese Musik wertschätzen, der selbst Erfahrung mit ihr gemacht hat. Danovs Musik ist keine Musik der großen Formen. Die Lieder stellen kleine Kammerformern dar, in denen verschiedene Bilder und Symbole dargestelltwerden, die Wegweiser im Leben hinsichlich der geistigen Entwicklung des Menschen dienen.",
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
                src={"/images/music-beinsa.jpg"}
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
