'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { List, ChevronRight } from 'lucide-react'

interface TocItem {
    id: string
    text: string
    level: number
}

export function TableOfContents() {
    const [toc, setToc] = useState<TocItem[]>([])
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const headings = document.querySelectorAll('article h1, article h2, article h3, article h4')
        const tocItems: TocItem[] = []

        headings.forEach((heading, index) => {
            const id = heading.id || `heading-${index}`
            if (!heading.id) {
                heading.id = id
            }

            tocItems.push({
                id,
                text: heading.textContent || '',
                level: parseInt(heading.tagName.charAt(1))
            })
        })

        setToc(tocItems)

        // Set up intersection observer for active heading
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '-20% 0% -35% 0%' }
        )

        headings.forEach((heading) => observer.observe(heading))

        return () => observer.disconnect()
    }, [])

    if (toc.length === 0) return null

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <Card className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-auto">
            <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <List className="h-4 w-4" />
                    Inhalt
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <nav className="space-y-1">
                    {toc.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToHeading(item.id)}
                            className={`
                w-full text-left text-sm transition-colors hover:text-primary
                ${activeId === item.id ? 'text-primary font-medium' : 'text-muted-foreground'}
                ${item.level === 1 ? 'pl-0' : ''}
                ${item.level === 2 ? 'pl-4' : ''}
                ${item.level === 3 ? 'pl-8' : ''}
                ${item.level === 4 ? 'pl-12' : ''}
              `}
                        >
                            <div className="flex items-center gap-1 py-1">
                                {activeId === item.id && (
                                    <ChevronRight className="h-3 w-3 flex-shrink-0" />
                                )}
                                <span className="line-clamp-2">{item.text}</span>
                            </div>
                        </button>
                    ))}
                </nav>
            </CardContent>
        </Card>
    )
}