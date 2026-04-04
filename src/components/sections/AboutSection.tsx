import About from '@/components/About'
import { ProfileData, Education, Certification } from '@/types'

interface AboutSectionProps {
  profile: ProfileData
  education: Education[]
  certifications: Certification[]
}

export default function AboutSection({ profile, education, certifications }: AboutSectionProps) {
  return <About profile={profile} education={education} certifications={certifications} />
}
