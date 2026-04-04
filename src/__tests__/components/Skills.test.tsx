import { render, screen } from '@testing-library/react'
import Skills from '@/components/Skills'
import { Skill } from '@/types'

// Mock the hook
jest.mock('@/hooks/useReducedMotion', () => ({
  __esModule: true,
  default: () => false,
}))

// Mock framer-motion with all required components
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: { children: React.ReactNode }) => <span {...props}>{children}</span>,
    h2: ({ children, ...props }: { children: React.ReactNode }) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: { children: React.ReactNode }) => <p {...props}>{children}</p>,
  },
}))

const mockSkills: Skill[] = [
  { id: 1, name: 'React', category: 'mobile' },
  { id: 2, name: 'Node.js', category: 'backend' },
  { id: 3, name: 'TypeScript', category: 'other' },
]

describe('Skills Component', () => {
  it('renders skills section heading', () => {
    render(<Skills skills={mockSkills} />)
    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument()
  })

  it('renders all skill names', () => {
    render(<Skills skills={mockSkills} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
