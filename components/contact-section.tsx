"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send, MessageCircle, Clock, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "suwarnapyakurel5@gmail.com",
    href: "mailto:suwarnapyakurel5@gmail.com",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977-9840036060",
    href: "tel:+9779840036060",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Biratnagar, Nepal",
    href: "https://maps.google.com/?q=Biratnagar,Nepal",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@suwarna-wave",
    href: "https://github.com/suwarna-wave",
    color: "text-gray-600",
    bgColor: "bg-gray-600/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "suwarnapyakurel",
    href: "https://linkedin.com/in/suwarnapyakurel",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "suwarna-wave.github.io",
    href: "https://suwarna-wave.github.io/suwarnapyakurel/",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
]

const availability = [
  "Open to internship opportunities",
  "Available for freelance projects",
  "Interested in research collaborations",
  "Speaking engagements welcome",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoLink = `mailto:suwarnapyakurel5@gmail.com?subject=${subject}&body=${body}`

      // Open email client
      window.location.href = mailtoLink

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 3000)
    } catch (error) {
      console.error("Error sending email:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply connect with
            fellow tech enthusiasts. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Contact Information</h3>
              <div className="space-y-3 lg:space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-3 lg:p-4 hover:shadow-md transition-all duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 lg:gap-4 group"
                      >
                        <div className={`p-2 lg:p-3 rounded-lg ${contact.bgColor}`}>
                          <contact.icon className={`h-4 w-4 lg:h-5 lg:w-5 ${contact.color}`} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium group-hover:text-primary transition-colors text-sm lg:text-base">
                            {contact.label}
                          </p>
                          <p className="text-xs lg:text-sm text-muted-foreground truncate">{contact.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Social Links</h3>
              <div className="space-y-3 lg:space-y-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="p-3 lg:p-4 hover:shadow-md transition-all duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 lg:gap-4 group"
                      >
                        <div className={`p-2 lg:p-3 rounded-lg ${social.bgColor}`}>
                          <social.icon className={`h-4 w-4 lg:h-5 lg:w-5 ${social.color}`} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium group-hover:text-primary transition-colors text-sm lg:text-base">
                            {social.label}
                          </p>
                          <p className="text-xs lg:text-sm text-muted-foreground truncate">{social.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Availability</h3>
              <Card className="p-3 lg:p-4">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-3 lg:mb-4">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-500">Currently Available</span>
                  </div>
                  <div className="space-y-2">
                    {availability.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 lg:p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                  <h3 className="text-lg lg:text-xl font-semibold">Send Me a Message</h3>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 lg:py-12">
                    <CheckCircle className="h-12 w-12 lg:h-16 lg:w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-lg lg:text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      Your email client should open shortly. Thank you for reaching out!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, idea, or just say hello..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Preparing Email...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      This will open your email client with the message pre-filled. I typically respond within 24-48
                      hours.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 lg:mt-16 text-center">
          <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Quick Actions</h3>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 lg:gap-4">
            <Button
              variant="outline"
              onClick={() => window.open("mailto:suwarnapyakurel5@gmail.com", "_blank")}
              className="group hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Email Me Directly
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://linkedin.com/in/suwarnapyakurel", "_blank")}
              className="group hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Connect on LinkedIn
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("tel:+9779840036060", "_blank")}
              className="group hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
