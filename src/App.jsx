import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import OverlayGradient from './components/OverlayGradient';
import Navbar from './components/Navbar';
import HeroText from './components/HeroText';

function App() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Fullscreen background video */}
      <BackgroundVideo src="https://cdn.pixabay.com/video/2024/05/18/212404_large.mp4" />

      {/* Readability overlay */}
      <OverlayGradient />

      {/* Top navigation */}
      <Navbar />

      {/* Hero content */}
      <HeroText />
    </div>
  );
}

export default App;
