import type { Metadata } from 'next'
import { Fraunces, Work_Sans } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { themeInitScript } from '@/lib/theme-script'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz', 'SOFT', 'WONK'],
})

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
})

const SITE_URL = 'https://www.propertyjaanch.com'
const TITLE = 'PropertyJaanch — Verify. Trust. Transact.'
const DESCRIPTION =
  'Know the property before you buy it. PropertyJaanch verifies ownership, documents, encumbrances, and disputes before you sign — and gives buyers and sellers a secure way to complete the transaction.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s — PropertyJaanch' },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'PropertyJaanch',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
