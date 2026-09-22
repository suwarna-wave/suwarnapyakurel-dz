# Master documentation index

Read this first before changing content or redesigning the UI. Last content review: **2026-09-23**.

## Sources and decision rules

- [Source policy and unresolved facts](source-policy.md)
- [Full updated CV transcription](sources/resume-2026-09-23.md)
- [Resume PDF](../public/Suwarna_Pyakurel_CV.pdf)
- [Source metadata and PDF fingerprint](sections/sources.md)

## Section map

| Section / responsibility | Runtime source | Markdown reference | Rendering |
| --- | --- | --- | --- |
| Landing introduction and footer invitation | [landing.json](../content/landing.json) | [Landing](sections/landing.md) | Hero, Footer |
| Identity, hero, biography, languages, interests | [profile.json](../content/profile.json) | [Profile](sections/profile.md) | Hero, About, Footer; SEO metadata |
| Skills | [skills.json](../content/skills.json) | [Skills](sections/skills.md) | About |
| Professional focus | [directions.json](../content/directions.json) | [Directions](sections/directions.md) | About |
| Experience | [experience.json](../content/experience.json) | [Experience](sections/experience.md) | Experience |
| Education | [education.json](../content/education.json) | [Education](sections/education.md) | Experience |
| Awards and recognition | [awards.json](../content/awards.json) | [Awards](sections/awards.md) | About, `#awards` |
| Selected and additional projects | [projects.json](../content/projects.json) | [Projects](sections/projects.md) | Projects; derived SEO |
| Additional community leadership | [leadership-notes.json](../content/leadership-notes.json) | [Leadership notes](sections/leadership-notes.md) | Retained for future UI |
| Contact and collaboration preferences | [contact.json](../content/contact.json) | [Contact](sections/contact.md) | Contact |
| Header and footer navigation | [navigation.json](../content/navigation.json) | [Navigation](sections/navigation.md) | Header, Footer |

Languages and research interests are retained in the profile data for the redesign. Projects with `selected: false` remain in the inventory but are not currently rendered. No missing dates, metrics, credentials or links should be fabricated to fill a layout.

## Engineering and redesign

- [Architecture and editing workflow](architecture.md)
- [UI design system and acceptance checklist](redesign.md)
- [Asset inventory](assets.md)
- [Audit findings and verification scope](audit-2026-09-23.md)
- [Deployment guide](deployment.md)
- [GitHub Pages configuration](github-pages.md)
- [Existing custom-domain guide](custom-domain.md)

Section references are generated from the same records the site imports. `npm run content:check` rejects stale references. Run `npm run docs:sync` after content edits, then `npm run check`.
