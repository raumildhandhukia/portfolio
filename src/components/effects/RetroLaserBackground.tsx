"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Laser {
  id: string;
  x: number;
  y: number;
  direction: 'left' | 'right';
  color: string;
}

interface Explosion {
  id: string;
  x: number;
  y: number;
}

const laserColors = ['#00ff00', '#ff0040', '#00bfff', '#ffff00', '#ff6600'];

const RetroLaserBackground = () => {
  const [lasers, setLasers] = useState<Laser[]>([]);
  const [explosions, setExplosions] = useState<Explosion[]>([]);

  useEffect(() => {
    const createLaser = () => {
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const newLaser: Laser = {
        id: Math.random().toString(36).substr(2, 9),
        x: direction === 'left' ? -20 : 1200,
        y: Math.random() * 800,
        direction,
        color: laserColors[Math.floor(Math.random() * laserColors.length)],
      };
      
      setLasers(prev => [...prev, newLaser]);

      // Remove laser after animation
      setTimeout(() => {
        setLasers(prev => prev.filter(laser => laser.id !== newLaser.id));
      }, 3000);

      // Sometimes create explosion when lasers "hit"
      if (Math.random() > 0.7) {
        setTimeout(() => {
          const explosion: Explosion = {
            id: Math.random().toString(36).substr(2, 9),
            x: Math.random() * 1200,
            y: Math.random() * 800,
          };
          
          setExplosions(prev => [...prev, explosion]);
          
          setTimeout(() => {
            setExplosions(prev => prev.filter(exp => exp.id !== explosion.id));
          }, 1000);
        }, 1500);
      }
    };

    const interval = setInterval(createLaser, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Moving Grid Lines */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Laser Beams */}
      {lasers.map((laser) => (
        <motion.div
          key={laser.id}
          className="absolute w-2 h-1 rounded-full"
          style={{
            backgroundColor: laser.color,
            boxShadow: `0 0 10px ${laser.color}, 0 0 20px ${laser.color}`,
          }}
          initial={{
            x: laser.x,
            y: laser.y,
            scale: 0,
          }}
          animate={{
            x: laser.direction === 'left' ? 1300 : -100,
            y: laser.y + (Math.random() - 0.5) * 200,
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            ease: "linear",
          }}
        />
      ))}

      {/* Explosions */}
      {explosions.map((explosion) => (
        <motion.div
          key={explosion.id}
          className="absolute w-8 h-8 rounded-full"
          style={{
            x: explosion.x - 16,
            y: explosion.y - 16,
            background: 'radial-gradient(circle, #ff6600 0%, #ff0040 30%, transparent 70%)',
            boxShadow: '0 0 30px #ff6600, 0 0 60px #ff0040',
          }}
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: [0, 2, 4],
            opacity: [1, 0.7, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Flying Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            boxShadow: '0 0 4px #00bfff',
          }}
          animate={{
            x: [
              Math.random() * 1200,
              Math.random() * 1200,
              Math.random() * 1200,
            ],
            y: [
              Math.random() * 800,
              Math.random() * 800,
              Math.random() * 800,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* Scanning Lines */}
      <motion.div
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60"
        animate={{
          y: [-10, 810],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          boxShadow: '0 0 20px #00ff00',
        }}
      />

      <motion.div
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-40"
        animate={{
          y: [810, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
        style={{
          boxShadow: '0 0 20px #ff0080',
        }}
      />

      {/* Corner Brackets (8-bit UI elements) */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-cyan-400 opacity-60" />
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-cyan-400 opacity-60" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-cyan-400 opacity-60" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-cyan-400 opacity-60" />

      {/* Radar Sweep */}
      <motion.div
        className="absolute top-8 right-8 w-24 h-24 rounded-full border-2 border-green-400 opacity-40"
        style={{
          background: 'conic-gradient(from 0deg, transparent 70%, rgba(0, 255, 0, 0.3) 90%, transparent 100%)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default RetroLaserBackground;