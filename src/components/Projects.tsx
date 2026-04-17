'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type Project } from '@/types'
import { Github, Star, Filter } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

type Category = 'All' | 'Android' | 'Backend' | 'Fullstack'

const categories: Category[] = ['All', 'Android', 'Backend', 'Fullstack']

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const reducedMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const highlightedProjects = filteredProjects.filter(p => p.highlighted)
  const otherProjects = filteredProjects.filter(p => !p.highlighted)

  return (
    <section className="section-container bg-surface/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-accent" size={18} />
            <span className="text-sm text-secondary font-medium">Filter by category</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-surface text-secondary hover:text-primary hover:bg-surface/80'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs opacity-70">
                    ({projects.filter(p => p.category === category).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
          >
            {highlightedProjects.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                  <Star className="text-accent" size={20} />
                  Featured Projects
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <AnimatePresence>
                    {highlightedProjects.map((project, index) => (
                      <motion.a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                          duration: 0.5,
                          delay: reducedMotion ? 0 : index * 0.1,
                        }}
                        className="card group hover:bg-surface hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                              {project.name}
                            </h3>
                            <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                              {project.category}
                            </span>
                          </div>
                          <Github className="text-secondary group-hover:text-accent transition-colors" size={20} />
                        </div>
                        <p className="text-secondary text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
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
                  </AnimatePresence>
                </div>
              </div>
            )}

            {otherProjects.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">More Projects</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <AnimatePresence>
                    {otherProjects.map((project, index) => (
                      <motion.a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
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
                              animate={{ opacity: 1, scale: 1 }}
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
                  </AnimatePresence>
                </div>
              </div>
            )}

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <p className="text-secondary text-lg">
                  No projects in the <span className="text-accent font-medium">{activeCategory}</span> category yet.
                </p>
                <p className="text-secondary/60 text-sm mt-2">
                  Check back later for updates!
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
