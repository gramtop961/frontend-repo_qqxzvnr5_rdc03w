import React from 'react';

export default function BackgroundVideo({ src, poster }) {
  return (
    <video
      className="fixed inset-0 h-full w-full object-cover z-0 pointer-events-none"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
