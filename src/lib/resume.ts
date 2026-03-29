import { profile, experiences, skills, projects, education, certifications } from '@/lib/data'
import { Experience, Project, Education, Certification } from '@/types'

const colors = {
  background: '#0a0a0a',
  surface: '#171717',
  primary: '#fafafa',
  secondary: '#a3a3a3',
  accent: '#3b82f6',
}

type ResumeExperience = Experience & {
  achievements: string[]
  techStack?: string[]
}

type ResumeProject = Project & {
  tech: string[]
}

type ResumeEducation = Education

export const getResumeDocumentDefinition = (): any => {
  return {
    info: {
      title: `${profile.name} - Resume`,
      author: profile.name,
      subject: 'Professional Resume',
      keywords: 'resume, engineer, backend, android',
    },
    pageSize: 'A4',
    pageMargins: [40, 60, 40, 40],
    defaultStyle: {
      font: 'Roboto',
      fontSize: 10,
      color: colors.primary,
    },
    header: {
      stack: [
        {
          text: profile.name,
          style: 'headerName',
          color: colors.primary,
        },
        {
          text: profile.title,
          style: 'headerTitle',
          color: colors.accent,
        },
        {
          text: `${profile.location} | ${profile.email}`,
          style: 'headerContact',
          color: colors.secondary,
        },
      ],
      margin: [0, 0, 0, 20],
    },
    content: [
      {
        text: 'PROFESSIONAL SUMMARY',
        style: 'sectionTitle',
        color: colors.accent,
      },
      {
        text: profile.summary,
        style: 'body',
        color: colors.secondary,
        margin: [0, 0, 0, 20],
      },

      {
        text: 'EXPERIENCE',
        style: 'sectionTitle',
        color: colors.accent,
      },
      ...experiences.map((exp: ResumeExperience) => ({
        stack: [
          {
            table: {
              widths: ['*', '*'],
              body: [
                [
                  { text: exp.position, style: 'jobTitle' },
                  { text: exp.period, style: 'jobPeriod' },
                ],
                [
                  { text: exp.company, style: 'jobCompany' },
                  { text: exp.location, style: 'jobLocation' },
                ],
              ],
            },
            layout: 'noBorders',
          },
          {
            text: exp.achievements.map((a: string) => `• ${a}`).join('\n'),
            style: 'jobDescription',
            color: colors.secondary,
            margin: [5, 5, 0, 5],
          },
          exp.techStack && exp.techStack.length > 0
            ? {
                text: exp.techStack.join(' • '),
                style: 'techStack',
                color: colors.accent,
              }
            : null,
        ].filter(Boolean),
        margin: [0, 0, 0, 12],
      })),

      {
        text: 'SKILLS',
        style: 'sectionTitle',
        color: colors.accent,
        margin: [0, 20, 0, 10],
      },
      {
        columns: [
          {
            text: skills
              .filter((s) => s.category === 'mobile')
              .map((s) => `• ${s.name}`)
              .join('\n'),
            style: 'skillColumn',
            color: colors.primary,
          },
          {
            text: skills
              .filter((s) => s.category === 'backend')
              .map((s) => `• ${s.name}`)
              .join('\n'),
            style: 'skillColumn',
            color: colors.primary,
          },
          {
            text: skills
              .filter((s) => s.category === 'other')
              .map((s) => `• ${s.name}`)
              .join('\n'),
            style: 'skillColumn',
            color: colors.primary,
          },
        ],
        columnGap: 20,
        margin: [0, 0, 0, 20],
      },

      {
        text: 'PROJECTS',
        style: 'sectionTitle',
        color: colors.accent,
        margin: [0, 20, 0, 10],
      },
      ...projects.map((project: ResumeProject) => ({
        stack: [
          {
            text: project.name,
            style: 'projectTitle',
            color: colors.accent,
          },
          {
            text: project.description,
            style: 'projectDescription',
            color: colors.secondary,
            margin: [0, 2, 0, 4],
          },
          {
            text: project.tech.join(' • '),
            style: 'techStack',
            color: colors.secondary,
          },
        ],
        margin: [0, 0, 0, 12],
      })),

      {
        text: 'EDUCATION',
        style: 'sectionTitle',
        color: colors.accent,
        margin: [0, 20, 0, 10],
      },
      ...education.map((edu: ResumeEducation) => ({
        stack: [
          {
            text: edu.institution,
            style: 'eduInstitution',
            color: colors.primary,
          },
          {
            text: `${edu.degree} • ${edu.period}`,
            style: 'eduDetails',
            color: colors.secondary,
          },
        ],
        margin: [0, 0, 0, 10],
      })),

      {
        text: 'CERTIFICATIONS',
        style: 'sectionTitle',
        color: colors.accent,
        margin: [0, 20, 0, 10],
      },
      {
        text: certifications.map((cert: Certification) => `• ${cert.name}`).join('\n'),
        style: 'certifications',
        color: colors.secondary,
      },
    ],
    styles: {
      headerName: {
        fontSize: 24,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 5],
      },
      headerTitle: {
        fontSize: 14,
        bold: true,
        alignment: 'center',
        color: colors.accent,
        margin: [0, 0, 0, 10],
      },
      headerContact: {
        fontSize: 10,
        alignment: 'center',
        color: colors.secondary,
      },
      sectionTitle: {
        fontSize: 14,
        bold: true,
        margin: [0, 20, 0, 10],
        decoration: 'underline',
        decorationColor: colors.accent,
        underlineColor: colors.accent,
      },
      jobTitle: {
        fontSize: 11,
        bold: true,
        color: colors.primary,
      },
      jobPeriod: {
        fontSize: 9,
        color: colors.accent,
        alignment: 'right',
      },
      jobCompany: {
        fontSize: 10,
        bold: true,
        color: colors.primary,
      },
      jobLocation: {
        fontSize: 9,
        color: colors.secondary,
      },
      jobDescription: {
        fontSize: 9,
        lineHeight: 1.4,
      },
      skillColumn: {
        fontSize: 9,
        lineHeight: 1.6,
      },
      projectTitle: {
        fontSize: 11,
        bold: true,
        margin: [0, 10, 0, 2],
      },
      projectDescription: {
        fontSize: 9,
        margin: [0, 0, 0, 2],
      },
      eduInstitution: {
        fontSize: 10,
        bold: true,
        color: colors.primary,
      },
      eduDetails: {
        fontSize: 9,
        color: colors.secondary,
      },
      certifications: {
        fontSize: 9,
        lineHeight: 1.6,
      },
      techStack: {
        fontSize: 8,
        margin: [0, 5, 0, 5],
      },
      body: {
        fontSize: 9,
        lineHeight: 1.6,
        color: colors.secondary,
      },
    },
  }
}

export const downloadResume = async () => {
  const pdfMake = await import('pdfmake/build/pdfmake')
  const pdfFonts = await import('pdfmake/build/vfs_fonts')
  
  const vfs = (pdfFonts as any).default.vfs
  ;(pdfMake as any).default.vfs = vfs
  
  const docDefinition = getResumeDocumentDefinition()
  ;(pdfMake as any).default.createPdf(docDefinition).download('resume.pdf')
}

export default getResumeDocumentDefinition
