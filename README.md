# Suwarna Pyakurel Portfolio

Personal portfolio for Suwarna Pyakurel, built with Next.js, TypeScript, Tailwind CSS, shadcn/ui-style components, and lucide-react icons.

Production domain: https://suwarnapyakurel.com.np/

## Tech Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Radix UI primitives
- lucide-react icons
- GitHub Pages static export

## Run Locally

Install Node.js 20 or newer, then run:

```bash
corepack enable
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production Export Check

```bash
pnpm build
pnpm dlx serve out
```

Open the local URL printed by `serve`.

Before pushing, check:

- Home page renders correctly.
- Header navigation scrolls to each section.
- CV download opens `public/Suwarna_Pyakurel_CV.pdf`.
- External links open correctly.
- Contact form opens the email client.
- The 404 page works after static export.

## Deployment

This site deploys to GitHub Pages through `.github/workflows/deploy.yml`.

The workflow:

1. Installs dependencies with pnpm 9 and the lockfile.
2. Runs `pnpm build`.
3. Uploads the generated `out` directory as a GitHub Pages artifact.
4. Deploys it to GitHub Pages.

GitHub repository settings should use:

- Pages source: GitHub Actions
- Custom domain: `suwarnapyakurel.com.np`
- HTTPS: enforced when available

## Useful Commands

```bash
pnpm dev
pnpm build
pnpm preview
pnpm lint
```

## Project Structure

```text
app/                 Next.js routes, layout, and global styles
components/          Portfolio sections and shared UI components
lib/                 Utility helpers
public/              Static assets, CNAME, icons, CV, and 404 page
.github/workflows/   GitHub Pages deployment workflow
```
