'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react'
import { Testimonial } from '@/types'
import useReducedMotion from '@/hooks/useReducedMotion'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-primary mb-1 font-bold">Testimonials</h2>
        <p className="text-secondary text-sm">What colleagues say about working with me</p>
      </motion.div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mobile-card relative"
        >
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Quote className="text-accent" size={20} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Quote */}
              <p className="text-primary/80 text-sm leading-relaxed italic pt-8">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-semibold text-lg">
                    {currentTestimonial.author.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-primary font-medium text-sm truncate">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-secondary text-xs truncate">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </p>
                </div>
                {currentTestimonial.linkedinUrl && (
                  <a
                    href={currentTestimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0077b5]/10 flex items-center justify-center flex-shrink-0 hover:bg-[#0077b5]/20 transition-colors"
                  >
                    <Linkedin className="text-[#0077b5]" size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center hover:bg-accent/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-primary" size={20} />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-accent' : 'bg-secondary/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center hover:bg-accent/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-primary" size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="mobile-card relative group"
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Quote className="text-accent" size={20} />
            </div>

            {/* Quote */}
            <p className="text-primary/80 text-sm leading-relaxed italic pt-8 mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-semibold text-lg">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-primary font-medium text-sm truncate">
                  {testimonial.author}
                </p>
                <p className="text-secondary text-xs truncate">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
              {testimonial.linkedinUrl && (
                <a
                  href={testimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0077b5]/10 flex items-center justify-center flex-shrink-0 hover:bg-[#0077b5]/20 transition-colors opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Linkedin className="text-[#0077b5]" size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
