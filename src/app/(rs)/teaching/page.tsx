import Image from "next/image";
import {ScrollText, Section} from "@/components/SectionScroll";
import { cn } from "@/app/lib/utils";

export const metadata = {
  title: "Lehre",
};


const lectureSections: Section[] = [
  {
    content: [
      "Heute wird den Menschen die göttliche Lehre gepredigt. Es ist die Lehre Christi. Sie ist für diejenigen, die ein tiefes Verständnis des Lebens haben. Sie ist für alle Menschen, für die ganze Menschheit, für alle Zustände, Zeiten und Epochen. Wer zum inneren Sinn dieser Lehre gelangt, der wird in ihr die Kraft finden, sein Leben zu erneuern und seine Aufgaben richtig zu lösen.",
    ],
  },
  {
    title: "Systematisierung der Vorträge",
    content: [
      "Zusammenkunftsvorträge – das sind Vorträge, Anleitungen und Erklärungen, die bei den Zusammenkünften im August von 1906 bis 1944 gehalten wurden. Ein Teil der Zusammenkunftsvorträge sind die sogenannten Rila-Vorträge, die in den Jahren von 1929 bis 1944 im Rila-Gebirge gehalten wurden. Ein anderer Teil sind die Vorträge bei den Jugendzusammenkünften von 1923 bis 1930. Dieser Zyklus des Wortes sind Vorträge, die während der Versammlungen der Weißen Bruderschaft in Varna, Sofia, Weliko Tarnowo und in Rila gehalten wurden. Ähnlich wie die Sonntagsvorträge unterscheiden sie sich durch ihre grosse Bandbreite zu Fragen aus dem geistigen Leben und seine im Vordergrund stehende Realisierung in der praktischen Sphäre. Das wurde mit vielen Beispielen selbst aus dem Leben veranschaulicht. In den Zusammenkunftsvorträgen ist das intime Wissen über das Wesen der geistigen Selbstverwirklichung, der Evolution, des Schülerseins enthalten. Sie sind das Tor zur Erkenntnis der fünf göttlichen Prinzipien: Liebe, Weisheit, Wahrheit, Gerechtigkeit und Tugend. Hier ist einer der in dieser Hinsicht wichtigsten Vorträge mit dem Titel: „Der Weg des Schülers.“ In ihm wird der Weg der Evolution im Kontext eines allgemeinen kosmischen Plans dargestellt.",
      "Zum ersten Mal führt der Meister Petar Danov seine Schüler 1929 zu einem Lager bei den Sieben Rila-Seen. Die Vorträge, die im Rila-Gebirge gehalten wurden, nennen sich auch Rila-Vorträge. In ihnen wird oft über das Leben im Gebirge und über die Anwendung der absoluten Reinheit im physischen, psychischen und im geistigen Leben gesprochen. Denn die Reinheit ist die erste und die notwendige Bedingung für die richtige Entwicklung des Menschen. Von der richtigen Entwicklung hängt die richtige Beziehung des Menschen zu Gott ab. Das Leben in Christus und für Christus – der offenbarte Gott in der Welt – ist eines der wesentlichen Momente in den Rila-Vorträgen. Dieses Leben wird durch die Liebe verwirklicht. Die Liebe wird in allen Sphären des individuellen Lebens, im Familienleben und im Gesellschaftsleben angewandt."
    ],
  },
  {
    title: "Sonntagsvorträge",
    content: [
      "Die Sonntagsvorträge wurden vor einem breiten und heterogenen Publikum von 1914 bis 1944 gehalten. Sie bauen auf der Exegese biblischer Texte auf. Der Zyklus, der Sonntagvorträge betitelt wurde, ist ein Zyklus von Vorträgen, die am Sonntag um 10 Uhr gehalten wurden. Das öffentliche Halten und Stenographieren der Vorträge beginnt 1914. Gewöhnlich beginnen sie mit einem bestimmten Vers oder Versen aus der Bibel und setzen mit einer Deutung fort, indem sie eine Antwort auf aktuelle menschliche Probleme geben. Der Stil ist absolut zugänglich für den Hörer. Er ist für ein breites Publikum bestimmt. Die Wahrheiten aus dem Leben sind durch viele Gleichnisse und Beispiele veranschaulicht worden. Die Vorträge sind inhaltlich breit angelegt, indem jedes Thema unterschiedlichen Unterthemen breitgefächert behandelt wird.",
      "Für das richtige Begreifen und Anwenden des Wortes Gottes benötigt der Schüler ein geistiges Wissen und ein tiefes Verständnis für seine innere Bedeutung. Die Sonntagsvorträge sind eine kostbare Quelle von Licht zu diesen Fragen. Zentral ist die Stelle der Botschaft Christi über die göttliche Vollkommenheit und ihre Anwendung im Leben des einzelnen Menschen und der Gesellschaft. Die Grundlage der göttlichen Lehre sind die Prinzipien der Liebe, der Weisheit und der Wahrheit. Mit dem ersten stenographierten Sonntagsvortrag Siehe, der Mensch! beginnt ein Zyklus von sechs Bänden, der „Kraft und Leben“ genannt wurde. In ihnen sind nach den eigenen Worten des Meisters Petar Danov die Grundlagen seiner Lehre enthalten, die er die „Neue Lehre der Universellen Weißen Bruderschaft nannte“."
    ],
  },
  {
    title: "Die Donnerstagsvorträge",
    content: [
      "Die Donnerstagsvorträge – „Die große Mutter“ sind Vorträge, die vor Ehefrauen, Müttern, Lehrerinnen und Erzieherinnen gehalten wurden, also vor denjenigen, die die positive Umwandlung der Gesellschaft unterstützen. Die Vorträge wurden jeden Donnerstag gehalten. Der Zyklus wird am 19. Februar 1917 eröffnet. Der letzte Vortrag des Zyklus wurde am 30. Juni 1932 gehalten. Die Vorträge wurden im Laufe von 16 Jahren donnerstags in den Nachmittagstunden gehalten. Eine Ausnahmen machen fünf von ihnen, weshalb der Meister sie die Donnerstagsvorträge nennt. Sie sind im Sammelband „Die große Mutter“ erschienen und enthalten Unterweisungen, Belehrungen und Methoden für die geistige Praxis. In ihnen sind viele der esoterischen Begriffe und Symbole geklärt."
    ],
  },
  {
    title: "Allgemeine Okkultklasse",
    content: [
      "Die Allgemeine Okkultklasse umfasst 31 Serien von 1922 bis 1944. Es werden Themen, Übungen und Aufgaben gegeben. 1922 eröffnet Meister Petar Danov die Schule der Weißen Bruderschaft. Die tiefgreifende Arbeit mit den geistigen Gesetzen und Prinzipien wird zur natürlichen Notwendigkeit. Diese Abteilung des Wortes nennt sich Vorträge. Der Stil ist kompakter und wissenschaftlicher. Es gibt Gleichnisse und Beispiele, aber der Akzent fällt auf die geistige Klärung der Prinzipien und Gesetze der Natur. Das geschieht durch Beispiele aus den unterschiedlichen Wissenschaftszweigen. Reichlich sind die algebraischen Beispiele und die geometrischen Figuren als Veranschaulichungsmethode geistiger Botschaften. Die Vielfalt an Themen ist mit den unterschiedlichen Mitteln für die geistige Vervollkommnung und Hygiene im weitesten Sinn des Wortes verbunden – Reinheit in den Gedanken, Gefühlen und Taten. Es wird die weite Wissenschaft vom anthropologischen Dreieck entwickelt: Verstand, Herz und Willen. Vorgestellt werden geistige Methoden zur Transformation der Gedanken, der Gefühle und des Willens. Ein zentrales Thema ist der göttliche Ursprung und seine Äußerungen in der Natur und im menschlichen Leben. Am Freitag den 24. Februar 1922 eröffnet der Meister die Allgemeine Okkultklasse. Sie ist für Zuhörer aus allen Altersgruppen und Familienständen offen. Die Vorträge werden jeden Mittwoch im Laufe von 22 Jahren gehalten."
    ],
  },

  {
    title: "Jugendokkultklasse",
    content: [
      "Die Jugendokkultklasse wurde von 1922 bis einschließlich 1944 jeden Freitag im Laufe von 22 Jahren gehalten. In der Schule des Meisters Petar Danov werden gleichzeitig zwei Klassen eröffnet: die Allgemeine und die Spezielle Klasse. Die Spezielle Klasse wurde später Jugendokkultklasse genannt. An der Jugendokkultklasse nehmen junge Menschen teil, die persönlich vom Meister eingeladen wurden. Die Vorträge vor der Jugendokkultklasse ähneln dieser vor der Allgemeinen Okkultklasse; sie sind allerdings kürzer und konkreter ausgerichtet. Geometrische Figuren sind auch hier ein großer Teil der Methoden, die eine bildliche Auflösung unterschiedlicher geistiger Fragen sind. Es werden mehr schriftliche Themen gestellt, unterschiedlichen Aufgaben und Übungen gegeben. Die Vorträge vor der Speziellen Klasse haben zum Ziel, eine größere Tiefe beim Begreifen der Gesetze des Daseins hervorzurufen. Hier wird eine neue Richtung gegeben und es wird eine günstige Umgebung für die Entwicklung des Verstandes, des Herzens und des Willens sowie für alle menschlichen Vermögen geschaffen. Reichlich sind die unterschiedlichen Aspekte aus der breiten Wissenschaft über das Bewusstsein und seine Grundformen Unterbewusstsein, Bewusstsein und Selbstbewusstsein und Überbewusstsein vertreten. Das wird durch tiefe, innere Arbeit vermittels Konzentration, Meditation, Gebet, Nachdenken, Selbstbetrachtung und physische Übungen erreicht. Der Hauptakzent dieser Vorträge liegt auf den Methoden zum Umwandlung der niederen menschlichen Natur in die höhere. Ziel ist die Selbsterkenntnis und die Entwicklung von Eigenschaften zur Organisation des inneren Lebens und seine Harmonisierung mit dem äußeren."
    ],
  },
  {
    title: "Das Morgenwort",
    content: [
      "Am 21. September 1930 beginnt der Meister sonntags das Morgenwort zu halten. Das Morgenwort ist ein Teil des Wortes, das auch sonntags aber um 5 Uhr morgens gehalten wurde. Die Vorträge dieses Zyklus sind an einen kleineren Zuhörerkreis gerichtet. Das erste Morgenwort, „Die absolute Wahrheit“, wurde am 21. September 1931 gehalten. Der Meister spricht über Kapitel aus der Bibel, indem er ihre geistigen Botschaften in die heutigen Sprache übersetzt. Die Heiligen Texte haben in sich eine tiefe Bedeutung, die manchmal für den menschlichen Verstand schwer zugänglich ist. Ihre Deutung befindet sich im Morgenwort."
    ],
  },
  {
    title: "Außerodernliche Vorträge",
    content: [
      "Die außerordentlichen Vorträge wurden bei besonderen Anlässen gehalten: an Neujahr, am 22. März, am 22. September, bei allgemeinen Festen und anderen Gelegenheiten, die in getrennten Broschüren herausgegeben wurden. Die Betitelung selbst zeigt, dass diese Vorträge unter keine der oben aufgezählten Kategorien fallen, sondern bei unterschiedlichen Anlässen gehalten wurden. Sie geben die Grundsätze des Wortes dem Prinzip nach wieder und handeln von bestimmten Themen, die mit der Entwicklung der menschlichen Seele und ihrem Aufstieg zum großen, vernünftigen Ursprung verbunden sind."
    ],
  },

  {
    title: "Testament der Liebe",
    content: [
      "Die Vorträge „Das Testament der Liebe“, die in drei Bänden publiziert wurden, sind das letzte Wort des Meisters. Sie wurden im Dorf Martschaevo und in Sofia vom 19. März 1944 bis zum 20. Dezember 1944 gehalten."
    ],
  },

  
];

export default function Teaching() {
  
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
                src={"/images/salona.jpg"}
                alt={"Beisa Duno"}
                className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mt-8 md:mt-14 mb-6 md:mb-8">Lehre</h1>
      <div className="w-full max-w-4xl mx-auto">
        <ScrollText sections={lectureSections}/>
      </div>
    </div>
  );
}
