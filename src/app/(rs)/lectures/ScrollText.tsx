"use client";

import React, { useEffect, useRef, useState } from "react";

interface SmoothScrollTextProps {
  children: React.ReactNode;
  threshold?: number;
}

const SmoothScrollText: React.FC<SmoothScrollTextProps> = ({
  children,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default function Component() {
  return (
    <div className="min-h-screen p-8 space-y-12">
      <SmoothScrollText>
        <p className="text-lg font-medium italic leading-relaxed text-muted-foreground">
          Heute wird den Menschen die göttliche Lehre gepredigt. Es ist die
          Lehre Christi. Sie ist für diejenigen, die ein tiefes Verständnis des
          Lebens haben. Sie ist für alle Menschen, für die ganze Menschheit, für
          alle Zustände, Zeiten und Epochen. Wer zum inneren Sinn dieser Lehre
          gelangt, der wird in ihr die Kraft finden, sein Leben zu erneuern und
          seine Aufgaben richtig zu lösen.
        </p>
      </SmoothScrollText>
      <SmoothScrollText>
        <h2 className="text-2xl font-bold mb-4">
          Systematisierung der Vorträge
        </h2>
        <p className="text-lg">
          Während seiner fast 50-jährigen Tätigkeit hält Meister Beinsa Duno
          über 4000 Vorträge. Das erste und einzige Buch, das Beinsa Duno 1896
          schreibt, ist „Wissenschaft und Erziehung“. Andere seiner Vorträge und
          Artikel sind: „Die Geheimnisse des Geistes“, „Hio-eli-meli-mesail“,
          „Aufruf an mein Volk“, „Die Zeugnisse Gottes“, „Sieben Gespräche mit
          dem Geist“, „Die drei Dinge“, „Gedanken und Anleitungen“, „Die gute
          Zeit“, „Der Eigenwille“. In der Zeitschrift „Rodina“ wurden ein Zyklus
          mit Artikeln über Phrenologie sowie andere Vorträge und Dialoge
          publiziert. Ein Großteil der Vorträge des Meisters Beinsa Duno stellt
          ein reiches Erbe von Büchern dar, das durch die Entzifferung
          stenografischer Aufzeichnungen des gesprochenen Wortes gewonnen wurde.
          Thematisch und chronologisch können die Vorträge, die stenographiert
          und gedruckt wurden, folgendermaßen systematisiert werden:
        </p>
      </SmoothScrollText>
      <SmoothScrollText>
        <h2 className="text-2xl font-bold mb-4">Zusammenkunftsvorträge</h2>
        <p className="text-lg">
          Zusammenkunftsvorträge – das sind Vorträge, Anleitungen und
          Erklärungen, die bei den Zusammenkünften im August von 1906 bis 1944
          gehalten wurden. Ein Teil der Zusammenkunftsvorträge sind die
          sogenannten Rila-Vorträge, die in den Jahren von 1929 bis 1944 im
          Rila-Gebirge gehalten wurden. Ein anderer Teil sind die Vorträge bei
          den Jugendzusammenkünften von 1923 bis 1930. Dieser Zyklus des Wortes
          sind Vorträge, die während der Versammlungen der Weißen Bruderschaft
          in Varna, Sofia, Weliko Tarnowo und in Rila gehalten wurden. Ähnlich
          wie die Sonntagsvorträge unterscheiden sie sich durch ihre grosse
          Bandbreite zu Fragen aus dem geistigen Leben und seine im Vordergrund
          stehende Realisierung in der praktischen Sphäre. Das wurde mit vielen
          Beispielen selbst aus dem Leben veranschaulicht. In den
          Zusammenkunftsvorträgen ist das intime Wissen über das Wesen der
          geistigen Selbstverwirklichung, der Evolution, des Schülerseins
          enthalten. Sie sind das Tor zur Erkenntnis der fünf göttlichen
          Prinzipien: Liebe, Weisheit, Wahrheit, Gerechtigkeit und Tugend. Hier
          ist einer der in dieser Hinsicht wichtigsten Vorträge mit dem Titel:
          „Der Weg des Schülers.“ In ihm wird der Weg der Evolution im Kontext
          eines allgemeinen kosmischen Plans dargestellt.
        </p>
        <p className="text-lg mt-3">
          Zum ersten Mal führt der Meister Petar Danov seine Schüler 1929 zu
          einem Lager bei den Sieben Rila-Seen. Die Vorträge, die im
          Rila-Gebirge gehalten wurden, nennen sich auch Rila-Vorträge. In ihnen
          wird oft über das Leben im Gebirge und über die Anwendung der
          absoluten Reinheit im physischen, psychischen und im geistigen Leben
          gesprochen. Denn die Reinheit ist die erste und die notwendige
          Bedingung für die richtige Entwicklung des Menschen. Von der richtigen
          Entwicklung hängt die richtige Beziehung des Menschen zu Gott ab. Das
          Leben in Christus und für Christus – der offenbarte Gott in der Welt –
          ist eines der wesentlichen Momente in den Rila-Vorträgen. Dieses Leben
          wird durch die Liebe verwirklicht. Die Liebe wird in allen Sphären des
          individuellen Lebens, im Familienleben und im Gesellschaftsleben
          angewandt.{" "}
        </p>
      </SmoothScrollText>
      <SmoothScrollText>
        <h2 className="text-2xl font-bold mb-4">Sonntagsvorträge</h2>
        <p className="text-lg">
          Die Sonntagsvorträge wurden vor einem breiten und heterogenen Publikum
          von 1914 bis 1944 gehalten. Sie bauen auf der Exegese biblischer Texte
          auf. Der Zyklus, der Sonntagvorträge betitelt wurde, ist ein Zyklus
          von Vorträgen, die am Sonntag um 10 Uhr gehalten wurden. Das
          öffentliche Halten und Stenographieren der Vorträge beginnt 1914.
          Gewöhnlich beginnen sie mit einem bestimmten Vers oder Versen aus der
          Bibel und setzen mit einer Deutung fort, indem sie eine Antwort auf
          aktuelle menschliche Probleme geben. Der Stil ist absolut zugänglich
          für den Hörer. Er ist für ein breites Publikum bestimmt. Die
          Wahrheiten aus dem Leben sind durch viele Gleichnisse und Beispiele
          veranschaulicht worden. Die Vorträge sind inhaltlich breit angelegt,
          indem jedes Thema unterschiedlichen Unterthemen breitgefächert
          behandelt wird.
        </p>
        <p className="text-lg">
          Für das richtige Begreifen und Anwenden des Wortes Gottes benötigt der
          Schüler ein geistiges Wissen und ein tiefes Verständnis für seine
          innere Bedeutung. Die Sonntagsvorträge sind eine kostbare Quelle von
          Licht zu diesen Fragen. Zentral ist die Stelle der Botschaft Christi
          über die göttliche Vollkommenheit und ihre Anwendung im Leben des
          einzelnen Menschen und der Gesellschaft. Die Grundlage der göttlichen
          Lehre sind die Prinzipien der Liebe, der Weisheit und der Wahrheit.
          Mit dem ersten stenographierten Sonntagsvortrag „Siehe, der Mensch!“
          beginnt ein Zyklus von sechs Bänden, der „Kraft und Leben“ genannt
          wurde. In ihnen sind nach den eigenen Worten des Meisters Petar Danov
          die Grundlagen seiner Lehre enthalten, die er die “Neue Lehre der
          Universellen Weißen Bruderschaft “nannte.
        </p>
      </SmoothScrollText>
      <SmoothScrollText>
        <h2 className="text-2xl font-bold mb-4">Donnerstagsvorträge</h2>
        <p className="text-lg">
          Die Donnerstagsvorträge – „Die große Mutter“ sind Vorträge, die vor
          Ehefrauen, Müttern, Lehrerinnen und Erzieherinnen gehalten wurden,
          also vor denjenigen, die die positive Umwandlung der Gesellschaft
          unterstützen. Die Vorträge wurden jeden Donnerstag gehalten. Der
          Zyklus wird am 19. Februar 1917 eröffnet. Der letzte Vortrag des
          Zyklus wurde am 30. Juni 1932 gehalten. Die Vorträge wurden im Laufe
          von 16 Jahren donnerstags in den Nachmittagstunden gehalten. Eine
          Ausnahmen machen fünf von ihnen, weshalb der Meister sie die
          Donnerstagsvorträge nennt. Sie sind im Sammelband „Die große Mutter“
          erschienen und enthalten Unterweisungen, Belehrungen und Methoden für
          die geistige Praxis. In ihnen sind viele der esoterischen Begriffe und
          Symbole geklärt.{" "}
        </p>
      </SmoothScrollText>
      <SmoothScrollText>
        <h2 className="text-2xl font-bold mb-4">Allgemeine Okkultklasse</h2>
        <p className="text-lg">
          Die Allgemeine Okkultklasse umfasst 31 Serien von 1922 bis 1944. Es
          werden Themen, Übungen und Aufgaben gegeben. 1922 eröffnet Meister
          Petar Danov die Schule der Weißen Bruderschaft. Die tiefgreifende
          Arbeit mit den geistigen Gesetzen und Prinzipien wird zur natürlichen
          Notwendigkeit. Diese Abteilung des Wortes nennt sich Vorträge. Der
          Stil ist kompakter und wissenschaftlicher. Es gibt Gleichnisse und
          Beispiele, aber der Akzent fällt auf die geistige Klärung der
          Prinzipien und Gesetze der Natur. Das geschieht durch Beispiele aus
          den unterschiedlichen Wissenschaftszweigen. Reichlich sind die
          algebraischen Beispiele und die geometrischen Figuren als
          Veranschaulichungsmethode geistiger Botschaften. Die Vielfalt an
          Themen ist mit den unterschiedlichen Mitteln für die geistige
          Vervollkommnung und Hygiene im weitesten Sinn des Wortes verbunden –
          Reinheit in den Gedanken, Gefühlen und Taten. Es wird die weite
          Wissenschaft vom anthropologischen Dreieck entwickelt: Verstand, Herz
          und Willen. Vorgestellt werden geistige Methoden zur Transformation
          der Gedanken, der Gefühle und des Willens. Ein zentrales Thema ist der
          göttliche Ursprung und seine Äußerungen in der Natur und im
          menschlichen Leben. Am Freitag den 24. Februar 1922 eröffnet der
          Meister die Allgemeine Okkultklasse. Sie ist für Zuhörer aus allen
          Altersgruppen und Familienständen offen. Die Vorträge werden jeden
          Mittwoch im Laufe von 22 Jahren gehalten.{" "}
        </p>
      </SmoothScrollText>
      <SmoothScrollText>
        <h2 className="text-2xl font-bold mb-4">Jugendokkultklasse</h2>
        <p className="text-lg">
          Die Jugendokkultklasse wurde von 1922 bis einschließlich 1944 jeden
          Freitag im Laufe von 22 Jahren gehalten. In der Schule des Meisters
          Petar Danov werden gleichzeitig zwei Klassen eröffnet: die Allgemeine
          und die Spezielle Klasse. Die Spezielle Klasse wurde später
          Jugendokkultklasse genannt. An der Jugendokkultklasse nehmen junge
          Menschen teil, die persönlich vom Meister eingeladen wurden. Die
          Vorträge vor der Jugendokkultklasse ähneln dieser vor der Allgemeinen
          Okkultklasse; sie sind allerdings kürzer und konkreter ausgerichtet.
          Geometrische Figuren sind auch hier ein großer Teil der Methoden, die
          eine bildliche Auflösung unterschiedlicher geistiger Fragen sind. Es
          werden mehr schriftliche Themen gestellt, unterschiedlichen Aufgaben
          und Übungen gegeben. Die Vorträge vor der Speziellen Klasse haben zum
          Ziel, eine größere Tiefe beim Begreifen der Gesetze des Daseins
          hervorzurufen. Hier wird eine neue Richtung gegeben und es wird eine
          günstige Umgebung für die Entwicklung des Verstandes, des Herzens und
          des Willens sowie für alle menschlichen Vermögen geschaffen. Reichlich
          sind die unterschiedlichen Aspekte aus der breiten Wissenschaft über
          das Bewusstsein und seine Grundformen Unterbewusstsein, Bewusstsein
          und Selbstbewusstsein und Überbewusstsein vertreten. Das wird durch
          tiefe, innere Arbeit vermittels Konzentration, Meditation, Gebet,
          Nachdenken, Selbstbetrachtung und physische Übungen erreicht. Der
          Hauptakzent dieser Vorträge liegt auf den Methoden zum Umwandlung der
          niederen menschlichen Natur in die höhere. Ziel ist die
          Selbsterkenntnis und die Entwicklung von Eigenschaften zur
          Organisation des inneren Lebens und seine Harmonisierung mit dem
          äußeren.
        </p>
      </SmoothScrollText>
      <SmoothScrollText>
        <h2 className="text-2xl font-bold mb-4">Morgenwort</h2>
        <p className="text-lg">
          Am 21. September 1930 beginnt der Meister sonntags das Morgenwort zu
          halten. Das Morgenwort ist ein Teil des Wortes, das auch sonntags aber
          um 5 Uhr morgens gehalten wurde. Die Vorträge dieses Zyklus sind an
          einen kleineren Zuhörerkreis gerichtet. Das erste Morgenwort, „Die
          absolute Wahrheit“, wurde am 21. September 1931 gehalten. Der Meister
          spricht über Kapitel aus der Bibel, indem er ihre geistigen
          Botschaften in die heutigen Sprache übersetzt. Die Heiligen Texte
          haben in sich eine tiefe Bedeutung, die manchmal für den menschlichen
          Verstand schwer zugänglich ist. Ihre Deutung befindet sich im
          Morgenwort.
        </p>
      </SmoothScrollText>
      <SmoothScrollText>
        <h2 className="text-2xl font-bold mb-4">Außerodernliche Vorträge</h2>
        <p className="text-lg">
          Die außerordentlichen Vorträge wurden bei besonderen Anlässen
          gehalten: an Neujahr, am 22. März, am 22. September, bei allgemeinen
          Festen und anderen Gelegenheiten, die in getrennten Broschüren
          herausgegeben wurden. Die Betitelung selbst zeigt, dass diese Vorträge
          unter keine der oben aufgezählten Kategorien fallen, sondern bei
          unterschiedlichen Anlässen gehalten wurden. Sie geben die Grundsätze
          des Wortes dem Prinzip nach wieder und handeln von bestimmten Themen,
          die mit der Entwicklung der menschlichen Seele und ihrem Aufstieg zum
          großen, vernünftigen Ursprung verbunden sind.
        </p>
      </SmoothScrollText>
      <SmoothScrollText>
        <h2 className="text-2xl font-bold mb-4">Testament der Liebe</h2>
        <p className="text-lg">
          Die Vorträge „Das Testament der Liebe“, die in drei Bänden publiziert
          wurden, sind das letzte Wort des Meisters. Sie wurden im Dorf
          Martschaevo und in Sofia vom 19. März 1944 bis zum 20. Dezember 1944
          gehalten.
        </p>
      </SmoothScrollText>
    </div>
  );
}
