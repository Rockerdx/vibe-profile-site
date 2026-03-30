'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProfileData } from '@/types'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { useResumeDownload } from '@/hooks/useResumeDownload'
import useReducedMotion from '@/hooks/useReducedMotion'

interface HomeSectionProps {
  profile: ProfileData
}

export default function HomeSection({ profile }: HomeSectionProps) {
  const { handleDownload } = useResumeDownload()
  const reducedMotion = useReducedMotion()

  return (
    <div className="min-h-full flex flex-col justify-center">
      {/* Mobile Hero Layout */}
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-32 h-32 mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 blur-xl" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-accent/30 shadow-xl">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-primary mb-2 font-bold">
            {profile.name}
          </h1>
          <p className="text-accent font-medium mb-1">{profile.title}</p>
          <p className="text-secondary text-sm mb-4">{profile.location}</p>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-primary/80 text-sm leading-relaxed mb-6 max-w-xs"
        >
          {profile.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-3 w-full max-w-xs"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-medium active:scale-95 transition-transform"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
          
          <div className="grid grid-cols-2 gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-surface text-primary px-4 py-3 rounded-xl border border-white/10 active:scale-95 transition-transform"
            >
              <Github size={18} />
              GitHub
            </a>
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 bg-surface text-primary px-4 py-3 rounded-xl border border-white/10 active:scale-95 transition-transform"
            >
              <Download size={18} />
              Resume
            </button>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 grid grid-cols-3 gap-4 w-full max-w-xs"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">5+</p>
            <p className="text-xs text-secondary">Years Exp</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">Backend</p>
            <p className="text-xs text-secondary">Focus</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">Go</p>
            <p className="text-xs text-secondary">Expert</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
