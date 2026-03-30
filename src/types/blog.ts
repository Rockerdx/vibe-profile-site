export interface BlogArticle {
  id: string
  title: string
  link: string
  pubDate: string
  excerpt: string
  categories: string[]
}

export interface BlogStats {
  totalArticles: number
  lastUpdated: string
}
