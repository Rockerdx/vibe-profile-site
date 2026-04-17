'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProfileData } from '@/types'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'
import { useResumeDownload } from '@/hooks/useResumeDownload'

interface HeroProps {
  profile: ProfileData
}

export default function Hero({ profile }: HeroProps) {
  const { handleDownload } = useResumeDownload()

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10">
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-2"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl md:text-2xl text-accent font-medium mb-3"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-secondary mb-4"
          >
            {profile.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base text-primary/80 mb-6 max-w-2xl leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {[
              'Go',
              'PostgreSQL',
              'gRPC',
              'Microservices',
              'Android',
              'Kotlin',
              'Redis',
              'Kafka',
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.35 + i * 0.05,
                }}
                className="bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/30 text-sm font-medium hover:bg-accent/20 hover:border-accent/50 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/80 transition-all hover:scale-105 font-medium"
            >
              <Download size={18} />
              Download Resume
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-2 bg-surface text-primary px-8 py-3 rounded-lg border border-white/10 hover:border-accent/50 hover:bg-surface/80 transition-all font-medium group"
            >
              <Mail size={18} />
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-4"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <span className="text-secondary/30">•</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
