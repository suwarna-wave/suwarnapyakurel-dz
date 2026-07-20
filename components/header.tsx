"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, Moon, SlidersHorizontal, Sun, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

type ThemeMode = "normal" | "dark"

function applyAppearance(mode: ThemeMode, intensity: number) {
  const root = document.documentElement
  const amount = Math.max(0, Math.min(100, intensity))
  const setColor = (name: string, lightness: number) => {
    root.style.setProperty(name, `oklch(${lightness.toFixed(3)} 0.004 90)`)
  }

  root.classList.toggle("dark", mode === "dark")

  if (mode === "dark") {
    const background = 0.2 - amount * 0.00115
    setColor("--background", background)
    setColor("--card", background + 0.035)
    setColor("--popover", background + 0.035)
    setColor("--secondary", background + 0.075)
    setColor("--muted", background + 0.075)
    setColor("--accent", background + 0.095)
    setColor("--border", background + 0.14)
    setColor("--input", background + 0.105)
    setColor("--foreground", 0.95)
    setColor("--card-foreground", 0.95)
    setColor("--popover-foreground", 0.95)
    setColor("--primary", 0.93)
    setColor("--primary-foreground", 0.12)
    setColor("--secondary-foreground", 0.92)
    setColor("--muted-foreground", 0.68)
    setColor("--accent-foreground", 0.95)
    setColor("--ring", 0.75)
  } else {
    const background = 0.9 + amount * 0.00075
    setColor("--background", background)
    setColor("--card", Math.min(0.995, background + 0.022))
    setColor("--popover", Math.min(0.995, background + 0.022))
    setColor("--secondary", background - 0.045)
    setColor("--muted", background - 0.045)
    setColor("--accent", background - 0.07)
    setColor("--border", background - 0.13)
    setColor("--input", background - 0.11)
    setColor("--foreground", 0.145)
    setColor("--card-foreground", 0.145)
    setColor("--popover-foreground", 0.145)
    setColor("--primary", 0.17)
    setColor("--primary-foreground", 0.985)
    setColor("--secondary-foreground", 0.2)
    setColor("--muted-foreground", 0.46)
    setColor("--accent-foreground", 0.17)
    setColor("--ring", 0.2)
  }
}

export function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [appearanceOpen, setAppearanceOpen] = useState(false)
  const [themeMode, setThemeMode] = useState<ThemeMode>("normal")
  const [intensity, setIntensity] = useState(80)

  useEffect(() => {
    const savedMode = window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "normal"
    const savedIntensity = Number(window.localStorage.getItem("portfolio-intensity"))
    const nextIntensity = Number.isFinite(savedIntensity) && savedIntensity >= 0 ? savedIntensity : 80

    setThemeMode(savedMode)
    setIntensity(nextIntensity)
    applyAppearance(savedMode, nextIntensity)
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileOpen(false)
  }

  const updateTheme = (mode: ThemeMode) => {
    setThemeMode(mode)
    applyAppearance(mode, intensity)
    window.localStorage.setItem("portfolio-theme", mode)
  }

  const updateIntensity = (value: number) => {
    setIntensity(value)
    applyAppearance(themeMode, value)
    window.localStorage.setItem("portfolio-intensity", String(value))
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

          <div className="relative flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg border border-border bg-background"
              onClick={() => setAppearanceOpen((open) => !open)}
              aria-label="Open appearance controls"
              aria-expanded={appearanceOpen}
            >
              {themeMode === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg border border-border bg-background md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {appearanceOpen && (
              <div className="absolute right-0 top-12 w-64 rounded-xl border border-border bg-popover p-4 text-popover-foreground shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <p className="text-sm font-semibold">Appearance</p>
                </div>

                <div className="grid grid-cols-2 overflow-hidden rounded-lg border border-border">
                  <button
                    onClick={() => updateTheme("normal")}
                    className={cn(
                      "flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium transition-colors",
                      themeMode === "normal" ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                    )}
                  >
                    <Sun className="h-3.5 w-3.5" />
                    Normal
                  </button>
                  <button
                    onClick={() => updateTheme("dark")}
                    className={cn(
                      "flex items-center justify-center gap-2 border-l border-border px-3 py-2 text-xs font-medium transition-colors",
                      themeMode === "dark" ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                    )}
                  >
                    <Moon className="h-3.5 w-3.5" />
                    Dark
                  </button>
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="theme-intensity" className="text-xs font-medium">
                      {themeMode === "dark" ? "Dark intensity" : "Light intensity"}
                    </label>
                    <span className="font-mono text-[0.65rem] text-muted-foreground">{intensity}%</span>
                  </div>
                  <input
                    id="theme-intensity"
                    type="range"
                    min="0"
                    max="100"
                    value={intensity}
                    onChange={(event) => updateIntensity(Number(event.target.value))}
                    className="h-1.5 w-full cursor-pointer accent-foreground"
                  />
                  <div className="mt-2 flex justify-between font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                    <span>Soft</span>
                    <span>Strong</span>
                  </div>
                </div>
              </div>
            )}
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
