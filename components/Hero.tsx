// src/components/Hero.tsx
import type { FC } from 'react';

interface HeroProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

const Hero: FC<HeroProps> = ({
  backgroundImage = '/images/house-4.png',
  title = 'DISCOVER THE SPACE YOU BELONG TO',
  subtitle = 'A new land for a new beginning. Designed for those who seek harmony between space, style, and substance.',
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Full-page background image – fills without forced zoom */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Premium modern residence in Addis Ababa"
          className="w-full h-full object-cover object-center brightness-[0.65] contrast-[1.1] scale-100"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay: darker at bottom/sides for text contrast, transparent in center to show more house */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-black/20" /> {/* subtle overall tint */}
      </div>

      {/* Flex container for content – centered vertically/horizontally on the image */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center md:items-start text-center md:text-left text-white space-y-10 md:space-y-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight leading-tight drop-shadow-2xl max-w-4xl">
          {title}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-light max-w-3xl opacity-95 drop-shadow-lg">
          {subtitle}
        </p>

        {/* Search bar – semi-transparent, fits the premium style */}
        <div className="w-full max-w-lg">
          <div className="flex bg-white/15 backdrop-blur-xl rounded-full border border-white/30 overflow-hidden shadow-2xl">
            <input
              type="text"
              placeholder="Search properties, location, or type..."
              className="flex-1 bg-transparent text-white placeholder:text-white/70 outline-none px-6 py-5 text-lg"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-5 transition-colors duration-300 flex items-center gap-3">
              <span>Search</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;