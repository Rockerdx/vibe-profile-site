'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type Project } from '@/types'
import { backendSystems } from '@/lib/data'
import { Github, Star, ChevronDown, Server, Zap, Shield, Database, Target, ArrowRight } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

interface ProjectsProps {
  projects: Project[]
}

const systemIcons = {
  'Issuer (Emitten) RPC Service Optimization': Zap,
  'Watchlist Portfolio Sync Infrastructure': Server,
  'KV2 Configuration Management System': Shield,
  'IDX Symbol Migration Planning': Database,
}

export default function Projects({ projects }: ProjectsProps) {
  const reducedMotion = useReducedMotion()
  const [showMobileProjects, setShowMobileProjects] = useState(false)
  
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
        <h2 className="section-title">Projects & Systems</h2>
        
        {/* Backend Systems - Professional Work */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Server className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Backend Systems</h3>
              <p className="text-secondary text-sm">Production systems built at Stockbit</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {backendSystems.map((system, index) => {
              const Icon = systemIcons[system.name as keyof typeof systemIcons] || Server
              return (
                <motion.div
                  key={system.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: reducedMotion ? 0 : index * 0.1,
                  }}
                  className="card group hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">
                        {system.name}
                      </h4>
                      <p className="text-secondary text-sm mb-4">{system.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-background/50 rounded-lg p-3">
                          <p className="text-xs text-accent font-medium mb-1">Challenge</p>
                          <p className="text-secondary text-sm">{system.challenge}</p>
                        </div>
                        <div className="bg-background/50 rounded-lg p-3">
                          <p className="text-xs text-accent font-medium mb-1">Solution</p>
                          <p className="text-secondary text-sm">{system.solution}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-xs text-accent font-medium mb-2 flex items-center gap-1">
                          <Target size={12} />
                          Key Impact
                        </p>
                        <ul className="space-y-1">
                          {system.impact.map((item, i) => (
                            <li key={i} className="text-primary/80 text-sm flex items-start gap-2">
                              <span className="text-accent mt-1 flex-shrink-0">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {system.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-mono group-hover:bg-accent/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Open Source Projects */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
            <Star className="text-accent" size={20} />
            Open Source Projects
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

        {/* Mobile Projects - Collapsible Accordion */}
        <div className="border border-white/10 rounded-xl overflow-hidden">
          <button
            onClick={() => setShowMobileProjects(!showMobileProjects)}
            className="w-full flex items-center justify-between p-6 bg-surface/50 hover:bg-surface transition-colors text-left"
          >
            <div>
              <h3 className="text-xl font-semibold text-primary">Previous Mobile Development Work</h3>
              <p className="text-secondary text-sm">Android projects from 2016-2023</p>
            </div>
            <motion.div
              animate={{ rotate: showMobileProjects ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="text-secondary" size={24} />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {showMobileProjects && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 space-y-8">
                  {/* Featured Mobile Projects */}
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-4">Featured Mobile Projects</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {highlightedProjects.map((project, index) => (
                        <motion.a
                          key={project.name}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: reducedMotion ? 0 : index * 0.05,
                          }}
                          className="card group hover:bg-surface/80 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-medium text-primary group-hover:text-accent transition-colors">
                              {project.name}
                            </h5>
                            <Github className="text-secondary group-hover:text-accent transition-colors" size={16} />
                          </div>
                          <p className="text-secondary text-sm mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs bg-surface text-secondary px-2 py-0.5 rounded font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  {/* More Mobile Projects */}
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-4">More Mobile Projects</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {otherProjects.map((project, index) => (
                        <motion.a
                          key={project.name}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: reducedMotion ? 0 : index * 0.03,
                          }}
                          className="card group hover:bg-surface/80 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Github className="text-secondary group-hover:text-accent transition-colors" size={16} />
                            <h5 className="text-primary font-medium text-sm group-hover:text-accent transition-colors">
                              {project.name}
                            </h5>
                          </div>
                          <p className="text-secondary text-sm mb-2 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.slice(0, 2).map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs text-secondary/70 px-1 py-0.5 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <a
                      href="https://github.com/Rockerdx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:underline text-sm"
                    >
                      View all projects on GitHub
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
