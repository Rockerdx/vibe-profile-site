export interface Experience {
  id: number
  company: string
  position: string
  period: string
  duration: string
  location: string
  achievements: string[]
  techStack?: string[]
}

export interface Skill {
  id: number
  name: string
  category: 'mobile' | 'backend' | 'other'
}

export interface Project {
  id: number
  name: string
  description: string
  url: string
  tech: string[]
  highlighted?: boolean
}

export interface ProfileData {
  id: number
  name: string
  title: string
  location: string
  email: string
  linkedin: string
  github: string
  summary: string
  avatarUrl: string
}

export interface Education {
  id: number
  institution: string
  degree: string
  period: string
}

export interface Certification {
  id: number
  name: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  url: string
  stars: number
  forks: number
  language: string | null
  updatedAt: string
}

export interface GitHubLanguage {
  name: string
  percentage: number
  color: string
}

export interface GitHubStats {
  username: string
  totalContributions: number
  currentStreak: number
  longestStreak: number
  totalStars: number
  totalForks: number
  topLanguages: GitHubLanguage[]
  recentRepos: GitHubRepo[]
}
