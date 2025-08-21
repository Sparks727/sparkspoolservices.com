import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { StructuredData } from "@/components/structured-data"

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
  title: {
    default: "Sparks Pool Services | Professional Pool Cleaning Pinellas County FL",
    template: "%s | Sparks Pool Services"
  },
  description:
    "Veteran-owned pool cleaning services in Pinellas County, Florida. Professional residential & commercial pool maintenance, deep scrub cleaning. Licensed, insured, 24/7 emergency response. Free quotes!",
  keywords: "pool cleaning pinellas county, pool service florida, veteran owned pool service, residential pool cleaning, commercial pool maintenance, deep scrub cleaning, pool cleaning largo, pool cleaning clearwater, pool cleaning st petersburg, pool cleaning seminole, pool cleaning pinellas park",
  authors: [{ name: "Sparks Pool Services" }],
  creator: "Sparks Pool Services",
  publisher: "Sparks Pool Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sparkspoolservices.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/logo1.ico?v=2', type: 'image/x-icon' },
      { url: '/logo1.webp?v=2', type: 'image/webp' },
    ],
    apple: '/logo1.webp?v=2',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <head>
        <StructuredData />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1WLPNXGB80"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1WLPNXGB80');
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
