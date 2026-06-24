/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Custom-domain deployment: assets are served from the site root.
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
