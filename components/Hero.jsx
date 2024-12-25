import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1633899306328-c5e70574aaa3?auto=format&fit=crop&q=80"
          alt="3D Printing Background"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Transform Your Space with
            <span className="block text-blue-400">3D Printed Art</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl text-gray-300">
            Discover unique, customizable 3D-printed designs that bring innovation and creativity to your home.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-blue-400 hover:text-white">
              Shop Now
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold transition-all hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}