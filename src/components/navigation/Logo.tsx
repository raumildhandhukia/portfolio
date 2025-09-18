'use client';

import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-baseline gap-3"
    >
      <div className="pixel-bounce text-2xl leading-none">👨🏻‍💻</div>
      <span className="text-white font-bold text-sm retro-glow leading-none">
        Player : Raumil Dhandhukia
      </span>
    </motion.div>
  );
};

export default Logo;
