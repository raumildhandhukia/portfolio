"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Spaceship {
  id: string;
  x: number;
  y: number;
  direction: 'left' | 'right';
  type: 'fighter' | 'cruiser' | 'scout';
  speed: number;
}

interface Meteor {
  id: string;
  x: number;
  y: number;
  size: 'small' | 'medium' | 'large';
  angle: number;
}

interface Star {
  id: string;
  x: number;
  y: number;
  size: number;
  twinkleDelay: number;
}

const SpaceBackground = () => {
  const [spaceships, setSpaceships] = useState<Spaceship[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });

  // Get window dimensions safely
  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize stars
  useEffect(() => {
    if (windowDimensions.width > 0) {
      const newStars: Star[] = [];
      for (let i = 0; i < 80; i++) {
        newStars.push({
          id: `star-${i}`,
          x: Math.random() * windowDimensions.width,
          y: Math.random() * windowDimensions.height,
          size: Math.random() * 2 + 1,
          twinkleDelay: Math.random() * 5,
        });
      }
      setStars(newStars);
    }
  }, [windowDimensions]);

  // Spawn spaceships
  useEffect(() => {
    if (windowDimensions.width === 0) return;

    const spawnSpaceship = () => {
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const types: ('fighter' | 'cruiser' | 'scout')[] = ['fighter', 'cruiser', 'scout'];
      
      const spaceship: Spaceship = {
        id: Math.random().toString(36).substr(2, 9),
        x: direction === 'left' ? -100 : windowDimensions.width + 100,
        y: Math.random() * (windowDimensions.height - 200) + 100,
        direction,
        type: types[Math.floor(Math.random() * types.length)],
        speed: Math.random() * 2 + 3, // 3-5 speed
      };

      setSpaceships(prev => [...prev, spaceship]);

      // Remove spaceship after it crosses the screen
      setTimeout(() => {
        setSpaceships(prev => prev.filter(s => s.id !== spaceship.id));
      }, 8000);
    };

    const interval = setInterval(spawnSpaceship, 3000);
    spawnSpaceship(); // Initial spaceship

    return () => clearInterval(interval);
  }, [windowDimensions]);

  // Spawn meteors
  useEffect(() => {
    if (windowDimensions.width === 0) return;

    const spawnMeteor = () => {
      const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
      
      const meteor: Meteor = {
        id: Math.random().toString(36).substr(2, 9),
        x: Math.random() * windowDimensions.width + 100,
        y: -50,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        angle: Math.random() * 60 + 15, // 15-75 degrees
      };

      setMeteors(prev => [...prev, meteor]);

      // Remove meteor after it goes off screen
      setTimeout(() => {
        setMeteors(prev => prev.filter(m => m.id !== meteor.id));
      }, 6000);
    };

    const interval = setInterval(spawnMeteor, 4000);
    spawnMeteor(); // Initial meteor

    return () => clearInterval(interval);
  }, [windowDimensions]);

  const getSpaceshipComponent = (ship: Spaceship) => {
    const baseClasses = "absolute pixel-art";
    
    switch (ship.type) {
      case 'fighter':
        return (
          <div className={`${baseClasses} w-8 h-4`}>
            {/* Fighter spaceship design */}
            <div className="absolute inset-0 bg-blue-500 border border-blue-300 pixel-art"></div>
            <div className="absolute top-1 left-1 w-6 h-2 bg-blue-300 pixel-art"></div>
            <div className="absolute top-0 left-2 w-4 h-1 bg-cyan-400 pixel-art"></div>
            {/* Engines */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-1 ${ship.direction === 'left' ? 'right-0' : 'left-0'} w-1 h-2 bg-orange-400 pixel-art`}
            ></motion.div>
          </div>
        );
      
      case 'cruiser':
        return (
          <div className={`${baseClasses} w-12 h-6`}>
            {/* Cruiser spaceship design */}
            <div className="absolute inset-0 bg-gray-600 border border-gray-400 pixel-art"></div>
            <div className="absolute top-1 left-2 w-8 h-4 bg-gray-400 pixel-art"></div>
            <div className="absolute top-2 left-3 w-6 h-2 bg-blue-400 pixel-art"></div>
            {/* Multiple engines */}
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-1 ${ship.direction === 'left' ? 'right-0' : 'left-0'} w-1 h-4 bg-red-500 pixel-art`}
            ></motion.div>
          </div>
        );
      
      case 'scout':
        return (
          <div className={`${baseClasses} w-6 h-3`}>
            {/* Scout spaceship design */}
            <div className="absolute inset-0 bg-green-500 border border-green-300 pixel-art"></div>
            <div className="absolute top-0 left-1 w-4 h-3 bg-green-300 pixel-art"></div>
            <div className="absolute top-1 left-2 w-2 h-1 bg-yellow-400 pixel-art"></div>
            {/* Engine */}
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-1 ${ship.direction === 'left' ? 'right-0' : 'left-0'} w-1 h-1 bg-cyan-400 pixel-art`}
            ></motion.div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const getMeteorSize = (size: string) => {
    switch (size) {
      case 'large': return 'w-6 h-6';
      case 'medium': return 'w-4 h-4';
      case 'small': return 'w-2 h-2';
      default: return 'w-3 h-3';
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white pixel-art"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Flying Spaceships */}
      {spaceships.map((ship) => (
        <motion.div
          key={ship.id}
          initial={{
            x: ship.x,
            y: ship.y,
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            x: ship.direction === 'left' 
              ? windowDimensions.width + 100 
              : -100,
            y: ship.y + (Math.random() - 0.5) * 100,
            scale: 1,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: ship.speed,
            ease: "linear",
          }}
          style={{
            transform: ship.direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
          }}
        >
          {getSpaceshipComponent(ship)}
        </motion.div>
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          initial={{
            x: meteor.x,
            y: meteor.y,
            scale: 0.3,
            opacity: 0,
          }}
          animate={{
            x: meteor.x - 200,
            y: windowDimensions.height + 100,
            scale: 1,
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 6,
            ease: "easeIn",
          }}
          className="absolute"
        >
          {/* Meteor body */}
          <div 
            className={`${getMeteorSize(meteor.size)} bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 border border-orange-300 pixel-art`}
            style={{
              boxShadow: '0 0 8px #ff6600',
            }}
          />
          
          {/* Meteor trail */}
          <motion.div
            animate={{
              opacity: [0.8, 0.4, 0.8],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1 -right-1 w-8 h-1 bg-gradient-to-r from-orange-400 to-transparent pixel-art"
            style={{
              transform: `rotate(${meteor.angle}deg)`,
              transformOrigin: 'left center',
            }}
          />
        </motion.div>
      ))}

      {/* Distant planets/moons */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-600 rounded-full border-2 border-purple-400 opacity-30 pixel-art"></div>
      <div className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full border-2 border-blue-400 opacity-25 pixel-art"></div>
      
      {/* Nebula effects */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
      />
      
      <motion.div
        animate={{
          opacity: [0.05, 0.2, 0.05],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-15 blur-xl"
      />
    </div>
  );
};

export default SpaceBackground;
