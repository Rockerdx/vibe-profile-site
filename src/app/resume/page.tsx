'use client'

import { QRCodeSVG } from 'qrcode.react'
import { Download, Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react'
import { profile, experiences, skills, projects, education, certifications } from '@/lib/data'
import { useResumeDownload } from '@/hooks/useResumeDownload'

export default function ResumePage() {
  const { handleDownload } = useResumeDownload()

  const mobileSkills = skills.filter((s) => s.category === 'mobile')
  const backendSkills = skills.filter((s) => s.category === 'backend')
  const otherSkills = skills.filter((s) => s.category === 'other')

  return (
    <main className="min-h-screen bg-background">
      {/* Header Actions - Hidden when printing */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="/"
            className="text-sm text-secondary hover:text-accent transition-colors"
          >
            ← Back to Portfolio
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/80 transition-all text-sm font-medium"
            >
              <Download size={16} />
              Download ATS Version
            </button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 print:pt-8 print:pb-8">
        {/* Header Section */}
        <header className="text-center mb-8 print:mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-accent font-medium mb-3">
            {profile.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-secondary">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {profile.location}
            </span>
            <span className="hidden sm:inline text-secondary/30">•</span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Mail size={14} />
              {profile.email}
            </a>
            <span className="hidden sm:inline text-secondary/30">•</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <span className="hidden sm:inline text-secondary/30">•</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </header>

        {/* QR Code Section - Right side on desktop, center on mobile */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 print:mb-6">
          <div className="flex-1">
            {/* Professional Summary */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-primary border-b-2 border-accent pb-2 mb-3">
                Professional Summary
              </h2>
              <p className="text-secondary text-sm leading-relaxed">
                {profile.summary}
              </p>
            </section>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-start md:items-end print:items-end">
            <div className="bg-white p-3 rounded-lg shadow-lg print:shadow-none print:border print:border-gray-300">
              <QRCodeSVG
                value="https://me.rockerdx.site"
                size={128}
                level="M"
                includeMargin={false}
                bgColor="#ffffff"
                fgColor="#0a0a0a"
              />
            </div>
            <p className="text-xs text-secondary mt-2 text-center md:text-right">
              Scan to view portfolio
            </p>
            <p className="text-xs text-accent mt-1">me.rockerdx.site</p>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-primary border-b-2 border-accent pb-2 mb-4">
            Experience
          </h2>
          <div className="space-y-5">
            {experiences.map((exp) => (
              <div key={exp.id} className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-primary">{exp.position}</h3>
                    <p className="text-sm text-secondary">{exp.company}</p>
                  </div>
                  <div className="text-sm text-accent mt-1 sm:mt-0 sm:text-right">
                    <p>{exp.period}</p>
                    <p className="text-xs text-secondary">{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-secondary flex items-start gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
                {exp.techStack && exp.techStack.length > 0 && (
                  <p className="text-xs text-accent mt-2">
                    {exp.techStack.join(' • ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-primary border-b-2 border-accent pb-2 mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mobileSkills.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-primary mb-2">Mobile</h3>
                <ul className="space-y-1">
                  {mobileSkills.map((skill) => (
                    <li key={skill.id} className="text-sm text-secondary flex items-center gap-2">
                      <span className="text-accent">•</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {backendSkills.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-primary mb-2">Backend</h3>
                <ul className="space-y-1">
                  {backendSkills.map((skill) => (
                    <li key={skill.id} className="text-sm text-secondary flex items-center gap-2">
                      <span className="text-accent">•</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {otherSkills.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-primary mb-2">Other</h3>
                <ul className="space-y-1">
                  {otherSkills.map((skill) => (
                    <li key={skill.id} className="text-sm text-secondary flex items-center gap-2">
                      <span className="text-accent">•</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-primary border-b-2 border-accent pb-2 mb-4">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="break-inside-avoid">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-primary">{project.name}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-sm flex items-center gap-1 no-print"
                  >
                    <ExternalLink size={12} />
                    View
                  </a>
                </div>
                <p className="text-sm text-secondary mt-1 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-accent mt-1">
                  {project.tech.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-primary border-b-2 border-accent pb-2 mb-4">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="break-inside-avoid">
                <h3 className="font-semibold text-primary">{edu.institution}</h3>
                <p className="text-sm text-secondary">
                  {edu.degree} • {edu.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-primary border-b-2 border-accent pb-2 mb-4">
            Certifications
          </h2>
          <ul className="space-y-1">
            {certifications.map((cert) => (
              <li key={cert.id} className="text-sm text-secondary flex items-center gap-2">
                <span className="text-accent">•</span>
                {cert.name}
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-secondary mt-8 pt-6 border-t border-white/10 print:border-gray-300">
          <p>
            View full portfolio at{' '}
            <a
              href="https://me.rockerdx.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              me.rockerdx.site
            </a>
          </p>
          <p className="text-xs mt-2 no-print">
            Scan the QR code above or click "Download ATS Version" for a PDF copy.
          </p>
        </footer>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0.5cm;
            size: A4;
          }
          
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .no-print {
            display: none !important;
          }
          
          .bg-background {
            background: white !important;
          }
          
          .bg-surface {
            background: white !important;
          }
          
          .text-primary {
            color: #1a1a1a !important;
          }
          
          .text-secondary {
            color: #4a4a4a !important;
          }
          
          .text-accent {
            color: #2563eb !important;
          }
          
          .border-accent {
            border-color: #2563eb !important;
          }
          
          .border-white\/10 {
            border-color: #e5e5e5 !important;
          }
          
          .border-white\/5 {
            border-color: #f0f0f0 !important;
          }
          
          a {
            text-decoration: none !important;
            color: #2563eb !important;
          }
          
          .break-inside-avoid {
            break-inside: avoid;
          }
          
          section {
            break-inside: avoid;
          }
        }
      `}</style>
    </main>
  )
}
