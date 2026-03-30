'use client'

import { motion } from 'framer-motion'
import { ProfileData } from '@/types'
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Copy, Check, Download, Loader2 } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'
import { useState } from 'react'
import ContactForm from '@/components/ContactForm'

interface ContactSectionProps {
  profile: ProfileData
}

export default function ContactSection({ profile }: ContactSectionProps) {
  const reducedMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleResumeDownload = async () => {
    try {
      setIsDownloading(true)
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
      const response = await fetch(`${API_URL}/api/resume/download`)
      
      if (!response.ok) {
        throw new Error('Failed to download resume')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading resume:', error)
      alert('Failed to download resume. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: 'from-red-500/20 to-orange-500/20',
      action: copyEmail,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: profile.linkedin,
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repos',
      href: profile.github,
      color: 'from-purple-500/20 to-pink-500/20',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-1 font-bold">Get In Touch</h2>
        <p className="text-secondary text-sm">Let&apos;s work together</p>
      </motion.div>

      {/* Intro */}
      <motion.p
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-primary/80 text-sm leading-relaxed"
      >
        I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
      </motion.p>

      {/* Resume Download Button */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <button
          onClick={handleResumeDownload}
          disabled={isDownloading}
          className="mobile-card w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {isDownloading ? (
            <>
              <Loader2 className="text-accent animate-spin" size={20} />
              <span className="text-primary font-medium text-sm">Downloading...</span>
            </>
          ) : (
            <>
              <Download className="text-accent" size={20} />
              <span className="text-primary font-medium text-sm">Download Resume (PDF)</span>
            </>
          )}
        </button>
      </motion.div>

      {/* Contact Cards */}
      <div className="space-y-3">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <motion.div
              key={method.label}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={method.action}
                className="mobile-card flex items-center gap-3 active:scale-[0.98] transition-transform"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="text-primary" size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-primary font-medium text-sm">{method.label}</p>
                  <p className="text-secondary text-xs truncate">{method.value}</p>
                </div>
                <div className="flex items-center gap-2">
                  {method.label === 'Email' && (
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        copyEmail()
                      }}
                      className="p-2 rounded-lg bg-surface-elevated/50 hover:bg-accent/10 transition-colors"
                    >
                      {copied ? (
                        <Check className="text-green-500" size={16} />
                      ) : (
                        <Copy className="text-secondary" size={16} />
                      )}
                    </button>
                  )}
                  <ArrowUpRight className="text-secondary" size={18} />
                </div>
              </a>
            </motion.div>
          )
        })}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <ContactForm />
      </motion.div>

      {/* Location */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mobile-card flex items-center justify-center gap-2"
      >
        <MapPin className="text-accent" size={16} />
        <span className="text-secondary text-sm">{profile.location}</span>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center text-secondary text-xs pt-4"
      >
        Built with Next.js & Tailwind CSS
      </motion.p>
    </div>
  )
}
