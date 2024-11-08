'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Am 11. Juli (St. Petrus) 1864 gegen 12 Uhr mittags wird Petar Konstantinov Danov im Dorf Hadurcha (heute Nikolaevka, 30 km nordwestlich von Varna) geboren. Er ist das dritte Kind des Priesters Konstantin Danovski und seiner Frau Dobra Chorbadzi Atanasova. Sie haben noch zwei ältere Kinder: den Sohn Atanas und die Tochter Maria. 1872 besucht Petar Danov die bulgarische Grundschule im Dorf Hadurcha, die während des Russisch-Türkischen Befreiungskrieges 1877- 1878 geschlossen wird. Nach der Befreiung Bulgariens vom türkischen Joch beendet er das fünfjährige Jungengymnasium in Varna.Am 25. Juli* 1886 (im nachfolgenden Text wird die Zeitrechnung des Julianischen Kalenders mit * bezeichnet) beendet er die Amerikanische wissenschaftlich-theologische Schule in der Stadt Svistov. In der Zeitschrift der Methodisten erscheint ein Artikel über methodistische Priester aus Bulgarien, in der Petar Danov folgende Aussage macht:",
    imageSrc: "/placeholder.svg?height=200&width=300",
    imageAlt: "Company founding team"
  },
  {
    year: "2021",
    title: "First Major Product Launch",
    description: "We introduced our flagship product to the market.",
    imageSrc: "/placeholder.svg?height=200&width=300",
    imageAlt: "Product launch event"
  },
  {
    year: "2022",
    title: "Expansion to International Markets",
    description: "We took our first steps into global markets.",
    imageSrc: "/placeholder.svg?height=200&width=300",
    imageAlt: "World map with office locations"
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description: "We launched our company-wide sustainability program.",
    imageSrc: "/placeholder.svg?height=200&width=300",
    imageAlt: "Green energy initiative"
  },
  {
    year: "2024",
    title: "Innovation Award",
    description: "Our team's hard work was recognized with a prestigious award.",
    imageSrc: "/placeholder.svg?height=200&width=300",
    imageAlt: "Team receiving award"
  }
]

export function CompactSkyBlueTimeline() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-sky-800">Our Journey</h1>
      <Timeline>
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} {...event} index={index} />
        ))}
      </Timeline>
    </div>
  )
}

function Timeline({ children }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-sky-800 z-0"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

function TimelineItem({ year, title, description, imageSrc, imageAlt, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className="mb-8"
    >
      <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
        <div className="bg-sky-800 text-white text-lg font-bold py-1 px-3 rounded-full shadow-md">
          {year}
        </div>
      </div>
      <Card className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} overflow-hidden`}>
        <CardContent className="flex-1 p-4">
          <h3 className="text-xl font-semibold mb-1 text-sky-800">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <div className="w-full md:w-1/3 h-32 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </Card>
    </motion.div>
  )
}