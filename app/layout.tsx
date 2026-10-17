import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import profile from "@/content/profile.json"
const siteUrl = profile.siteUrl
const siteTitle = profile.siteTitle
const siteDescription = profile.summary

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Suwarna Pyakurel",
  },
  description: siteDescription,
  keywords: [profile.name, "Engineering", "Software", "Technical Leadership", ...profile.researchInterests],
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
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
    icon: [{ url: "/favicon-green.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: profile.name,
    images: [
      {
        url: profile.portrait,
        width: 444,
        height: 440,
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
    images: [profile.portrait],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
