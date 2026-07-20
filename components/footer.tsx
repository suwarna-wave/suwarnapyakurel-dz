"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/suwarna-wave", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/suwarnapyakurel", icon: Linkedin },
  { name: "Email", href: "mailto:suwarnapyakurel5@gmail.com", icon: Mail },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-medium text-white">Suwarna Pyakurel</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/50">
              SAP consultant and strategic PR & outreach lead, grounded in engineering and research.
            </p>
            <div className="flex items-center gap-2 mt-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="icon" asChild className="h-8 w-8 text-white/60 hover:bg-white/10 hover:text-white">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Navigation</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Contact</p>
            <div className="space-y-1 text-sm text-white/50">
              <p>Biratnagar, Nepal</p>
              <p>suwarnapyakurel5@gmail.com</p>
              <p>+977-9840036060</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Suwarna Pyakurel</p>
          <Button variant="ghost" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xs text-white/60 hover:bg-white/10 hover:text-white">
            <ArrowUp className="h-3.5 w-3.5 mr-1.5" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
