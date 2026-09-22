import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin, ExternalLink } from "lucide-react"

import experiences from "@/content/experience.json"
import education from "@/content/education.json"

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border bg-secondary/45 py-20 lg:py-24">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-kicker">03 / Along the way</p>
          <h2 className="section-heading">Learning. Building. Leading.</h2>
          <p className="section-subheading">
            A track record spanning consulting, operations, strategic communications, and technical program delivery.
          </p>
        </div>

        <div className="mb-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          <div className="bg-card p-5 transition-colors duration-300 hover:bg-accent/55">
            <p className="mono-label text-muted-foreground">Current role</p>
            <p className="mt-2 font-medium text-foreground">Co-founder & COO</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">Operations, partnerships and project delivery at Curio Tech.</p>
          </div>
          <div className="bg-card p-5 transition-colors duration-300 hover:bg-accent/55">
            <p className="mono-label text-muted-foreground">Community leadership</p>
            <p className="mt-2 font-medium text-foreground">Strategic PR & Outreach</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">Campaigns, partnerships, stakeholders, and program visibility.</p>
          </div>
          <div className="bg-card p-5 transition-colors duration-300 hover:bg-accent/55">
            <p className="mono-label text-muted-foreground">Technical foundation</p>
            <p className="mt-2 font-medium text-foreground">Engineering & Research</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">Scientific ML, robotics, IoT, signal analysis, and Go.</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-lg font-medium mb-6">Experience</h3>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <Card key={exp.title + exp.organization} className="polished-card">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{exp.title}</h4>
                      <p className="text-sm text-primary mt-0.5">
                        {exp.organizationUrl ? (
                          <a href={exp.organizationUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
                            {exp.organization}<ExternalLink aria-hidden="true" className="ml-1 inline h-3 w-3" />
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        ) : exp.organization}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground shrink-0">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {exp.relatedLink && (
                    <a href={exp.relatedLink.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary underline underline-offset-4">
                      {exp.relatedLink.label}<ExternalLink aria-hidden="true" className="h-3 w-3" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu) => (
              <Card key={edu.degree + edu.institution} className="polished-card">
                <CardContent className="p-6">
                  <h4 className="font-medium text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-primary mt-0.5">{edu.field}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-1">
                    {edu.highlights.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
