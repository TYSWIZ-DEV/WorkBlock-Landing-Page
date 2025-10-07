import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WorkBlock — Make focus simple',
  description: 'Tap start, block distractions, and build momentum. A focus timer that blocks distracting apps via Apple Screen Time/Family Controls.',
  keywords: 'focus timer, productivity, screen time, distraction blocking, focus app',
  authors: [{ name: 'WorkBlock' }],
  openGraph: {
    title: 'WorkBlock — Make focus simple',
    description: 'Tap start, block distractions, and build momentum. A focus timer that blocks distracting apps via Apple Screen Time/Family Controls.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkBlock — Make focus simple',
    description: 'Tap start, block distractions, and build momentum.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0D0E16',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}


