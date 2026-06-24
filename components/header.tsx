"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, Moon, Sun, X } from "lucide-react"

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
  const [theme, setTheme] = useState<"dark" | "cream">("dark")

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")
    const nextTheme = savedTheme === "cream" ? "cream" : "dark"

    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    setTheme(nextTheme)
  }, [])

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

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "cream" : "dark"

    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    window.localStorage.setItem("theme", nextTheme)
    setTheme(nextTheme)
  }

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
          ? "border-b border-border/70 bg-background/85 shadow-[0_16px_40px_-32px_rgba(0,0,0,0.75)] backdrop-blur-xl"
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
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
            aria-label="Go to Suwarna Pyakurel homepage section"
          >
            <span className="grid size-7 place-items-center rounded-md border border-border/80 bg-card/70 text-xs text-primary shadow-sm transition-colors group-hover:border-primary/40">
              SP
            </span>
            <span>Suwarna Pyakurel</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-card/45 p-1 shadow-sm backdrop-blur">
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
                  "rounded-full px-3.5 py-1.5 text-sm transition-all",
                  activeSection === item.href.slice(1)
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-accent/70 hover:text-foreground",
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="border border-border/70 bg-card/45 text-muted-foreground hover:text-foreground"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to cream mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Cream mode" : "Dark mode"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden border border-border/70 bg-card/45"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 pt-2">
            <div className="flex flex-col gap-1">
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
                    "rounded-md px-3 py-2 text-left text-sm transition-colors",
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
