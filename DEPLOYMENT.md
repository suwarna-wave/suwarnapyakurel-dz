# GitHub Pages Deployment Guide

## Setup Instructions

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**: 
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
3. **Update Repository Name**: 
   - Edit `next.config.mjs` 
   - Replace `your-repo-name` with your actual repository name
4. **Push Changes**: The workflow will automatically deploy your site

## Important Notes

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
