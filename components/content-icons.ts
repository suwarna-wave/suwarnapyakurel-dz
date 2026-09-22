import { Activity, Award, Bot, BrainCircuit, Building2, Cpu, FileText, Github, Lightbulb, Linkedin, Mail, MapPin, Phone, QrCode, Telescope, TrendingUp, Users, type LucideIcon } from "lucide-react"

// Presentation-only mapping: content records remain independent of React.
const icons: Record<string, LucideIcon> = {
  Activity, Award, Bot, BrainCircuit, Building2, Cpu, FileText, Github,
  Lightbulb, Linkedin, Mail, MapPin, Phone, QrCode, Telescope, TrendingUp, Users,
}

export function resolveContentIcon(name: string): LucideIcon {
  const icon = icons[name]
  if (!icon) throw new Error(`Unknown content icon: ${name}`)
  return icon
}
