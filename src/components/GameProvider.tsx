'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaStar, FaRocket } from 'react-icons/fa';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  unlocked: boolean;
  points: number;
}

interface GameContextType {
  score: number;
  level: number;
  achievements: Achievement[];
  addScore: (points: number) => void;
  unlockAchievement: (id: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first-visit',
      title: 'First Steps',
      description: 'Welcome to the portfolio!',
      icon: FaRocket,
      unlocked: false,
      points: 50,
    },
    {
      id: 'explorer',
      title: 'Explorer',
      description: 'Visited all sections',
      icon: FaStar,
      unlocked: false,
      points: 100,
    },
    {
      id: 'master',
      title: 'Portfolio Master',
      description: 'Reached level 5',
      icon: FaTrophy,
      unlocked: false,
      points: 200,
    },
  ]);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);

  const addScore = (points: number) => {
    setScore(prev => prev + points);
  };

  const unlockAchievement = useCallback((id: string) => {
    setAchievements(prev => 
      prev.map(achievement => {
        if (achievement.id === id && !achievement.unlocked) {
          setNewAchievement(achievement);
          addScore(achievement.points);
          return { ...achievement, unlocked: true };
        }
        return achievement;
      })
    );
  }, []);

  // Calculate level based on score
  useEffect(() => {
    const newLevel = Math.floor(score / 100) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      if (newLevel >= 5) {
        unlockAchievement('master');
      }
    }
  }, [score, level, unlockAchievement]);

  // Welcome achievement
  useEffect(() => {
    const timer = setTimeout(() => {
      unlockAchievement('first-visit');
    }, 2000);
    return () => clearTimeout(timer);
  }, [unlockAchievement]);

  const closeAchievement = () => {
    setNewAchievement(null);
  };

  return (
    <GameContext.Provider value={{ score, level, achievements, addScore, unlockAchievement }}>
      {children}
      
      {/* Achievement Notification */}
      <AnimatePresence>
        {newAchievement && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-28 right-4 z-40 max-w-sm"
          >
            <div className="nes-container is-dark border-yellow-400 !p-4">
              <div className="flex items-start gap-3">
                <div className="text-yellow-400 text-xl flex-shrink-0">
                  <newAchievement.icon />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-yellow-400 text-xs font-bold mb-2">
                    🏆 ACHIEVEMENT UNLOCKED!
                  </h3>
                  <h4 className="text-white text-xs font-bold mb-1">
                    {newAchievement.title}
                  </h4>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    {newAchievement.description}
                  </p>
                  <div className="text-green-400 text-xs font-bold">
                    +{newAchievement.points} XP
                  </div>
                </div>
                <button
                  onClick={closeAchievement}
                  className="text-gray-400 hover:text-white text-sm flex-shrink-0 leading-none"
                >
                  ✕
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Level Up Notification */}
      {/* <AnimatePresence>
        {level > 1 && (
          <motion.div
            key={level}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          >
            <div className="nes-container is-dark border-green-400 text-center !p-6">
              <h2 className="text-green-400 text-xl font-bold mb-3">🎉 LEVEL UP!</h2>
              <div className="text-white text-2xl font-bold">LEVEL {level}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </GameContext.Provider>
  );
};

export default GameProvider;
