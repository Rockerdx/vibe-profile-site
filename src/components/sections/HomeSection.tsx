import Hero from '@/components/Hero'
import { ProfileData } from '@/types'

interface HomeSectionProps {
  profile: ProfileData
}

export default function HomeSection({ profile }: HomeSectionProps) {
  return <Hero profile={profile} />
}
