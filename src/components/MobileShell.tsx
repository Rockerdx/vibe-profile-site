'use client'

import { useState, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  FolderGit, 
  Mail
} from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

interface MobileShellProps {
  mobileSections: {
    home: ReactNode
    about: ReactNode
    experience: ReactNode
    skills: ReactNode
    projects: ReactNode
    contact: ReactNode
  }
  desktopSections: ReactNode
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'skills', icon: Code2, label: 'Skills' },
  { id: 'projects', icon: FolderGit, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' },
]

export default function MobileShell({ mobileSections, desktopSections }: MobileShellProps) {
  const [activeTab, setActiveTab] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile) {
    return <>{desktopSections}</>
  }

  const currentSection = mobileSections[activeTab as keyof typeof mobileSections]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="p-4"
          >
            {currentSection}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border safe-area-bottom">
        <div className="flex items-center justify-around p-2 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'text-accent bg-accent/10' 
                    : 'text-secondary hover:text-primary hover:bg-surface-elevated'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
