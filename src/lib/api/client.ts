const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

export interface Profile {
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
  highlighted: boolean
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

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}

export async function getProfile(): Promise<Profile> {
  return fetchAPI<Profile>('/api/profile')
}

export async function getExperiences(): Promise<Experience[]> {
  return fetchAPI<Experience[]>('/api/experiences')
}

export async function getSkills(): Promise<Skill[]> {
  return fetchAPI<Skill[]>('/api/skills')
}

export async function getProjects(): Promise<Project[]> {
  return fetchAPI<Project[]>('/api/projects')
}

export async function getEducation(): Promise<Education[]> {
  return fetchAPI<Education[]>('/api/education')
}

export async function getCertifications(): Promise<Certification[]> {
  return fetchAPI<Certification[]>('/api/certifications')
}
