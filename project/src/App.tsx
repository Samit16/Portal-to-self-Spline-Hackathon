import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CustomCursor } from './components/CustomCursor';
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2';
import { Section3 } from './components/Section3';
import { useScrollPosition } from './hooks/useScrollPosition';

function App() {
  const { scrollProgress } = useScrollPosition();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      
      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 z-50"
        style={{
          width: `${scrollProgress * 100}%`,
        }}
      />
      
      {/* Main content */}
      <main className="relative">
        <Section1 scrollProgress={scrollProgress} />
        <Section2 scrollProgress={scrollProgress} />
        <Section3 scrollProgress={scrollProgress} />
      </main>
      
      {/* Ambient overlay for depth */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-10" />
      </div>
    </div>
  );
}

export default App;