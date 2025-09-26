"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Home,
  Wrench,
  GraduationCap,
  FolderOpen,
  User,
  Star,
  Rocket,
  Download,
  Settings,
  Expand,
  ChevronUp,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Skills", href: "#about", icon: Wrench },
  { name: "Education", href: "#experience", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Profile", href: "#about", icon: User },
  { name: "Favorites", href: "#projects", icon: Star },
  { name: "Launch", href: "#contact", icon: Rocket },
  { name: "Download", href: "#", icon: Download },
  { name: "Settings", href: "#", icon: Settings },
  { name: "Expand", href: "#", icon: Expand },
]

export function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollUp, setShowScrollUp] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 200

      // Show scroll up button when not at top
      setShowScrollUp(window.scrollY > 300)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    console.log("[v0] Attempting to scroll to:", href)

    if (href === "#") {
      console.log("[v0] Empty href, skipping scroll")
      return
    }

    const element = document.querySelector(href)
    console.log("[v0] Found element:", element)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
      console.log("[v0] Scrolling to element:", href)
    } else {
      console.log("[v0] Element not found for:", href)
    }
  }

  const scrollToTop = () => {
    console.log("[v0] Scrolling to top")
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    console.log("[v0] Attempting to download CV")
    try {
      const link = document.createElement("a")
      link.href = "/Suwarna_Pyakurel_CV.pdf"
      link.download = "Suwarna_Pyakurel_CV.pdf"
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      console.log("[v0] CV download initiated")
    } catch (error) {
      console.error("[v0] Error downloading CV:", error)
    }
  }

  const handleNavClick = (item: (typeof navItems)[0], event: React.MouseEvent) => {
    console.log("[v0] Navigation clicked:", item.name, item.href)

    event.preventDefault()
    event.stopPropagation()

    if (item.name === "Download") {
      downloadCV()
    } else if (item.href && item.href !== "#") {
      scrollToSection(item.href)
    }
  }

  return (
    <>
      {!showScrollUp && (
        <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
          <div className="text-center animate-fade-in">
            <p className="text-white/70 text-sm mb-2 font-medium">Scroll Down</p>
            <ChevronUp className="w-5 h-5 text-white/70 mx-auto animate-bounce rotate-180" />
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-slate-900/30 backdrop-blur-xl border border-white/20 rounded-full px-4 py-3 shadow-2xl">
          <div className="flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.href.slice(1)

              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="icon"
                  onClick={(e) => handleNavClick(item, e)}
                  className={cn(
                    "w-12 h-12 rounded-full transition-all duration-300 hover:scale-110",
                    "border border-transparent hover:border-white/30",
                    "backdrop-blur-sm cursor-pointer pointer-events-auto",
                    isActive
                      ? "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white",
                  )}
                  title={item.name}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollUp && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-600/80 hover:to-purple-600/80 text-white shadow-lg shadow-blue-500/25 backdrop-blur-sm border border-white/20 z-50 transition-all duration-300 hover:scale-110 pointer-events-auto"
          size="icon"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </>
  )
}
