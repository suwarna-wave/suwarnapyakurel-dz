# Deployment Guide

This portfolio is a Next.js static export deployed to GitHub Pages with a custom domain.

## Local Run

Install Node.js 20 or newer, then run:

```bash
corepack enable
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Local Production Check

Before pushing, run:

```bash
pnpm build
pnpm dlx serve out
```

Open the local URL printed by `serve` and check the pages, links, images, CV download, and contact form.

## GitHub Pages Setup

In the GitHub repository:

1. Go to Settings -> Pages.
2. Under "Build and deployment", select "GitHub Actions".
3. Set the custom domain to `suwarnapyakurel.com.np`.
4. Enable "Enforce HTTPS" when GitHub allows it.

The only deployment workflow should be `.github/workflows/deploy.yml`.

## Deploy

```bash
git add .
git commit -m "Prepare portfolio for GitHub Pages deployment"
git push origin main
```

The site is published from the generated `out` folder. The `public/CNAME` file is copied into `out` during the workflow so GitHub Pages keeps the custom domain.

## Troubleshooting

- If the site shows an old version, check the Actions tab for the latest `Deploy to GitHub Pages` run.
- If the custom domain does not work, confirm DNS records point to GitHub Pages and allow DNS propagation time.
- If assets are missing, make sure `next.config.mjs` still has `output: 'export'`, root `basePath`, and `images.unoptimized`.
