# Custom Domain Setup for GitHub Pages

## Changes Made for Your Custom Domain (suwarnapyakurel.com.np)

1. **Updated Next.js Configuration**:
   - Removed GitHub Pages specific basePath and assetPrefix
   - Now your site will work with both the custom domain and GitHub Pages URL

2. **Added CNAME File**:
   - Created `public/CNAME` with your domain: suwarnapyakurel.com.np
   - This tells GitHub Pages which domain to serve your site from

3. **Updated Asset Path Utility**:
   - Modified `getAssetPath` in `utils.ts` to handle paths without GitHub Pages prefix
   - This makes all images and assets work with your custom domain

4. **Created New GitHub Actions Workflow**:
   - Added `gh-pages-deploy.yml` that uses a more reliable GitHub Pages deployment action
   - This will create a dedicated gh-pages branch with your built site

5. **Added Error Page**:
   - Created a custom 404 page that matches your site's design
   - This will show when users try to access non-existent pages

## How to Deploy

1. **Push all changes to GitHub**:
   ```bash
   git add .
   git commit -m "Configure for custom domain deployment"
   git push origin main
   ```

2. **Verify Custom Domain Settings**:
   - Go to your GitHub repository Settings > Pages
   - Ensure your custom domain is set to: suwarnapyakurel.com.np
   - Make sure "Enforce HTTPS" is checked (if available)

3. **DNS Configuration**:
   - Make sure your domain provider has the correct DNS records:
     - Type: A Records pointing to GitHub Pages IPs:
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
     - OR a CNAME record pointing to: suwarna-wave.github.io

4. **Wait for Deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site should be available at https://suwarnapyakurel.com.np/

## Troubleshooting

- **Still Showing README**: Make sure the GitHub Actions workflow has completed successfully
- **Custom Domain Not Working**: Check DNS propagation (can take up to 48 hours)
- **Missing Images/Styles**: Verify that all asset paths are correct
- **404 Errors**: Ensure the build process completed without errors

## Testing Locally

```bash
npm install
npm run build
npx serve out
```

Then visit http://localhost:3000 to see your site locally.