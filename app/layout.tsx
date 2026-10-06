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

export const metadata: Metadata = {
  title: 'Broustein — IT Manager & Full-Stack Developer',
  description:
    'Jean-Marie Brou (Broustein) · IT Manager & Full-Stack Developer in Abidjan, Côte d’Ivoire. SaaS, call center and AI-driven solutions — building systems that move people.',
  applicationName: 'Broustein Portfolio',
  authors: [{ name: 'Jean-Marie Ephrem Ghislain Brou' }],
  keywords: [
    'full-stack developer',
    'IT manager',
    'SaaS',
    'call center',
    'AI integration',
    'Asterisk',
    'Abidjan',
    "Côte d'Ivoire",
  ],
  creator: 'Broustein',
  openGraph: {
    type: 'website',
    title: 'Broustein — IT Manager & Full-Stack Developer',
    description: 'Building systems that move people.',
    siteName: 'Broustein',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Broustein — IT Manager & Full-Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broustein — IT Manager & Full-Stack Developer',
    description: 'Building systems that move people.',
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
      <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}