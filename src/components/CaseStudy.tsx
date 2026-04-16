'use client'

import { motion } from 'framer-motion'
import { CaseStudy } from '@/types'
import { Github, Layers, Lightbulb, AlertTriangle, TrendingUp, Boxes, CheckCircle, ArrowLeft } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

interface CaseStudyProps {
  caseStudy: CaseStudy
  onBack?: () => void
}

export default function CaseStudyComponent({ caseStudy, onBack }: CaseStudyProps) {
  const reducedMotion = useReducedMotion()

  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  }

  return (
    <section className="section-container">
      {onBack && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onBack}
          className="flex items-center gap-2 text-secondary hover:text-accent transition-colors mb-6 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </motion.button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">{caseStudy.name}</h1>
            <p className="text-secondary text-lg max-w-2xl">{caseStudy.description}</p>
          </div>
          <a
            href={caseStudy.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 self-start"
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {caseStudy.techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: reducedMotion ? 0 : index * 0.05,
              }}
              className="text-sm bg-accent/10 text-accent px-4 py-2 rounded-full font-mono"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.div
          {...sectionAnimation}
          transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.1 }}
          className="card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <AlertTriangle className="text-red-400" size={24} />
            </div>
            <h2 className="text-xl font-semibold text-primary">The Problem</h2>
          </div>
          <p className="text-secondary leading-relaxed">{caseStudy.problem}</p>
        </motion.div>

        <motion.div
          {...sectionAnimation}
          transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.2 }}
          className="card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Lightbulb className="text-green-400" size={24} />
            </div>
            <h2 className="text-xl font-semibold text-primary">The Solution</h2>
          </div>
          <p className="text-secondary leading-relaxed">{caseStudy.solution}</p>
        </motion.div>
      </div>

      <motion.div
        {...sectionAnimation}
        transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.3 }}
        className="card mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Layers className="text-accent" size={24} />
          </div>
          <h2 className="text-xl font-semibold text-primary">Technical Decisions</h2>
        </div>
        <ul className="space-y-4">
          {caseStudy.technicalDecisions.map((decision, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: reducedMotion ? 0 : index * 0.1,
              }}
              className="flex items-start gap-3"
            >
              <span className="text-accent mt-1">•</span>
              <span className="text-secondary">{decision}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        {...sectionAnimation}
        transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.4 }}
        className="card mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-yellow-500/10 rounded-lg">
            <AlertTriangle className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-xl font-semibold text-primary">Challenges & Solutions</h2>
        </div>
        <p className="text-secondary leading-relaxed">{caseStudy.challenges}</p>
      </motion.div>

      <motion.div
        {...sectionAnimation}
        transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.5 }}
        className="card mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <TrendingUp className="text-emerald-400" size={24} />
          </div>
          <h2 className="text-xl font-semibold text-primary">Results</h2>
        </div>
        <p className="text-secondary leading-relaxed">{caseStudy.results}</p>
      </motion.div>

      <motion.div
        {...sectionAnimation}
        transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.6 }}
        className="card mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <Boxes className="text-purple-400" size={24} />
          </div>
          <h2 className="text-xl font-semibold text-primary">Architecture</h2>
        </div>
        
        <p className="text-secondary leading-relaxed mb-6">{caseStudy.architecture.description}</p>
        
        {caseStudy.architecture.diagram && (
          <div className="mb-6 p-4 bg-surface-elevated rounded-lg overflow-x-auto">
            <pre className="text-sm text-secondary font-mono whitespace-pre">
              {caseStudy.architecture.diagram}
            </pre>
          </div>
        )}

        {caseStudy.architecture.codeSnippets && caseStudy.architecture.codeSnippets.length > 0 && (
          <div className="space-y-4">
            {caseStudy.architecture.codeSnippets.map((snippet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: reducedMotion ? 0 : index * 0.1,
                }}
                className="border border-white/5 rounded-lg overflow-hidden"
              >
                <div className="bg-surface-elevated px-4 py-2 border-b border-white/5">
                  <span className="text-sm text-secondary font-mono">{snippet.title}</span>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm text-secondary font-mono whitespace-pre">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        {...sectionAnimation}
        transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.7 }}
        className="card"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <CheckCircle className="text-blue-400" size={24} />
          </div>
          <h2 className="text-xl font-semibold text-primary">Code Quality Highlights</h2>
        </div>
        <ul className="space-y-3">
          {caseStudy.codeQuality.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: reducedMotion ? 0 : index * 0.1,
              }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="text-accent mt-0.5 shrink-0" size={18} />
              <span className="text-secondary">{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
