# GitHub Pages Setup

This repository is configured for GitHub Pages with the custom domain `suwarnapyakurel.com.np`.

## What Is Configured

- `.github/workflows/deploy.yml` builds the Next.js static export and deploys `out`.
- `next.config.mjs` uses `output: 'export'`, `trailingSlash: true`, and unoptimized images for static hosting.
- `public/CNAME` contains `suwarnapyakurel.com.np`.
- `public/.nojekyll` prevents GitHub Pages from processing the static files with Jekyll.

## Run Locally

```bash
corepack enable
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Test Production Export

```bash
pnpm build
pnpm dlx serve out
```

## Push And Deploy

```bash
git add .
git commit -m "Prepare portfolio for GitHub Pages deployment"
git push origin main
```

In GitHub, set Pages source to "GitHub Actions". The Actions tab will show the deployment progress.
