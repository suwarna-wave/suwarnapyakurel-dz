import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Suwarna Pyakurel — ML Research & Signal Analysis",
  description:
    "Portfolio of Suwarna Pyakurel — engineering student and ML researcher focused on medical AI, vibration signal analysis, and research-oriented machine learning.",
  keywords: [
    "Suwarna Pyakurel",
    "Machine Learning",
    "Medical AI",
    "Signal Processing",
    "Engineering",
    "Nepal",
    "Research",
  ],
  authors: [{ name: "Suwarna Pyakurel" }],
  creator: "Suwarna Pyakurel",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  openGraph: {
    title: "Suwarna Pyakurel — ML Research & Signal Analysis",
    description:
      "Engineering student building research-oriented ML systems in medical imaging and signal analysis.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suwarna Pyakurel — ML Research & Signal Analysis",
    description:
      "Engineering student building research-oriented ML systems in medical imaging and signal analysis.",
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
