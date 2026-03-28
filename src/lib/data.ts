import { Experience, Skill, Project, ProfileData } from '@/types'

export const profile: ProfileData = {
  name: 'Muhammad Rizki Putra',
  title: 'Senior Software Engineer | Kotlin | Go | Stockbit',
  location: 'Kota Tangerang Selatan, Banten, Indonesia',
  email: 'rzk.putra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammadrizky-putra',
  github: 'https://github.com/Rockerdx',
  summary: 'Seasoned Software Engineer with 5+ years of hands-on experience. Currently excelling as a Backend Engineer at Stockbit, specializing in Go development. Previously made significant contributions to Android development—improving app reliability and teaching Android classes at Binar Academy.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/16275342?v=4',
}

export const experiences: Experience[] = [
  {
    company: 'Stockbit',
    position: 'Backend Engineer',
    period: 'August 2023 - Present',
    duration: '2 years 8 months',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Successfully transitioned to Backend Engineer (Go) through the Internal Mobility program',
      'Rapid adaptation, contributing meaningfully within just one month',
    ],
    techStack: ['Golang', 'PostgreSQL', 'gRPC', 'Microservices', 'Redis', 'Kafka'],
  },
  {
    company: 'Stockbit',
    position: 'Android Engineer',
    period: 'October 2021 - September 2023',
    duration: '2 years',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Created a custom base view for rounded designs',
      'Enhanced app reliability, reducing Out Of Memory (OOM) incidents by 5% for older devices',
      'Boosted app render, layout drawing, and thread usage efficiency by 10-30%',
    ],
    techStack: ['Kotlin', 'Android', 'Java'],
  },
  {
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
  {
    company: 'YesDok',
    position: 'Android Developer',
    period: 'August 2020 - March 2021',
    duration: '8 months',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Maintained and developed features for existing apps',
      'Designed, initiated, and developed a new DoctorApp project for YesDok',
    ],
    techStack: ['Android', 'Kotlin'],
  },
  {
    company: 'Do-It',
    position: 'Fullstack Android Developer',
    period: 'September 2019 - July 2020',
    duration: '11 months',
    location: 'Greater Jakarta Area, Indonesia',
    achievements: [
      'Developed and maintained Android apps with more than 1 million downloads',
      'Implemented new Register/Login feature for Do-it apps',
      'Implemented new payment method using OVO',
      'Participated in Backend (Spring) and FrontEnd (vue.js/html) Development',
    ],
    techStack: ['Android', 'Kotlin', 'Spring', 'Vue.js'],
  },
  {
    company: 'Self-Employed',
    position: 'Android Developer',
    period: 'September 2016 - August 2019',
    duration: '3 years',
    location: 'Medan, Indonesia',
    achievements: [
      'Worked on various projects: Maps & Navigation Apps, Ticket Booking Apps, Reminder Apps, Shopping Apps',
    ],
    techStack: ['Android', 'Java', 'Kotlin'],
  },
  {
    company: 'Mashara',
    position: 'Android Developer',
    period: 'November 2017 - February 2019',
    duration: '1 year 4 months',
    location: 'Medan, Indonesia',
    achievements: [
      'Developed reminder apps for Mashara Android (Praying Times)',
      'Maintained apps to support various versions and device sizes',
      'Fixed bugs and worked with team to implement upcoming features',
    ],
    techStack: ['Android', 'Java'],
  },
  {
    company: 'Universitas Sumatera Utara',
    position: 'Laboratory Assistant',
    period: 'September 2016 - August 2017',
    duration: '1 year',
    location: 'Medan, Indonesia',
    achievements: [
      'Taught Mobile Programming, Basic Concept of OOP and Computer Graphic',
    ],
    techStack: ['Java', 'OOP'],
  },
]

export const skills: Skill[] = [
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
]

export const projects: Project[] = [
  {
    name: 'MyPopularMoviesApps',
    description: 'App for Udacity Submission - Movie discovery application',
    url: 'https://github.com/Rockerdx/MyPopularMoviesApps',
    tech: ['Java', 'Android'],
    highlighted: true,
  },
  {
    name: 'FlutterPopularMoviesApp',
    description: 'Simple implementation of Flutter with API from TheMovieDB',
    url: 'https://github.com/Rockerdx/FlutterPopularMoviesApp',
    tech: ['Dart', 'Flutter'],
    highlighted: true,
  },
  {
    name: 'KlinikApp',
    description: 'App to book reservation from nearby Clinic',
    url: 'https://github.com/Rockerdx/KlinikApp',
    tech: ['Java', 'Android'],
    highlighted: true,
  },
  {
    name: 'DeepLearningOnAndroid',
    description: 'Material for deploying deep learning models on mobile and embedded platforms',
    url: 'https://github.com/Rockerdx/DeepLearningOnAndroid',
    tech: ['Python', 'Jupyter', 'Android'],
    highlighted: true,
  },
  {
    name: 'myJNEApps',
    description: 'App to help customers send packages without going to JNE office',
    url: 'https://github.com/Rockerdx/myJNEApps',
    tech: ['Java', 'Android'],
  },
  {
    name: 'Temperature',
    description: 'First try creating a library for Android',
    url: 'https://github.com/Rockerdx/Temperature',
    tech: ['Kotlin', 'Android'],
  },
]

export const education = [
  {
    institution: 'Universitas Sumatera Utara',
    degree: "Bachelor's degree, Computer Science",
    period: '2013 - 2019',
  },
]

export const certifications = [
  'Binar Academy Facilitators',
  'Bangkit Academy Instructor and Mentor',
]
