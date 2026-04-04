import Experience from '@/components/Experience'
import { Experience as ExperienceType } from '@/types'

interface ExperienceSectionProps {
  experiences: ExperienceType[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return <Experience experiences={experiences} />
}
