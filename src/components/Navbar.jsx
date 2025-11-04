import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-yellow-300/90 ring-2 ring-white/10 shadow-lg" />
          <span className="text-white/90 font-semibold tracking-wide uppercase">NYC</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-white/80">
          <a href="#landmarks" className="hover:text-white transition-colors">Landmarks</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#visit" className="hover:text-white transition-colors">Plan your visit</a>
        </nav>
      </div>
    </header>
  );
}
