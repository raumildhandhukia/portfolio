'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const Background = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering for animations with Math.random()
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {isClient && [...Array(120)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500 opacity-20"
          animate={{
            x: [0, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
            y: [0, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  )
}

export default Background;