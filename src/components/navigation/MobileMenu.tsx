'use client';

import { motion } from 'framer-motion';
import { FaGamepad } from 'react-icons/fa';

interface MobileMenuProps {
  navItems: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  activeSection: string;
  onItemClick: (sectionId: string) => void;
}

const MobileMenu = ({ navItems, activeSection, onItemClick }: MobileMenuProps) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="nes-btn is-dark !text-xs !px-3 !py-2">
          <FaGamepad />
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 left-4 right-4 md:hidden z-40"
      >
        <div className="nes-container is-dark">
          <div className="flex justify-between items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onItemClick(item.id)}
                  className={`p-2 rounded ${
                    isActive 
                      ? 'text-blue-400 bg-blue-400/20' 
                      : 'text-gray-400 hover:text-white'
                  } transition-colors duration-300`}
                >
                  <Icon className="text-lg" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
