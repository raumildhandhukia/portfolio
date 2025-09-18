'use client';

import { motion } from 'framer-motion';

interface StatusItem {
  label: string;
  value: string;
  color: string;
}

interface StatusDisplayProps {
  title?: string;
  statusItems?: StatusItem[];
  className?: string;
}

const defaultStatusItems: StatusItem[] = [
  { label: 'HP:', value: '999/999', color: 'text-green-400' },
  { label: 'MP:', value: '∞', color: 'text-blue-400' },
  { label: 'LVL:', value: 'SENIOR', color: 'text-yellow-400' },
  { label: 'EXP:', value: '5+ YRS', color: 'text-purple-400' }
];

const StatusDisplay = ({ 
  title = "PLAYER STATUS",
  statusItems = defaultStatusItems,
  className = "w-full max-w-sm"
}: StatusDisplayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className={className}
    >
      <div className="nes-container is-dark">
        <div className="text-center mb-4">
          <div className="text-sm font-bold text-blue-400 mb-3">{title}</div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            {statusItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.label}</span>
                <span className={`${item.color} font-bold`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatusDisplay;
