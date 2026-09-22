import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

import projectData from "@/content/projects.json"
import profile from "@/content/profile.json"
import { resolveContentIcon } from "@/components/content-icons"
const projects = projectData.filter((item) => item.selected).map((item) => ({ ...item, icon: resolveContentIcon(item.icon) }))

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
            <a href={profile.socialLinks[0].href} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              github.com/suwarna-wave
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
