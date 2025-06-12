import React from 'react';
import { motion } from 'framer-motion';
import { SplineEmbed } from './SplineEmbed';

interface Section3Props {
  scrollProgress: number;
}

export const Section3: React.FC<Section3Props> = ({ scrollProgress }) => {
  const sectionProgress = Math.max(0, (scrollProgress - 0.66) * 3);
  const isVisible = scrollProgress > 0.6;
  
  // Transition from dark to light
  const lightness = Math.min(sectionProgress * 0.9, 0.9);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Dynamic background with parallax that transitions from dark to light */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            hsl(0, 0%, ${lightness * 95}%), 
            hsl(240, 20%, ${20 + lightness * 60}%), 
            hsl(300, 30%, ${10 + lightness * 80}%))`,
          y: scrollProgress * -25,
        }}
      />
      
      {/* Spline 3D Scene with enhanced parallax and rotation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          scale: 0.9 + sectionProgress * 0.4,
          rotateX: sectionProgress * 20,
          y: sectionProgress * -120,
          rotateZ: sectionProgress * -10,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        <div className="w-3/4 h-3/4">
          <SplineEmbed
            url="https://app.spline.design/file/f044d3f7-00b2-4beb-b062-6f752100177a"
            placeholder="Cracked Mirror Face / Abstract Mirror Figure"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Content overlay with enhanced spacing and parallax */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
        style={{
          opacity: isVisible ? 1 : 0,
          y: sectionProgress * -60,
        }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-12 font-space-grotesk"
          style={{
            color: lightness > 0.5 ? '#1a1a1a' : '#ffffff',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8 
          }}
          transition={{ type: "spring", stiffness: 60, damping: 25 }}
        >
          The{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Mirrorverse
          </span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl font-light mb-16"
          style={{
            color: lightness > 0.5 ? '#4a4a4a' : '#d1d5db',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 30 
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
        >
          What you seek is already inside.
        </motion.p>
        
        <motion.button
          className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:shadow-lg transition-all duration-300 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 50 
          }}
          transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Step into your next reality
        </motion.button>
        
        {/* Hidden revelation text with dynamic entrance */}
        <motion.p
          className="absolute bottom-16 text-2xl font-light"
          style={{
            color: lightness > 0.5 ? '#2a2a2a' : '#ffffff',
            opacity: sectionProgress > 0.8 ? 1 : 0,
            y: sectionProgress > 0.8 ? 0 : 30,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20, duration: 2 }}
        >
          This is you.
        </motion.p>
      </motion.div>
    </section>
  );
};