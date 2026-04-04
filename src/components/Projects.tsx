'use client'

import { motion } from 'framer-motion'
import { type Project } from '@/types'
import { Github, Star } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const reducedMotion = useReducedMotion()
  const highlightedProjects = projects.filter(p => p.highlighted)
  const otherProjects = projects.filter(p => !p.highlighted)

  return (
    <section className="section-container bg-surface/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
            <Star className="text-accent" size={20} />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlightedProjects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : index * 0.1,
                }}
                className="card group hover:bg-surface hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <Github className="text-secondary group-hover:text-accent transition-colors" size={20} />
                </div>
                <p className="text-secondary text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: reducedMotion ? 0 : (i * 0.05 + (index * 0.1)),
                      }}
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-mono group-hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-primary mb-6">More Projects</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: reducedMotion ? 0 : index * 0.05,
                }}
                className="card group hover:bg-surface hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Github className="text-secondary group-hover:text-accent transition-colors" size={18} />
                  <h3 className="text-primary font-medium group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                </div>
                <p className="text-secondary text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: reducedMotion ? 0 : (i * 0.05 + (index * 0.05)),
                      }}
                      className="text-xs bg-surface text-secondary px-2 py-1 rounded font-mono group-hover:text-accent transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
