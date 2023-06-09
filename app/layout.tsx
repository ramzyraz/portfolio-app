import './globals.css'
import { Inter } from 'next/font/google'
import { siteData } from '@/data/site'
import MainNav from '@/components/nav/main-nav'
import Footer from '@/components/footer'
import ScrollTop from '@/components/scroll-top'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteData.name,
  description: siteData.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: siteData.name,
      url: siteData.url,
    },
  ],
  creator: siteData.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        {children}
        <ScrollTop />
        <Footer />
      </body>
    </html>
  )
}
