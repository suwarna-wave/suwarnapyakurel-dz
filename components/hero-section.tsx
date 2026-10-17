import Image from "next/image"
import { ArrowUpRight, Award, Download, MapPin, Sparkles, Users } from "lucide-react"
import profile from "@/content/profile.json"
import landing from "@/content/landing.json"
import { resolveContentIcon } from "@/components/content-icons"
import { getAssetPath } from "@/lib/utils"

const stats = [
  {
    icon: Users,
    value: "800+",
    title: "Students Mentored",
    description: "Robotics & hands-on technical training",
  },
  {
    icon: Award,
    value: "Winner",
    title: "Business Cup Expo",
    description: "Yantra 9.0 International Robotics",
  },
  {
    icon: Sparkles,
    value: "Coordinator",
    title: "Outreach Coordinator",
    description: "ICRTAI · Recent Trends in AI",
  },
]

export function HeroSection() {
  return (
    <section id="hero" className="hero-section flex flex-col justify-between">
      <div className="section-container flex-1 flex flex-col justify-between w-full">
        <div className="hero-grid my-auto pt-4 lg:pt-8">
          <div className="hero-copy">
            <a
              href={profile.ambassador.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ambassador-badge"
            >
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {profile.ambassador.label}
              <ArrowUpRight className="h-3.5 w-3.5 text-primary/70" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>

            <h1 className="hero-name">
              <span>{profile.firstName}</span>{" "}
              <span className="hero-name-accent">{profile.lastName}</span>
            </h1>

            <p className="hero-specialization">
              {profile.specialization}
            </p>

            <p className="hero-intro">
              {landing.introduction}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="hero-primary-link">
                Explore my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={getAssetPath(profile.resumePath)}
                download
                className="hero-secondary-link"
              >
                <Download className="h-4 w-4 text-muted-foreground" /> Download CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="h-3.5 w-3.5 text-primary" /> {profile.location}
              </span>
              <span className="h-3 w-px bg-border" aria-hidden="true" />
              <div className="flex items-center gap-1.5">
                {profile.socialLinks.map((link) => {
                  const Icon = resolveContentIcon(link.icon)
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="grid h-8 w-8 place-items-center rounded-full border border-border/60 bg-card/60 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-secondary hover:text-primary"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <figure className="hero-portrait-area">
            <div className="portrait-card">
              <div className="portrait-frame">
                <Image
                  src={getAssetPath(profile.portrait)}
                  alt={profile.portraitAlt}
                  width={444}
                  height={440}
                  priority
                  sizes="(max-width: 767px) 260px, 360px"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>
              <figcaption className="portrait-note">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 inline-block mr-2" aria-hidden="true" />
                {landing.portraitCaption}
              </figcaption>
            </div>
          </figure>
        </div>

        <dl className="stat-grid">
          {stats.map((stat) => (
            <div key={stat.title} className="stat-card">
              <div className="flex items-center justify-between gap-2">
                <dt className="stat-value">{stat.value}</dt>
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="h-4 w-4" />
                </span>
              </div>
              <dd className="stat-title">{stat.title}</dd>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
