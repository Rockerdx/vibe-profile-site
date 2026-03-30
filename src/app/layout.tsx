import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rockerdx.github.io'),
  title: {
    default: 'Muhammad Rizki Putra - Senior Software Engineer',
    template: '%s | Muhammad Rizki Putra',
  },
  description: 'Seasoned Software Engineer with 5+ years of experience. Currently Backend Engineer at Stockbit, specializing in Go development. Previously Android expert and educator.',
  keywords: ['Software Engineer', 'Backend Engineer', 'Android Developer', 'Golang', 'Kotlin', 'Stockbit', 'Full Stack Developer', 'Jakarta', 'Indonesia'],
  authors: [{ name: 'Muhammad Rizki Putra', url: 'https://github.com/Rockerdx' }],
  creator: 'Muhammad Rizki Putra',
  publisher: 'Muhammad Rizki Putra',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Muhammad Rizki Putra - Senior Software Engineer',
    description: 'Backend Engineer at Stockbit | Go | Kotlin | Android Expert',
    type: 'website',
    url: 'https://rockerdx.github.io/vibe-profile-site',
    siteName: 'Muhammad Rizki Putra Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/16275342?v=4',
        width: 800,
        height: 800,
        alt: 'Muhammad Rizki Putra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Rizki Putra - Senior Software Engineer',
    description: 'Backend Engineer at Stockbit | Go | Kotlin | Android Expert',
    creator: '@rzk_putra',
    images: ['https://avatars.githubusercontent.com/u/16275342?v=4'],
  },
  alternates: {
    canonical: 'https://rockerdx.github.io/vibe-profile-site',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://avatars.githubusercontent.com" />
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
