import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import profile from "@/content/profile.json"
import skillGroups from "@/content/skills.json"
import directionData from "@/content/directions.json"
import awardData from "@/content/awards.json"
import { resolveContentIcon } from "@/components/content-icons"
const directions = directionData.map((item) => ({ ...item, icon: resolveContentIcon(item.icon) }))
const achievements = awardData.map((item) => ({ ...item, icon: resolveContentIcon(item.icon) }))

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/70 py-20 lg:py-24">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-kicker">01 / Profile</p>
          <h2 className="section-heading">About</h2>
          <p className="section-subheading">
            Applied AI, software and technical leadership, grounded in hands-on engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              {profile.about.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "text-foreground/90" : undefined}>{paragraph}</p>
              ))}
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium text-foreground">Professional focus</h3>
              <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {directions.map((direction) => (
                  <div
                    key={direction.title}
                    className="group bg-card p-4 transition-all duration-300 hover:bg-accent/55"
                  >
                    <div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:bg-background">
                      <direction.icon className="h-4 w-4 text-foreground" />
                    </div>
                    <h4 className="text-sm font-medium text-foreground">{direction.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{direction.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="polished-card h-fit lg:col-span-2">
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-primary">Available for</p>
                <h3 className="mt-1 font-medium text-foreground">Applied AI, software, and technical collaboration</h3>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="text-foreground mt-0.5">{profile.location}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="text-foreground mt-0.5">{profile.email}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd className="text-foreground mt-0.5">{profile.phone}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-medium mb-6">Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <Card key={group.category} className="polished-card">
                <CardContent className="p-5">
                  <h4 className="text-sm font-medium text-foreground mb-3">{group.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-background/50 text-xs font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div id="awards" className="mt-16 scroll-mt-24">
          <h3 className="text-lg font-medium mb-6">Awards & Achievements</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((item) => (
              <Card key={item.title} className="polished-card group">
                <CardContent className="p-5">
                  <div className="flex gap-3">
                    <div className="h-fit rounded-lg border border-border/70 bg-muted p-2 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <span className="text-xs text-muted-foreground shrink-0">{item.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                      {item.sourceUrl && (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block rounded-sm text-xs font-medium text-primary underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          Yantra 9.0 — Robotics Club report
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
