import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = "https://suwarnapyakurel.com.np"
const siteTitle = "Suwarna Pyakurel - SAP Consultant & Strategic Outreach"
const siteDescription =
  "Portfolio of Suwarna Pyakurel — SAP consultant with 2.5+ years in strategic PR and outreach management, supported by an engineering background in Scientific ML, robotics, and IoT."

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
    "SAP Consultant",
    "Strategic PR",
    "Outreach Management",
    "Stakeholder Management",
    "Scientific Machine Learning",
    "Robotics",
    "Go Programming",
    "Machine Learning",
    "Medical AI",
    "Explainable AI",
    "Signal Processing",
    "Vibration Signal Analysis",
    "Predictive Maintenance",
    "IoT",
    "SAP ERP",
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
        url: "/suwarna-pyakurel.png",
        width: 747,
        height: 1024,
        alt: "Suwarna Pyakurel",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/suwarna-pyakurel.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
