import { render, screen } from '@testing-library/react'
import About from '@/components/About'
import { ProfileData, Education, Certification } from '@/types'

// Mock the hook
jest.mock('@/hooks/useReducedMotion', () => ({
  __esModule: true,
  default: () => false,
}))

// Mock framer-motion with all required components
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: { children: React.ReactNode }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: { children: React.ReactNode }) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: { children: React.ReactNode }) => <p {...props}>{children}</p>,
    section: ({ children, ...props }: { children: React.ReactNode }) => <section {...props}>{children}</section>,
  },
}))

const mockProfile: ProfileData = {
  id: 1,
  name: 'Test User',
  title: 'Developer',
  location: 'Test City',
  email: 'test@example.com',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  summary: 'Passionate about building great software',
  avatarUrl: 'https://example.com/avatar.jpg',
}

const mockEducation: Education[] = [
  {
    id: 1,
    institution: 'Test University',
    degree: 'BS in Computer Science',
    period: '2015-2019',
  },
]

const mockCertifications: Certification[] = [
  {
    id: 1,
    name: 'AWS Certified',
  },
]

describe('About Component', () => {
  it('renders about section heading', () => {
    render(<About profile={mockProfile} education={mockEducation} certifications={mockCertifications} />)
    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()
  })

  it('renders summary text', () => {
    render(<About profile={mockProfile} education={mockEducation} certifications={mockCertifications} />)
    expect(screen.getByText('Passionate about building great software')).toBeInTheDocument()
  })

  it('renders education', () => {
    render(<About profile={mockProfile} education={mockEducation} certifications={mockCertifications} />)
    expect(screen.getByText('Test University')).toBeInTheDocument()
    expect(screen.getByText('BS in Computer Science')).toBeInTheDocument()
  })

  it('renders certifications', () => {
    render(<About profile={mockProfile} education={mockEducation} certifications={mockCertifications} />)
    expect(screen.getByText('AWS Certified')).toBeInTheDocument()
  })
})
