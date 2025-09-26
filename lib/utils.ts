import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to ensure paths work with GitHub Pages basePath
 * For use with images, stylesheets, and other assets
 */
export function getAssetPath(path: string): string {
  // Remove leading slash to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In development, use root-relative paths
  if (process.env.NODE_ENV !== 'production') {
    return `/${cleanPath}`
  }
  
  // In production, prefix with the basePath for GitHub Pages
  return `/suwarnapyakurel-dz/${cleanPath}`
}
