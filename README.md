# Suwarna Pyakurel — portfolio

Next.js App Router, React, TypeScript and Tailwind CSS; statically exported to GitHub Pages at https://suwarnapyakurel.com.np/.

**Start with the [master documentation index](docs/README.md).** It maps every section, source, asset and redesign constraint.

## Local development

The repository pins pnpm 9.15.9; CI uses Node 24. Install dependencies with `pnpm install --frozen-lockfile`, then run `pnpm dev`. With dependencies already installed, the equivalent `npm run dev` also works. Do not introduce a second lockfile.

## Content workflow

1. Review the [source policy](docs/source-policy.md) and supplied resume.
2. Edit the relevant `content/*.json` records, independently of the UI.
3. Run `npm run docs:sync` to refresh the Markdown section references.
4. Run `npm run check` to verify documentation, production build and static export.

The existing `/Suwarna_Pyakurel_CV.pdf` download URL serves the updated resume. Its original filename and SHA-256 fingerprint are tracked in `content/sources.json`.

## Structure

```text
app/                   Routes, metadata and global styles
components/            Section rendering and interactions
components/ui/         Shared UI primitives
content/               UI-independent portfolio records (JSON)
lib/                   Utilities and derived structured data
public/                Published assets, resume and hosting files
docs/README.md         Master navigation document
docs/sections/         Generated, readable references for each content file
docs/sources/          Complete supplied-resume transcription
docs/legacy/           Retained old HTML references; not deployed
scripts/               Documentation synchronization and export checks
.github/workflows/     Build and deployment automation
```

See [architecture](docs/architecture.md), [redesign brief](docs/redesign.md), [audit](docs/audit-2026-09-23.md) and [deployment](docs/deployment.md).
