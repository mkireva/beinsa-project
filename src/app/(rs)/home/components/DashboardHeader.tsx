import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DashboardHeaderProps {
  onSearch: (value: string) => void
  onSort: (value: string) => void
  onCategoryChange: (value: string) => void
  categories: string[]
  selectedCategory: string
  sortOrder: string
}

export function DashboardHeader({ 
  onSearch, 
  onSort, 
  onCategoryChange, 
  categories,
  selectedCategory,
  sortOrder
}: DashboardHeaderProps) {
  return (
    <div className="mb-6 bg-gradient-to-r from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 shadow-sm border dark:border-slate-700 rounded-lg p-3 sm:p-4">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex items-center justify-between border-b dark:border-slate-700 pb-3 sm:pb-4">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-800 to-sky-600 dark:from-sky-400 dark:to-sky-200 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
            Vorträge
          </h1>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 order-last sm:order-first">
            <Select onValueChange={onCategoryChange} value={selectedCategory}>
              <SelectTrigger className="w-[140px] sm:w-[180px] whitespace-nowrap py-2 text-sm sm:text-base bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                <SelectValue placeholder="Alle Kategorien" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                <SelectItem value="all">Alle Kategorien</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={onSort} value={sortOrder}>
              <SelectTrigger className="w-[140px] sm:w-[160px] whitespace-nowrap py-2 text-sm sm:text-base bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="title-asc">Title A-Z</SelectItem>
                <SelectItem value="title-desc">Title Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search lectures..."
                className="pl-8 py-2 w-full text-sm sm:text-base bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
