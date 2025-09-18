'use client';

import { motion } from 'framer-motion';

const ContactFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center"
    >
      <div className="nes-container is-dark">
        <div className="!mb-4">
          <span className="text-2xl">🎮</span>
        </div>
        <h3 className="text-lg font-bold mb-2">GAME OVER?</h3>
        <p className="text-gray-300 text-sm mb-4">
          Not quite! This is just the beginning of our collaboration.
        </p>
        <div className="text-xs text-gray-400">
          © 2024 Raumil Dhandhukia. Built with ❤️ and lots of ☕
        </div>
      </div>
    </motion.div>
  );
};

export default ContactFooter;
