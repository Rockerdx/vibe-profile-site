import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import StructuredData from '@/components/StructuredData'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://me.rockerdx.site'),
  title: {
    default: 'Muhammad Rizki Putra - Senior Backend Engineer | Go, Microservices, PostgreSQL',
    template: '%s | Muhammad Rizki Putra',
  },
  description: 'Senior Backend Engineer at Stockbit specializing in high-performance Go microservices. 5+ years building scalable systems handling millions of transactions. Expert in PostgreSQL, gRPC, Redis, Kafka. Former Android developer with apps serving 1M+ users.',
  keywords: ['Backend Engineer', 'Go Developer', 'Golang', 'Microservices', 'PostgreSQL', 'Stockbit', 'Fintech', 'System Architecture', 'gRPC', 'Redis', 'Kafka', 'Android Developer', 'Kotlin', 'Jakarta', 'Indonesia', 'Software Engineer'],
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
    title: 'Muhammad Rizki Putra - Senior Backend Engineer',
    description: 'Building high-performance systems at Stockbit. 5+ years experience in Go microservices, PostgreSQL, gRPC. Former Android expert with apps serving 1M+ users.',
    type: 'website',
    url: 'https://me.rockerdx.site',
    siteName: 'Muhammad Rizki Putra Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/16275342?v=4',
        width: 800,
        height: 800,
        alt: 'Muhammad Rizki Putra - Senior Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Rizki Putra - Senior Backend Engineer',
    description: 'Building high-performance systems at Stockbit. Go, Microservices, PostgreSQL. Former Android expert with 1M+ user apps.',
    creator: '@rzk_putra',
    images: ['https://avatars.githubusercontent.com/u/16275342?v=4'],
  },
  alternates: {
    canonical: 'https://me.rockerdx.site',
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
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://avatars.githubusercontent.com" />
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
