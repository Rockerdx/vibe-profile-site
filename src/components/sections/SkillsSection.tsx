import Skills from '@/components/Skills'
import { Skill } from '@/types'

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return <Skills skills={skills} />
}
