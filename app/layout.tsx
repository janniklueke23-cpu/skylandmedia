import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Skylands Media - Premium Drohnenfotografie',
  description: 'Professionelle Drohnenfotografie und Videografie für Unternehmen in Würzburg und ganz Deutschland. 8K Ultra-HD Luftaufnahmen für Architektur, Immobilien und Events.',
  keywords: ['Drohnenfotografie', 'Luftaufnahmen', '8K Fotografie', 'Architekturfotografie', 'Immobilienfotografie', 'Würzburg', 'Unternehmensfotografie'],
  authors: [{ name: 'Skylands Media' }],
  creator: 'Skylands Media',
  publisher: 'Skylands Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://skylandsmedia.de'),
  alternates: {
    canonical: 'https://skylandsmedia.de',
  },
  openGraph: {
    title: 'Skylands Media - Premium Drohnenfotografie',
    description: 'Professionelle Drohnenfotografie und Videografie für Unternehmen in Würzburg und ganz Deutschland. 8K Ultra-HD Luftaufnahmen.',
    url: 'https://skylandsmedia.de',
    siteName: 'Skylands Media',
    images: [
      {
        url: 'https://skylandsmedia.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Skylands Media - Premium Drohnenfotografie',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skylands Media - Premium Drohnenfotografie',
    description: 'Professionelle Drohnenfotografie und Videografie für Unternehmen in Würzburg und ganz Deutschland.',
    images: ['https://skylandsmedia.de/twitter-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
