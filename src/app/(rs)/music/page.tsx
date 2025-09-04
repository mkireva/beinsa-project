import Image from "next/image";
import { ScrollText, Section } from "@/components/SectionScroll";
import { cn } from "@/app/lib/utils";

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

  {
    title: "Gedanken über die Musik",
    content: [
      "Wir verstehen die Musik in einem etwas anderen Sinne. Ich spreche über die bewusste Musik und nicht über die statische. Wir haben den Bereich der statischen Musik schon verlassen und treten in die organische Musik ein, die sich ständig verändert.",
      "In die neue organische Musik werdet ihr an erster Stelle die Harmonie in eure Gedanken, Gefühle und Taten bringen. Dann werdet ihr als Sänger Widerhall finden – die unsichtbare Welt wird euch helfen.",
      "Ihr könnt nicht musikalisch sein, wenn euer Gedanke unmusikalisch ist, wenn eure Gefühle nicht musikalisch sind und wenn ihr nicht alles musikalisch betrachtet, was in der Welt geschieht. Wir leben und bewegen uns in Gott, und in dieser Bewegung liegt Harmonie.",
      "Das Lied soll nicht nur eine Stimme haben, sondern in seine Töne sollen Inhalt und Bedeutung gelegt werden. Damit der Mensch singen oder spielen kann, soll er eine Idee, einen tiefen inneren Impuls haben. Ohne Idee gibt es kein Lied.",
      "Die Musik bringt der Seele des Menschen Weite, dem Geiste Kraft und Macht, dem Herzen Milde und Wärme, dem Verstand Licht und Freiheit.",
      "Jedes Lied soll Licht, Wärme und Kraft bringen. Die Natur schätzt die Töne, die Licht, Wärme und Kraft haben. Sie sind ein göttlicher Segen für die Welt.",
      "Die Musik und das Singen haben nur dann einen Sinn, wenn sie der Veredelung des Menschen dienen. Durch die Musik könnt ihr euren Charakter bilden.",
      "Euer Glück in der Welt hängt nur von der Musik ab. Weil das Leben eine ganzheitliche Kunst ist, ist es die größte Musik, die in der Welt existiert. Das Wort Gottes ist die Musik des Lebens.",
      "Ohne Musik, Weisheit und Wahrheit kann das Wort nicht gesprochen werden.",
      "Der Mensch kann nicht musikalisch sprechen, ohne die Wahrheit zu sprechen. Liebe – das ist die erhabenste Musik. Denkt ihr nicht, so könnt ihr nicht gut spielen und singen. Undenkbar ist es, genial ohne Musik zu werden. Ein Genie ist ein Mensch, der in den musikalischen Strom der Natur hineingeraten ist.",
      "Diejenige Musik, die gleichermaßen das Herz, den Verstand und den Körper einstimmt, ist die Musik der Natur. Unter dem Begriff Natur verstehe ich die Welt der Harmonie – an dem Ort, aus dem die ganze Musik hervorgegangen ist.",
      "Die Musik soll im Menschen ein fröhliches Gefühl aufsteigenden Grades, ein Gefühl, schöpferisch zu sein, hervorrufen.",
      "Die Natur arbeitet in jeder Hinsicht musikalisch. Es gibt keine großartigere Kunst, keine größere Musik als die Kunst der Musik und die Musik der Natur. Wer die Gesetze der Natur beachtet, kann Sänger werden.",
      "Worin unterscheidet sich die okkulte Musik von der gewöhnlichen Musik? In ihrer absoluten Milde, Klarheit, Bildhaftigkeit und in den Naturbildern.",
      "In der okkulten Musik möchten wir nicht wie die Menschen, sondern wie die Engel singen. Durch die Musik können wir die Engel anziehen – sie werden sich für uns interessieren. Ihr werdet ihnen sagen: „Wir studieren eure Musik und möchten so singen, wie ihr singt.“ Sie werden sagen: „Sehr gut, wir werden euch unsere Gegenwart und unsere Unterstützung schenken.“",
      "Sänger und Musiker haben ein gut entwickeltes Ohr, damit sie die Töne richtig vernehmen und wiedergeben, so, wie sie aus der erhabenen Welt kommen.",
      "Als Orpheus spielte und sang, wurde die Natur lebendig: Die Pflanzen, die Vögel, die Tiere, die Flüsse – alles begann sich zu bewegen und zu spielen. Derart soll der wahre Musiker sein.",
      " Wenn ihr in die Natur hinausgeht, hätte ich gerne, dass ihr in sie hineinhört. Wenn ein Musiker ein entwickeltes Ohr hat, wird er selbst das hören, was er niemals in seinem Leben gehört hat.",
      "Ihr habt nie den fließenden Quellen gelauscht – welch angenehme Musik ertönt unter den kleinen Steinchen. Geht in den Wald, dort werdet ihr solche Symphonien und Arien hören!",
      "Die Musik ist eine von den Methoden der Natur, durch die sie in euch lebendig wird: Die Steine werden lebendig, die Bäume, die Quellen, alles rund herum wird lebendig.",
      "Ich möchte, dass ihr die okkulte Musik kennenlernt, damit ihr Kräfte und Inspirationen aus der lebendigen Natur schöpft.",
      "Die okkulte Musik ist eine Musik der Gestalten und der Bilder. Wenn wir singen, soll in uns immer ein Bild entstehen; es sollen keine gewöhnlichen oder toten, sondern lebendige Bilder entstehen.",
      "Ihr alle sollt beim Singen danach streben, dass es in eurem Singen Klarheit und Sanftheit gibt. Wenn ihr leise und sanft singt, dann werdet ihr um euch herum Wesen von einer höheren Kultur anziehen. Strebt danach, leise zu singen, denn das leise Singen veredelt. Das laute Singen geschieht willentlich.",
      "Ideelle Lieder gibt es auf der Erde nicht. Ideelle Lieder gibt es nur bei den Engeln.",
      "Die Natur hat in jedem Menschen eine spezielle Musik angelegt, mit der er sich bei Schwierigkeiten helfen kann.",
      "Ich möchte, dass ihr für euch singt – ich meine, nicht persönlich für euch selbst, sondern  für  das  Göttliche in  euch.  Wenn  ihr  ein  Lied  für  euch  singt,  werdet ihr die  gute  Disposition  des  Geistes  spüren.",

      "Die Liebe, das ist die höchste Musik. Wenn ihr nicht denken könnt, könnt ihr nicht singen. Denkt recht, empfangt nur reine Gedanken, um gut singen und spielen zu können.",

      "Alle okkulten Schulen aus der Vergangenheit sowie diese von heute bedienen sich der Methode der Musik zur Erziehung und Selbsterziehung. Wenn der Mensch eine der musikalischen Methoden zur Transformierung des Bewusstseins anwendet, wird er sich in einer halben oder einer ganzen Stunde in einer anderen Tonleiter des Lebens, fern von seinen Schwierigkeiten befinden. Heutzutage, unter den Bedingungen, unter denen wir leben, müssen wir uns andauernd einstimmen, und die Musik ist eine der göttlichen Methoden zur Einstimmung. Wenn jemand die Übung „Gott ist Liebe“ ausführt, so wie sie gesungen werden soll, wird er sich wandeln; welche Leiden er auch immer hat, sie werden verschwinden; er wird fröhlich und munter sein und sich verjüngen.",
    ],
  },
  {
    title: "Inkommensurabilität in der Musik",
    content: [
      "Die Melodie ist der musikalische, ideelle Ruf der menschlichen Seele zu Gott. Die Harmonie ist die Antwort Gottes.",
      "Die Musik hat inkommensurable Töne und Tonhöhen in den Takten. Jedoch all jene Prozesse, die bewusst sind, sind inkommensurabel, sie sind unter unserer Macht, wir handhaben sie. Und so müssen alle unsere Ideen inkommensurabel sein!",
      "Und wenn wir also zu den inkommensurablen und den kommensurablen Dingen kommen, müssen wir wissen, dass es sich um zwei völlig unterschiedliche Ideen im Leben handelt. Weisheit, Wahrheit, alle Tugenden sind inkommensurable Größen.",
      "Die Gute Musik muss auch inkommensurabel sein. Man kann auch ohne Takte singen. Wisst ihr, was es heißt, ohne Takt zu singen? Nehmen wir an, du nimmst die Tonhöhe - eine Viertelnote, oder eine halbe Note, oder eine ganze Note. Glaubst du, dass, nachdem du diesen Ton entsprechend seiner Dauer gesungen hast, er aufhört zu klingen? - Nein, es gibt bestimmte Töne in der Natur, die dauerhaft klingen. Es gibt Planeten, die speziell auf den Ton gestimmt sind. Es gibt Sonnen, die den Ton des Salzes klingen lassen. Diese Musik wird ständig in der Natur gespielt. Manchmal greifen wir einen Ton auf und dann unterbrechen wir ihn. Hört sie dann auf zu klingen? - Nein, der Planet, zu dem dieser Ton gehört, zum Beispiel der Ton do, geht ständig auf und ab in höheren und niedrigeren Oktaven. Allerdings gibt es eine große Vielfalt. Was sind die besten Lieder in der Musik? Diejenigen Sängerinnen und Sänger, die Musik studieren, fangen an, die Töne mechanisch zu reproduzieren die Töne mechanisch wiederzugeben, aber wenn sie in die okkulte Musik eintreten, müssen sie jeden Ton als lebendig ansehen und wissen, dass jeder Ton, sobald sie singen, jeder Ton weiter klingt. Wenn du einmal einem Musiker zugehört hast Musikern, einem hervorragenden Geiger, zugehört habt, werdet ihr, wenn ihr nach Hause zurückkehrt, immer noch seinem Spiel weiter zuhören. Auf der Bühne ist das Spiel aufgehört, aber am Abend, am Morgen, eine ganze Woche lang ist es in dir gegewärtig. So klingen diese Stimmen ununterbrochen weiter, bis sie sich irgendwo verlieren. Denn in der okkulten Musik müssen die Töne weitertönen. Und jeder von euch muss innerlich singen. Solange ihr nicht lernt, innerlich zu singen, in euren Seelen, könnt ihr nicht lernen zu singen. Deshalb sind einige von euch bessere Musiker, weil sie in der Vergangenheit mehr die Musikstudiert. Für sie ist es leichter, die Muisk zu praktizieren. Andere hingegen haben die Musik nicht studiert; jetzt müssen sie sie lernen. Musik wird für einen inneren Impuls benötigt. Sie ist Ruhe. Nur durch Musik könnt ihr eurer Seele Ruhe geben.",
      "Wie wollen Sie nun diese Melodie [Imasche Chelovek/Es war ein Mann] übersetzen? Sie gehört zu inkommensurablen Größen. Wenn sie anders gesungen würde, in Takten, würde etwas anderes dabei herauskommen. Nicht, dass es keine Takte gibt, aber wenn du einem okkulten Lied vortragen willst, musst du notwendigerweise die inkommensurablen Takte hineinlegen, d.h. solche Takte, die in deinem Geist nicht genau definiert sind. In diesem Lied werde ich nicht auf die Takte schauen, sondern auf die Bedeutung. Wenn die Takte in einem Lied überhand nehmen, verliert das Lied seinen Sinn. Der Takt sollte drinnen sein. Er ist ein inkommensurabler Maßstab.",
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
