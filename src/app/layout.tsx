import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Unlocky - Clé d\'hôtel dans Apple & Google Wallet',
  description: 'La clé est déjà dans le téléphone de vos clients. Solution d\'accès mobile premium pour hôtels 5 étoiles.',
  keywords: 'unlocky, keylessly, clé mobile, apple wallet, google wallet, hôtel, accès mobile, NFC',
  authors: [{ name: 'Unlocky' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#C3A36E',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    title: 'Unlocky - Clé d\'hôtel dans Apple & Google Wallet',
    description: 'La clé est déjà dans le téléphone de vos clients.',
    siteName: 'Unlocky',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unlocky - Clé d\'hôtel dans Apple & Google Wallet',
    description: 'La clé est déjà dans le téléphone de vos clients.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
