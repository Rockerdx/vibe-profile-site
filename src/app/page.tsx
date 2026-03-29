import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import {
  getProfileData,
  getExperiencesData,
  getSkillsData,
  getProjectsData,
  getEducationData,
  getCertificationsData,
} from '@/lib/api-data'

export default async function Home() {
  const [
    profile,
    experiences,
    skills,
    projects,
    education,
    certifications,
  ] = await Promise.all([
    getProfileData(),
    getExperiencesData(),
    getSkillsData(),
    getProjectsData(),
    getEducationData(),
    getCertificationsData(),
  ])

  return (
    <main className="min-h-screen bg-background">
      <Hero profile={profile} />
      <About profile={profile} education={education} certifications={certifications} />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact profile={profile} />
    </main>
  )
}
