import Link from "next/link"
import type { ArticleItem } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight, BookOpen } from "lucide-react"
import { formatDateGermanShort } from "@/lib/date-utils"

interface Props {
    category: string
    articles: ArticleItem[]
}

const ArticleItemList = ({ category, articles }: Props) => {
    // Function to estimate reading time based on title length (rough approximation)
    const estimateReadingTime = (title: string) => {
        const avgWordsPerMinute = 200
        const wordCount = title.split(' ').length * 50 // Rough estimate
        return Math.max(1, Math.ceil(wordCount / avgWordsPerMinute))
    }



    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-sm font-medium px-3 py-1 capitalize">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {category}
                </Badge>
                <div className="h-px bg-border flex-1" />
                <span className="text-xs text-muted-foreground">
                    {articles.length} article{articles.length !== 1 ? 's' : ''}
                </span>
            </div>

            <div className="grid gap-4">
                {articles.map((article, id) => (
                    <Card key={id} className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/20 hover:-translate-y-1">
                        <Link href={`/${article.id}`} className="block">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                    {article.title}
                                </CardTitle>
                                <CardDescription className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                                    <span className="flex items-center gap-1">
                                        <CalendarDays className="h-4 w-4" />
                                        {formatDateGermanShort(article.date)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {estimateReadingTime(article.title)} min Lesezeit
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                                        Weiterlesen →
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="h-1 w-8 bg-gradient-to-r from-primary/20 to-primary group-hover:from-primary/40 group-hover:to-primary transition-all rounded-full" />
                                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ArticleItemList