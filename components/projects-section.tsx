"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ExternalLink, Github, Calendar, MapPin, Cpu, Database, TrendingUp } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

const projects = [
  {
    title: "IoT Based Smart Agriculture",
    description:
      "Smart Farming System tailored to cater problems of diverse landscape of Nepal. Automating and structuring a new concept of Agriculture.",
    longDescription:
      "Developed an innovative IoT solution addressing Nepal's unique agricultural challenges through automation and smart monitoring systems.",
    period: "Apr 2023 - May 2023",
    organization: "Robotics Association Nepal",
    location: "Kathmandu",
    category: "IoT & Agriculture",
    technologies: ["IoT", "Arduino", "Sensors", "Agriculture", "Automation"],
    features: [
      "Automated irrigation system based on soil moisture",
      "Real-time environmental monitoring",
      "Mobile app for remote farm management",
      "Weather-based crop recommendations",
    ],
    icon: Cpu,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    image: "/smart-agriculture-iot-system-with-sensors.jpg",
  },
  {
    title: "Travelling Salesman Problem Visualization",
    description:
      "Interactive visualization of TSP solutions using various algorithms and path optimization techniques using Python and Pygame.",
    longDescription:
      "Built an educational tool to visualize different TSP algorithms, helping students understand optimization concepts through interactive demonstrations.",
    period: "Feb 2025",
    organization: "IOE Purwanchal Campus",
    location: "Dharan, Nepal",
    category: "Algorithm Visualization",
    technologies: ["Python", "Pygame", "Algorithms", "Visualization", "DSA"],
    features: [
      "Multiple algorithm implementations (Brute Force, Genetic, Simulated Annealing)",
      "Real-time path visualization",
      "Performance comparison metrics",
      "Interactive city placement",
    ],
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    image: "/traveling-salesman-problem-visualization-graph.jpg",
  },
  {
    title: "Study Tracker",
    description:
      "A Django-based application to help students track their study progress across different subjects and units with visual progress representation.",
    longDescription:
      "Comprehensive study management system with progress tracking, file uploads, and personalized learning analytics.",
    period: "Feb 2025",
    organization: "Personal Project",
    location: "Dharan, Nepal",
    category: "Web Application",
    technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "SQLite"],
    features: [
      "Subject management with exam date tracking",
      "Unit-wise progress tracking",
      "Visual progress charts and analytics",
      "File upload support for syllabus",
      "User authentication and profiles",
    ],
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    image: "/study-tracker-dashboard-with-progress-charts.jpg",
  },
  {
    title: "Personalized Budget Tracker",
    description:
      "A sleek, user-friendly desktop application to manage finances with style and precision using Python with modern GUI.",
    longDescription:
      "Desktop financial management tool with intuitive transaction management, data visualization, and comprehensive reporting features.",
    period: "Mar 2025",
    organization: "Personal Project",
    location: "Dharan, Nepal",
    category: "Desktop Application",
    technologies: ["Python", "Tkinter", "Data Visualization", "Finance", "GUI"],
    features: [
      "Income and expense tracking",
      "Spending pattern analysis",
      "Category-wise budget allocation",
      "Export functionality for reports",
      "Modern and intuitive interface",
    ],
    icon: TrendingUp,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    image: "/budget-tracker-desktop-application-interface.jpg",
  },
  {
    title: "Library Management System",
    description:
      "Object-oriented C++ application for efficient library resource management and book tracking with comprehensive features.",
    longDescription:
      "Full-featured library management system built with C++ demonstrating object-oriented programming principles and database management.",
    period: "Mar 2024",
    organization: "IOE Purwanchal Campus",
    location: "Dharan, Nepal",
    category: "System Software",
    technologies: ["C++", "OOP", "File Management", "Data Structures"],
    features: [
      "Book inventory management",
      "Member registration and tracking",
      "Issue and return processing",
      "Fine calculation system",
      "Search and filter functionality",
    ],
    icon: Database,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    image: "/library-management-system-interface.jpg",
  },
  {
    title: "Bank Management System",
    description:
      "A comprehensive C-based banking system with account management, transactions, and secure data handling capabilities.",
    longDescription:
      "Secure banking application demonstrating system programming concepts with account management and transaction processing.",
    period: "Jan 2024",
    organization: "IOE Purwanchal Campus",
    location: "Dharan, Nepal",
    category: "System Software",
    technologies: ["C Programming", "File I/O", "Data Security", "System Design"],
    features: [
      "Account creation and management",
      "Secure transaction processing",
      "Balance inquiry and statements",
      "Data encryption and security",
      "Multi-user support",
    ],
    icon: Database,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    image: "/bank-management-system-terminal-interface.jpg",
  },
]

const categories = [
  "All",
  "IoT & Agriculture",
  "Web Application",
  "Desktop Application",
  "System Software",
  "Algorithm Visualization",
  "Entertainment App",
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of innovative projects spanning IoT, web development, system programming, and creative
            applications. Each project demonstrates technical expertise and problem-solving skills.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 glass-card border-blue-500/20 animate-fade-in-up hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image ? getAssetPath(project.image) : getAssetPath("/placeholder.svg")}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                    <div className={`p-2 rounded-lg ${project.bgColor} hover-glow`}>
                      <project.icon className={`h-4 w-4 lg:h-5 lg:w-5 ${project.color}`} />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                    <Badge variant="secondary" className="text-xs hover:scale-105 transition-transform">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4 lg:p-6">
                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="line-clamp-2">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs hover:scale-105 transition-transform magnetic"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs bg-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 magnetic"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="px-3 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 magnetic"
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always excited to work on innovative projects that make a positive impact. Let's discuss how we can
              create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 magnetic"
              >
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://github.com/suwarna-wave", "_blank")}
                className="group hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 magnetic"
              >
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
