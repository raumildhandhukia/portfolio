'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaHome, FaGamepad } from 'react-icons/fa';

export default function NotFound() {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering for animations with Math.random()
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {isClient && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 opacity-30"
            animate={{
              x: [0, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [0, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
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

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Display */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold text-red-400 retro-glow mb-4">
              404
            </div>
          </motion.div>

          {/* Game Over Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="nes-container is-dark mb-8"
          >
            <div className="text-6xl mb-4">💀</div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-red-400">
              GAME OVER
            </h1>
            <p className="text-lg mb-4">PAGE NOT FOUND</p>
            <p className="text-gray-300 text-sm mb-6">
              Looks like you ventured into uncharted territory! 
              This page doesn&apos;t exist in our digital realm.
            </p>
            
            {/* Error Code */}
            <div className="text-xs text-gray-400 mb-6">
              ERROR CODE: PAGE_NOT_FOUND_404
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="nes-btn is-primary flex items-center gap-2">
                <FaHome className="text-sm" />
                RETURN HOME
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button 
                onClick={() => window.history.back()}
                className="nes-btn is-warning flex items-center gap-2"
              >
                <FaGamepad className="text-sm" />
                GO BACK
              </button>
            </motion.div>
          </motion.div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12"
          >
            <div className="nes-container is-dark max-w-md mx-auto">
              <h3 className="text-lg font-bold mb-4 text-yellow-400">PRO TIPS</h3>
              <ul className="text-left text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▶</span>
                  <span>Check the URL for typos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▶</span>
                  <span>Use the navigation menu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▶</span>
                  <span>Try the search function</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">▶</span>
                  <span>Contact me if you think this is a bug</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-xs text-gray-500"
          >
            <p>🎮 Achievement Unlocked: Page Explorer - Found a missing page!</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
