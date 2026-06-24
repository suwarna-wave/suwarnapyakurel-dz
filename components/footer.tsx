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
    <footer className="border-t border-border/70 bg-background/80">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-medium text-foreground">Suwarna Pyakurel</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xs">
              Engineering student focused on medical AI, signal analysis, and research-oriented machine learning.
            </p>
            <div className="flex items-center gap-2 mt-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="icon" asChild className="h-8 w-8 text-muted-foreground">
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
                    className="quiet-link text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Contact</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Biratnagar, Nepal</p>
              <p>suwarnapyakurel5@gmail.com</p>
              <p>+977-9840036060</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Suwarna Pyakurel</p>
          <Button variant="ghost" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xs">
            <ArrowUp className="h-3.5 w-3.5 mr-1.5" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
