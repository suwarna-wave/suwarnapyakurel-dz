"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ExternalLink, Facebook, Instagram } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { getAssetPath } from "@/lib/utils"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  const roles = ["Undergraduate Engineer", "Research Enthusiast", "Robotics Developer", "Outreach and PR Strategy"]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/suwarna-wave",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/suwarnapyakurel",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/pyakurel.suwarna",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pyakurel.suwarna/",
      icon: Instagram,
    },
    {
      name: "Email",
      href: "mailto:suwarnapyakurel5@gmail.com",
      icon: Mail,
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ cursor: "default" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000"
          style={{
            right: typeof window !== "undefined" ? `${(window.innerWidth - mousePosition.x) * 0.01}px` : "0px",
            bottom: typeof window !== "undefined" ? `${(window.innerHeight - mousePosition.y) * 0.01}px` : "0px",
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-gradient"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <p className="text-primary font-medium text-base lg:text-lg animate-fade-in-up">Hello, I'm</p>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-foreground">SUWARNA</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  PYAKUREL
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-3">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-muted-foreground min-h-[2rem] flex items-center">
                  <span
                    key={currentRoleIndex}
                    className="animate-fade-in-up bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  >
                    {roles[currentRoleIndex]}
                  </span>
                </h2>
                <Badge variant="secondary" className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Nepal
                </Badge>
              </div>
            </div>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              I craft innovative solutions in <span className="text-blue-400 font-medium">AI</span>,{" "}
              <span className="text-purple-400 font-medium">robotics</span>, and{" "}
              <span className="text-cyan-400 font-medium">astronomy</span> with a passion for creating impactful
              technology that bridges the gap between science and society.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {[
                { name: "Python", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
                { name: "C++", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
                { name: "AI/ML", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
                { name: "Robotics", color: "bg-green-500/20 text-green-300 border-green-500/30" },
                { name: "IoT", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
                { name: "Astronomy", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
              ].map((skill) => (
                <Badge
                  key={skill.name}
                  className={`text-xs ${skill.color} hover:scale-105 transition-transform cursor-pointer`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 animate-glow"
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(getAssetPath("/Suwarna_Pyakurel_CV.pdf"), "_blank")
                  }
                }}
                className="group w-full sm:w-auto border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary transition-all duration-300 hover:scale-110 hover:bg-white/10"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/30 animate-float relative transition-all duration-300 hover:scale-105"
                style={{
                  transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
                }}
              >
                <img
                  src={getAssetPath("/professional-headshot-of-young-engineering-student.png")}
                  alt="Suwarna Pyakurel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-glow"></div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 lg:w-16 lg:h-16 bg-purple-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-cyan-500/30 rounded-full blur-md animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 lg:mt-20">
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
