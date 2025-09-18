'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GitHubCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center mt-16"
    >
      <div className="nes-container is-dark max-w-md mx-auto">
        <h3 className="text-lg font-bold mb-4">WANT TO SEE MORE?</h3>
        <p className="text-gray-300 text-sm mb-6">
          Check out my GitHub for more projects and contributions
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="nes-btn is-primary flex items-center justify-center gap-2 mx-auto"
        >
          <FaGithub />
          VIEW GITHUB
        </motion.a>
      </div>
    </motion.div>
  );
};

export default GitHubCTA;
