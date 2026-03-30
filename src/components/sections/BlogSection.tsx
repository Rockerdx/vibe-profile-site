'use client'

import { motion } from 'framer-motion'
import { type BlogArticle } from '@/types/blog'
import { BookOpen, ExternalLink, Clock, Tag } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'
import { formatBlogDate } from '@/lib/api/blog-client'

interface BlogSectionProps {
  articles: BlogArticle[]
}

export default function BlogSection({ articles }: BlogSectionProps) {
  const reducedMotion = useReducedMotion()
  const displayArticles = articles.slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-1 font-bold">Blog</h2>
        <p className="text-secondary text-sm">Thoughts on software engineering</p>
      </motion.div>

      {/* Featured Article */}
      {displayArticles.length > 0 && (
        <motion.a
          href={displayArticles[0].link}
          target="_blank"
          rel="noopener noreferrer"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mobile-card block active:scale-[0.98] transition-transform"
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

          <h4 className="text-primary font-semibold text-sm mb-2 line-clamp-2">
            {displayArticles[0].title}
          </h4>

          <p className="text-secondary text-xs leading-relaxed mb-3 line-clamp-3">
            {displayArticles[0].excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-[10px] text-secondary">
              <Clock size={10} />
              <span>{formatBlogDate(displayArticles[0].pubDate)}</span>
            </div>
            {displayArticles[0].categories.length > 0 && (
              <div className="flex items-center gap-1">
                <Tag size={10} className="text-accent" />
                <span className="text-[10px] text-accent">
                  {displayArticles[0].categories[0]}
                </span>
              </div>
            )}
          </div>
        </motion.a>
      )}

      {/* More Articles */}
      {displayArticles.length > 1 && (
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="text-secondary" size={16} />
            <h3 className="text-sm font-semibold text-primary">More Articles</h3>
          </div>

          <div className="space-y-3">
            {displayArticles.slice(1).map((article, index) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="mobile-card block active:scale-[0.98] transition-transform"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-primary font-medium text-xs line-clamp-2 flex-1">
                    {article.title}
                  </h4>
                  <ExternalLink className="text-secondary shrink-0" size={12} />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] text-secondary">
                    {formatBlogDate(article.pubDate)}
                  </span>
                  {article.categories.length > 0 && (
                    <span className="text-[10px] bg-accent/10 text-accent px-1.5 py-0.5 rounded">
                      {article.categories[0]}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* View All Link */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <a
          href="https://medium.com/@rzkputra"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-accent hover:underline"
        >
          <BookOpen size={12} />
          View all articles on Medium
          <ExternalLink size={10} />
        </a>
      </motion.div>
    </div>
  )
}
