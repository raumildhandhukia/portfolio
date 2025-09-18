'use client';

import { motion } from 'framer-motion';
import { ComponentType } from 'react';

interface NavButtonProps {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  isActive: boolean;
  index: number;
  onClick: () => void;
}

// Creative color schemes for each button
const buttonStyles = {
  'intro': {
    active: 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-2 border-cyan-300 shadow-lg shadow-blue-500/30',
    inactive: 'bg-gray-800 text-gray-300 border-2 border-gray-600 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-cyan-400/50 hover:border-cyan-300/50 hover:text-white hover:shadow-lg hover:shadow-blue-500/15'
  },
  'experience': {
    active: 'bg-gradient-to-r from-green-500 to-emerald-400 text-white border-2 border-emerald-300 shadow-lg shadow-green-500/30',
    inactive: 'bg-gray-800 text-gray-300 border-2 border-gray-600 hover:bg-gradient-to-r hover:from-green-500/50 hover:to-emerald-400/50 hover:border-emerald-300/50 hover:text-white hover:shadow-lg hover:shadow-green-500/15'
  },
  'projects': {
    active: 'bg-gradient-to-r from-yellow-500 to-orange-400 text-white border-2 border-orange-300 shadow-lg shadow-yellow-500/30',
    inactive: 'bg-gray-800 text-gray-300 border-2 border-gray-600 hover:bg-gradient-to-r hover:from-yellow-500/50 hover:to-orange-400/50 hover:border-orange-300/50 hover:text-white hover:shadow-lg hover:shadow-yellow-500/15'
  },
  'technologies': {
    active: 'bg-gradient-to-r from-purple-500 to-pink-400 text-white border-2 border-pink-300 shadow-lg shadow-purple-500/30',
    inactive: 'bg-gray-800 text-gray-300 border-2 border-gray-600 hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-pink-400/50 hover:border-pink-300/50 hover:text-white hover:shadow-lg hover:shadow-purple-500/15'
  },
  'contact': {
    active: 'bg-gradient-to-r from-red-500 to-rose-400 text-white border-2 border-rose-300 shadow-lg shadow-red-500/30',
    inactive: 'bg-gray-800 text-gray-300 border-2 border-gray-600 hover:bg-gradient-to-r hover:from-red-500/50 hover:to-rose-400/50 hover:border-rose-300/50 hover:text-white hover:shadow-lg hover:shadow-red-500/15'
  }
};

const NavButton = ({ id, label, icon: Icon, isActive, index, onClick }: NavButtonProps) => {
  const currentStyle = buttonStyles[id as keyof typeof buttonStyles];
  const buttonClass = isActive ? currentStyle.active : currentStyle.inactive;

  return (
    <motion.button
      initial={{ opacity: 0, x: 10, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.1,
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${buttonClass} !text-xs !px-4 !py-3 flex items-center gap-2 transition-all duration-300 rounded-lg font-bold uppercase tracking-wide relative overflow-hidden group`}
    >
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon with rotation effect - spins when active */}
      <motion.div
        animate={{ 
          rotate: isActive ? 360 : 0,
          scale: isActive ? 1.1 : 1
        }}
        transition={{ 
          duration: 2,
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
        key={`${id}-${isActive ? 'active' : 'inactive'}`}
      >
        <Icon className="text-sm relative z-10" />
      </motion.div>
      
      {/* Text with slide effect */}
      <motion.span 
        className="hidden lg:inline relative z-10"
        animate={{ x: isActive ? [0, 2, 0] : 0 }}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0, repeatDelay: 2 }}
      >
        {label}
      </motion.span>
      
      {/* Active indicator dot */}
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-2 h-2 bg-white rounded-full relative z-10"
        />
      )}
    </motion.button>
  );
};

export default NavButton;
