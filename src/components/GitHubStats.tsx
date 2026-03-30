'use client'

import { motion } from 'framer-motion'
import { GitHubStats as GitHubStatsType } from '@/types'
import { Github, Star, GitFork, Flame, Activity, Code } from 'lucide-react'

interface GitHubStatsProps {
  stats: GitHubStatsType
}

export default function GitHubStats({ stats }: GitHubStatsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Github className="text-accent" size={32} />
          <h2 className="section-title mb-0">GitHub Stats</h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Total Contributions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card flex flex-col items-center text-center p-4"
          >
            <Activity className="text-accent mb-2" size={24} />
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {stats.totalContributions.toLocaleString()}
            </p>
            <p className="text-secondary text-sm">Contributions</p>
          </motion.div>

          {/* Current Streak */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="card flex flex-col items-center text-center p-4"
          >
            <Flame className="text-orange-500 mb-2" size={24} />
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {stats.currentStreak}
            </p>
            <p className="text-secondary text-sm">Current Streak</p>
          </motion.div>

          {/* Longest Streak */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="card flex flex-col items-center text-center p-4"
          >
            <Flame className="text-red-500 mb-2" size={24} />
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {stats.longestStreak}
            </p>
            <p className="text-secondary text-sm">Longest Streak</p>
          </motion.div>

          {/* Total Stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="card flex flex-col items-center text-center p-4"
          >
            <Star className="text-yellow-500 mb-2" size={24} />
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {stats.totalStars}
            </p>
            <p className="text-secondary text-sm">Total Stars</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-accent" size={24} />
              <h3 className="text-xl font-semibold text-primary">Top Languages</h3>
            </div>
            
            <div className="space-y-4">
              {stats.topLanguages.map((lang, index) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-primary">{lang.name}</span>
                    </span>
                    <span className="text-secondary">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Repositories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <Github className="text-accent" size={24} />
              <h3 className="text-xl font-semibold text-primary">Recent Repositories</h3>
            </div>
            
            <div className="space-y-4">
              {stats.recentRepos.slice(0, 4).map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="block p-3 rounded-lg bg-background/50 hover:bg-background transition-colors border border-white/5 hover:border-accent/50"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-primary truncate">{repo.name}</p>
                      <p className="text-secondary text-sm line-clamp-1">
                        {repo.description || 'No description'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-secondary text-sm shrink-0">
                      <span className="flex items-center gap-1">
                        <Star size={14} />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={14} />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-secondary">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: stats.topLanguages.find(
                              (l) => l.name === repo.language
                            )?.color || '#8b949e',
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span>• Updated {formatDate(repo.updatedAt)}</span>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <a
              href={`https://github.com/${stats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center text-accent hover:underline text-sm"
            >
              View all repositories →
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
