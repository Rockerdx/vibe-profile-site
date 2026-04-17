import { profile } from '@/lib/data'

export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Senior Software Engineer',
    description: profile.summary,
    url: 'https://me.rockerdx.site',
    image: profile.avatarUrl,
    email: profile.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tangerang Selatan',
      addressRegion: 'Banten',
      addressCountry: 'Indonesia',
    },
    sameAs: [
      profile.github,
      profile.linkedin,
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Stockbit',
      url: 'https://stockbit.com',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universitas Sumatera Utara',
    },
    knowsAbout: [
      'Software Engineering',
      'Backend Development',
      'Go Programming',
      'Kotlin',
      'Android Development',
      'Microservices',
      'PostgreSQL',
      'Redis',
      'Kafka',
    ],
    skill: [
      'Golang',
      'Kotlin',
      'Java',
      'Android Development',
      'PostgreSQL',
      'Microservices',
      'gRPC',
      'Redis',
      'Kafka',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Muhammad Rizki Putra Portfolio',
    url: 'https://me.rockerdx.site',
    author: {
      '@type': 'Person',
      name: profile.name,
    },
    description: profile.summary,
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: profile.name,
    description: 'Software Engineering Services',
    url: 'https://me.rockerdx.site',
    provider: {
      '@type': 'Person',
      name: profile.name,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    serviceType: ['Software Development', 'Backend Engineering', 'Mobile Development'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  )
}
