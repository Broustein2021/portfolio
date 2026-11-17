import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

const serif = Instrument_Serif({
  weight: '400',
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const siteUrl = 'https://broustein-portfolio.vercel.app'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jean-Marie Brou',
  jobTitle: 'Full-Stack Developer & AI Integration',
  url: siteUrl,
  sameAs: [
    'https://www.linkedin.com/in/jean-marie-brou-571022295/',
    'https://github.com/Broustein2021',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Jean-Marie Brou — Full-Stack Developer & AI Integration (Remote)',
  description:
    'Full-stack developer (PHP, TypeScript, PostgreSQL) specialised in call center systems, VoIP and AI agents. 6+ years in production. Available for remote contracts with European teams.',
  applicationName: 'Jean-Marie Brou — Portfolio',
  authors: [{ name: 'Jean-Marie Brou' }],
  creator: 'Jean-Marie Brou',
  keywords: [
    'full-stack developer',
    'remote',
    'PHP',
    'Laravel',
    'Symfony',
    'Next.js',
    'PostgreSQL',
    'Asterisk',
    'FreeSWITCH',
    'VoIP',
    'AI agents',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Jean-Marie Brou — Full-Stack Developer & AI Integration',
    description: 'Call center systems, SaaS platforms and AI agents. Remote, UTC+0.',
    siteName: 'Jean-Marie Brou',
    locale: 'en_US',
    url: '/',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Jean-Marie Brou — Full-Stack Developer & AI Integration — Remote, UTC+0',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jean-Marie Brou — Full-Stack Developer & AI Integration',
    description: 'Call center systems, SaaS platforms and AI agents. Remote, UTC+0.',
    images: ['/og.png'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/favicon-32x32.png', sizes: '32x32' }],
    apple: '/apple-icon.png',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { colorScheme: 'light dark', themeColor: '#f5f2ea' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`bg-background ${grotesk.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
