import React from 'react';
import { Box } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Box className="h-8 w-8 text-gray-900" />
          <span>3D.xyz</span>
        </div>
        <nav className="hidden space-x-8 text-gray-700 sm:block">
          <a href="#" className="hover:text-gray-900">Products</a>
          <a href="#" className="hover:text-gray-900">Creators</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-black px-6 py-2 text-white transition-transform hover:scale-105">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}