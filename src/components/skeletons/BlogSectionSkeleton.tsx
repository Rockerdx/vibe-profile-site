'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Clock, Tag } from 'lucide-react'

export default function BlogSectionSkeleton() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-1 font-bold">Blog</h2>
        <p className="text-secondary text-sm">Thoughts on software engineering</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mobile-card block"
      >
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <BookOpen className="text-accent" size={16} />
            </div>
            <h3 className="text-primary font-medium text-sm">Latest Article</h3>
          </div>
          <ExternalLink className="text-secondary" size={14} />
        </div>

        <div className="w-full h-5 rounded bg-secondary/20 mb-2 skeleton-shimmer" />
        <div className="w-3/4 h-5 rounded bg-secondary/20 mb-3 skeleton-shimmer" />

        <div className="w-full h-3 rounded bg-secondary/20 mb-1 skeleton-shimmer" />
        <div className="w-full h-3 rounded bg-secondary/20 mb-1 skeleton-shimmer" />
        <div className="w-2/3 h-3 rounded bg-secondary/20 mb-3 skeleton-shimmer" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Clock size={10} className="text-secondary" />
            <div className="w-16 h-3 rounded bg-secondary/20 skeleton-shimmer" />
          </div>
          <div className="flex items-center gap-1">
            <Tag size={10} className="text-accent" />
            <div className="w-12 h-3 rounded bg-accent/20 skeleton-shimmer" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="text-secondary" size={16} />
          <h3 className="text-sm font-semibold text-primary">More Articles</h3>
        </div>

        <div className="space-y-3">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="mobile-card block"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 space-y-2">
                  <div className="w-full h-3 rounded bg-secondary/20 skeleton-shimmer" />
                  <div className="w-3/4 h-3 rounded bg-secondary/20 skeleton-shimmer" />
                </div>
                <ExternalLink className="text-secondary shrink-0" size={12} />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-14 h-3 rounded bg-secondary/20 skeleton-shimmer" />
                <div className="w-16 h-4 rounded bg-accent/10 skeleton-shimmer" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2">
          <BookOpen size={12} className="text-accent" />
          <div className="w-40 h-3 rounded bg-secondary/20 skeleton-shimmer" />
          <ExternalLink size={10} className="text-accent" />
        </div>
      </motion.div>
    </div>
  )
}
