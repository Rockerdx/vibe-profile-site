/**
 * Projects Component - Project showcase with featured and regular projects
 * 
 * Purpose: Display personal and professional projects with GitHub links
 * Data Source: projects array from src/lib/data.ts
 * 
 * Features:
 * - Two sections: Featured Projects + More Projects
 * - Featured: Larger cards, grid layout
 * - More Projects: Smaller cards, 3-column grid
 * - GitHub links (open in new tab)
 * - Tech stack tags for each project
 * - Hover effects on cards
 * 
 * Animations:
 * - Fade in + slide up on scroll into view
 * - Staggered delay for project cards
 * - Featured: slide up, More: scale up
 * 
 * To Modify:
 * 1. Add project to src/lib/data.ts (projects array)
 * 2. Required fields: name, description, url, tech[]
 * 3. Set highlighted: true for featured projects
 * 
 * Project Interface:
 * - name: string (project title)
 * - description: string (brief description)
 * - url: string (GitHub URL)
 * - tech: string[] (technologies used)
 * - highlighted?: boolean (optional, defaults to false)
 * 
 * @returns Projects section React component
 */
'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { Github, Star } from 'lucide-react'

export default function Projects() {
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:bg-surface transition-colors"
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
                    <span
                      key={i}
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-mono"
                    >
                      {tech}
                    </span>
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card group hover:bg-surface transition-colors"
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
                    <span
                      key={i}
                      className="text-xs bg-surface text-secondary px-2 py-1 rounded font-mono"
                    >
                      {tech}
                    </span>
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
