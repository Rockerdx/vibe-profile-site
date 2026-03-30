import { BlogArticle } from '@/types/blog'
import { fallbackBlogArticles } from '@/lib/blog-data'

const MEDIUM_RSS_URL = 'https://medium.com/feed/@rzkputra'
const CACHE_REVALIDATE_SECONDS = 3600 // 1 hour cache

/**
 * Extract plain text excerpt from HTML content
 */
function extractExcerpt(htmlContent: string, maxLength: number = 200): string {
  // Remove HTML tags
  const plainText = htmlContent
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  
  // Truncate to maxLength
  if (plainText.length <= maxLength) {
    return plainText
  }
  
  // Find the last space before maxLength to avoid cutting words
  const truncated = plainText.substring(0, maxLength)
  const lastSpaceIndex = truncated.lastIndexOf(' ')
  
  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...'
  }
  
  return truncated + '...'
}

/**
 * Parse RSS XML to extract articles
 */
function parseRSS(xmlText: string): BlogArticle[] {
  const articles: BlogArticle[] = []
  
  // Parse item elements
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let itemMatch
  
  while ((itemMatch = itemRegex.exec(xmlText)) !== null) {
    const itemContent = itemMatch[1]
    
    // Extract title
    const titleMatch = itemContent.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/)
    const title = titleMatch ? titleMatch[1].trim() : ''
    
    // Extract link
    const linkMatch = itemContent.match(/<link>([^<]*)<\/link>/)
    const link = linkMatch ? linkMatch[1].trim() : ''
    
    // Extract guid for ID
    const guidMatch = itemContent.match(/<guid[^>]*>([^<]*)<\/guid>/)
    const id = guidMatch ? guidMatch[1].split('/').pop() || '' : ''
    
    // Extract pubDate
    const pubDateMatch = itemContent.match(/<pubDate>([^<]*)<\/pubDate>/)
    const pubDate = pubDateMatch ? pubDateMatch[1].trim() : ''
    
    // Extract categories
    const categories: string[] = []
    const categoryRegex = /<category>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/category>/g
    let categoryMatch
    while ((categoryMatch = categoryRegex.exec(itemContent)) !== null) {
      categories.push(categoryMatch[1].trim())
    }
    
    // Extract content for excerpt
    const contentMatch = itemContent.match(/<content:encoded>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/content:encoded>/)
    const content = contentMatch ? contentMatch[1] : ''
    const excerpt = extractExcerpt(content, 200)
    
    if (title && link && id) {
      articles.push({
        id,
        title,
        link,
        pubDate: new Date(pubDate).toISOString(),
        excerpt,
        categories,
      })
    }
  }
  
  return articles
}

/**
 * Fetch Medium blog articles from RSS feed with 1-hour caching
 */
export async function getMediumArticles(): Promise<BlogArticle[]> {
  try {
    const response = await fetch(MEDIUM_RSS_URL, {
      next: { revalidate: CACHE_REVALIDATE_SECONDS },
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml',
      },
    })
    
    if (!response.ok) {
      throw new Error(`Medium RSS fetch failed: ${response.status}`)
    }
    
    const xmlText = await response.text()
    const articles = parseRSS(xmlText)
    
    if (articles.length === 0) {
      console.warn('No articles found in Medium RSS, using fallback data')
      return fallbackBlogArticles
    }
    
    return articles
  } catch (error) {
    console.error('Failed to fetch Medium RSS, using fallback:', error)
    return fallbackBlogArticles
  }
}

/**
 * Format date for display
 */
export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
