import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Pool Cleaning Services in Largo, Clearwater, Seminole, FL | Sparks Pool Services",
  description:
    "Professional pool cleaning services in Largo, Clearwater, Seminole, Pinellas Park, St. Petersburg, and Indian Rocks Beach, FL. Veteran-owned pool service company with 5-star ratings. Call (727) 234-4023 for free quotes.",
  keywords: "pool cleaning largo fl, pool service clearwater florida, pool maintenance seminole fl, pool cleaning pinellas park, pool service st petersburg fl, veteran owned pool service, crystal clear pools florida",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: '/favicon3.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-filled.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
