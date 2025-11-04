import React from 'react';

export default function OverlayGradient() {
  return (
    <div
      className="fixed inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/70 via-black/40 to-transparent"
      aria-hidden="true"
    />
  );
}
