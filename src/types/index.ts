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
  category: 'mobile' | 'backend' | 'devops' | 'other'
}

export interface Project {
  id: number
  name: string
  description: string
  url: string
  tech: string[]
  highlighted?: boolean
  category?: 'Android' | 'Backend' | 'Fullstack'
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
  funFacts?: string[]
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

export interface Testimonial {
  id: number
  author: string
  role: string
  company: string
  quote: string
  linkedinUrl?: string
  avatarUrl?: string
}

export interface CodeSnippet {
  title: string
  code: string
  language: string
}

export interface CaseStudyArchitecture {
  description: string
  diagram?: string
  codeSnippets?: CodeSnippet[]
}

export interface CaseStudy {
  id: string
  name: string
  description: string
  techStack: string[]
  githubUrl: string
  problem: string
  solution: string
  technicalDecisions: string[]
  challenges: string
  results: string
  architecture: CaseStudyArchitecture
  codeQuality: string[]
}
