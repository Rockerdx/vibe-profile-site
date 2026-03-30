'use client'

import { Profile, Experience, Skill, Project } from '@/lib/api/client'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

function getAuthHeaders(): HeadersInit {
  if (typeof window === 'undefined') {
    return { 'Content-Type': 'application/json' }
  }
  const tokens = localStorage.getItem('vibe_admin_tokens')
  const accessToken = tokens ? JSON.parse(tokens).accessToken : null
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  }
}

async function fetchAdminAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: getAuthHeaders(),
  })

  if (response.status === 401) {
    // Token expired, redirect to login
    if (typeof window !== 'undefined') {
      localStorage.removeItem('vibe_admin_tokens')
      window.location.href = '/admin/login'
    }
    throw new Error('Unauthorized')
  }

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || `API error: ${response.status}`)
  }

  return response.json()
}

// Profile Admin APIs
export async function adminGetProfile(): Promise<Profile> {
  return fetchAdminAPI<Profile>('/api/admin/content/profile')
}

export async function adminUpdateProfile(profile: Profile): Promise<Profile> {
  return fetchAdminAPI<Profile>('/api/admin/content/profile', {
    method: 'PUT',
    body: JSON.stringify(profile),
  })
}

// Experience Admin APIs
export async function adminGetExperiences(): Promise<Experience[]> {
  return fetchAdminAPI<Experience[]>('/api/admin/content/experiences')
}

export async function adminCreateExperience(experience: Omit<Experience, 'id'>): Promise<Experience> {
  return fetchAdminAPI<Experience>('/api/admin/content/experiences', {
    method: 'POST',
    body: JSON.stringify(experience),
  })
}

export async function adminUpdateExperience(experience: Experience): Promise<Experience> {
  return fetchAdminAPI<Experience>(`/api/admin/content/experiences/${experience.id}`, {
    method: 'PUT',
    body: JSON.stringify(experience),
  })
}

export async function adminDeleteExperience(id: number): Promise<void> {
  await fetchAdminAPI(`/api/admin/content/experiences/${id}`, {
    method: 'DELETE',
  })
}

// Skills Admin APIs
export async function adminGetSkills(): Promise<Skill[]> {
  return fetchAdminAPI<Skill[]>('/api/admin/content/skills')
}

export async function adminCreateSkill(skill: Omit<Skill, 'id'>): Promise<Skill> {
  return fetchAdminAPI<Skill>('/api/admin/content/skills', {
    method: 'POST',
    body: JSON.stringify(skill),
  })
}

export async function adminUpdateSkill(skill: Skill): Promise<Skill> {
  return fetchAdminAPI<Skill>(`/api/admin/content/skills/${skill.id}`, {
    method: 'PUT',
    body: JSON.stringify(skill),
  })
}

export async function adminDeleteSkill(id: number): Promise<void> {
  await fetchAdminAPI(`/api/admin/content/skills/${id}`, {
    method: 'DELETE',
  })
}

// Projects Admin APIs
export async function adminGetProjects(): Promise<Project[]> {
  return fetchAdminAPI<Project[]>('/api/admin/content/projects')
}

export async function adminCreateProject(project: Omit<Project, 'id'>): Promise<Project> {
  return fetchAdminAPI<Project>('/api/admin/content/projects', {
    method: 'POST',
    body: JSON.stringify(project),
  })
}

export async function adminUpdateProject(project: Project): Promise<Project> {
  return fetchAdminAPI<Project>(`/api/admin/content/projects/${project.id}`, {
    method: 'PUT',
    body: JSON.stringify(project),
  })
}

export async function adminDeleteProject(id: number): Promise<void> {
  await fetchAdminAPI(`/api/admin/content/projects/${id}`, {
    method: 'DELETE',
  })
}
