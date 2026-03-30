'use client'

import { useState, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MobileBottomNav, { TabId } from './MobileBottomNav'
import ThemeToggle from './ThemeToggle'
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

const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

const pageTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

const tabOrder: TabId[] = ['home', 'about', 'experience', 'skills', 'projects', 'contact']

export default function MobileShell({ mobileSections, desktopSections }: MobileShellProps) {
  const [activeTab, setActiveTab] = useState<TabId>('home')
  const [direction, setDirection] = useState(0)
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

  const handleTabChange = (newTab: TabId) => {
    const currentIndex = tabOrder.indexOf(activeTab)
    const newIndex = tabOrder.indexOf(newTab)
    setDirection(newIndex > currentIndex ? 1 : -1)
    setActiveTab(newTab)
    
    // Scroll to top when changing tabs
    const mainContent = document.querySelector('.main-content')
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Desktop view - show all sections stacked
  if (!isMobile) {
    return (
      <div className="min-h-screen bg-background">
        <ThemeToggle />
        <main className="min-h-screen bg-background">
          {desktopSections}
        </main>
      </div>
    )
  }

  // Mobile view - show single section with bottom nav
  return (
    <div className="mobile-app-container bg-background">
      {/* Theme toggle - positioned for mobile */}
      <ThemeToggle mobile />

      {/* Main content area with page transitions */}
      <main className="main-content">
        <div className="relative min-h-full">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={activeTab}
              custom={direction}
              variants={reducedMotion ? undefined : pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={reducedMotion ? { duration: 0 } : pageTransition}
              className="page-wrapper"
            >
              <div className="page-section gradient-mesh">
                {mobileSections[activeTab]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom navigation */}
      <MobileBottomNav 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
    </div>
  )
}
