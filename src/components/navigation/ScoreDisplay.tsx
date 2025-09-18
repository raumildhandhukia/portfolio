'use client';

import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

interface ScoreDisplayProps {
  score: number;
}

const ScoreDisplay = ({ score }: ScoreDisplayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden sm:block"
    >
      <div className="nes-container is-dark !p-2">
        <div className="flex items-center gap-2">
          <FaUser className="text-yellow-400 text-xs" />
          <span className="text-yellow-400 text-xs">SCORE: {score.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ScoreDisplay;
