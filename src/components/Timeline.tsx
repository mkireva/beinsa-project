"use client";

import { useEffect, useRef } from "react";
import { TimelineEvent } from "./TimelineEvent";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "11. Juli 1864",
    title: "Geburt und Familie",
    description:
      "Am 11. Juli (St. Petrus) 1864 gegen 12 Uhr mittags wird Petar Konstantinov Danov im Dorf Hadurcha (heute Nikolaevka, 30 km nordwestlich von Varna) geboren. Er ist das dritte Kind des Priesters Konstantin Danovski und seiner Frau Dobra Chorbadzi Atanasova. Sie haben noch zwei ältere Kinder: den Sohn Atanas und die Tochter Maria.",
    image: "/images/beinsa-familie.jpg",
  },
  {
    date: "1872",
    title: "Schule in Varna",
    description:
      "1872 besucht Petar Danov die bulgarische Grundschule im Dorf Hadurcha, die während des Russisch-Türkischen Befreiungskrieges 1877-1878 geschlossen wird. Nach der Befreiung Bulgariens vom türkischen Joch beendet er das fünfjährige Jungengymnasium in Varna.",
    image: "/images/gym-varna.jpg",
  },
  {
    date: "1886",
    title: "Amerikanische Schule in Svistov",
    description:
      "Am 25. Juli* 1886 (im nachfolgenden Text wird die Zeitrechnung des Julianischen Kalenders mit * bezeichnet) beendet er die Amerikanische wissenschaftlich-theologische Schule in der Stadt Svistov. In der Zeitschrift der Methodisten erscheint ein Artikel über methodistische Priester aus Bulgarien,",
    image: "/images/svistov.jpg",
  },
  {
    date: "",
    title: "Artikel in der Zeitschrift",
    description:
      "in der Petar Danov folgende Aussage macht: „Ich kann zwei Gründe nennen, die mich zu meiner Bekehrung geführt haben: Der erste Grund war das Lesen religiöser Bücher und der zweite war Krankheit. Das hat mir geholfen, mich ganz Christus zu weihen. Als ich noch jung war, fühlte ich eine in mir arbeitenden Kraft, die mich zu einem Ziel führte, das ich noch nicht kannte. Mein Vater hatte einige Bücher, die er mir vorlas. Ich fühlte mich sehr unglücklich, aber ich folgte der Wahrheit nicht. 1880 schickte mich mein Vater in das Gymnasium nach Warna. Während der fünf Jahre, die ich dort verbrachte, fühlte ich den inneren Kampf zwischen dem Guten und dem Bösen. Oft habe ich mich mit manchen Brüdern über die Wahrheit unterhalten, aber mein sündhaftes Herz folgte Christus nicht. Zu diesem Zeitpunkt befand ich mich in einem miserablen Zustand. Ich wurde krank und diese Krankheit brachte mich fast an den Tod. Als ich mich so hilflos fühlte und dachte, dass ich bald vor Gott erscheinen werde, traf ich die Entscheidung, Christus zu folgen und mit Tränen in den Augen flehte ich um die Vergebung meiner Sünden. Bald danach wurde ich gesund. Mein Wunsch war, für immer Christus zu gehören und von Ihm zu zeugen.“",
    image: "/images/beinsa-schule.jpg",
  },
  {
    date: "24. Juni 1887",
    title: "Abschluss der Amerikanischen Schule",
    description:
      "Petar Danov erhält ein „Zertifikat“ für die Absolvierung eines vollen fünfjährigen Kurses an der Theologischen Abteilung der Amerikanischen Wissenschaftlichen Theologischen Schule in Svishtov, da seine Studienjahre an der Varna High School anerkannt werden. Das vom Schulleiter unterzeichnete Zertifikat I. С. Ladd und von den Lehrern Stefan Tomov, Jordan Ikonomov und Apostol S. Ruevski.",
    image: "/images/attestat.jpg",
  },
  {
    date: "1887 - 1888",
    title: "Priester und Lehrer in Hotanza",
    description:
      "Sein Zeugnis wurde von dem Leiter der methodistischen Mission in Ruse E. Ф. Lounsbury (Elford Franklin Lounsbury, 1845-1925) bestätigt, um als methodistischer Priester anerkannt zu werden. Die Mission schickte Petar Danov in das Dorf Hotantsa in der Region Ruse, um dort als Prediger und Lehrer an der evangelischen Sabbatschule zu arbeiten, wo er ein Schuljahr lang - 1887 bis 1888 - tätig war. Er war der erste evangelische Lehrer und der erste evangelische Pfarrer in Chotanets.",
    image: "/images/Beinsa-hotanza.jpg",
  },
  {
    date: "1888 - 1894",
    title: "Studium in der USA",
    description:
      "Am 19. Oktober 1888 schrieb sich Petar Danov als Sonderstudent am Drew Seminary in Madison, New Jersey, ein. Am 15. Oktober 1890 unterzeichnete der Präsident des Drew Seminary, Dr. Henry A. Butz, vor dem Notar des Staates New Jersey A. Rathbun ein Dokument, „dass Mr. Petar C. Danov ein guter und orderntlicher Student des Drew Theological Seminary ist. Es ist auf offiziellem Briefpapier gedruckt, um P. Danov vor den Einwanderungsbehörden zu dienen, um die Erlaubnis zu erhalten, sein Studium am Seminar fortzusetzen. Mit dieser Genehmigung setzte er nach den beiden Studienjahren 1888/89 und 1889/90 sein Studium am Seminar für zwei weitere Jahre als außerordentlicher Student fort - 1890/91 und 1891/92. Am 19. Mai 1892 erhielt Petar Danov ein „Zertifikat“ über den Abschluss des Seminarkurses, ohne eine Note in Altgriechisch.",
    image: "/images/Drew.jpg",
  },
  {
    date: "1888 - 1894",
    title: "Studium in der USA",
    description:
      "Am 12. Oktober 1892 wurde Petar Danov ohne Prüfung als Sonderstudent an der Theologischen Fakultät der Universität Boston unter der Nummer 1615 immatrikuliert. Am 15. April 1893 schloss er sein Studium mit der Diplomarbeit zum Thema „Die Wanderung der germanischen Stämme und ihre Bekehrung zum Christentum“ bei Profs. Luther T. Luther Tracy Townsend (1838 - 1922).",
    image: "/images/beinsa-usa.jpg",
  },
  {
    date: "1888 - 1894",
    title: "Studium in der USA",
    description:
      "7. Juni 1893 Nach einem Jahr Studium erhielt Petar Danov ein „Diplom“ („Graduate of the School of Theology“ der Boston University) von der Boston University, das ihm ein dreijähriges Vollzeitstudium an der Theologischen Fakultät bescheinigte und ihm die Rechte und Privilegien von Absolventen dieser Fakultät verlieh. Er erhielt den Rang eines Reverend. Petar Danovs Diplom der Theologischen Fakultät der Universität Boston vom 7. Juni 1893. 1893-1894 Während dieses akademischen Jahres schrieb sich Petar Danov als Vollzeitstudent an der medizinischen Fakultät der Universität Boston ein. Er besuchte nur das erste Jahr des vierjährigen Medizinstudiums.",
    image: "/images/boston-diplom.jpg",
  },
  {
    date: "1893-1894",
    title: "Studium in der USA",
    description:
      "In diesem Studienjahr schrieb sich Petar Danov als Vollzeitstudent an der Boston University Medical School ein. Er besuchte nur das erste Jahr des vierjährigen Medizinstudiums. Ein „Dienstvermerk“, dass P. Danov als regulärer Student für das akademische Jahr 1893/94 eingeschrieben war, unterzeichnet vom Dekan der medizinischen Fakultät, Talbot, am 3. Februar 1894.Während seines gesamten Studiums in Amerika trennte sich Petar Danov nicht von seiner Geige und musizierte weiter. Über seine Solokonzerte in methodistischen Kirchen im Sommer und Spätherbst 1891 finden sich kurze Berichte und Rezensionen in der amerikanischen Presse jener Zeit: „...The violin performance was of a very high order, and the whole concert had a rare effect on all the lovers of fine and refined music present.“ (The Newtown NY Register, 1891, 9., 16. und 23. Juli, S. 5) Und Ende 1894 hielt der „Reverend Petar Danov of Boston University“ als Absolvent der Divinity School mehrere Predigten und Vorträge in methodistischen Kirchen in Boston und New York.",
    image: "/images/medicine.jpg",
  },
  {
    date: "1895 - 1900",
    title: "Rückkehr nach Bulgarien",
    description:
      "1895 Zu Beginn des Jahres reiste Petar Danov mit dem Schiff „Etruria“ auf der Route New York-Liverpool (England) nach Bulgarien. Er kam am 23. Januar 1895 in Liverpool an und kehrte im frühen Frühjahr desselben Jahres nach Bulgarien zurück. Er ließ sich in Varna nieder und mietete zusammen mit Dr. George R. Mirkovich mietete er Zimmer bei der gleichen Vermieterin, Frau Hristovitsa.",
    image: "/images/etruria.jpg",
  },
  {
    date: "1895 - 1900",
    title: "Öffentliche Aufklärungstätigkeit in Bulgarien",
    description:
      "Am 5. November 1895 hielt er seinen ersten öffentlichen Vortrag in der größten Stadthalle von Varna, der Vereinigungshalle, organisiert von der Lehrervereinigung der Stadt, zum Thema „Wissenschaft und Erziehung in Bezug auf die zwei großen Gesetze der Entwicklung“. Danov druckte in der Druckerei von Kancho Nikolov in Varna sein erstes Buch mit dem Titel „Wissenschaft und Erziehung. Die Anfänge des menschlichen Lebens“. ",
    image: "/images/wissen.jpg",
  },
  {
    date: "1895 - 1900",
    title: "Öffentliche Aufklärungstätigkeit in Bulgarien",
    description:
      "Petar Danov war einer der „Agitatoren“ der unabhängigen Odrinsko-Presel'skoe Gesellschaft „Strandja“, die am 12. Mai 1896 in der Stadt St. Petarsburg gegründet wurde. Sie wurde am 12. Mai, dem 18. Mai, in Varna gegründet, um die „christlichen und nicht-muslimischen Völker in der Türkei, insbesondere in Mazedonien und im osmanischen Vilayet“ zu verteidigen. Am 29. Dezember desselben Jahres nahm er an der von der Gesellschaft organisierten „Kundgebung“ in Varna teil, als Mitglied des Kundgebungsbüros. Hauptmann Petko Kiriakov (Petko Voyvoda (1844-1900)) war der Vorsitzende der Versammlung. Die Versammlung endete mit einer Resolution. Die Resolution der Versammlung wurde am 1. Januar 1897 in der Zeitung Strandja veröffentlicht. 4. Dezember 1896: Zusammen mit Petko Kiriakov (1844-1900), Krustyu Mirsky (1852-1920) und anderen prominenten Persönlichkeiten des öffentlichen Lebens ist Petar Danov einer der Gründer des P.R. Slaveykov Gemeindezentrums in Varna. Das Statut und das Siegel des Gemeinschaftszentrums wurden am 29. Dezember angenommen. Am 5. Januar 1897 wird Petar Danov zum Hausbibliothekar der Chitalishte „P.R. Slaveykov“ gewählt. Bis Ende 1897 hält er drei Vorträge über philosophische Themen in der Stadt, organisiert von der Chitalishte, und zwei weitere im Jahr 1898.",
    image: "/images/stranza.jpg",
  },
  {
    date: "1900",
    title: "Aufruf der ersten Schüler und Gründung des Kette",
    description:
      "Am 7. April* 1900 hält er die erste Zusammenkunft der Weißen Bruderschaft in Varna ab, die sich Zusammenkunft der Kette nennt. Anwesend sind Penü Kirov, Todor Stoimenov aus Burgas und Dr. Mirkovic aus Sliven. Von 1900 bis 1940 veranstaltet er im August an verschiedenen Orten jährliche Zusammenkünfte der Weißen Bruderschaft: in Varna (1900-1908), in Veliko Tarnovo (1909-1925), in Sofia (1926-1941), im Rila- und im Vitoschagebirge.",
    image: "/images/mirkovich.jpg",
  },
  {
    date: "1900",
    title: "Aufruf der ersten Schüler und Gründung des Kette",
    description:
      "Vom 25. Juni bis 9. Juli zeichnet er in Novi Pasar die „Sieben Gespräche mit dem Geist Gottes“ auf. Am 1. Oktober* 1900 schreibt er das Gespräch mit dem Geist Gottes auf, mit dem Titel „Die Drei Dinge“. 1901 bis 1912 reist er durch verschiedene Städte in Bulgarien, hält öffentliche Vorträge und macht phrenologische Untersuchungen an ausgesuchten Personen aus dem bulgarischen Volk. 1904 lässt sich in Sofia im Haus von Petko Gumnerov in der Opaltschenska Straße 66 nieder. Dort beginnt er sein Wort in Form von öffentlichen Vorträgen darzulegen.",
    image: "/images/schueler.jpg",
  },
  {
    date: "1912",
    title: "Das Testament der Farbigen Strahlen des Lichtes",
    description:
      "1912 lebt er im Dorf Arbanassi, bei Veliko Tarnovo, arbeitet mit der Bibel und schreibt „Das Testament der farbigen Strahlen des Lichts“, das im September desselben Jahres veröffentlicht wird.",
    image: "/images/zavet.jpg",
  },
  {
    date: "1914",
    title: "Hier ist der Mensch",
    description:
      "Am 9. März*1914 veranstaltet er eine Gebetsversammlung zur Begrüßung des Geistigen Neujahr und verkündet den Anfang des Wassermannzeitalters. Am 16. März* 1914 hält er den ersten offiziell stenographisch aufgezeichneten Sonntagsvortrag „Hier ist der Mensch“, mit dem der Vortragszyklus „Kraft und Leben“ beginnt. In ihnen werden die Grundprinzipien der Neuen Lehre der Weißen Bruderschaft dargelegt. Am 15. Februar (Donnerstag) 1917 eröffnet er in Sofia einen Zyklus von Sondervorträgen, die er vor verheirateten Frauen bis zum 30. Juni 1932 hält. 1917-18, während des Ersten Weltkrieges, wird er von der Regierung von Vassil Radoslavov in Varna interniert. Dort lebt er im Hotel „London“ und steht mit seinen Schülern im Briefwechsel.",
    image: "/images/sila_beinsa.jpg",
  },
  {
    date: "1922",
    title: "Eröffnung der Okkulten Schule",
    description:
      "Am 24. Februar 1922 eröffnet er die Schule der Universellen Weißen Bruderschaft und bildet in ihr zwei Schulklassen. Die Allgemeine Okkultklasse wird mit dem Vortrag „Die drei Leben“ und die Jugendokkultklasse mit dem Vortrag „Die zwei Wege“ eröffnet. Die Vorträge vor den zwei Okkultklassen werden in einem wöchentlichen Rhythmus 22 Jahre lang bis Dezember 1944 gehalten. Am 21. August 1922 bei der Zusammenkunft der Weißen Bruderschaft in Veliko Tarnovo spielt er zum ersten Mal die Lieder „Fir für fen“ und „Blagoslavjai“ vor, mit denen der Zyklus der schulischen Musikübungen beginnt. Er endet 1944 mit der Übung „Die Neue Genesis“. 1923 legt er die verschiedenen Zyklen seines Wortes in einem zu diesem Zweck speziell errichten Saal in Sofia in der Oboristestraße 14 dar.",
    image: "/images/schule-bd.jpg",
  },
  {
    date: "1929",
    title: "Geistige Sommerschule im Rila Gebirge",
    description:
      "1927 lässt er die Siedlung Izgreva bei Sofia (heute ist Izgrev ein Stadtteil in Sofia) errichten, in der er seine Zuhörer, Anhänger und Schüler versammelt. Dort entsteht eine einzigartige geistige Gemeinde. Petar Danov lässt sich in Izgrev nieder und legt in einem speziell gebauten Saal die verschiedenen Strömungen seines Wortes dar. Am 19. August 1927 hält er innerhalb der Zusammenkunft der Weißen Bruderschaft einen Zyklus von Kongressvorträgen. In einem dieser Vorträge „Der Weg des Schülers“ schildert er das Wesen des neuen Weges der okkulten Schülerschaft. 1929 setzt er den Anfang der geistigen Sommerschule im Gebiet der Sieben Seen im Rila Gebirge. Die Rilazusammenkünfte verlaufen in einer bruderschaftlichen Atmosphäre von festlicher Geistigkeit. Der 19., 20. und 21. August haben eine besondere Bedeutung und werden zum offiziellen Feiertag der Gemeinschaft „Weiße Bruderschaft“.",
    image: "/images/rila.jpg",
  },
  {
    date: "1930",
    title: "Paneurhythmie",
    description:
      "  Am 21. September 1930 eröffnet er einen neuen Zyklus des Wortes: die morgendlichen Sonntagsvorträge, die bis April 1944 dauern. 1934 kreiert er die Paneurhythmie – einen Zyklus von achtundzwanzig Übungen, die Melodie, Text und plastische Bewegungen in sich vereinen. Später fügt er die Übungen „Sonnenstrahlen“ und „Pentagramm“ hinzu. Am 4. Mai 1936 wird er von Aktivisten der politischen Partei „Demokratische Verschwörung“ zusammengeschlagen. Das hatte eine Hirnblutung und Lähmung zu Folge. Trotzdem fährt er am 14. Juli 1936 mit seinen Schülern zum Sommerlager ins Rila Gebirge zu den Sieben Seen und ist am 12. August völlig gesund. Am 22. März 1939 schreibt er an seine Jünger die Botschaft „Das ewige Testament des Geistes“.",
    image: "/images/paneurhythmie.jpg",
  },
  {
    date: "1944",
    title: "Letzte Jahre",
    description:
      "Während der Luftbombardierungen über Sofia Anfang 1944 organisiert er die Flucht der Bewohner von Izgreva nach Martschaevo, einem Dorf 24 Kilometer südwestlich von Sofia. Dort lässt er sich im Haus seines Schülers Temelko Temelkov – heute ein Museum – nieder und kehrt am 19. Oktober 1944 nach Izgrev zurück. Am 20. Dezember 1944 hält er sein Letztes Wort vor der Allgemeinen Okkultklasse. Am 27. Dezember 1944 verlässt er die physische Welt. Sein Körper ist in Izgrev beigesetzt.",
    image: "/images/la.jpg",
  },
];

export function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const elements = timelineRef.current?.querySelectorAll(".timeline-item");
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">
        Biographie
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20" />

        {timelineEvents.map((event, index) => (
          <TimelineEvent key={index} {...event} index={index} />
        ))}
      </div>
    </div>
  );
}
