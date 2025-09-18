'use client';

import { motion } from 'framer-motion';
import { FaCog } from 'react-icons/fa';

const TechnologiesHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 flex flex-col items-center"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <FaCog className="text-3xl text-purple-400" />
        <h2 className="text-4xl font-bold retro-glow">TECH STACK</h2>
      </div>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm">
        Technologies and tools I use to bring ideas to life
      </p>
    </motion.div>
  );
};

export default TechnologiesHeader;
