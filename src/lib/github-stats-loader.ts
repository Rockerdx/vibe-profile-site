import { GitHubStats, GitHubRepo, GitHubLanguage } from '@/types'
import { githubStats as fallbackStats } from './data'

// Language color mapping for fallback
const languageColors: Record<string, string> = {
  'Kotlin': '#A97BFF',
  'Java': '#b07219',
  'Go': '#00ADD8',
  'TypeScript': '#3178c6',
  'JavaScript': '#f1e05a',
  'Python': '#3572A5',
  'Dart': '#00B4AB',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'Shell': '#89e051',
  'C++': '#f34b7d',
  'C': '#555555',
  'Swift': '#ffac45',
  'Ruby': '#701516',
  'PHP': '#4F5D95',
  'Rust': '#dea584',
}

/**
 * Load GitHub stats from generated JSON file
 * Falls back to static data if file doesn't exist or is invalid
 */
export async function loadGitHubStats(): Promise<GitHubStats> {
  try {
    // In Node.js/build environment, read from file system
    if (typeof window === 'undefined') {
      const fs = await import('fs')
      const path = await import('path')
      
      const statsPath = path.join(process.cwd(), 'public', 'github-stats.json')
      
      if (fs.existsSync(statsPath)) {
        const fileContent = fs.readFileSync(statsPath, 'utf8')
        const stats = JSON.parse(fileContent)
        
        // Validate required fields
        if (isValidGitHubStats(stats)) {
          return stats as GitHubStats
        }
      }
    }
    
    // In browser or if file doesn't exist, fetch from public URL
    const response = await fetch('/github-stats.json', {
      next: { revalidate: 3600 }, // Revalidate every hour
    })
    
    if (response.ok) {
      const stats = await response.json()
      if (isValidGitHubStats(stats)) {
        return stats as GitHubStats
      }
    }
  } catch (error) {
    console.warn('Failed to load GitHub stats from JSON, using fallback:', error)
  }
  
  // Return fallback stats
  return fallbackStats
}

/**
 * Validate that stats object has all required fields
 */
function isValidGitHubStats(stats: unknown): stats is GitHubStats {
  if (!stats || typeof stats !== 'object') return false
  
  const s = stats as Record<string, unknown>
  
  return (
    typeof s.username === 'string' &&
    typeof s.totalContributions === 'number' &&
    typeof s.currentStreak === 'number' &&
    typeof s.longestStreak === 'number' &&
    typeof s.totalStars === 'number' &&
    typeof s.totalForks === 'number' &&
    Array.isArray(s.topLanguages) &&
    Array.isArray(s.recentRepos)
  )
}

/**
 * Get GitHub stats with automatic fallback
 * This is the main function to use in components
 */
export async function getGitHubStats(): Promise<GitHubStats> {
  return loadGitHubStats()
}
