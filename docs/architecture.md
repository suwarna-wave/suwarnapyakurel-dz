# Architecture and editing workflow

## Boundaries

`content/*.json` holds serializable portfolio records. It imports no React, CSS or icon components. Each file covers one responsibility and can be reused by a different UI.

`components/*-section.tsx` renders those records and owns presentation and interactions. `components/content-icons.ts` converts icon names to Lucide components. `components/ui/` contains reusable primitives. Keep layout classes and animations out of content records.

`app/page.tsx` composes sections. `app/layout.tsx`, `app/robots.ts` and `app/sitemap.ts` read shared profile metadata. `lib/structured-data.ts` derives JSON-LD from profile, education and selected projects. The current degree is an affiliation, not an alumni claim.

`docs/sections/*.md` is a generated reading view, not a second manually maintained content store. `scripts/content-docs.mjs` generates or verifies these references and checks source fingerprint, asset paths and basic content contracts. TypeScript checks component access to imported JSON. `scripts/check-export.mjs` checks generated HTML, selected projects, navigation targets, resume bytes and metadata outputs.

## Adding content

1. Establish source and limitations in `source-policy.md` or a dated source note.
2. Add a record to the appropriate JSON file using existing field names. A project's `selected` flag controls publication in selected work and JSON-LD; `featured` controls its current grid treatment.
3. Omit unavailable optional links; use an empty award year when unknown. Do not guess metrics or dates.
4. Add presentation support only if a genuinely new field is required. Add icon keys to the icon adapter when needed.
5. Run `npm run docs:sync`, then `npm run check`.
6. If adding a new file, add it to the master index and its consumer. The docs generator discovers JSON files automatically.

## Runtime constraints

The application is a static export. There is no server-side mail delivery or API backend. Contact uses a `mailto:` handoff; the visitor must send the message in an email client. Never label that handoff as confirmed delivery.

Root-relative URLs assume the configured custom-domain root. Preserve `next.config.mjs` static export settings, `public/CNAME` and `public/.nojekyll`. Deploy only `out/`; the root HTML placeholder and duplicate standalone 404 are archived in `docs/legacy/`. The active 404 comes from `app/not-found.tsx`.

The header owns appearance preferences and section tracking. Future UI work should preserve keyboard access, meaningful anchors and readable mobile layouts. Existing contact/social data must stay consistent across all consumers.

## Commands

- `npm run dev`: local Next development server.
- `npm run docs:sync`: generate section Markdown from content.
- `npm run content:check`: validate documentation and source contracts.
- `npm run typecheck`: TypeScript without output.
- `npm run build`: production static export, including Next type checks.
- `npm run check:export`: validate an existing `out/` build.
- `npm run check`: content check, production build and export validation.

Use pnpm for dependency installation to preserve the existing lockfile; `npm run` only invokes scripts and does not change the lockfile. The legacy `lint` script requires ESLint configuration/dependencies that this repository does not currently contain; it is not a completed validation gate.
