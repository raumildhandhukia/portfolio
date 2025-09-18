'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaGamepad, FaDownload } from 'react-icons/fa';

interface ActionButton {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: 'primary' | 'success' | 'warning';
  onClick: () => void;
}

interface ActionButtonsProps {
  buttons?: ActionButton[];
  className?: string;
}

const defaultButtons: ActionButton[] = [
  {
    text: 'VIEW PROJECTS',
    icon: FaRocket,
    variant: 'primary',
    onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    text: 'CONTACT ME',
    icon: FaGamepad,
    variant: 'success',
    onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    text: 'RESUME',
    icon: FaDownload,
    variant: 'warning',
    onClick: () => {
      // Add resume download logic here
      console.log('Download resume');
    }
  }
];

const ActionButtons = ({ 
  buttons = defaultButtons,
  className = "flex flex-col sm:flex-row gap-4 justify-start"
}: ActionButtonsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className={className}
    >
      {buttons.map((button, index) => {
        const IconComponent = button.icon;
        return (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`nes-btn is-${button.variant} flex !px-6 !py-3`}
            onClick={button.onClick}
          >
            <IconComponent className="text-sm" />
            {button.text}
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ActionButtons;
