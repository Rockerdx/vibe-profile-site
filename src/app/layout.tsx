import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Rizki Putra - Senior Software Engineer',
  description: 'Seasoned Software Engineer with 5+ years of experience. Currently Backend Engineer at Stockbit, specializing in Go development. Previously Android expert and educator.',
  keywords: ['Software Engineer', 'Backend Engineer', 'Android Developer', 'Golang', 'Kotlin', 'Stockbit'],
  authors: [{ name: 'Muhammad Rizki Putra' }],
  openGraph: {
    title: 'Muhammad Rizki Putra - Senior Software Engineer',
    description: 'Backend Engineer at Stockbit | Go | Kotlin | Android Expert',
    type: 'website',
    url: 'https://rockerdx.github.io/vibe-profile-site',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Rizki Putra - Senior Software Engineer',
    description: 'Backend Engineer at Stockbit | Go | Kotlin | Android Expert',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
