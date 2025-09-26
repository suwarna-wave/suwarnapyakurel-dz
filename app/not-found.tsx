"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function Custom404() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Log the 404 error
    console.error(`Page not found: ${pathname}`);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
          404
        </h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex justify-center mt-6">
          <Link href="/" passHref>
            <Button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}