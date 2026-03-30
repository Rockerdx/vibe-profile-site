'use client'

import { motion } from 'framer-motion'
import { type Experience } from '@/types'
import { Briefcase, MapPin, Building2 } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-1 font-bold">Experience</h2>
        <p className="text-secondary text-sm">My professional journey</p>
      </motion.div>

      {/* Experience Cards */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.position}`}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mobile-card"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="text-accent" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-primary font-semibold text-sm leading-tight">{exp.position}</h3>
                <p className="text-accent text-sm font-medium">{exp.company}</p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-secondary">
              <span className="flex items-center gap-1 bg-surface-elevated/50 px-2 py-1 rounded">
                <Briefcase size={12} />
                {exp.duration}
              </span>
              <span className="flex items-center gap-1 bg-surface-elevated/50 px-2 py-1 rounded">
                <MapPin size={12} />
                {exp.location}
              </span>
            </div>

            {/* Achievements */}
            <ul className="space-y-2 mb-4">
              {exp.achievements.slice(0, 3).map((achievement, i) => (
                <li key={i} className="text-primary/70 text-xs leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            {exp.techStack && (
              <div className="flex flex-wrap gap-1.5">
                {exp.techStack.slice(0, 5).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {exp.techStack.length > 5 && (
                  <span className="text-[10px] text-secondary px-1 py-1">
                    +{exp.techStack.length - 5}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
