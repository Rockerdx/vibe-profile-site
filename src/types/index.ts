export interface Experience {
  company: string
  position: string
  period: string
  duration: string
  location: string
  achievements: string[]
  techStack?: string[]
}

export interface Skill {
  name: string
  category: 'mobile' | 'backend' | 'other'
}

export interface Project {
  name: string
  description: string
  url: string
  tech: string[]
  highlighted?: boolean
}

export interface ProfileData {
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
  institution: string
  degree: string
  period: string
}
