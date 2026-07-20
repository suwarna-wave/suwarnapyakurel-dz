import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const siteUrl = "https://suwarnapyakurel.com.np"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Suwarna Pyakurel",
      url: siteUrl,
      image: `${siteUrl}/suwarna-pyakurel.png`,
      email: "mailto:suwarnapyakurel5@gmail.com",
      telephone: "+9779840036060",
      jobTitle: "SAP Consultant and Strategic PR & Outreach Lead",
      description:
        "SAP consultant with 2.5+ years in strategic PR and outreach management, supported by an engineering background in Scientific ML, robotics, IoT, and signal analysis.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Biratnagar",
        addressRegion: "Koshi Province",
        addressCountry: "NP",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Tribhuwan University, IOE Purwanchal Campus",
      },
      knowsAbout: [
        "SAP consulting",
        "Strategic public relations",
        "Outreach management",
        "Stakeholder communication",
        "Robotics",
        "Go programming",
        "Machine learning",
        "Medical AI",
        "Explainable AI",
        "Signal processing",
        "Vibration signal analysis",
        "Predictive maintenance",
        "IoT systems",
        "SAP ERP",
      ],
      sameAs: [
        "https://github.com/suwarna-wave",
        "https://linkedin.com/in/suwarnapyakurel",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Suwarna Pyakurel",
      description:
        "Portfolio for Suwarna Pyakurel covering SAP consulting, strategic PR and outreach management, engineering, Scientific ML, robotics, and projects.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: "Suwarna Pyakurel - SAP Consultant & Strategic Outreach",
      about: {
        "@id": `${siteUrl}/#person`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/suwarna-pyakurel.png`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#selected-projects`,
      name: "Selected projects by Suwarna Pyakurel",
      itemListElement: [
        {
          "@type": "SoftwareSourceCode",
          position: 1,
          name: "Explainable Deep Learning Framework for Pneumonia Detection",
          description:
            "Pneumonia detection and severity classification research workflow using chest X-rays and explainable AI.",
          programmingLanguage: "Python",
          codeRepository: "https://github.com/suwarna-wave/Minor-Project-Pneumonia",
          author: {
            "@id": `${siteUrl}/#person`,
          },
        },
        {
          "@type": "SoftwareSourceCode",
          position: 2,
          name: "Motor Vibration Fault Detector",
          description:
            "Predictive maintenance system for vibration sensor data using FFT-based feature extraction and fault classification.",
          programmingLanguage: "Python",
          codeRepository: "https://github.com/suwarna-wave/motor-vibration-fault-detector",
          author: {
            "@id": `${siteUrl}/#person`,
          },
        },
        {
          "@type": "SoftwareSourceCode",
          position: 3,
          name: "Markdown PDF Studio",
          description:
            "Desktop Markdown editor with live GitHub-flavored preview and A4 PDF export for low-resource environments.",
          programmingLanguage: "Python",
          codeRepository: "https://github.com/suwarna-wave/markdown-pdf",
          author: {
            "@id": `${siteUrl}/#person`,
          },
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
