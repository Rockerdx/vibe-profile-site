import Projects from '@/components/Projects'
import { Project } from '@/types'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return <Projects projects={projects} />
}
