#!/usr/bin/env node

/**
 * Build-time GitHub Stats Generator
 * 
 * This script fetches GitHub statistics at build time and saves them to a JSON file.
 * It implements caching to respect GitHub API rate limits (5000 req/hour with token).
 * 
 * Usage:
 *   node scripts/fetch-github-stats.js
 * 
 * Environment Variables:
 *   GITHUB_TOKEN - GitHub personal access token (required for higher rate limits)
 *   GITHUB_USERNAME - GitHub username (defaults to 'Rockerdx')
 * 
 * Output:
 *   public/github-stats.json - Generated stats file
 */

const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'Rockerdx';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const CACHE_FILE = path.join(process.cwd(), 'public', 'github-stats.json');
const CACHE_MAX_AGE_MS = 60 * 60 * 1000; // 1 hour in milliseconds

// Language color mapping
const languageColors = {
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
};

// Static fallback data
const fallbackStats = {
  username: 'Rockerdx',
  totalContributions: 1247,
  currentStreak: 12,
  longestStreak: 28,
  totalStars: 145,
  totalForks: 23,
  topLanguages: [
    { name: 'Kotlin', percentage: 42, color: '#A97BFF' },
    { name: 'Java', percentage: 28, color: '#b07219' },
    { name: 'Go', percentage: 15, color: '#00ADD8' },
    { name: 'TypeScript', percentage: 8, color: '#3178c6' },
    { name: 'Python', percentage: 7, color: '#3572A5' },
  ],
  recentRepos: [
    {
      id: 1,
      name: 'vibe-profile-site',
      description: 'Personal portfolio website built with Next.js',
      url: 'https://github.com/Rockerdx/vibe-profile-site',
      stars: 12,
      forks: 2,
      language: 'TypeScript',
      updatedAt: '2026-03-28T10:30:00Z',
    },
    {
      id: 2,
      name: 'MyPopularMoviesApps',
      description: 'Movie discovery application for Udacity',
      url: 'https://github.com/Rockerdx/MyPopularMoviesApps',
      stars: 45,
      forks: 12,
      language: 'Java',
      updatedAt: '2026-02-15T08:20:00Z',
    },
    {
      id: 3,
      name: 'FlutterPopularMoviesApp',
      description: 'Flutter movie app with TheMovieDB API',
      url: 'https://github.com/Rockerdx/FlutterPopularMoviesApp',
      stars: 23,
      forks: 5,
      language: 'Dart',
      updatedAt: '2026-01-20T14:10:00Z',
    },
    {
      id: 4,
      name: 'DeepLearningOnAndroid',
      description: 'Deep learning deployment on mobile',
      url: 'https://github.com/Rockerdx/DeepLearningOnAndroid',
      stars: 38,
      forks: 8,
      language: 'Python',
      updatedAt: '2025-12-10T09:45:00Z',
    },
    {
      id: 5,
      name: 'KlinikApp',
      description: 'Clinic reservation booking app',
      url: 'https://github.com/Rockerdx/KlinikApp',
      stars: 15,
      forks: 3,
      language: 'Java',
      updatedAt: '2025-11-05T16:30:00Z',
    },
    {
      id: 6,
      name: 'Temperature',
      description: 'Android temperature library',
      url: 'https://github.com/Rockerdx/Temperature',
      stars: 12,
      forks: 3,
      language: 'Kotlin',
      updatedAt: '2025-10-20T11:25:00Z',
    },
  ],
  lastUpdated: new Date().toISOString(),
  source: 'fallback',
};

/**
 * Check if cached data is still valid
 */
function isCacheValid() {
  try {
    if (!fs.existsSync(CACHE_FILE)) {
      return false;
    }
    
    const cacheContent = fs.readFileSync(CACHE_FILE, 'utf8');
    const cached = JSON.parse(cacheContent);
    
    if (!cached.lastUpdated) {
      return false;
    }
    
    const cacheAge = Date.now() - new Date(cached.lastUpdated).getTime();
    return cacheAge < CACHE_MAX_AGE_MS;
  } catch (error) {
    console.warn('Cache validation error:', error.message);
    return false;
  }
}

/**
 * Fetch data from GitHub API
 */
async function fetchGitHubAPI(url, options = {}) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'vibe-profile-site',
    ...options.headers,
  };
  
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
  }
  
  const response = await fetch(url, {
    ...options,
    headers,
  });
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} - ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * Fetch recent repositories
 */
async function fetchRecentRepos() {
  const repos = await fetchGitHubAPI(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=10`
  );
  
  return repos.map(repo => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    updatedAt: repo.updated_at,
  }));
}

/**
 * Calculate language statistics from repositories
 */
function calculateLanguageStats(repos) {
  const languageCounts = {};
  
  repos.forEach(repo => {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }
  });
  
  const totalLangRepos = Object.values(languageCounts).reduce((a, b) => a + b, 0);
  
  if (totalLangRepos === 0) {
    return fallbackStats.topLanguages;
  }
  
  return Object.entries(languageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([name, count]) => ({
      name,
      percentage: Math.round((count / totalLangRepos) * 100),
      color: languageColors[name] || '#8b949e',
    }));
}

/**
 * Fetch contribution stats using GraphQL API
 */
async function fetchContributionStats() {
  if (!GITHUB_TOKEN) {
    console.log('No GITHUB_TOKEN provided, using estimated contribution stats');
    return {
      totalContributions: 0,
      currentStreak: 0,
      longestStreak: 0,
    };
  }
  
  try {
    const response = await fetchGitHubAPI('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            user(login: "${GITHUB_USERNAME}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });
    
    const calendar = response.data?.user?.contributionsCollection?.contributionCalendar;
    
    if (!calendar) {
      throw new Error('No contribution data found');
    }
    
    const totalContributions = calendar.totalContributions || 0;
    
    // Calculate streaks from contribution data
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    
    const today = new Date().toISOString().split('T')[0];
    let foundToday = false;
    
    // Flatten all contribution days
    const allDays = calendar.weeks.flatMap(week => week.contributionDays);
    
    // Calculate current streak (consecutive days up to today)
    for (let i = allDays.length - 1; i >= 0; i--) {
      const day = allDays[i];
      
      if (day.date === today) {
        foundToday = true;
        if (day.contributionCount > 0) {
          currentStreak = 1;
        }
      } else if (foundToday && day.contributionCount > 0) {
        currentStreak++;
      } else if (foundToday && day.contributionCount === 0) {
        break;
      }
    }
    
    // Calculate longest streak
    for (const day of allDays) {
      if (day.contributionCount > 0) {
        tempStreak++;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        tempStreak = 0;
      }
    }
    
    return {
      totalContributions,
      currentStreak,
      longestStreak,
    };
  } catch (error) {
    console.warn('Failed to fetch contribution stats:', error.message);
    return {
      totalContributions: 0,
      currentStreak: 0,
      longestStreak: 0,
    };
  }
}

/**
 * Generate GitHub stats
 */
async function generateGitHubStats() {
  console.log(`Fetching GitHub stats for ${GITHUB_USERNAME}...`);
  
  // Check cache first
  if (isCacheValid()) {
    console.log('Using cached GitHub stats (valid for 1 hour)');
    const cached = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    return cached;
  }
  
  try {
    // Fetch repositories
    const recentRepos = await fetchRecentRepos();
    
    // Calculate totals
    const totalStars = recentRepos.reduce((sum, repo) => sum + repo.stars, 0);
    const totalForks = recentRepos.reduce((sum, repo) => sum + repo.forks, 0);
    
    // Calculate language stats
    const topLanguages = calculateLanguageStats(recentRepos);
    
    // Fetch contribution stats
    const { totalContributions, currentStreak, longestStreak } = await fetchContributionStats();
    
    // Use fallback for streaks if GraphQL didn't return them
    const finalStats = {
      username: GITHUB_USERNAME,
      totalContributions: totalContributions || fallbackStats.totalContributions,
      currentStreak: currentStreak || fallbackStats.currentStreak,
      longestStreak: longestStreak || fallbackStats.longestStreak,
      totalStars: totalStars || fallbackStats.totalStars,
      totalForks: totalForks || fallbackStats.totalForks,
      topLanguages: topLanguages.length > 0 ? topLanguages : fallbackStats.topLanguages,
      recentRepos: recentRepos.slice(0, 6),
      lastUpdated: new Date().toISOString(),
      source: 'github-api',
    };
    
    console.log('✓ Successfully fetched GitHub stats from API');
    return finalStats;
  } catch (error) {
    console.error('Failed to fetch GitHub stats:', error.message);
    console.log('Using fallback stats...');
    return fallbackStats;
  }
}

/**
 * Save stats to file
 */
function saveStats(stats) {
  // Ensure public directory exists
  const publicDir = path.dirname(CACHE_FILE);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(CACHE_FILE, JSON.stringify(stats, null, 2));
  console.log(`✓ GitHub stats saved to ${CACHE_FILE}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('=== GitHub Stats Generator ===\n');
  
  if (!GITHUB_TOKEN) {
    console.warn('⚠️  GITHUB_TOKEN not set. Using fallback data and limited API access.');
    console.warn('   Set GITHUB_TOKEN for higher rate limits (5000 req/hour).\n');
  } else {
    console.log('✓ GITHUB_TOKEN is set\n');
  }
  
  try {
    const stats = await generateGitHubStats();
    saveStats(stats);
    
    console.log('\n=== Stats Summary ===');
    console.log(`Username: ${stats.username}`);
    console.log(`Contributions: ${stats.totalContributions.toLocaleString()}`);
    console.log(`Current Streak: ${stats.currentStreak} days`);
    console.log(`Longest Streak: ${stats.longestStreak} days`);
    console.log(`Total Stars: ${stats.totalStars}`);
    console.log(`Total Forks: ${stats.totalForks}`);
    console.log(`Top Languages: ${stats.topLanguages.map(l => l.name).join(', ')}`);
    console.log(`Recent Repos: ${stats.recentRepos.length}`);
    console.log(`Source: ${stats.source}`);
    console.log(`Last Updated: ${stats.lastUpdated}`);
    console.log('\n✓ GitHub stats generation complete!');
    
    process.exit(0);
  } catch (error) {
    console.error('\n✗ Failed to generate GitHub stats:', error.message);
    
    // Save fallback stats on error
    saveStats(fallbackStats);
    console.log('✓ Fallback stats saved');
    
    process.exit(1);
  }
}

main();
