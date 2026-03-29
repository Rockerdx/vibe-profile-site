'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/lib/data'
import { Briefcase } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

export default function Experience() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="section-container bg-surface/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="relative border-l-2 border-accent/30 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: reducedMotion ? 0 : index * 0.1,
              }}
              className="relative pl-8 group"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background group-hover:scale-110 transition-transform" />
              <div className="card hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-secondary text-sm">{exp.period}</p>
                    <p className="text-secondary text-sm">{exp.duration}</p>
                  </div>
                </div>
                <p className="text-secondary text-sm mb-3 flex items-center gap-1">
                  <Briefcase size={14} />
                  {exp.location}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-primary/80 text-sm flex items-start gap-2">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                {exp.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-mono group-hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
