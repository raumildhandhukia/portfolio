'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  score: number;
}

const ProgressBar = ({ score }: ProgressBarProps) => {
  return (
    <motion.div
      className="h-1 bg-blue-500 origin-left"
      style={{
        scaleX: Math.min(score / 1000, 1), // Max out at 1000 points
      }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ProgressBar;
