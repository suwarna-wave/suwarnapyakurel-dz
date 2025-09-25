import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Suwarna Pyakurel - Engineering Student & Tech Enthusiast",
  description:
    "Portfolio of Suwarna Pyakurel - Undergraduate Engineering Student specializing in Electronics, Communication, and Information Engineering with expertise in AI, Robotics, and Astronomy.",
  generator: "v0.app",
  keywords: ["Suwarna Pyakurel", "Engineering Student", "AI", "Robotics", "Astronomy", "Nepal", "Portfolio"],
  authors: [{ name: "Suwarna Pyakurel" }],
  creator: "Suwarna Pyakurel",
  openGraph: {
    title: "Suwarna Pyakurel - Engineering Student & Tech Enthusiast",
    description: "Portfolio showcasing projects in AI, Robotics, and Astronomy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suwarna Pyakurel - Engineering Student & Tech Enthusiast",
    description: "Portfolio showcasing projects in AI, Robotics, and Astronomy",
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
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
