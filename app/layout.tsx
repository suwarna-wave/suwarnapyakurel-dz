import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = "https://suwarnapyakurel.com.np"
const siteTitle = "Suwarna Pyakurel - ML Research & Signal Analysis"
const siteDescription =
  "Portfolio of Suwarna Pyakurel, an electronics engineering student and ML researcher in Nepal focused on medical AI, vibration signal analysis, IoT, and research-oriented machine learning."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Suwarna Pyakurel",
  },
  description: siteDescription,
  keywords: [
    "Suwarna Pyakurel",
    "Suwarna Pyakurel portfolio",
    "Machine Learning",
    "Medical AI",
    "Explainable AI",
    "Signal Processing",
    "Vibration Signal Analysis",
    "Predictive Maintenance",
    "IoT",
    "Engineering",
    "Nepal",
    "Research",
    "Electronics Communication and Information Engineering",
  ],
  authors: [{ name: "Suwarna Pyakurel" }],
  creator: "Suwarna Pyakurel",
  publisher: "Suwarna Pyakurel",
  applicationName: "Suwarna Pyakurel Portfolio",
  alternates: {
    canonical: "/",
  },
  category: "portfolio",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Suwarna Pyakurel",
    images: [
      {
        url: "/professional-headshot-of-young-engineering-student.png",
        width: 640,
        height: 800,
        alt: "Suwarna Pyakurel, engineering student and ML researcher",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/professional-headshot-of-young-engineering-student.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
