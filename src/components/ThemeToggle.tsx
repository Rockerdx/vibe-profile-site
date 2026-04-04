'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import useReducedMotion from '@/hooks/useReducedMotion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reducedMotion = useReducedMotion()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-surface/80 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-colors"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'dark' ? (
          <Sun className="text-accent" size={24} />
        ) : (
          <Moon className="text-primary" size={24} />
        )}
      </motion.div>
    </motion.button>
  )
}
