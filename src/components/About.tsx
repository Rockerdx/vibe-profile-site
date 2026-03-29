'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getEducation, getCertifications, type Education, type Certification } from '@/lib/api/client'

export default function About() {
  const [education, setEducation] = useState<Education[]>([])
  const [certifications, setCertifications] = useState<Certification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getEducation(), getCertifications()])
      .then(([edu, certs]) => {
        setEducation(edu)
        setCertifications(certs)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
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
      >
        <h2 className="section-title">About</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <p className="text-primary/80 leading-relaxed mb-6">
              Hello! I&apos;m a seasoned Software Engineer with 5 years of hands-on experience.
              Currently, I&apos;m excelling as a Backend Engineer at Stockbit, where I specialize in Go development.
            </p>
            <p className="text-primary/80 leading-relaxed">
              In my previous roles, I made significant contributions to Android development—improving app reliability
              and even teaching Android classes at Binar Academy. Let&apos;s connect and explore how I can bring my
              expertise to your projects.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-accent" size={24} />
                <h3 className="text-xl font-semibold text-primary">Education</h3>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-secondary">{edu.degree}</p>
                  <p className="text-secondary text-sm">{edu.period}</p>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-accent" size={24} />
                <h3 className="text-xl font-semibold text-primary">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-secondary flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {cert.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
