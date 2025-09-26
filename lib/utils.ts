import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to ensure paths work with both custom domain and GitHub Pages
 * For use with images, stylesheets, and other assets
 */
export function getAssetPath(path: string): string {
  // Remove leading slash to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Always use root-relative paths for both development and production
  return `/${cleanPath}`
}
