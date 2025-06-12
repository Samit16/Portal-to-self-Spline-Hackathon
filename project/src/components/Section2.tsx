import React from 'react';
import { motion } from 'framer-motion';
import { SplineEmbed } from './SplineEmbed';

interface Section2Props {
  scrollProgress: number;
}

export const Section2: React.FC<Section2Props> = ({ scrollProgress }) => {
  const sectionProgress = Math.max(0, Math.min((scrollProgress - 0.33) * 3, 1));
  const isVisible = scrollProgress > 0.2 && scrollProgress < 0.8;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background gradient with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-800 to-blue-900"
        style={{
          opacity: isVisible ? 1 : 0.3,
          y: scrollProgress * -30,
        }}
      />
      
      {/* Stars/particles background with floating parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{
          y: scrollProgress * -20,
        }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
      
      {/* Spline 3D Scene with enhanced rotation and parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          rotateY: sectionProgress * 540,
          scale: 0.8 + sectionProgress * 0.6,
          y: sectionProgress * -80,
          rotateX: sectionProgress * 15,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
      >
        <div className="w-4/5 h-4/5">
          <SplineEmbed
            url="https://app.spline.design/file/15d82928-7df0-43fe-b97a-13e635fff8a9"
            placeholder="Rotating Cube World / Dimensional Tunnel"
            className="rounded-lg"
          />
        </div>
      </motion.div>

      {/* Content overlay with enhanced spacing */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
        style={{
          opacity: isVisible ? 1 : 0,
          y: sectionProgress * -40,
        }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-12 font-space-grotesk"
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : -100 
          }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          Dimensional{' '}
          <span className="bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">
            Drift
          </span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-gray-300 font-light mb-16"
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : 100 
          }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
        >
          Things bend. Perception shifts.
        </motion.p>
      </motion.div>
    </section>
  );
};