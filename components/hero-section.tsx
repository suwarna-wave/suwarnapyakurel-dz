"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/suwarna-wave", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/suwarnapyakurel", icon: Linkedin },
  { name: "Email", href: "mailto:suwarnapyakurel5@gmail.com", icon: Mail },
]

const focusAreas = [
  "SAP Consulting",
  "PR Strategy",
  "Outreach Management",
  "Scientific ML",
  "Robotics & IoT",
  "Go · Exploring",
]

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-y-0 right-0 hidden w-[49%] bg-black lg:block" />
      <div className="absolute inset-y-0 left-[45%] hidden w-32 -skew-x-[9deg] bg-black lg:block" />

      <div className="section-container relative flex min-h-[calc(100vh-4rem)] items-center py-14 lg:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative z-10 max-w-2xl">
            <p className="mono-label text-muted-foreground">Hello, I am</p>
            <h1 className="mt-8 text-5xl font-black leading-[0.94] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
              Suwarna
              <br />
              Pyakurel.
            </h1>
            <p className="mt-5 text-lg font-semibold text-muted-foreground sm:text-xl">
              SAP Consultant · Strategic PR & Outreach Lead
              <span className="mt-1 block">Scientific ML · Robotics</span>
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              SAP consultant and engineering undergraduate with 2.5+ years of experience leading strategic PR,
              outreach, partnerships, and stakeholder communication for technology, education, and research initiatives.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => scrollToSection("#projects")} className="h-11 rounded-none px-6">
                Explore my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-none bg-transparent px-6"
                onClick={() => window.open(getAssetPath("/Suwarna_Pyakurel_CV.pdf"), "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="grid h-10 w-10 place-items-center border border-border bg-secondary text-foreground shadow-[3px_3px_0_#111] transition-transform hover:-translate-y-0.5"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative z-10 -mx-5 bg-black px-5 py-14 text-white sm:-mx-8 sm:px-8 lg:mx-0 lg:bg-transparent lg:p-0">
            <div className="mx-auto max-w-md">
              <div className="mb-8 flex items-end justify-between border-b border-white/20 pb-4">
                <span className="mono-label text-white/50">Consulting · Strategy · Engineering</span>
                <span className="font-mono text-xs text-white/50">NP</span>
              </div>

              <div className="relative overflow-hidden border border-white/15 bg-white/5">
                <Image
                  src={getAssetPath("/suwarna-pyakurel.png")}
                  alt="Suwarna Pyakurel at ICRTAI"
                  width={747}
                  height={1024}
                  priority
                  className="h-[430px] w-full object-cover object-top sm:h-[500px] lg:h-[430px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent px-5 pb-5 pt-20">
                  <p className="text-xl font-bold tracking-[-0.025em]">Strategy backed by technical understanding.</p>
                  <p className="mt-2 max-w-sm text-xs leading-5 text-white/65">
                    Managing people, partnerships, and communication while staying close to engineering and research.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 border-l border-t border-white/20">
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="border-b border-r border-white/20 px-4 py-4"
                  >
                    <span className="font-mono text-[0.62rem] text-white/35">0{index + 1}</span>
                    <p className="mt-2 text-xs font-medium text-white/85">{area}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("#contact")}
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white"
              >
                Start a conversation
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
