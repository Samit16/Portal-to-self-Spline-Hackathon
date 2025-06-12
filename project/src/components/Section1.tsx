import React from 'react';
import { motion } from 'framer-motion';
import { SplineEmbed } from './SplineEmbed';

interface Section1Props {
  scrollProgress: number;
}

export const Section1: React.FC<Section1Props> = ({ scrollProgress }) => {
  const sectionProgress = Math.min(scrollProgress * 3, 1);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background gradient with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900"
        style={{
          opacity: 1 - sectionProgress * 0.3,
          y: sectionProgress * -50,
        }}
      />
      
      {/* Spline 3D Scene with enhanced parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          scale: 1 + sectionProgress * 0.4,
          opacity: 1 - sectionProgress * 0.5,
          y: sectionProgress * -100,
          rotateZ: sectionProgress * 5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="w-3/4 h-3/4">
          <SplineEmbed
            url="https://app.spline.design/file/bb2dfaf8-c23b-4205-8eb5-2adc2770d7ba"
            placeholder="Floating Glowing Orb"
            className="rounded-full"
          />
        </div>
      </motion.div>

      {/* Content overlay with enhanced spacing and parallax */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-12 font-space-grotesk"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.5 }}
          style={{
            y: sectionProgress * -30,
          }}
        >
          Enter the{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Void
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 font-light mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 1 }}
          style={{
            opacity: 1 - sectionProgress * 0.8,
            y: sectionProgress * -20,
          }}
        >
          Reality is optional.
        </motion.p>
        
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 10,
            duration: 2, 
            repeat: Infinity 
          }}
          style={{
            opacity: 1 - sectionProgress * 2,
            y: sectionProgress * 50,
          }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};