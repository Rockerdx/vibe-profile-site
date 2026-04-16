'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const reducedMotion = useReducedMotion()

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    // Check initial position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }, [reducedMotion])

  // Handle keyboard interaction
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        scrollToTop()
      }
    },
    [scrollToTop]
  )

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: reducedMotion ? 0 : 0.2,
            ease: 'easeOut',
          }}
          whileHover={reducedMotion ? undefined : { scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full 
                     bg-surface/80 backdrop-blur-sm 
                     border border-white/10 hover:border-accent/50 
                     shadow-lg hover:shadow-xl
                     transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50
                     md:bottom-6 md:right-6
                     max-md:bottom-[88px] max-md:right-4"
          aria-label="Scroll back to top"
          tabIndex={0}
        >
          <ArrowUp className="text-accent" size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
