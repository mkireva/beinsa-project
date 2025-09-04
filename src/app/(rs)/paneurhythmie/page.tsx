import Image from "next/image";
import { ScrollText, Section } from "@/components/SectionScroll";
import { cn } from "@/app/lib/utils";

export const metadata = {
  title: "Paneurhythmie",
};

const lectureSections: Section[] = [
  {
    content: [
      "Bei der Paneurhythmie begrüßt und empfängt der Mensch das Göttliche und das Mächtige, das das Universum errichtet und für die große Idee des Lebens arbeitet.",
    ],
  },
  {
    title: " Die Wissenschaft von den harmonischen Bewegungen",
    content: [
      "Das Wort Paneurhythmie setzt sich aus drei Stammwörtern zusammen: der Vorsilbe „pan“ (ganz, all, allumfassend, kosmisch), der zweiten Vorsilbe „eu“ aus dem Griechischen (gut, wohl). Eu“ ist das, aus dem alles entspringt, es bedeutet den Kern, das Wesentliche, das Reale in der Welt. Und Rhythmus bedeutet Gleichmaß der Bewegung oder jedes äußeren Ausdrucks der Dinge. Die Vorsilbe „pan-“ weist auf einen Rhythmus hin, der in der ganzen Natur herrscht und die Grundlage des Daseins bestimmt. Daher können wir das Wort „Paneurhythmie“ seiner Herkunft nach auch als „der allumfassende wohltuende Rhythmus“ wiedergeben.",
      "Den eigentlichen Sinn des Wortes “Paneurhythmie” hat Peter Dunov durch den folgenden Satz erklärt: „Die Paneurhythmie ist ein bewusster Austausch mit den Kräften der lebendigen Natur.“ Die Natur war für ihn der Ausdruck aller geistigen Hierarchien.",
      "Wenn wir etwas mehr über den tiefen Sinn des menschlichen und des kosmischen Lebens nachdenken, werden wir entdecken, dass jede Veränderung des mikroskopischen Daseins die Widerspiegelung und Resonanz eines üppigen Lebens ist, das aus dem Makrokosmos quillt. Der aus seinem biologischen Sein erwachte Mensch ist bestrebt, diesem höchsten Leben des Geistes sowohl durch die Mittel der Musik, Malerei, Architektur usw. als auch durch die Tanzkunst Ausdruck zu verleihen. Die Bewegungen, die wir im täglichen Leben vollziehen, geben diese oder jene Idee wieder. Jede Bewegung einer um Wahrhaftigkeit bemühten Choreographie gibt bestimmte Ideen wieder. Diese Kunst kann so vollkommen sein, dass der Beobachtende die darin enthaltenen Ideen zu erraten vermag. Die Wiederholung einer plastischen Figur müsste uns zu dem Gedanken, dem inneren Erlebnis hinleiten. Folglich ist der Tanz ein Ausdruck des Geistigen; die Rhythmik dieser Bewegungen weist uns auf die Rhythmik unseres geistigen Lebens hin.",
      "Die Bewegungen der Paneurhythmie stellen die Phasen der geistigen Entwicklung des Menschen dar. Sie sind ruhig und nicht rauschhaft, sie sind einfach und nicht auf äußere Effekte gerichtet, die den Willen zur Konzentration vernichten. Peter Dunov beschreibt sie als Urbewegungen, die der Natur entnommen sind.",
      "Die Paneurhythmie wird im Frühling und im Sommer (zwischen dem 22. März und dem 22. September) und nur vormittags und in der freien Natur getanzt.",
    ],
  },
  {
    title: "Die sieben Prinzipien der Paneurhythmie",
    content: [
      "1. Das Prinzip der Vernunft. Es lautet: Alles ist Verstand und Vernunft. Alles in der Welt ist vernünftig. Es herrscht eine hohe Intelligence (Verstand) über alles.",
      "2. Das Prinzip der Entsprechung. Es kann folgenderweise erklärt werden: Zwischen allen Dingen gibt es eine Ähnlichkeit, eine Entsprechung. Die hermetische Philosophie drückt das mit den Worten aus: „Was es oben gibt, gibt es auch unten.“ Es besteht eine Übereinstimmung zwischen Idee, Ton, Bewegung, Farbe, Zahl sowie zwischen den chemischen Elementen und den Farben.",
      "3. Das Prinzip der Schwingungen oder Bewegungen. Dieses Prinzip lautet: Alles befindet sich in Bewegung, alles schwingt. Nichts ist in Ruhe. Die Ergebnisse der heutigen Wissenschaft bestätigen dies. Die Schwingungen der Materie, der Energie, des Verstandes und sogar des Geistes unterscheiden sich nach ihrer Geschwindigkeit. Diese steigt an in der Größenordnung Materie-Geist.",
      "4. Das Prinzip der Polarität, der Dualität, der Zweiheit. Alles in der Natur ist doppelt, polarisiert. Die Dualität ist das grundlegende Gesetz des Alls. Es gibt z. B. ein männliches und ein weibliches Prinzip, einen positiven und negativen Strom. Pole haben auch die Erde, der menschliche Körper, die Pflanzen, das Ei, der Kristall, der Magnet u.a.m.",
      "5. Das Prinzip des Rhythmuses. Ein anderes Naturgesetz ist der Rhythmus, die Periodizität. Alles in der Natur ist rhythmisch, periodisch. Es herrscht z. B. Rhythmus in der Flut und Ebbe. Rhythmisch sind auch die Erdbewegungen. Die Erdachse vollzieht kleine Schwankungen, die innerhalb von etwa 26 000 Jahren einen ganzen Kreis um den Pol bilden.  Es gibt auch eine rhythmische und periodische Wiederkehr der Kometen, einen Rhythmus im Menschenleben sowie in der Geschichte usw.",
      "6. Das Prinzip der Ursache und Wirkung. Alles in der Welt hat seine Vernunftgründe. Manchmal meinen wir, dass der Grund der Vernunft entbehrt, doch es steckt dahinter immer eine Vernünftigkeit.",
      "7. Das Prinzip der Einheit und der Verwandtschaft. Alle Dinge in der Natur sind verwandt, denn ihnen liegt die Einheit zugrunde. Bei den nahen Dingen ist die Verwandtschaft klarer zu erkennen, bei den weiter entfernten muss man sie in der Tiefe suchen.",
    ],
  },
  {
    title: "Ton und Bewegung",
    content: [
      "Aus dem zweiten oben angeführten Prinzip folgt, dass es eine Verbindung zwischen Ton und Bewegung gibt. Stellt der Ton, wenn wir ihn aus einem bestimmten Blickwinkel betrachten, nicht auch eine Bewegung dar? Dieses Gespür für die Verbindung von Ton und Bewegung ist in jedem Menschen angelegt.",

      "Versuchen wir jedes beliebige Lied in Bewegung umzuwandeln. Dann werden wir sehen, welche große Wirkung das auf uns haben wird. Dann werden die Worte und Töne lebendig, erhalten ein anderes Leben, beginnen uns eine verborgene tiefere Bedeutung zu erschließen, einen neuen bisher ungeahnten Inhalt; wir fühlen die in den Worten und der Musik schlummernde potentielle Macht. Wir selbst verändern uns, werden umgewandelt. Auf diese Weise vereinigt, üben die Worte, Töne und Bewegungen eine magnetische Wirkung auf Körper, Gedanken, Gefühle und Willen aus. Sie beeinflussen unser Wesen tief und setzen alle unsere körperlichen und geistigen Kräfte in Bewegung.",

      "Die Bewegungen der Paneurhythmie sind der Natur selbst entnommen.",

      "Deswegen besitzen sie Macht und Kraft und bringen Erneuerung. Die Gesetze der paneurhythmischen Bewegungen sind im All geschrieben. Sie gründen sich auf die tiefe Kenntnis der im menschlichen Körper und im ganzen Sein wirkenden Kräfte.",

      "Andererseits ist die Verbindung der paneurhythmischen Bewegungen mit Musik und Worten und Ideen nicht beliebig, sondern beruht auf dem zweiten oben angeführten Prinzip der Übereinstimmung. Diese Bewegungen befinden sich in einem strengen kausalen Zusammenhang von Ideen und Musik.",

      "Die Paneurhythmie basiert auf den Gesetzen der Übereinstimmung zwischen Idee, Wort, Musik und Bewegung.",

      "Paneurhythmie gibt es in der ganzen Natur. Die Erde umkreist die Sonne mit einer Geschwindigkeit von 29 Kilometer pro Sekunde. Das Sonnensystem als ein Ganzes bewegt sich in die Richtung einiger Gestirne. Die Erde und die anderen Planeten, die Sonne und alle übrigen Himmelskörper folgen den Gesetzen der Paneurhythmie. Die Erde hat über zehn verschiedene Bewegungsarten. Wenn wir sie uns als eine einzige Bewegung vorstellen, dann ergibt sich eine bewundernswerte Bewegung. Diese prägt das Erdenleben: In den Formen und Prozessen, denen wir begegnen, z. B. in der spiralförmigen Bewegung des Stengels bei seinem Wachstum nach oben, der sog. Nutation, erkennen wir die Widerspiegelung der Spirale, die die Erde im Weltraum zeichnet. Es existiert im Sein Harmonie und Rhythmus, die zu einem Ganzen verbunden sind, das sich in der Paneurhythmie ausdrückt.",

      "Die Bewegung der Himmelskörper erfolgt nach den Gesetzen der Sphärenharmonie – einer Musik, die den Weltraum ausfüllt.",

      "Die Lichtbewegung ist ebenfalls Paneurhythmie. Im Licht gibt es Bewegung, Rhythmus, Musik. Es ist von der Physik nachgewiesen worden, dass das Sonnenlicht pulsiert, d. h. darin ist ein Rhythmus enthalten, den auch das menschliche Herz besitzt. Wie das Herz periodisch Blut durch den ganzen Körper treibt, so wird das Licht periodisch in einer größeren oder kleineren Menge von der Sonne ausgestrahlt. Die Bewegung der ätherischen Lichtwellen ist Paneurhythmie.",

      "In der Paneurhythmie werden alle Arten geometrischer Linien – gerade, krumme, wellenförmige und gemischte – in Bewegung versetzt. Es gibt kräftige, weiche und lichte Bewegungen. In den weichen Bewegungen sind die krummen Linien, in den kräftigen die geraden vorherrschend, die lichten Bewegungen vereinigen dagegen gerade und krumme Linien. Es gibt Bewegungen der Elektrizität und des Magnetismus; es gibt kalte und warme Bewegungen.",

      "Es bestehen drei Bewegungsgrade – mechanische, organische und psychische. Bei den mechanischen Bewegungen wirkt die Vernunft von außen und nicht von innen. Organische Bewegungen sind diejenigen, an denen sich das Innenleben beteiligt, jedoch nicht als klarer, bewusst gewordener Gedanke. Die psychischen Bewegungen dafür sind mit einem bestimmten Gedanken verbunden.",

      "In der Paneurhythmie gibt es keine überflüssigen Bewegungen, Bewegungen ohne Sinn, oder ohne eine positive Wirkung. Ihre Bewegungen sind höchst sparsam. In der Paneurhythmie entspricht jede Bewegungslinie bestimmten Kräften des menschlichen Körpers und Bewusstseins und regt diese zur Leistung, zur Aktivität an. Auf diese Weise erscheint die Paneurhythmie als ein Förderer der körperlichen und geistigen Kräfte des Menschen, indem sie sie zum Leben erweckt. Deshalb können wir behaupten, dass die Paneurhythmie eine Wissenschaft ist, welche die körperlichen, geistigen und die Denkprozesse im Menschen regelt. Wir nennen sie auch die Wissenschaft von den harmonischen Bewegungen im Zusammenhang mit den menschlichen Gedanken und Gefühlen. Bei der Paneurhythmie muss der Mensch gleichzeitig denken, fühlen und sich bewegen!",
    ],
  },
  {
    title: "Puls des Ganzen",
    content: [
      "Wichtig ist das folgende kosmische Grundgesetz: Es existiert ein Rhythmus des Ganzen, ein „Puls des Lebens“, des kosmischen Organismus. Der Mensch ist ein Teil dieses Ganzen. Er ist eine Schraube, ein Rädchen im Getriebe des Ganzen. Der Rhythmus, der Puls des Ganzen wird auf alle Teile übertragen. Zum Beispiel ist der Rhythmus des Herzens nicht zufällig, es ist mit dem Rhythmus, mit dem das Sonnenleben pulsiert, verbunden. Es gibt einen Zusammenhang zwischen dem Herz- und dem Sonnenrhythmus. Wenn der Mensch sich in Harmonie mit dem Ganzen befindet, dann läuft alles in seinem Körper einwandfrei ab, da der kosmische Rhythmus, der kosmische Puls des Lebens in sein Herz, in seinen Blutkreislauf, seine Atmung, in die Tätigkeit all seiner Organe hinüberfließt, so dass sie fehlerfrei funktionieren können.",
    ],
  },
  {
    title: "Paneurhythmie als Methode der Selbsterziehung",
    content: [
      "Die Paneurhythmie regt den Menschen an, organisiert, harmonisiert, koordiniert seine inneren Kräfte und konzentriert sie auf ein vernünftiges Leben. Daher können wir behaupten, dass sie eine Methode zur Selbsterziehung und zur Erziehung vernünftiger Wesen ist.",
      "In den alten esoterischen Schulen wurden die Lieder von Bewegung begleitet. Dort wusste man, welche mächtigen Kräfte durch die Vereinigung von Worten, Musik und Bewegung geweckt werden können. Man äußerte bestimmte erhabene Worte, wobei man sie mit einem Lied und besonderen Bewegungen untermalte. In diesen Schulen war die Paneurhythmie eine Erziehungsmethode aller Schüler. Sie wurden durch rhythmische Bewegungen, verbunden mit bestimmten Ideen und Gesang, erzogen.",
    ],
  },

  {
    title: "Paneurhythmie und Evolution",
    content: [
      "Esoterische Schulen gibt es nicht nur auf unserem, sondern auf allen Planeten. Die Bewohner der Planeten und die Sonne wenden die Paneurhythmie an. Die Natur ist kein toter Mechanismus. Überall gibt es Leben. Vernünftige Wesen bevölkern das All. Mag es uns auch nicht immer bewusst sein, aber es gibt um uns herum Wesen von höchster Intelligenz. Wir sind von deren Gedanken, Kräften und Leben umgeben. Wir müssen es uns vergegenwärtigen. Die Menschheit geht auf dem von ihnen vorgezeichneten und schon zurückgelegten Weg. Sie folgt ihnen auf dem schönen Weg des Aufschwungs und der Aufklärung. Die Menschheit ist jetzt die nächste nach ihnen auf der großen Evolutionsleiter.",
      "Die Paneurhythmie beeinflusst den Menschen auf drei Wegen:",
      "Sie stellt den Kontakt zwischen ihm und den Wesen höchster Intelligenz her.",
      "Sie weckt die im Menschen schlummernden Kräfte, Anlagen, Begabungen. Die Paneurhythmie weckt den göttlichen Kern im Menschen.",
      "Die Ideen, die Musik und die Bewegungen der Paneurhythmie durchdringen den ganzen Körper des Menschen und lassen ihn für die dem All innewohnenden und Leben spendenden Kräfte aufnahmefähig werden.",
    ],
  },
  {
    title: "Schöpferische Kräfte der Natur",
    content: [
      "Die paneurhythmischen Bewegungen finden ihren Widerhall in der Natur – sie gibt ihre Antwort darauf. Diese Antwort ist der Aufstieg, das Licht im Denken, Herzen und Willen des Menschen, die Freude, die ihn erfüllt, und der Idealismus, der durch ihn hindurchfließt. Durch die Paneurhythmie kommt der Mensch mit den schöpferischen Kräften der Natur ins Gespräch – er spricht ihre eigene Sprache. Er betritt eine Welt, in der ihm die Natur ihre Kräfte, Möglichkeiten, Ideen zur Verfügung stellt.",
      "Dies ist eine reale, konkrete und dabei schöne Art, sich körperlich zu erneuern, den Geist, die Gefühle, den Willen zu stärken und zu veredeln.",
    ],
  },
  {
    title: "Paneurhythmie und die Epoche des Aufsiegs",
    content: [
      "Es kommt eine neue, einen kosmischen Frühling herbeiführende Zeit. Die Erde und das ganze Sonnensystem treten jetzt in einen kosmischen Bereich ein, der günstige Bedingungen zur Erweckung des der menschlichen Natur immanenten Schönen bieten.",
      "Da wir uns heute an der Entstehung eines sechsten Zyklus von Kulturen befinden, wird auch der Paneurhythmie eine neue Basis zugrunde gelegt. Sie ist der Ausdruck der anbrechenden neuen Kultur. Die Ideen der sechsten Kultur sind in ihre Musik und in ihre Bewegungen mit einbezogen. Wenn der Mensch sie vollführt, werden in ihm die Kräfte und die Gedanken der neuen Kultur wach, die dann in die Welt ausgesendet werden. Die Mitwirkenden an dem paneurhythmischen Kreis wecken diese neuen Kräfte in sich und verwandeln sich in einen Sender, der diese Kräfte, diese Ideen ausstrahlt. So erreichen sie alle Seelen und finden darin ihren Widerhall. Durch ihre Bewegungen richtet der lebendige Ring der Paneurhythmie einen Aufruf zur Erneuerung, zum Aufschwung und zum Fortschritt an die Welt.",
      "Durch die Paneurhythmie schafft der Mensch neue Werte. Die sechste Kultur, die kommt, wird die Verkünderin der Paneurhythmie sein. Die heutige fünfte Kultur ist die Kultur des objektiven Wissens, der Erforschung der Natur von außen, die Kultur der Ratio. Die sechste Kultur ist die Kultur der Liebe. Die Zahl sechs hat einen Bezug zur Liebe. Die Kräfte und Ideen, die in der Paneurhythmie verkörpert sind, werden in der sechsten Kultur zur Wirklichkeit. Die Paneurhythmie bereitet den Weg ihrer Ankunft vor.",
      "Der Tanz der Paneurhythmie muss ein heiliges Gefühl wecken: Er muss bewusst getanzt werden, damit der lebendige Ring der Paneurhythmie als Empfänger und Sender der großen kosmischen Kräfte funktionieren kann. Unter dem Rhythmus der Musik treten die Tanzenden in Kontakt zu den heiligen, kristallklaren und mächtigen Quellen der Natur und schaffen und bauen an der großen herannahenden Zukunft.",
      "Die Paneurhythmie bereitet den Pfad zum neuen schönen Leben vor, dem Leben der Freiheit, Gerechtigkeit, Vernunft, Harmonie, Brüderschaft und kosmischen Liebe.",
    ],
  },
];

export default function Paneurhythmie() {
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
                src={"/images/pan2.jpg"}
                alt={"Beisa Duno"}
                className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mt-8 md:mt-14">
        Paneurhythmie
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        <ScrollText sections={lectureSections} />
      </div>
    </div>
  );
}
