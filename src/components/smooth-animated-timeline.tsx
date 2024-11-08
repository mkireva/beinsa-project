"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  year: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

const timelineEvents = [
  {
    year: "1864",
    title: "Geburt und Familie",
    description:
      "Am 11. Juli  1864 gegen 12 Uhr mittags wird Petar Konstantinov Danov im Dorf Hadurcha heute Nikolaevka, 30 km nordwestlich von Varna geboren. Er ist das dritte Kind des Priesters Konstantin Danovski und seiner Frau Dobra Chorbadzi Atanasova. Sie habennoch zwei ältere Kinder: den Sohn Atanas und die Tochter Maria.",
    imageSrc: "/images/beinsa_familie.jpg",
    imageAlt: "Company founding team",
  },
  {
    year: "1872",
    title: "Schule in Bulgarien",
    description:
      "1872 besucht Petar Danov die bulgarische Grundschule im Dorf Hadurcha,die während des Russisch-Türkischen Befreiungskrieges 1877- 1878geschlossen wird.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Product launch event",
  },
  {
    year: "2022",
    title: "Expansion to International Markets",
    description:
      "We took our first steps into global markets, opening offices in three new countries and partnering with international distributors.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "World map with office locations",
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description:
      "We launched our company-wide sustainability program, aiming to be carbon neutral by 2025 and setting new industry standards for eco-friendly practices.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Green energy initiative",
  },
  {
    year: "2024",
    title: "Innovation Award",
    description:
      "Our team's hard work was recognized with a prestigious industry innovation award, cementing our position as a leader in the field.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Team receiving award",
  },
];

export function SmoothAnimatedTimeline() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Biographie</h1>
      <Timeline>
        {timelineEvents.map((event, index) => (
          <TimelineItem   key={index}
          year={Number(event.year)} // Explicit conversion here
          title={event.title}
          description={event.description}
          imageSrc={event.imageSrc}
          imageAlt={event.imageAlt}
          index={index} />
        ))}
      </Timeline>
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 z-0"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
  imageSrc,
  imageAlt,
  index,
}: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className="mb-16"
    >
      <div
        className={`flex items-center mb-4 ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        <div className="bg-primary text-primary-foreground text-4xl font-bold py-2 px-6 rounded-full shadow-lg">
          {year}
        </div>
      </div>
      <Card
        className={`flex flex-col ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <CardContent className="flex-1 p-6">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <div className="flex-1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={100}
            height={50}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </Card>
    </motion.div>
  );
}
