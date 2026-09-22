"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import navItems from "@/content/navigation.json"
import profile from "@/content/profile.json"
import { cn } from "@/lib/utils"

export function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)

  useEffect(() => {
    let preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
    try {
      const saved = localStorage.getItem("portfolio-theme")
      if (saved) preferred = saved === "dark"
    } catch { /* Appearance still works when browser storage is unavailable. */ }
    setDark(preferred)
    document.documentElement.classList.toggle("dark", preferred)

    const onScroll = () => {
      const sections = ["hero", ...navItems.map((item) => item.href.slice(1))]
      const current = sections.filter((id) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 150).pop()
      setActiveSection(current ?? "hero")
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false)
        if (header.current?.contains(document.activeElement)) menuButton.current?.focus()
      }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMobileOpen(false)
    }
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    try { localStorage.setItem("portfolio-theme", next ? "dark" : "normal") } catch { /* Session-only fallback. */ }
  }

  return (
    <header ref={header} className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="section-container flex h-20 items-center justify-between gap-4">
        <a href="#hero" aria-label={`${profile.name} — home`} className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-mono text-sm font-medium text-primary-foreground">sp.</span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
              className={cn("rounded-full px-4 py-2 text-xs font-medium transition-colors", activeSection === item.href.slice(1) ? "bg-secondary text-primary" : "text-muted-foreground hover:text-foreground")}>
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} className="header-icon-button grid">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="#contact" className="hidden items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-medium transition-colors hover:bg-secondary lg:flex">Let’s talk <ArrowUpRight className="h-3.5 w-3.5" /></a>
          <button ref={menuButton} onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-controls="mobile-navigation" aria-expanded={mobileOpen} className="header-icon-button grid md:hidden">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-4 md:hidden">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
              className="flex items-center justify-between rounded-lg px-3 py-4 text-base hover:bg-secondary">
              <span><span className="mr-4 font-mono text-xs text-muted-foreground">0{index + 1}</span>{item.name}</span><ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
