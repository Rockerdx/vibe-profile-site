import {
  ProfileData,
  Experience,
  Skill,
  Project,
  Education,
  Certification,
  GitHubStats,
} from '@/types'
import {
  getProfile,
  getExperiences,
  getSkills,
  getProjects,
  getEducation,
  getCertifications,
  getGitHubStats,
} from '@/lib/api/client'
import {
  profile as staticProfile,
  experiences as staticExperiences,
  skills as staticSkills,
  projects as staticProjects,
  education as staticEducation,
  certifications as staticCertifications,
  githubStats as staticGitHubStats,
} from '@/lib/data'

export async function getProfileData(): Promise<ProfileData> {
  try {
    return await getProfile()
  } catch (error) {
    console.error('Failed to fetch profile from API, using fallback:', error)
    return staticProfile
  }
}

export async function getExperiencesData(): Promise<Experience[]> {
  try {
    return await getExperiences()
  } catch (error) {
    console.error('Failed to fetch experiences from API, using fallback:', error)
    return staticExperiences
  }
}

export async function getSkillsData(): Promise<Skill[]> {
  try {
    return await getSkills()
  } catch (error) {
    console.error('Failed to fetch skills from API, using fallback:', error)
    return staticSkills
  }
}

export async function getProjectsData(): Promise<Project[]> {
  try {
    return await getProjects()
  } catch (error) {
    console.error('Failed to fetch projects from API, using fallback:', error)
    return staticProjects
  }
}

export async function getEducationData(): Promise<Education[]> {
  try {
    return await getEducation()
  } catch (error) {
    console.error('Failed to fetch education from API, using fallback:', error)
    return staticEducation
  }
}

export async function getCertificationsData(): Promise<Certification[]> {
  try {
    return await getCertifications()
  } catch (error) {
    console.error('Failed to fetch certifications from API, using fallback:', error)
    return staticCertifications
  }
}

export async function getGitHubStatsData(): Promise<GitHubStats> {
  try {
    return await getGitHubStats()
  } catch (error) {
    console.error('Failed to fetch GitHub stats from API, using fallback:', error)
    return staticGitHubStats
  }
}
