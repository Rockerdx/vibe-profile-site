'use client'

import { motion } from 'framer-motion'
import { type Skill } from '@/types'
import { Smartphone, Server, Code, Sparkles } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

const categoryIcons = {
  mobile: Smartphone,
  backend: Server,
  other: Code,
}

const categoryTitles = {
  mobile: 'Mobile Development',
  backend: 'Backend Technologies',
  other: 'Other Technologies',
}

const categoryColors = {
  mobile: 'from-blue-500/20 to-cyan-500/20',
  backend: 'from-green-500/20 to-emerald-500/20',
  other: 'from-purple-500/20 to-pink-500/20',
}

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const reducedMotion = useReducedMotion()
  
  const skillsByCategory = {
    mobile: skills.filter(s => s.category === 'mobile'),
    backend: skills.filter(s => s.category === 'backend'),
    other: skills.filter(s => s.category === 'other'),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-1 font-bold">Skills</h2>
        <p className="text-secondary text-sm">Technologies I work with</p>
      </motion.div>

      {/* Featured Skills */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mobile-card"
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="text-accent" size={16} />
          <h3 className="text-sm font-semibold text-primary">Core Expertise</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Go', 'Kotlin', 'PostgreSQL', 'Redis', 'Kafka', 'gRPC'].map((skill, i) => (
            <span
              key={i}
              className="text-xs bg-accent/20 text-accent px-3 py-1.5 rounded-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Skills by Category */}
      <div className="space-y-4">
        {Object.entries(skillsByCategory).map(([category, categorySkills], index) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons]
          const gradient = categoryColors[category as keyof typeof categoryColors]
          
          return (
            <motion.div
              key={category}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="mobile-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                  <Icon className="text-primary" size={16} />
                </div>
                <h3 className="text-sm font-semibold text-primary">
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                    className="text-xs bg-surface-elevated/50 text-primary/80 px-2.5 py-1.5 rounded-lg border border-white/5"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
