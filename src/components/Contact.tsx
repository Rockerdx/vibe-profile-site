'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getProfile, type Profile } from '@/lib/api/client'

export default function Contact() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile()
      .then(setProfile)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading || !profile) {
    return (
      <section className="section-container">
        <div className="text-primary text-center">Loading...</div>
      </section>
    )
  }

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-primary/80 text-lg mb-8 max-w-2xl mx-auto">
          I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <a
            href={`mailto:${profile.email}`}
            className="card group hover:bg-surface transition-colors flex flex-col items-center p-8"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Mail className="text-accent" size={24} />
            </div>
            <h3 className="text-primary font-semibold mb-1">Email</h3>
            <p className="text-secondary text-sm">{profile.email}</p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card group hover:bg-surface transition-colors flex flex-col items-center p-8"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Linkedin className="text-accent" size={24} />
            </div>
            <h3 className="text-primary font-semibold mb-1">LinkedIn</h3>
            <p className="text-secondary text-sm">Connect with me</p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card group hover:bg-surface transition-colors flex flex-col items-center p-8"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Github className="text-accent" size={24} />
            </div>
            <h3 className="text-primary font-semibold mb-1">GitHub</h3>
            <p className="text-secondary text-sm">Check my code</p>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-secondary">
          <MapPin size={18} />
          <span>{profile.location}</span>
        </div>
      </motion.div>
    </section>
  )
}
