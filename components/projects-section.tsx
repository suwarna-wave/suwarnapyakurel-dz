import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Activity, FileText, Cpu, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Project = {
  title: string
  description: string
  period: string
  category: string
  technologies: string[]
  highlights: string[]
  icon: LucideIcon
  featured?: boolean
  github?: string
}

const projects: Project[] = [
  {
    title: "Explainable Deep Learning Framework for Pneumonia Detection",
    description:
      "Minor project focused on pneumonia detection and severity classification using chest X-rays, with explainability as a core design goal.",
    period: "2026",
    category: "Medical AI",
    technologies: ["Python", "Deep Learning", "Chest X-rays", "Explainable AI", "Classification"],
    highlights: [
      "Chest X-ray based pneumonia detection pipeline",
      "Severity classification with explainability focus",
      "Full title: Explainable Deep Learning Framework for Pneumonia Detection and Severity Classification using Chest X-rays",
      "Designed as an interpretable medical AI research workflow",
    ],
    icon: Activity,
    featured: true,
    github: "https://github.com/suwarna-wave/Minor-Project-Pneumonia",
  },
  {
    title: "Motor Vibration Fault Detector",
    description:
      "Predictive maintenance system that analyzes vibration sensor data using FFT-based feature extraction to detect imbalance, misalignment, and bearing faults in rotating machinery.",
    period: "2025",
    category: "Signal Analysis",
    technologies: ["Python", "NumPy", "FFT", "Feature Engineering", "Diagnostics"],
    highlights: [
      "Time and frequency-domain feature extraction (RMS, kurtosis, crest factor)",
      "Automated fault classification with health scoring (0–100)",
      "22 passing tests with visualization pipeline",
    ],
    icon: Activity,
    github: "https://github.com/suwarna-wave/motor-vibration-fault-detector",
  },
  {
    title: "Markdown PDF Studio",
    description:
      "Lightweight desktop Markdown editor with live GitHub-flavored preview and one-click A4 PDF export — built for low-resource environments.",
    period: "2026",
    category: "Developer Tool",
    technologies: ["Python", "PySide6", "markdown-it-py", "Qt WebEngine"],
    highlights: [
      "Split-pane editor with debounced live preview",
      "Syntax highlighting, footnotes, and safe HTML sanitization",
      "WYSIWYG PDF export via Qt print pipeline",
    ],
    icon: FileText,
    github: "https://github.com/suwarna-wave/markdown-pdf",
  },
  {
    title: "IoT Based Smart Agriculture",
    description:
      "Smart farming system designed for Nepal's diverse landscape — automating irrigation and environmental monitoring through sensor-driven IoT.",
    period: "Apr — May 2023",
    category: "IoT",
    technologies: ["Arduino", "Sensors", "IoT", "Automation"],
    highlights: [
      "Soil moisture-based automated irrigation",
      "Real-time environmental monitoring",
      "Remote farm management interface",
    ],
    icon: Cpu,
    github: "https://github.com/suwarna-wave/IOT-Based-Agriculture-System",
  },
  {
    title: "TSP Visualization",
    description:
      "Interactive visualization of Traveling Salesman Problem solutions using multiple optimization algorithms, built for algorithm education.",
    period: "Feb 2025",
    category: "Algorithms DSA",
    technologies: ["Python", "Pygame", "DSA", "Optimization"],
    highlights: [
      "Brute force, genetic, and simulated annealing implementations",
      "Real-time path visualization with performance metrics",
      "Interactive city placement for experimentation",
    ],
    icon: TrendingUp,
    github: "https://github.com/suwarna-wave/DSA-lab/blob/main/Projects/TSP.py",
  },
  {
    title: "AVL Tree Visualizer",
    description:
      "Algorithm visualization project for exploring AVL tree insertions, rotations, balancing behavior, and height-aware binary search tree operations.",
    period: "2025",
    category: "Algorithm DSA",
    technologies: ["Python", "Data Structures", "AVL Tree", "Visualization", "Algorithms"],
    highlights: [
      "Visualizes self-balancing binary search tree behavior",
      "Demonstrates AVL rotations and height updates",
      "Built as part of DSA lab algorithm exploration",
    ],
    icon: TrendingUp,
    github: "https://github.com/suwarna-wave/DSA-lab/blob/main/Projects/avltree.py",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/70 py-20 lg:py-24">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-kicker">03 / Selected work</p>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">
            Selected work spanning signal analysis, developer tooling, IoT systems, and algorithm visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={project.featured ? "polished-card md:col-span-2 border-foreground" : "polished-card"}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border border-border/70 bg-muted p-2">
                      <project.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium leading-snug text-foreground">{project.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{project.period}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="shrink-0 border border-border/60 bg-secondary/75 text-xs font-normal">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{project.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background/50 text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.github && (
                  <div className="mt-5 border-t border-border/70 pt-4">
                    <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5 mr-2" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3 ml-2 opacity-50" />
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card px-5 py-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-[0_18px_40px_-30px_rgba(0,0,0,0.45)]">
          <p className="text-sm text-muted-foreground mb-4">More projects and experiments on GitHub</p>
          <Button variant="outline" asChild>
            <a href="https://github.com/suwarna-wave" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              github.com/suwarna-wave
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
