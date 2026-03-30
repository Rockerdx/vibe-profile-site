'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import useReducedMotion from '@/hooks/useReducedMotion'

interface ThemeToggleProps {
  mobile?: boolean
}

export default function ThemeToggle({ mobile = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const reducedMotion = useReducedMotion()

  const baseClasses = mobile
    ? "fixed top-4 right-4 z-50 p-2.5 rounded-full bg-surface/90 backdrop-blur-md border border-white/10 shadow-lg"
    : "fixed top-6 right-6 z-50 p-3 rounded-full bg-surface/80 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-colors"

  const mobileHoverAnimation = mobile
    ? { scale: 1.1 }
    : { scale: 1.05 }

  return (
    <motion.button
      onClick={toggleTheme}
      className={baseClasses}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileHover={reducedMotion ? undefined : mobileHoverAnimation}
      whileTap={{ scale: 0.9 }}
      initial={false}
    >
      <motion.div
        key={theme}
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={reducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.5 }}
        transition={{ duration: reducedMotion ? 0 : 0.2 }}
      >
        {theme === 'dark' ? (
          <Sun className="text-accent" size={mobile ? 20 : 24} />
        ) : (
          <Moon className="text-primary" size={mobile ? 20 : 24} />
        )}
      </motion.div>
    </motion.button>
  )
}
