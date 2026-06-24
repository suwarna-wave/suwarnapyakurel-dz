"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Sparkles } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/suwarna-wave", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/suwarnapyakurel", icon: Linkedin },
  { name: "Email", href: "mailto:suwarnapyakurel5@gmail.com", icon: Mail },
]

const focusAreas = [
  "Medical AI",
  "Signal Processing",
  "Scientific ML",
  "Predictive Maintenance",
  "Robotics",
  "IoT",
]

const stats = [
  { value: "5+", label: "technical workshops and events organized" },
  { value: "400+", label: "students mentored" },
  { value: "ML", label: "current work and research direction" },
]

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-x-0 top-0 h-40 border-b border-border/50 bg-primary/[0.03]" />
      <div className="section-container relative w-full py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Biratnagar, Nepal
              <span className="h-1 w-1 rounded-full bg-border" />
              Scientific ML, Robotics and IoT, Research and Outreach
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Suwarna Pyakurel
            </h1>

            <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
              Engineering student building practical research systems.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I work across medical imaging, vibration signal analysis, and research-oriented machine learning,
              translating sensor data and models into outcomes that are useful, interpretable, and ready to explain.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area} variant="secondary" className="border border-border/60 bg-secondary/80 text-xs font-normal">
                  {area}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => scrollToSection("#projects")} className="w-full shadow-sm sm:w-auto">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="w-full bg-card/60 sm:w-auto"
                onClick={() => window.open(getAssetPath("/Suwarna_Pyakurel_CV.pdf"), "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="polished-card relative overflow-hidden rounded-lg border p-4">
              <div className="absolute inset-x-0 top-0 h-24 bg-primary/10" />
              <div className="relative overflow-hidden rounded-lg border border-border/70 bg-muted">
                <Image
                  src={getAssetPath("/professional-headshot-of-young-engineering-student.png")}
                  alt="Suwarna Pyakurel"
                  width={640}
                  height={800}
                  priority
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border/70 bg-background/55 p-3">
                    <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="relative mt-4 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/10 p-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Currently working in machine learning, with active focus on explainable medical AI and signal-analysis
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
