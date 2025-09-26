# GitHub Pages Deployment Guide

## Automatic Deployment Setup (Recommended)

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

1. **Push to GitHub**: Push your code to the GitHub repository
   ```bash
   git add .
   git commit -m "Ready for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**: 
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow file is already set up in `.github/workflows/deploy.yml`

3. **Wait for Deployment**: 
   - GitHub Actions will automatically build and deploy your site
   - You can monitor the progress in the "Actions" tab of your repository

## What's Included in the Setup

- **GitHub Actions Workflow**: Automatically builds and deploys on every push to main
- **Next.js Configuration**: Already set up for static export with:
  - `output: 'export'`
  - `trailingSlash: true`
  - `basePath` and `assetPrefix` configured for `/suwarnapyakurel-dz`
  - `images: { unoptimized: true }` for static image handling
- **.nojekyll**: Added to prevent GitHub Pages from processing with Jekyll

## After Deployment

- Your site will be available at: `https://suwarna-wave.github.io/suwarnapyakurel-dz`
- The deployment happens automatically on every push to the main branch

## Troubleshooting

- **Missing Images**: If images don't load, check network paths and make sure they're relative to the basePath
- **CSS Not Loading**: Check browser console for path issues and verify basePath is correct
- **404 Errors**: Make sure GitHub Pages is properly configured and deployment completed successfully
- **Navigation Issues**: Ensure all links are relative and compatible with the basePath

## Manual Testing Before Deployment

You can test the static export locally:

```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000` to see how the site will look when deployed.

- Your site will be available at: `https://yourusername.github.io/your-repo-name`
- The deployment happens automatically on every push to the main branch
- Make sure to update the `basePath` and `assetPrefix` in `next.config.mjs` with your actual repository name

## Manual Deployment (Alternative)

If you prefer manual deployment:
\`\`\`bash
npm run deploy
# Then push the 'out' folder to gh-pages branch
\`\`\`

## Troubleshooting

- If images don't load, ensure `unoptimized: true` is set in next.config.mjs
- If CSS doesn't load, check that the basePath matches your repository name
- If the site shows 404, ensure GitHub Pages is configured to use GitHub Actions
