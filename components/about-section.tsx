"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code2, Cpu, Telescope, Brain, Globe, Award, Users, BookOpen, Lightbulb } from "lucide-react"

const skills = [
  { name: "Python Programming", level: 90, category: "Programming" },
  { name: "C & C++", level: 85, category: "Programming" },
  { name: "Web Development", level: 80, category: "Programming" },
  { name: "AI & Machine Learning", level: 75, category: "Technology" },
  { name: "Robotics & IoT", level: 85, category: "Technology" },
  { name: "Linux Systems", level: 80, category: "Technology" },
  { name: "Public Speaking", level: 90, category: "Soft Skills" },
  { name: "Event Management", level: 95, category: "Soft Skills" },
  { name: "Technical Documentation", level: 85, category: "Soft Skills" },
  { name: "Strategic Branding & PR", level: 88, category: "Soft Skills" },
]

const achievements = [
  {
    icon: Award,
    title: "Yantra 9.0 Winners",
    description: "Won two titles at international robotics competition: Yantra Swarmanoid and Yantra Business Cup Expo",
    year: "2024",
  },
  {
    icon: Lightbulb,
    title: "Best Idea - X-hack 2.0",
    description: "Won the Best Idea title at the largest hardware hackathon of Nepal",
    year: "2024",
  },
  {
    icon: Telescope,
    title: "Asteroid Discovery",
    description: 'Certified asteroid hunter with provisional discovery of main belt asteroid "2020WX9"',
    year: "2020",
  },
  {
    icon: Users,
    title: "IOAA-Jr. 2024 Leadership",
    description:
      "Served as Country Guide and Tech Lead for the historic first International Olympiad on Astronomy and Astrophysics Junior in Nepal",
    year: "2024",
  },
]

const interests = [
  { icon: Telescope, name: "Astronomy & Space Science", color: "text-blue-500" },
  { icon: Brain, name: "Artificial Intelligence", color: "text-purple-500" },
  { icon: Cpu, name: "Robotics & IoT", color: "text-green-500" },
  { icon: Code2, name: "Software Development", color: "text-orange-500" },
  { icon: Globe, name: "Community Outreach", color: "text-pink-500" },
  { icon: BookOpen, name: "Technical Education", color: "text-cyan-500" },
]

export function AboutSection() {
  const skillCategories = ["Programming", "Technology", "Soft Skills"]

  return (
    <section id="about" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey, passion, and vision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <Card className="p-6 lg:p-8 glass-card border-blue-500/20">
            <CardContent className="p-0">
              <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-blue-300">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm lg:text-base">
                <p>
                  I am an emerging AI/ML researcher with a foundation in electronics, communication, and information
                  engineering and a proven track record of outreach leadership and technical innovation. My current
                  focus lies in medical AI research, where I am developing systems for pneumonia detection and severity
                  classification to advance accessible healthcare solutions.
                </p>
                <p>
                  Previously, I have led impactful robotics, IoT, and software projects, winning international
                  competitions like Yantra 9.0 and contributing to STEM education and outreach through global events
                  (NASA Space Apps, IOAA-Jr. 2024, CS50 AI Nepal). These experiences sharpened my ability to bridge
                  research, technology, and community engagement—a unique skill set I now bring into my research career.
                </p>
                <p>
                  With hands-on expertise in Python, C/C++, robotics, IoT, and data-driven applications, alongside a
                  strong background in public engagement and strategic communication, I aim to contribute as an active
                  AI/ML researcher. My goal is to tackle impactful problems at the intersection of healthcare, robotics,
                  and intelligent systems, turning ideas into solutions that serve both scientific progress and society.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-500/20">
                <h4 className="text-blue-300 font-semibold mb-4">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground">Biratnagar, Koshi Province, Nepal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="text-foreground">+977-9840036060</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-muted-foreground">Email:</span>
                    <span className="text-foreground">suwarnapyakurel5@gmail.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interests Grid */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Areas of Interest</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {interests.map((interest, index) => (
                <Card
                  key={index}
                  className="p-3 lg:p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3">
                      <interest.icon className={`h-5 w-5 lg:h-6 lg:w-6 ${interest.color}`} />
                      <span className="font-medium text-sm lg:text-base">{interest.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 text-center">Technical Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category) => (
              <Card key={category} className="p-4 lg:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <h4 className="font-semibold mb-4 text-primary">{category}</h4>
                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 text-center">Key Achievements</h3>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            <Card className="p-4 lg:p-6 glass-card border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-purple-300">Academic Excellence</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Electronics, Communication & Information Engineering student at Tribhuwan University
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 lg:p-6 glass-card border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-blue-300">Leadership</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  PR & Outreach Lead at CS50 AI Nepal, driving community engagement and growth
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 lg:p-6 glass-card border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Award className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="font-semibold text-green-300">Event Management</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Organized historic events like IOAA-Jr. 2024 and NASA Space Apps Challenge
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
