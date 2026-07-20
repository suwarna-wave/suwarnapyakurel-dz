"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)

      const sections = ["hero", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection("#hero")
            }}
            className="group flex items-center gap-2 text-sm font-bold tracking-tight text-foreground"
            aria-label="Go to Suwarna Pyakurel homepage section"
          >
            <span className="grid size-8 -skew-x-6 place-items-center border-2 border-foreground bg-background text-xs font-black text-foreground">
              SP
            </span>
            <span className="hidden sm:inline">Suwarna Pyakurel</span>
          </a>

          <nav
            className={cn(
              "hidden items-center gap-7 md:flex",
              !scrolled && "rounded-full bg-black/70 px-5 py-2 backdrop-blur",
            )}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(item.href)
                }}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                className={cn(
                  "text-xs font-semibold transition-colors",
                  activeSection === item.href.slice(1)
                    ? scrolled ? "text-foreground" : "text-white"
                    : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/65 hover:text-white",
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="border border-border bg-background"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="border-t border-border bg-background pb-4 pt-3 md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(item.href)
                  }}
                  aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                  className={cn(
                    "border-b border-border/60 px-3 py-3 text-left text-sm transition-colors",
                    activeSection === item.href.slice(1)
                      ? "text-primary font-medium bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
