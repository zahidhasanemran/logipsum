import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header/Header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const space = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--space-grotesk',
  display: 'optional', // use optional for best performance
})

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--plus-jakarta',
  display: 'optional', // use optional for best performance
})

export const metadata: Metadata = {
  title: 'Logipsum',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${space.className} ${jakarta.className} `}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
