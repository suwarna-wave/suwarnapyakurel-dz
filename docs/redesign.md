# UI redesign brief

## Content direction

Lead with **Engineering Undergraduate — Applied AI, Software & Technical Leadership**, aligned with the updated CV. Curio Tech leadership, technical outreach and SAP ERP skills support that profile. Preserve team attribution and the distinctions in the [source policy](source-policy.md).

The owner authorized the visual redesign after the content audit. The implemented design uses warm ivory and forest green in light mode, with a coordinated deep-green dark mode. Geist provides the main type; an italic system serif gives the hero surname a personal accent. No external fonts or new dependencies were added.

The page now follows Hero → Projects → About (including Awards) → Experience → Contact → Footer. Project previews link to individual cards using the shared `getProjectAnchor` utility. Landing copy lives in `content/landing.json`; verified project and profile facts remain in their existing files.

The hero and footer are server-rendered. The header owns the mobile menu and a simple persistent light/dark toggle, replacing the old intensity control. Native anchor links preserve keyboard navigation and browser behavior. Shared colors and landing-specific styles live in `app/globals.css`.

## Available sections

Hero and biography; skills and research interests; experience and education; awards; selected technical work; a complete additional-project inventory; languages; contact. See the [master section map](README.md). Research interests, languages and unselected projects are retained even if the current design does not display them.

New layouts can render these records as cards, timelines or dedicated pages without rewriting the factual content. Prefer direct imports from individual content files rather than a large barrel import that bundles every record into client components.

## Stable contracts

- Keep `#hero`, `#about`, `#experience`, `#projects`, `#awards` and `#contact` reachable or explicitly migrate links.
- Keep `/Suwarna_Pyakurel_CV.pdf` serving the updated resume.
- Preserve source links, project repositories and user identity across visible copy and metadata.
- Preserve static export, custom-domain hosting, canonical metadata, sitemap, robots and 404 behavior.
- Keep contact handoff truthful; adding actual delivery requires a separately designed backend/service.

## Acceptance checklist

- `npm run check` passes; generated docs remain synchronized.
- Review mobile, tablet and desktop widths; long project names and experience periods wrap without overflow.
- Review light and dark modes, keyboard navigation, focus visibility, menu controls and reduced-motion behavior.
- Check PDF download, portrait, external links, menu anchors and contact email handoff.
- Check headings, image alt text, color contrast and readable content order.
- Preserve all source-backed records; never fill empty layout fields with invented awards, dates, links or metrics.

Visual/browser checks are required when the UI is redesigned; static export checks alone do not prove visual or interactive correctness.

## Verification of this redesign

Production build, type checks, content synchronization and static-export checks passed. Headless Chrome checks at 1440, 768, 390 and 320 px found no horizontal page overflow or JavaScript exceptions. Desktop navigation, mobile menu opening/closing, project anchor targets, theme persistence and reduced-motion behavior were checked. Desktop, mobile, dark-mode and lower-section screenshots were visually inspected. Empty required contact fields correctly fail native form validation; no email was sent and no live deployment was performed.
