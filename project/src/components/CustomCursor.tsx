import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{ x: x - 8, y: y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-pink-400 rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{ x: x - 16, y: y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
      />
    </>
  );
};