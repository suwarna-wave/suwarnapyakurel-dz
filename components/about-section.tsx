import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Lightbulb, Telescope, Users } from "lucide-react"

const skillGroups = [
  {
    category: "Research & ML",
    skills: ["Python", "NumPy", "Deep Learning", "Signal Processing", "Medical AI", "Feature Engineering"],
  },
  {
    category: "Engineering",
    skills: ["C/C++", "IoT Systems", "Robotics", "Linux", "Embedded Sensors", "Data Pipelines"],
  },
  {
    category: "Communication",
    skills: ["Technical Writing", "Research Outreach", "Public Speaking", "Community Leadership"],
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

const currentFocus = [
  "Explainable deep learning for pneumonia detection and severity classification using chest X-rays",
  "Vibration signal analysis for predictive maintenance",
  "Proposal AI — outreach tooling for research communication (in progress)",
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/70 py-20 lg:py-24">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-kicker">Profile</p>
          <h2 className="section-heading">About</h2>
          <p className="section-subheading">
            Building a research profile at the intersection of engineering, machine learning, and applied signal analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p className="text-foreground/90">
                I am an undergraduate in Electronics, Communication & Information Engineering at IOE Purwanchal Campus,
                with a growing focus on scientific machine learning — particularly medical imaging and time-series signal
                analysis for diagnostic and predictive systems.
              </p>
              <p>
                My background spans robotics competitions, IoT deployments, and large-scale community programs including
                CS50 AI Nepal, IOAA-Jr. 2024, and ICRTAI 2025. That outreach experience now informs how I communicate
                research — but my primary direction is hands-on ML engineering and analysis.
              </p>
              <p>
                Recent work includes an explainable deep learning framework for pneumonia detection from chest X-rays,
                a motor vibration fault detector using FFT-based feature extraction, and a lightweight Markdown-to-PDF
                desktop tool. I am also exploring proposal-generation tooling to bridge research communication with
                technical depth.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card/55 p-5">
              <h3 className="mb-3 text-sm font-medium text-foreground">Current Research Focus</h3>
              <ul className="space-y-2">
                {currentFocus.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Card className="polished-card h-fit lg:col-span-2">
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-primary">Available for</p>
                <h3 className="mt-1 font-medium text-foreground">Research and technical collaboration</h3>
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
          <div className="grid sm:grid-cols-3 gap-6">
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
              <Card key={item.title} className="polished-card">
                <CardContent className="p-5">
                  <div className="flex gap-3">
                    <div className="h-fit rounded-md border border-border/70 bg-muted p-2">
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
