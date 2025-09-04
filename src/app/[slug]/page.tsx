import Link from "next/link"
import { getArticleData } from "../lib/articles"
import { ArrowLeft, CalendarDays, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TableOfContents } from "@/components/TableOfContents"
import { formatDateGerman, formatDateISO } from "@/lib/date-utils"

interface PageProps {
    params: Promise<{ slug: string }>
}

const Article = async ({ params }: PageProps) => {
    const { slug } = await params
    const articleData = await getArticleData(slug)

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Navigation */}
                <div className="mb-8">
                    <Button variant="ghost" asChild className="mb-6">
                        <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>
                    </Button>
                </div>

                <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                    <div className="min-w-0">
                        {/* Article Header */}
                        <header className="mb-12 space-y-6">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-sm capitalize">
                                    {articleData.category || 'Article'}
                                </Badge>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                                    {articleData.title}
                                </h1>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4" />
                                    <time dateTime={formatDateISO(articleData.date)}>
                                        {formatDateGerman(articleData.date)}
                                    </time>
                                </div>
                                <Button variant="ghost" size="sm" className="ml-auto">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share
                                </Button>
                            </div>

                            <Separator />
                        </header>

                        {/* Article Content */}
                        <article className="article-content prose prose-lg dark:prose-invert max-w-none [&>div>h1:first-child]:hidden">
                            <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
                        </article>

                        {/* Article Footer */}
                        <footer className="mt-16 pt-8 border-t">
                            <div className="flex justify-between items-center">
                                <Button variant="outline" asChild>
                                    <Link href="/blog">
                                        <ArrowLeft className="h-4 w-4 mr-2" />
                                        More Articles
                                    </Link>
                                </Button>
                                <Button variant="ghost" size="sm">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share Article
                                </Button>
                            </div>
                        </footer>
                    </div>

                    {/* Sidebar with Table of Contents */}
                    <aside className="hidden lg:block">
                        <TableOfContents />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Article