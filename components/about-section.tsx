import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Lightbulb, Telescope, Users, BrainCircuit, Bot, Building2 } from "lucide-react"

const skillGroups = [
  {
    category: "Consulting & Enterprise",
    skills: ["SAP ERP", "Process Analysis", "Requirements Gathering", "User Support", "Technical Documentation"],
  },
  {
    category: "Strategy & Management",
    skills: ["Strategic PR", "Outreach Management", "Partnerships", "Stakeholder Communication", "Event Operations"],
  },
  {
    category: "Engineering & Research",
    skills: [
      "Python",
      "C/C++",
      "Scientific ML",
      "Deep Learning",
      "Explainable AI",
      "Medical Imaging",
      "Signal Processing",
      "FFT Analysis",
      "Robotics",
      "IoT",
      "Embedded Systems",
      "Arduino",
      "Linux",
      "Git",
      "Go (exploring)",
    ],
  },
]

const directions = [
  {
    icon: Building2,
    title: "SAP Consulting",
    description: "Translating operational requirements into practical ERP configuration, support, and adoption.",
  },
  {
    icon: Users,
    title: "Strategic PR & Outreach",
    description: "2.5+ years leading communications, partnerships, engagement, and program visibility.",
  },
  {
    icon: BrainCircuit,
    title: "Scientific ML",
    description: "Current research in interpretable medical imaging and engineering signal analysis.",
  },
  {
    icon: Bot,
    title: "Engineering Practice",
    description: "Robotics, IoT, embedded systems, and an active exploration of Go.",
  },
]

const achievements = [
  {
    icon: Award,
    title: "Yantra 9.0 Winners",
    description: "Won Yantra Swarmanoid and Yantra Business Cup Expo at international robotics competition.",
    year: "2024",
  },
  {
    icon: Lightbulb,
    title: "Best Idea — X-hack 3.0",
    description: "Recognized at Nepal's largest hardware hackathon for an innovative project concept.",
    year: "2024",
  },
  {
    icon: Telescope,
    title: "Asteroid Discovery",
    description: 'Provisional discovery of main belt asteroid "2020WX9" as a certified asteroid hunter.',
    year: "2020",
  },
  {
    icon: Users,
    title: "IOAA-Jr. 2024 Leadership",
    description: "Country Guide and Tech Lead for Nepal's first International Olympiad on Astronomy and Astrophysics Junior.",
    year: "2024",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/70 py-20 lg:py-24">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-kicker">01 / Profile</p>
          <h2 className="section-heading">About</h2>
          <p className="section-subheading">
            SAP consulting and strategic communications, grounded in engineering and research.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p className="text-foreground/90">
                I am an SAP consultant and Electronics, Communication & Information Engineering undergraduate who works
                at the intersection of enterprise systems, technical programs, and stakeholder management.
              </p>
              <p>
                I bring 2.5+ years of experience in strategic PR and outreach management across technology, education,
                and research initiatives. My work includes campaign planning, partnership development, institutional
                communication, program visibility, event operations, and engagement with diverse stakeholders.
              </p>
              <p>
                My consulting approach is strengthened by hands-on engineering: robotics and IoT projects, current
                research in Scientific ML, and an active exploration of Go. This technical foundation helps me manage
                programs and communicate between operational, technical, and leadership teams without losing context.
              </p>
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
                <h3 className="mt-1 font-medium text-foreground">Consulting, strategy, and technical leadership</h3>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="text-foreground mt-0.5">Biratnagar, Koshi Province, Nepal</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="text-foreground mt-0.5">suwarnapyakurel5@gmail.com</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd className="text-foreground mt-0.5">+977-9840036060</dd>
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

        <div className="mt-16">
          <h3 className="text-lg font-medium mb-6">Selected Achievements</h3>
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
