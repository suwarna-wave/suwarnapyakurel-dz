import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AnaisPopup } from "@/components/anais-popup"
import { Reveal } from "@/components/reveal"
import { IntroScreen } from "@/components/intro-screen"

import { structuredData } from "@/lib/structured-data"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <IntroScreen />
      <Header />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <Reveal><ProjectsSection /></Reveal>
        <Reveal><AboutSection /></Reveal>
        <Reveal><ExperienceSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
        <Footer />
      </main>
      <AnaisPopup />
    </>
  )
}
