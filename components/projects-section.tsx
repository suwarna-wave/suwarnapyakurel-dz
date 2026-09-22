import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

import projectData from "@/content/projects.json"
import { getProjectAnchor } from "@/lib/utils"
import profile from "@/content/profile.json"
import { resolveContentIcon } from "@/components/content-icons"
const projects = projectData.filter((item) => item.selected).map((item) => ({ ...item, icon: resolveContentIcon(item.icon) }))

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/70 py-20 lg:py-24">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-kicker">01 / Selected work</p>
          <h2 className="section-heading">Ideas put into practice.</h2>
          <p className="section-subheading">
            Research prototypes, useful software, and systems built for the real world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Card
              key={project.title}
              id={getProjectAnchor(project.title)}
              className={project.featured ? "polished-card featured-project md:col-span-2 scroll-mt-28" : "polished-card scroll-mt-28"}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border border-border/70 bg-muted p-2">
                      <project.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">{project.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{project.period}</p>
                      {project.credit && <p className="mt-1 text-xs text-muted-foreground">{project.credit}</p>}
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

                {(project.github || project.website || project.referenceUrl) && (
                  <div className="mt-5 flex flex-wrap gap-3 border-t border-border/70 pt-4">
                    {project.website && (
                      <Button size="sm" asChild className="w-full sm:w-auto">
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                          Visit {project.title}<ExternalLink aria-hidden="true" className="ml-1 h-3.5 w-3.5" />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </Button>
                    )}
                    {project.referenceUrl && (
                      <a href={project.referenceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-2 text-xs font-medium text-primary underline underline-offset-4">
                        {project.referenceLabel}<ExternalLink aria-hidden="true" className="h-3 w-3 shrink-0" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}>
                          <Github className="h-3.5 w-3.5 mr-2" />
                          View on GitHub
                          <ExternalLink className="h-3 w-3 ml-2 opacity-50" />
                        </a>
                      </Button>
                    )}
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
