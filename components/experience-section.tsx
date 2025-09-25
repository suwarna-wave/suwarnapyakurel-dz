"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin, Users, Megaphone, Star, Globe } from "lucide-react"

const experiences = [
  {
    title: "Outreach Coordinator",
    organization: "International Conference on Recent Trends in Artificial Intelligence (ICRTAI 2025)",
    location: "Birtamode, Nepal",
    period: "Apr 2025 - Present",
    type: "Conference",
    description:
      "Leading strategic public relations and communications for Nepal's first-ever ICRTAI conference, amplifying AI education and awareness across local and national levels.",
    responsibilities: [
      "Crafted compelling narratives and managed media relations to promote AI education",
      "Built and maintained strong community connections for impactful outreach",
      "Led strategic public relations campaigns amplifying conference visibility",
      "Coordinated with organizing committees to align outreach with event vision",
      "Designed targeted campaigns to maximize participation and impact",
    ],
    skills: ["Public Relations", "Strategic Communications", "Community Engagement", "Event Coordination"],
    icon: Megaphone,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "PR and Outreach Lead",
    organization: "CS50 AI Nepal, EXCESS",
    location: "Nepal",
    period: "Oct 2024 - Present",
    type: "Educational Program",
    description:
      "Promoting CS50 AI program by building partnerships and enhancing visibility, resulting in increased community engagement and participation.",
    responsibilities: [
      "Managed public relations and coordinated outreach efforts",
      "Fostered collaborations to expand CS50's reach and impact",
      "Planned events and strategized campaigns for stakeholder engagement",
      "Built partnerships to enhance program visibility",
      "Drove participation through effective communication strategies",
    ],
    skills: ["Partnership Development", "Campaign Strategy", "Community Outreach", "Event Planning"],
    icon: Users,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Country Guide & Tech Lead",
    organization: "Nepal Astronomical Society - IOAA-Jr. 2024",
    location: "Nepal",
    period: "Oct 2023 - Present",
    type: "International Event",
    description:
      "Served as Country Guide and Tech Lead for the historic first International Olympiad on Astronomy and Astrophysics Junior in Nepal.",
    responsibilities: [
      "Developed QR-based system for participant tracking and event management",
      "Organized global events like NASA Space Apps Challenge",
      "Collaborated with local and provincial governments for educational advancement",
      "Engaged in astronomical outreach, mentoring, and collaboration",
      "Led technical implementation for international competition",
    ],
    skills: ["Technical Leadership", "System Development", "Government Relations", "International Coordination"],
    icon: Star,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Member",
    organization: "Astronomy and Space Science Study Research Committee",
    location: "Biratnagar, Nepal",
    period: "Jun 2023 - Present",
    type: "Research Committee",
    description:
      "Collaborating with local government to promote astronomy and space science through outreach, technical workshops, and educational initiatives.",
    responsibilities: [
      "Enhanced technical education through Python and Linux workshops",
      "Developed and implemented educational programs",
      "Contributed to regional planning and policy development",
      "Improved learning outcomes for participants through technical training",
      "Collaborated with government stakeholders for STEM advancement",
    ],
    skills: ["Technical Education", "Workshop Development", "Policy Contribution", "Government Collaboration"],
    icon: Globe,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "Secretary",
    organization: "Municipal Child Club Network",
    location: "Biratnagar, Nepal",
    period: "Jul 2019 - Mar 2021",
    type: "Community Organization",
    description:
      "Coordinated numerous initiatives aimed at children engagement and development, sharpening organizational and communication skills.",
    responsibilities: [
      "Coordinated children engagement and development initiatives",
      "Developed organizational and communication skills",
      "Drove impactful community programs",
      "Supported and guided community as an Advisor",
      "Led strategic planning for youth development programs",
    ],
    skills: ["Community Leadership", "Youth Development", "Program Coordination", "Communication"],
    icon: Users,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
]

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Electronics, Communication, and Information Engineering",
    institution: "Tribhuwan University, Institute of Engineering, Purwanchal Campus",
    location: "Dharan, Nepal",
    period: "Sep 2023 - Present",
    achievements: [
      "Organized various Historic Events like CS50 AI Nepal",
      "Part of IOAA-Jr. 2024 organizing committee",
      "Active in technical societies and research committees",
    ],
  },
  {
    degree: "High School",
    field: "Science",
    institution: "SOS Hermann Gmeiner Secondary School",
    location: "Bhaktapur, Nepal",
    period: "Mar 2020 - Jul 2022",
    gpa: "3.75",
    achievements: [
      "Head-boy (batch: 2078 BS)",
      'Provisional Discovery of main belt asteroid "2020 WX9"',
      "Actively participated in STEM and voluntary activities",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of leadership, innovation, and community impact across technology, education, and outreach
            initiatives.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">Professional Experience</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in-up hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background hidden md:block animate-pulse-glow"></div>

                  <Card className="md:ml-16 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] glass-card border-blue-500/20">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${exp.bgColor} hover-glow`}>
                            <exp.icon className={`h-6 w-6 ${exp.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold mb-1 hover:text-primary transition-colors">
                              {exp.title}
                            </h4>
                            <p className="text-primary font-medium mb-2">{exp.organization}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <CalendarDays className="h-4 w-4" />
                                {exp.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </div>
                              <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs hover:scale-105 transition-transform magnetic"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] glass-card border-purple-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-1 hover:text-primary transition-colors">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.field}</p>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      {edu.gpa && (
                        <Badge variant="outline" className="text-xs hover:scale-105 transition-transform">
                          GPA: {edu.gpa}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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
