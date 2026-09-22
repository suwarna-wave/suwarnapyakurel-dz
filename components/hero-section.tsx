import Image from "next/image"
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react"
import profile from "@/content/profile.json"
import landing from "@/content/landing.json"
import projectData from "@/content/projects.json"
import { resolveContentIcon } from "@/components/content-icons"
import { getAssetPath, getProjectAnchor } from "@/lib/utils"

const previewProjects = projectData.filter((project) => project.selected).slice(0, 3)

export function HeroSection() {
  return (
    <section id="hero" className="hero-section relative overflow-hidden">
      <div className="section-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="section-kicker flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {landing.eyebrow}
            </p>
            <h1 className="hero-name">
              {profile.firstName}<br />
              <span>{profile.lastName}.</span>
            </h1>
            <p className="mt-7 text-sm font-medium tracking-wide text-foreground sm:text-base">{profile.specialization}</p>
            <p className="mt-4 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">{landing.introduction}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="hero-primary-link">
                Explore my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={getAssetPath(profile.resumePath)} download className="hero-secondary-link">
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> {profile.location}</span>
              <div className="flex items-center gap-1">
                {profile.socialLinks.map((link) => {
                  const Icon = resolveContentIcon(link.icon)
                  return (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                      className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary">
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="hero-portrait-area">
            <div className="portrait-orbit" aria-hidden="true" />
            <figure className="portrait-frame">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.1rem] bg-secondary">
                <Image src={getAssetPath(profile.portrait)} alt={profile.portraitAlt} width={747} height={1024} priority
                  sizes="(max-width: 767px) 82vw, (max-width: 1023px) 38vw, 360px"
                  className="h-full w-full object-cover object-[center_25%]" />
                <span className="portrait-index" aria-hidden="true">SP / 01</span>
              </div>
              <figcaption className="flex items-center justify-between gap-4 px-2 pb-1 pt-5">
                <div>
                  <p className="text-sm font-semibold">{profile.name}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.13em] text-muted-foreground">{profile.headline}</p>
                </div>
                <span className="text-3xl text-primary" aria-hidden="true">✳</span>
              </figcaption>
            </figure>
            <p className="portrait-note">{landing.portraitCaption}</p>
          </div>
        </div>

        <div className="hero-work-strip">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="mono-label text-muted-foreground">{landing.workLabel}</p>
            <a href="#projects" className="flex items-center gap-2 text-xs font-medium text-primary">Selected work <ArrowDown className="h-3.5 w-3.5" /></a>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {previewProjects.map((project, index) => {
              const Icon = resolveContentIcon(project.icon)
              return (
                <a key={project.title} href={`#${getProjectAnchor(project.title)}`} className="work-preview group">
                  <div className="mb-5 flex items-center justify-between">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-mono text-[0.65rem] text-muted-foreground">0{index + 1} / {project.category}</span>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <h2 className="max-w-[17rem] text-sm font-medium leading-6">{project.title}</h2>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
