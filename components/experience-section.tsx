import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Co-founder & COO",
    organization: "Curio Tech Pvt. Ltd.",
    location: "Nepal · Hybrid",
    period: "Oct 2025 — Present",
    description:
      "Leading operations, strategic partnerships, and organizational growth at Curio Tech, a technology enablement startup focused on digital transformation.",
    highlights: [
      "Overseeing operational execution, PR and outreach initiatives, and financial coordination",
      "Building institutional collaborations and strengthening the startup's digital presence",
      "Supporting project scaling across Nepal's evolving technology ecosystem",
    ],
  },
  {
    title: "Outreach Coordinator",
    organization: "ICRTAI 2025 — International Conference on Recent Trends in Artificial Intelligence",
    location: "Birtamode, Nepal",
    period: "Apr 2025 — Present",
    description:
      "Coordinating outreach for Nepal's first ICRTAI conference while contributing to the ICTRAI Scientific Research Community — a collaborative hub for young researchers.",
    highlights: [
      "Media relations and strategic communications for AI education",
      "Community building for research-driven initiatives",
      "Bridging conference outreach with scientific collaboration",
    ],
  },
  {
    title: "Advisor & DataCamp Maintainer",
    organization: "EXCESS — Electronics and Communication Engineering Student Society, IOE Purwanchal Campus",
    location: "Dharan, Nepal",
    period: "Feb 2026 — Present",
    description:
      "Serving as advisor for EXCESS while maintaining DataCamp access and learning support, following a PR & Outreach Lead role for the same society.",
    highlights: [
      "PR & Outreach Lead, Jul 2025 to Feb 2026, for society visibility, communications, and student engagement",
      "Advising student-led technical programs and community initiatives",
      "Maintaining DataCamp learning access and coordination",
    ],
  },
  {
    title: "Country Guide & Tech Lead",
    organization: "Nepal Astronomical Society — IOAA-Jr. 2024",
    location: "Nepal",
    period: "Oct 2023 — Present",
    description:
      "Technical lead for Nepal's first International Olympiad on Astronomy and Astrophysics Junior, including QR-based participant tracking systems.",
    highlights: [
      "System development for international competition logistics",
      "Astronomical outreach and mentoring programs",
      "Coordination with government and international partners",
    ],
  },
  {
    title: "Member",
    organization: "Astronomy and Space Science Study Research Committee",
    location: "Biratnagar, Nepal",
    period: "Jun 2023 — Present",
    description:
      "Contributing to regional STEM advancement through technical workshops in Python and Linux, and educational program development.",
    highlights: [
      "Python and Linux workshop delivery",
      "Policy and regional planning contributions",
      "Government collaboration on STEM initiatives",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Electronics, Communication & Information Engineering",
    institution: "Tribhuwan University, IOE Purwanchal Campus",
    location: "Dharan, Nepal",
    period: "Sep 2023 — Present",
    highlights: [
      "Active in research committees and technical societies",
      "Organized CS50 AI Nepal and IOAA-Jr. 2024 events",
    ],
  },
  {
    degree: "High School — Science",
    field: "GPA 3.75",
    institution: "SOS Hermann Gmeiner Secondary School",
    location: "Bhaktapur, Nepal",
    period: "Mar 2020 — Jul 2022",
    highlights: [
      "Head-boy (batch 2078 BS)",
      'Provisional discovery of asteroid "2020 WX9"',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border/70 bg-muted/25 py-20 lg:py-24">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-kicker">Trajectory</p>
          <h2 className="section-heading">Experience & Education</h2>
          <p className="section-subheading">
            Leadership and technical roles that shaped my path from community outreach to research-oriented engineering.
          </p>
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
                      <p className="text-sm text-primary mt-0.5">{exp.organization}</p>
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
