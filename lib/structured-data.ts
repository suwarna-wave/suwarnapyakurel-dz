import profile from "@/content/profile.json"
import education from "@/content/education.json"
import projects from "@/content/projects.json"

const siteUrl = profile.siteUrl
const person = { "@id": `${siteUrl}/#person` }

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person", ...person,
      name: profile.name, url: siteUrl, image: `${siteUrl}${profile.portrait}`,
      email: `mailto:${profile.email}`, telephone: profile.telephone,
      jobTitle: "Co-Founder & Chief Operating Officer",
      description: profile.summary,
      address: { "@type": "PostalAddress", addressLocality: "Biratnagar", addressRegion: "Koshi Province", addressCountry: "NP" },
      // Current enrollment is an affiliation, not a claim of graduation.
      affiliation: { "@type": "CollegeOrUniversity", name: education[0].institution },
      knowsAbout: profile.researchInterests,
      sameAs: profile.socialLinks.filter((link) => link.href.startsWith("https://")).map((link) => link.href),
    },
    {
      "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl,
      name: profile.name, description: profile.summary, publisher: person, inLanguage: "en",
    },
    {
      "@type": "ProfilePage", "@id": `${siteUrl}/#profile-page`, url: siteUrl,
      name: profile.siteTitle, about: person, mainEntity: person,
      isPartOf: { "@id": `${siteUrl}/#website` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}${profile.portrait}` },
      inLanguage: "en",
    },
    {
      "@type": "ItemList", "@id": `${siteUrl}/#selected-projects`,
      name: `Selected projects by ${profile.name}`,
      itemListElement: projects.filter((project) => project.selected).map((project, index) => ({
        "@type": "ListItem", position: index + 1,
        item: {
          "@type": project.github ? "SoftwareSourceCode" : "CreativeWork",
          name: project.title, description: project.description,
          ...(project.website ? { url: project.website } : {}),
          ...(project.github ? { codeRepository: project.github } : {}), author: person,
        },
      })),
    },
  ],
}
