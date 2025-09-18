'use client';

import { motion } from 'framer-motion';
import { TypewriterEffect } from '../../effects';

interface TypewriterRoleProps {
  texts?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
}

const defaultTexts = [
  'Full Stack Developer',
  'Problem Solver', 
  'Tech Enthusiast',
  'Code Craftsman'
];

const TypewriterRole = ({ 
  texts = defaultTexts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = "text-xl lg:text-2xl text-green-400",
  cursorClassName = "animate-pulse"
}: TypewriterRoleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mb-8 h-8"
    >
      <TypewriterEffect
        texts={texts}
        typingSpeed={typingSpeed}
        deletingSpeed={deletingSpeed}
        pauseTime={pauseTime}
        className={className}
        cursorClassName={cursorClassName}
      />
    </motion.div>
  );
};

export default TypewriterRole;
