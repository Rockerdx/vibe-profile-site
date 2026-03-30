'use client'

import { motion } from 'framer-motion'
import { ProfileData, Education, Certification } from '@/types'
import { Award, GraduationCap, MapPin, Calendar } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

interface AboutSectionProps {
  profile: ProfileData
  education: Education[]
  certifications: Certification[]
}

export default function AboutSection({ profile, education, certifications }: AboutSectionProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-1 font-bold">About Me</h2>
        <p className="text-secondary text-sm">Get to know me better</p>
      </motion.div>

      {/* Bio Card */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mobile-card space-y-4"
      >
        <p className="text-primary/80 text-sm leading-relaxed">
          Hello! I&apos;m a seasoned Software Engineer with 5 years of hands-on experience.
          Currently excelling as a Backend Engineer at Stockbit, specializing in Go development.
        </p>
        <p className="text-primary/80 text-sm leading-relaxed">
          Previously, I made significant contributions to Android development—improving app reliability
          and teaching Android classes at Binar Academy.
        </p>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <GraduationCap className="text-accent" size={18} />
          </div>
          Education
        </h3>
        
        <div className="space-y-3">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="mobile-card"
            >
              <p className="text-primary font-medium text-sm">{edu.institution}</p>
              <p className="text-secondary text-sm">{edu.degree}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-secondary">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <Award className="text-accent" size={18} />
          </div>
          Certifications
        </h3>
        
        <div className="mobile-card">
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.li
                key={index}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="flex items-start gap-3 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-primary/80">{cert.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
