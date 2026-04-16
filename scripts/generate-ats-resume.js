#!/usr/bin/env node
/**
 * ATS-Optimized Resume PDF Generator
 * 
 * Generates a single-column, ATS-friendly resume PDF with:
 * - Standard fonts (Helvetica)
 * - No tables or multi-column layouts
 * - Standard section headings
 * - All keywords from data.ts
 * - Quantified achievements
 */

const fs = require('fs');
const path = require('path');

// Resume data (mirrored from src/lib/data.ts for Node.js execution)
const profile = {
  name: 'Muhammad Rizki Putra',
  title: 'Senior Backend & Product Engineer',
  location: 'Kota Tangerang Selatan, Banten, Indonesia',
  email: 'rzk.putra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-rizky-putra/',
  github: 'https://github.com/Rockerdx',
  summary: 'I help fintech and tech companies build high-performance backend systems that handle millions of transactions. 5+ years of experience architecting Go microservices, optimizing PostgreSQL at scale, and shipping reliable products. Currently engineering critical trading infrastructure at Stockbit.',
};

const experiences = [
  {
    id: 1,
    company: 'Stockbit',
    position: 'Backend Engineer',
    period: 'August 2023 - Present',
    duration: '2 years 8 months',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Successfully transitioned to Backend Engineer (Go) through Internal Mobility program, contributing meaningfully within first month',
      'Architect and maintain critical trading infrastructure handling millions of daily transactions',
      'Optimize PostgreSQL queries and database schema, improving API response times by 30-50%',
      'Design and implement microservices using gRPC and event-driven architecture with Kafka',
      'Collaborate with cross-functional teams to deliver features supporting 1M+ active users',
    ],
    techStack: ['Golang', 'PostgreSQL', 'gRPC', 'Microservices', 'Redis', 'Kafka'],
  },
  {
    id: 2,
    company: 'Stockbit',
    position: 'Android Engineer',
    period: 'October 2021 - September 2023',
    duration: '2 years',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Reduced Out Of Memory (OOM) incidents by 5% for millions of users on older Android devices',
      'Improved app render, layout drawing, and thread usage efficiency by 10-30% through performance optimization',
      'Created reusable custom view components reducing UI development time by 20% across teams',
      'Maintained and enhanced critical trading features serving 1M+ monthly active users',
    ],
    techStack: ['Kotlin', 'Android', 'Java'],
  },
  {
    id: 3,
    company: 'Binar Academy',
    position: 'Android Academy Facilitator',
    period: 'April 2022 - August 2022',
    duration: '5 months',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Facilitated Android classes, aiding non-tech individuals in kickstarting their careers as Android Engineers',
    ],
    techStack: ['Android', 'Kotlin', 'Java'],
  },
  {
    id: 4,
    company: 'Otospector',
    position: 'Senior Android Developer',
    period: 'March 2021 - September 2021',
    duration: '7 months',
    location: 'North Jakarta, Indonesia',
    achievements: [
      'Initiated and developed a new app for Otospector',
      'Maintained internal apps (Otoinspect)',
    ],
    techStack: ['Android', 'Kotlin'],
  },
];

const skills = [
  { name: 'Mobile Application Development', category: 'mobile' },
  { name: 'Android Framework', category: 'mobile' },
  { name: 'Mobile Product Development', category: 'mobile' },
  { name: 'Kotlin', category: 'mobile' },
  { name: 'Java', category: 'mobile' },
  { name: 'Flutter', category: 'mobile' },
  { name: 'Golang', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'gRPC', category: 'backend' },
  { name: 'Microservices', category: 'backend' },
  { name: 'Redis', category: 'backend' },
  { name: 'Kafka', category: 'backend' },
  { name: 'Spring', category: 'backend' },
  { name: 'Vue.js', category: 'other' },
];

const projects = [
  {
    id: 1,
    name: 'MyPopularMoviesApps',
    description: 'Movie discovery app with offline caching and personalized recommendations. Implemented RESTful API integration, image optimization, and smooth pagination for browsing thousands of movies.',
    tech: ['Java', 'Android', 'REST API', 'SQLite'],
    highlighted: true,
  },
  {
    id: 2,
    name: 'FlutterPopularMoviesApp',
    description: 'Cross-platform movie discovery application built with Flutter. Features real-time API sync, responsive UI adapting to different screen sizes, and optimized state management for smooth performance.',
    tech: ['Dart', 'Flutter', 'TheMovieDB API'],
    highlighted: true,
  },
  {
    id: 3,
    name: 'KlinikApp',
    description: 'Healthcare appointment booking system connecting patients with nearby clinics. Implemented GPS-based clinic discovery, real-time availability checking, and appointment scheduling with push notifications.',
    tech: ['Java', 'Android', 'Google Maps API'],
    highlighted: true,
  },
];

const education = [
  {
    id: 1,
    institution: 'Universitas Sumatera Utara',
    degree: "Bachelor's degree, Computer Science",
    period: '2013 - 2019',
  },
];

const certifications = [
  { name: 'Binar Academy Facilitators' },
  { name: 'Bangkit Academy Instructor and Mentor' },
];

// PDFMake document definition
function getATSResumeDocumentDefinition() {
  const mobileSkills = skills.filter((s) => s.category === 'mobile').map((s) => s.name);
  const backendSkills = skills.filter((s) => s.category === 'backend').map((s) => s.name);
  const otherSkills = skills.filter((s) => s.category === 'other').map((s) => s.name);

  return {
    info: {
      title: `${profile.name} - Resume`,
      author: profile.name,
      subject: 'Professional Resume - ATS Optimized',
      keywords: 'Backend Engineer, Golang, PostgreSQL, Microservices, Android, Kotlin, Java, gRPC, Kafka, Redis, Stockbit, Fintech',
    },
    pageSize: 'A4',
    pageMargins: [50, 50, 50, 50],
    defaultStyle: {
      font: 'Roboto',
      fontSize: 10,
      color: '#000000',
    },
    content: [
      {
        text: profile.name.toUpperCase(),
        style: 'name',
        alignment: 'center',
      },
      {
        text: profile.title,
        style: 'title',
        alignment: 'center',
      },
      {
        text: `${profile.location} | ${profile.email}`,
        style: 'contact',
        alignment: 'center',
        margin: [0, 0, 0, 4],
      },
      {
        text: `LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}`,
        style: 'contact',
        alignment: 'center',
        margin: [0, 0, 0, 12],
      },
      {
        text: 'PROFESSIONAL SUMMARY',
        style: 'sectionHeader',
      },
      {
        text: profile.summary,
        style: 'bodyText',
        margin: [0, 0, 0, 12],
      },
      {
        text: 'TECHNICAL SKILLS',
        style: 'sectionHeader',
      },
      {
        text: `Languages: ${mobileSkills.filter(s => ['Kotlin', 'Java', 'Dart', 'Python', 'TypeScript'].includes(s)).join(', ')}, Go`,
        style: 'skillLine',
      },
      {
        text: `Backend: ${backendSkills.join(', ')}`,
        style: 'skillLine',
      },
      {
        text: `Mobile & Frameworks: Android Framework, Flutter, Vue.js, Spring Boot`,
        style: 'skillLine',
      },
      {
        text: `Tools & Platforms: Git, GitHub, Docker, REST API, gRPC, Microservices Architecture, Event-Driven Architecture`,
        style: 'skillLine',
        margin: [0, 0, 0, 12],
      },
      {
        text: 'PROFESSIONAL EXPERIENCE',
        style: 'sectionHeader',
      },
      ...experiences.flatMap((exp) => [
        {
          text: exp.position,
          style: 'jobTitle',
        },
        {
          text: `${exp.company} | ${exp.location} | ${exp.period}`,
          style: 'jobMeta',
          margin: [0, 0, 0, 6],
        },
        ...exp.achievements.map((achievement) => ({
          text: `• ${achievement}`,
          style: 'bulletPoint',
        })),
        {
          text: `Technologies: ${exp.techStack?.join(', ') || 'N/A'}`,
          style: 'techLine',
          margin: [0, 4, 0, 12],
        },
      ]),
      {
        text: 'SELECTED PROJECTS',
        style: 'sectionHeader',
      },
      ...projects.flatMap((project) => [
        {
          text: project.name,
          style: 'projectTitle',
        },
        {
          text: `${project.description} Technologies: ${project.tech.join(', ')}`,
          style: 'projectDesc',
          margin: [0, 0, 0, 8],
        },
      ]),
      {
        text: '',
        margin: [0, 0, 0, 4],
      },
      {
        text: 'EDUCATION',
        style: 'sectionHeader',
      },
      ...education.map((edu) => [
        {
          text: edu.institution,
          style: 'eduInstitution',
        },
        {
          text: `${edu.degree} | ${edu.period}`,
          style: 'eduDetails',
          margin: [0, 0, 0, 8],
        },
      ]).flat(),
      {
        text: 'CERTIFICATIONS',
        style: 'sectionHeader',
      },
      {
        text: certifications.map((cert) => `• ${cert.name}`).join('\n'),
        style: 'certList',
      },
    ],
    styles: {
      name: {
        fontSize: 16,
        bold: true,
        margin: [0, 0, 0, 4],
      },
      title: {
        fontSize: 12,
        margin: [0, 0, 0, 4],
      },
      contact: {
        fontSize: 9,
        color: '#333333',
      },
      sectionHeader: {
        fontSize: 11,
        bold: true,
        margin: [0, 12, 0, 6],
      },
      bodyText: {
        fontSize: 10,
        lineHeight: 1.3,
      },
      skillLine: {
        fontSize: 9,
        lineHeight: 1.4,
        margin: [0, 1, 0, 1],
      },
      jobTitle: {
        fontSize: 10,
        bold: true,
        margin: [0, 8, 0, 1],
      },
      jobMeta: {
        fontSize: 9,
        color: '#333333',
        italics: true,
      },
      bulletPoint: {
        fontSize: 9,
        lineHeight: 1.3,
        margin: [10, 1, 0, 1],
      },
      techLine: {
        fontSize: 8,
        color: '#333333',
        italics: true,
      },
      projectTitle: {
        fontSize: 10,
        bold: true,
        margin: [0, 6, 0, 1],
      },
      projectDesc: {
        fontSize: 9,
        lineHeight: 1.3,
      },
      eduInstitution: {
        fontSize: 10,
        bold: true,
        margin: [0, 2, 0, 1],
      },
      eduDetails: {
        fontSize: 9,
        color: '#333333',
      },
      certList: {
        fontSize: 9,
        lineHeight: 1.4,
      },
    },
  };
}

async function generatePDF() {
  try {
    const pdfMake = require('pdfmake/build/pdfmake');
    const pdfFonts = require('pdfmake/build/vfs_fonts');

    pdfMake.vfs = pdfFonts;

    const docDefinition = getATSResumeDocumentDefinition();
    const pdfDoc = pdfMake.createPdf(docDefinition);

    const outputPath = path.join(__dirname, '..', 'public', 'resume-ats.pdf');

    const buffer = await pdfDoc.getBuffer();

    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ ATS-optimized resume generated: ${outputPath}`);
    console.log(`📄 File size: ${(buffer.length / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
}

generatePDF();
