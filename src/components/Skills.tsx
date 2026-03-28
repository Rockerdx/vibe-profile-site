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
