'use client'

import { motion } from 'framer-motion'
import { Github, Code } from 'lucide-react'

export default function GitHubStatsSkeleton() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Github className="text-accent" size={32} />
          <h2 className="section-title mb-0">GitHub Stats</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card flex flex-col items-center text-center p-4"
            >
              <div className="w-6 h-6 rounded-full bg-secondary/20 mb-2 skeleton-shimmer" />
              <div className="w-16 h-8 rounded bg-secondary/20 mb-1 skeleton-shimmer" />
              <div className="w-20 h-4 rounded bg-secondary/20 skeleton-shimmer" />
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-accent" size={24} />
              <h3 className="text-xl font-semibold text-primary">Top Languages</h3>
            </div>

            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary/20 skeleton-shimmer" />
                      <div className="w-20 h-4 rounded bg-secondary/20 skeleton-shimmer" />
                    </div>
                    <div className="w-8 h-4 rounded bg-secondary/20 skeleton-shimmer" />
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-secondary/20 skeleton-shimmer"
                      style={{ width: `${100 - index * 15}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <Github className="text-accent" size={24} />
              <h3 className="text-xl font-semibold text-primary">Recent Repositories</h3>
            </div>

            <div className="space-y-4">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="block p-3 rounded-lg bg-background/50 border border-white/5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="w-32 h-4 rounded bg-secondary/20 skeleton-shimmer" />
                      <div className="w-full h-3 rounded bg-secondary/20 skeleton-shimmer" />
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-12 h-3 rounded bg-secondary/20 skeleton-shimmer" />
                      <div className="w-12 h-3 rounded bg-secondary/20 skeleton-shimmer" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-16 h-3 rounded bg-secondary/20 skeleton-shimmer" />
                    <div className="w-24 h-3 rounded bg-secondary/20 skeleton-shimmer" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <div className="w-32 h-4 rounded bg-secondary/20 mx-auto skeleton-shimmer" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
