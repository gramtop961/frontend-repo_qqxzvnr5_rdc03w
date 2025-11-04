import React from 'react';

export default function HeroText() {
  return (
    <section className="relative z-20 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight">
            <span className="block text-sky-300 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">Welcome to</span>
            <span className="block text-yellow-300 mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">City of New York</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80">
            Discover iconic skylines, vibrant neighborhoods, and endless possibilities in the city that never sleeps.
          </p>
        </div>
      </div>
    </section>
  );
}
