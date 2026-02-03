import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  title: 'كور كونسيبت | Core Concept - التدريب الاحترافي في المملكة العربية السعودية',
  description: 'كور كونسيبت للتدريب - شريكك في بناء القدرات. نقدم حلولاً تدريبية مبتكرة وعالية الجودة للشركات والمؤسسات في المملكة العربية السعودية.',
  keywords: 'تدريب، تطوير، كور كونسيبت، السعودية، رؤية 2030، تدريب احترافي، قيادة، إدارة',
  authors: [{ name: 'Core Concept' }],
  openGraph: {
    title: 'كور كونسيبت | Core Concept',
    description: 'من العمق... إلى العُلا - التدريب الاحترافي في المملكة العربية السعودية',
    locale: 'ar_SA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <body className="font-arabic antialiased">
        {children}
      </body>
    </html>
  )
}


