'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProfileData } from '@/types'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { useResumeDownload } from '@/hooks/useResumeDownload'

interface HeroProps {
  profile: ProfileData
}

export default function Hero({ profile }: HeroProps) {
  const { handleDownload } = useResumeDownload()

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            {profile.name}
          </h1>
          <p className="text-xl text-accent mb-4">{profile.title}</p>
          <p className="text-secondary mb-6">{profile.location}</p>
          <p className="text-lg text-primary/80 mb-8 max-w-lg">
            {profile.summary}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/80 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface text-primary px-6 py-3 rounded-lg border border-white/10 hover:border-accent/50 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 bg-surface text-primary px-6 py-3 rounded-lg border border-white/10 hover:border-accent/50 transition-colors"
            >
              <Mail size={20} />
              Email
            </a>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-primary text-surface px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/20">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
