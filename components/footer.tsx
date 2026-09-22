import { ArrowUp, ArrowUpRight } from "lucide-react"
import navItems from "@/content/navigation.json"
import profile from "@/content/profile.json"
import landing from "@/content/landing.json"

export function Footer() {
  return (
    <footer className="bg-[#163a2d] text-[#f0f3e8]">
      <div className="section-container py-12 sm:py-16">
        <div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mono-label text-[#c0d0be]">{landing.footerInvitation}</p>
            <a href={`mailto:${profile.email}`} className="mt-4 flex items-center gap-4 text-3xl font-medium tracking-tight sm:text-4xl">{landing.footerHeading}<ArrowUpRight className="h-7 w-7 shrink-0" /></a>
          </div>
          <a href="#hero" className="flex items-center gap-2 text-xs text-[#c0d0be] hover:text-white">Back to top <ArrowUp className="h-4 w-4" /></a>
        </div>
        <div className="grid gap-8 py-8 sm:grid-cols-3">
          <div><a href={profile.portfolioUrl} className="text-sm font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white">{profile.name}</a><p className="mt-3 max-w-xs text-xs leading-6 text-[#c0d0be]">{profile.footerSummary}</p></div>
          <nav aria-label="Footer navigation" className="flex flex-wrap content-start gap-x-5 gap-y-3 sm:justify-center">{navItems.map((item) => <a key={item.href} href={item.href} className="text-xs text-[#c0d0be] hover:text-white">{item.name}</a>)}</nav>
          <div className="flex flex-wrap content-start gap-5 sm:justify-end">{profile.socialLinks.map((item) => <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#c0d0be] hover:text-white">{item.name}<ArrowUpRight className="h-3 w-3" /></a>)}</div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-white/20 pt-6 text-[0.65rem] text-[#c0d0be]"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location}</span></div>
      </div>
    </footer>
  )
}
