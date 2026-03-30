'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
        <p className="text-secondary mb-4">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-accent hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="card p-6 md:p-8"
    >
      <h3 className="text-xl font-semibold text-primary mb-6">Send a Message</h3>

      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium text-secondary mb-2">
          Company <span className="text-secondary/50">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="Your company"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          rows={5}
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </motion.form>
  )
}
