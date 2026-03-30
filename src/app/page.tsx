import dynamic from 'next/dynamic'
import HomeSection from '@/components/sections/HomeSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import GitHubStats from '@/components/GitHubStats'
import ThemeToggle from '@/components/ThemeToggle'
import {
  getProfileData,
  getExperiencesData,
  getSkillsData,
  getProjectsData,
  getEducationData,
  getCertificationsData,
  getGitHubStatsData,
} from '@/lib/api-data'

// Dynamically import MobileShell with SSR disabled to prevent hydration issues
const MobileShell = dynamic(() => import('@/components/MobileShell'), { ssr: false })

export default async function Home() {
  const [
    profile,
    experiences,
    skills,
    projects,
    education,
    certifications,
    githubStats,
  ] = await Promise.all([
    getProfileData(),
    getExperiencesData(),
    getSkillsData(),
    getProjectsData(),
    getEducationData(),
    getCertificationsData(),
    getGitHubStatsData(),
  ])

  const mobileSections = {
    home: <HomeSection profile={profile} />,
    about: <AboutSection profile={profile} education={education} certifications={certifications} />,
    experience: <ExperienceSection experiences={experiences} />,
    skills: <SkillsSection skills={skills} />,
    projects: <ProjectsSection projects={projects} />,
    contact: <ContactSection profile={profile} />,
  }

  const desktopSections = (
    <>
      <Hero profile={profile} />
      <About profile={profile} education={education} certifications={certifications} />
      <GitHubStats stats={githubStats} />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact profile={profile} />
    </>
  )

  return (
    <MobileShell 
      mobileSections={mobileSections}
      desktopSections={desktopSections}
    />
  )
}
