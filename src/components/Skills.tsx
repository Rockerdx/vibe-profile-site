'use client'

import { motion } from 'framer-motion'
import { type Skill } from '@/types'
import { Smartphone, Server, Code } from 'lucide-react'
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

interface SkillsProps {
  skills: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
  const reducedMotion = useReducedMotion()
  const skillsByCategory = {
    mobile: skills.filter(s => s.category === 'mobile'),
    backend: skills.filter(s => s.category === 'backend'),
    other: skills.filter(s => s.category === 'other'),
  }

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, categorySkills], index) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : index * 0.1,
                }}
                className="card hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-accent" size={24} />
                  <h3 className="text-lg font-semibold text-primary">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: reducedMotion ? 0 : (i * 0.05 + (index * 0.1)),
                      }}
                      className="bg-surface text-primary px-4 py-2 rounded-lg border border-white/10 hover:border-accent/50 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default text-sm font-medium"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
