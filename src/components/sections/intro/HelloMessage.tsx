'use client';

import { motion } from 'framer-motion';

interface HelloMessageProps {
  message?: string;
  className?: string;
}

const HelloMessage = ({ 
  message = "HELLO WORLD! I'm",
  className = "mb-6" 
}: HelloMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={className}
    >
      <span className="nes-text is-primary text-base">{message}</span>
    </motion.div>
  );
};

export default HelloMessage;
