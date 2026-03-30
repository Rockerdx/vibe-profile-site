'use client'

import { motion } from 'framer-motion'
import { type Project } from '@/types'
import { Github, Star, ExternalLink, Folder } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const reducedMotion = useReducedMotion()
  const highlightedProjects = projects.filter(p => p.highlighted)
  const otherProjects = projects.filter(p => !p.highlighted).slice(0, 4)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-1 font-bold">Projects</h2>
        <p className="text-secondary text-sm">Things I&apos;ve built</p>
      </motion.div>

      {/* Featured Projects */}
      {highlightedProjects.length > 0 && (
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Star className="text-accent" size={16} />
            <h3 className="text-sm font-semibold text-primary">Featured</h3>
          </div>
          
          <div className="space-y-3">
            {highlightedProjects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="mobile-card block active:scale-[0.98] transition-transform"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Folder className="text-accent" size={16} />
                    </div>
                    <h4 className="text-primary font-medium text-sm">{project.name}</h4>
                  </div>
                  <ExternalLink className="text-secondary" size={14} />
                </div>
                
                <p className="text-secondary text-xs leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* More Projects */}
      {otherProjects.length > 0 && (
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Github className="text-secondary" size={16} />
            <h3 className="text-sm font-semibold text-primary">More on GitHub</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {otherProjects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="mobile-card block active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Github className="text-secondary" size={12} />
                  <h4 className="text-primary font-medium text-xs truncate">{project.name}</h4>
                </div>
                <p className="text-secondary text-[10px] line-clamp-1">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
