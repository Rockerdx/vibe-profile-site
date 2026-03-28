/**
 * Skills Component - Skills grid categorized by type
 * 
 * Purpose: Display technical skills organized by category
 * Data Source: skills array from src/lib/data.ts
 * 
 * Features:
 * - Three categories: mobile, backend, other
 * - Icon for each category (Smartphone, Server, Code)
 * - Responsive grid (1 col mobile, 3 cols desktop)
 * - Skill tags with hover effect
 * 
 * Animations:
 * - Fade in + slide up on scroll into view
 * - Staggered delay for each category card
 * 
 * To Modify:
 * 1. Add skill to src/lib/data.ts (skills array)
 * 2. Format: { name: 'Skill Name', category: 'mobile' | 'backend' | 'other' }
 * 3. Add new category: update categoryIcons and categoryTitles objects
 * 
 * Skill Interface:
 * - name: string (display name)
 * - category: 'mobile' | 'backend' | 'other' (determines which card)
 * 
 * @returns Skills section React component
 */
'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import { Smartphone, Server, Code } from 'lucide-react'

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

export default function Skills() {
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-accent" size={24} />
                  <h3 className="text-lg font-semibold text-primary">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-surface text-primary px-4 py-2 rounded-lg border border-white/10 hover:border-accent/50 transition-colors text-sm font-medium"
                    >
                      {skill.name}
                    </span>
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
