import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import { ProfileData } from '@/types'

// Mock the hook
jest.mock('@/hooks/useReducedMotion', () => ({
  __esModule: true,
  default: () => false,
}))

// Mock framer-motion with all required components
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: { children: React.ReactNode }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: { children: React.ReactNode }) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: { children: React.ReactNode }) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: { children: React.ReactNode }) => <span {...props}>{children}</span>,
    a: ({ children, ...props }: { children: React.ReactNode }) => <a {...props}>{children}</a>,
    section: ({ children, ...props }: { children: React.ReactNode }) => <section {...props}>{children}</section>,
  },
}))

const mockProfile: ProfileData = {
  id: 1,
  name: 'Test User',
  title: 'Software Engineer',
  location: 'Test City',
  email: 'test@example.com',
  linkedin: 'https://linkedin.com/in/test',
  github: 'https://github.com/test',
  summary: 'A passionate developer',
  avatarUrl: 'https://example.com/avatar.jpg',
}

describe('Hero Component', () => {
  it('renders profile name', () => {
    render(<Hero profile={mockProfile} />)
    expect(screen.getByText('Test User')).toBeInTheDocument()
  })

  it('renders profile title', () => {
    render(<Hero profile={mockProfile} />)
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
  })

  it('renders location', () => {
    render(<Hero profile={mockProfile} />)
    expect(screen.getByText('Test City')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Hero profile={mockProfile} />)
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument()
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument()
  })

  it('renders email button', () => {
    render(<Hero profile={mockProfile} />)
    expect(screen.getByText(/Email/i)).toBeInTheDocument()
  })
})
