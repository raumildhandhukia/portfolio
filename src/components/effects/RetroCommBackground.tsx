"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MessageRobot {
  id: string;
  x: number;
  y: number;
  direction: 'left' | 'right';
  type: 'mail' | 'data' | 'signal';
  speed: number;
}

interface FlyingMessage {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  type: 'email' | 'message' | 'notification';
}

interface CommunicationWave {
  id: string;
  x: number;
  y: number;
  radius: number;
  type: 'radio' | 'wifi' | 'satellite';
}

interface DataPacket {
  id: string;
  x: number;
  y: number;
  path: { x: number; y: number }[];
  currentPathIndex: number;
}

const RetroCommBackground = () => {
  const [messageRobots, setMessageRobots] = useState<MessageRobot[]>([]);
  const [flyingMessages, setFlyingMessages] = useState<FlyingMessage[]>([]);
  const [commWaves, setCommWaves] = useState<CommunicationWave[]>([]);
  const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);
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

  // Spawn message delivery robots
  useEffect(() => {
    if (windowDimensions.width === 0) return;

    const spawnRobot = () => {
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const types: ('mail' | 'data' | 'signal')[] = ['mail', 'data', 'signal'];
      
      const robot: MessageRobot = {
        id: Math.random().toString(36).substr(2, 9),
        x: direction === 'left' ? -100 : windowDimensions.width + 100,
        y: Math.random() * (windowDimensions.height - 300) + 150,
        direction,
        type: types[Math.floor(Math.random() * types.length)],
        speed: Math.random() * 3 + 4, // 4-7 speed
      };

      setMessageRobots(prev => [...prev, robot]);

      setTimeout(() => {
        setMessageRobots(prev => prev.filter(r => r.id !== robot.id));
      }, 10000);
    };

    const interval = setInterval(spawnRobot, 4000);
    spawnRobot();

    return () => clearInterval(interval);
  }, [windowDimensions]);

  // Spawn flying messages
  useEffect(() => {
    if (windowDimensions.width === 0) return;

    const spawnMessage = () => {
      const types: ('email' | 'message' | 'notification')[] = ['email', 'message', 'notification'];
      
      const message: FlyingMessage = {
        id: Math.random().toString(36).substr(2, 9),
        x: Math.random() * windowDimensions.width,
        y: Math.random() * windowDimensions.height,
        targetX: Math.random() * windowDimensions.width,
        targetY: Math.random() * windowDimensions.height,
        type: types[Math.floor(Math.random() * types.length)],
      };

      setFlyingMessages(prev => [...prev, message]);

      setTimeout(() => {
        setFlyingMessages(prev => prev.filter(m => m.id !== message.id));
      }, 8000);
    };

    const interval = setInterval(spawnMessage, 2500);
    spawnMessage();

    return () => clearInterval(interval);
  }, [windowDimensions]);

  // Spawn communication waves
  useEffect(() => {
    if (windowDimensions.width === 0) return;

    const spawnWave = () => {
      const types: ('radio' | 'wifi' | 'satellite')[] = ['radio', 'wifi', 'satellite'];
      
      const wave: CommunicationWave = {
        id: Math.random().toString(36).substr(2, 9),
        x: Math.random() * windowDimensions.width,
        y: Math.random() * windowDimensions.height,
        radius: 0,
        type: types[Math.floor(Math.random() * types.length)],
      };

      setCommWaves(prev => [...prev, wave]);

      setTimeout(() => {
        setCommWaves(prev => prev.filter(w => w.id !== wave.id));
      }, 5000);
    };

    const interval = setInterval(spawnWave, 3000);
    spawnWave();

    return () => clearInterval(interval);
  }, [windowDimensions]);

  // Spawn data packets
  useEffect(() => {
    if (windowDimensions.width === 0) return;

    const spawnDataPacket = () => {
      // Create a random path
      const pathPoints = [];
      const numPoints = 4 + Math.floor(Math.random() * 3); // 4-6 points
      
      for (let i = 0; i < numPoints; i++) {
        pathPoints.push({
          x: Math.random() * windowDimensions.width,
          y: Math.random() * windowDimensions.height,
        });
      }

      const packet: DataPacket = {
        id: Math.random().toString(36).substr(2, 9),
        x: pathPoints[0].x,
        y: pathPoints[0].y,
        path: pathPoints,
        currentPathIndex: 0,
      };

      setDataPackets(prev => [...prev, packet]);

      setTimeout(() => {
        setDataPackets(prev => prev.filter(p => p.id !== packet.id));
      }, 12000);
    };

    const interval = setInterval(spawnDataPacket, 3500);
    spawnDataPacket();

    return () => clearInterval(interval);
  }, [windowDimensions]);

  const getRobotComponent = (robot: MessageRobot) => {
    const baseClasses = "absolute pixel-art";
    
    switch (robot.type) {
      case 'mail':
        return (
          <div className={`${baseClasses} w-12 h-10`}>
            {/* Mail Robot Body */}
            <div className="absolute inset-0 bg-blue-500 border-2 border-blue-300 pixel-art rounded-sm">
              {/* Robot Head */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-blue-300 border border-blue-600 pixel-art"></div>
              
              {/* Eyes */}
              <div className="absolute top-1 left-2 w-1 h-1 bg-yellow-400 pixel-art"></div>
              <div className="absolute top-1 right-2 w-1 h-1 bg-yellow-400 pixel-art"></div>
              
              {/* Mail Slot */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-800 pixel-art"></div>
              
              {/* Envelope in slot */}
              <motion.div
                animate={{
                  y: [0, -2, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-white border border-gray-400 pixel-art"
              ></motion.div>
              
              {/* Wheels */}
              <motion.div
                animate={{ rotate: robot.direction === 'left' ? 360 : -360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-1 w-3 h-3 bg-gray-600 border border-gray-800 rounded-full pixel-art"
              ></motion.div>
              <motion.div
                animate={{ rotate: robot.direction === 'left' ? 360 : -360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 right-1 w-3 h-3 bg-gray-600 border border-gray-800 rounded-full pixel-art"
              ></motion.div>
            </div>
          </div>
        );
      
      case 'data':
        return (
          <div className={`${baseClasses} w-10 h-8`}>
            {/* Data Robot Body */}
            <div className="absolute inset-0 bg-green-500 border-2 border-green-300 pixel-art">
              {/* Antenna */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-green-300 pixel-art"></div>
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full pixel-art"
              ></motion.div>
              
              {/* Screen */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-black border border-green-600 pixel-art">
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0.5 bg-green-400 pixel-art"
                ></motion.div>
              </div>
              
              {/* Data Ports */}
              <div className="absolute bottom-2 left-1 w-1 h-1 bg-red-400 pixel-art"></div>
              <div className="absolute bottom-2 right-1 w-1 h-1 bg-red-400 pixel-art"></div>
            </div>
          </div>
        );
      
      case 'signal':
        return (
          <div className={`${baseClasses} w-8 h-8`}>
            {/* Signal Robot Body */}
            <div className="absolute inset-0 bg-purple-500 border-2 border-purple-300 pixel-art rounded-full">
              {/* Signal Waves */}
              <motion.div
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.8, 0.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-2 border border-purple-400 rounded-full pixel-art"
              ></motion.div>
              
              {/* Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-300 border border-purple-600 rounded-full pixel-art">
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-1 bg-white rounded-full pixel-art"
                ></motion.div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const getMessageIcon = (type: string) => {
    switch (type) {
      case 'email':
        return (
          <div className="w-6 h-4 bg-yellow-400 border border-yellow-600 pixel-art">
            <div className="absolute inset-0.5 bg-white pixel-art"></div>
            <div className="absolute top-1 left-1 right-1 h-0.5 bg-gray-600 pixel-art"></div>
            <div className="absolute top-2 left-1 right-1 h-0.5 bg-gray-400 pixel-art"></div>
          </div>
        );
      case 'message':
        return (
          <div className="w-5 h-5 bg-blue-400 border border-blue-600 rounded-full pixel-art">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full pixel-art"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full pixel-art"></div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-white pixel-art"></div>
          </div>
        );
      case 'notification':
        return (
          <div className="w-4 h-5 bg-red-400 border border-red-600 pixel-art">
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0.5 bg-white pixel-art"
            ></motion.div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 pixel-art"></div>
          </div>
        );
      default:
        return null;
    }
  };

  const getWaveColor = (type: string) => {
    switch (type) {
      case 'radio': return '#ff6b6b';
      case 'wifi': return '#4ecdc4';
      case 'satellite': return '#ffd93d';
      default: return '#6c5ce7';
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Message Delivery Robots */}
      {messageRobots.map((robot) => (
        <motion.div
          key={robot.id}
          initial={{
            x: robot.x,
            y: robot.y,
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            x: robot.direction === 'left' 
              ? windowDimensions.width + 100 
              : -100,
            y: robot.y + Math.sin(Date.now() * 0.001) * 30,
            scale: 1,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: robot.speed,
            ease: "linear",
          }}
          style={{
            transform: robot.direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
          }}
        >
          {getRobotComponent(robot)}
        </motion.div>
      ))}

      {/* Flying Messages */}
      {flyingMessages.map((message) => (
        <motion.div
          key={message.id}
          initial={{
            x: message.x,
            y: message.y,
            scale: 0.3,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            x: message.targetX,
            y: message.targetY,
            scale: [0.3, 1, 0.8],
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute"
        >
          {getMessageIcon(message.type)}
        </motion.div>
      ))}

      {/* Communication Waves */}
      {commWaves.map((wave) => (
        <motion.div
          key={wave.id}
          className="absolute rounded-full border-2 pixel-art"
          style={{
            left: wave.x,
            top: wave.y,
            borderColor: getWaveColor(wave.type),
          }}
          initial={{
            width: 0,
            height: 0,
            opacity: 0.8,
          }}
          animate={{
            width: 200,
            height: 200,
            opacity: 0,
          }}
          transition={{
            duration: 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Data Packets */}
      {dataPackets.map((packet) => (
        <motion.div
          key={packet.id}
          className="absolute w-3 h-3 bg-cyan-400 border border-cyan-600 pixel-art"
          animate={{
            x: packet.path.map(p => p.x),
            y: packet.path.map(p => p.y),
          }}
          transition={{
            duration: 12,
            ease: "linear",
          }}
        >
          {/* Data packet trail */}
          <motion.div
            animate={{
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
            }}
            className="absolute -inset-1 bg-cyan-300 opacity-50 pixel-art"
          ></motion.div>
        </motion.div>
      ))}

      {/* Static Communication Towers */}
      <div className="absolute top-10 left-10 w-8 h-16">
        {/* Tower Base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-gray-600 border border-gray-800 pixel-art"></div>
        {/* Tower Mast */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gray-500 pixel-art"></div>
        {/* Signal Emitter */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-red-500 border border-red-700 pixel-art"
        ></motion.div>
      </div>

      <div className="absolute top-10 right-10 w-8 h-16">
        {/* Tower Base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-gray-600 border border-gray-800 pixel-art"></div>
        {/* Tower Mast */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gray-500 pixel-art"></div>
        {/* Signal Emitter */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-green-500 border border-green-700 pixel-art"
        ></motion.div>
      </div>

      {/* Floating Satellites */}
      <motion.div
        animate={{
          x: [50, 150, 50],
          y: [30, 80, 30],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-6 h-4 bg-gray-400 border border-gray-600 pixel-art"
      >
        {/* Solar Panels */}
        <div className="absolute -left-2 top-0 w-2 h-4 bg-blue-900 border border-blue-700 pixel-art"></div>
        <div className="absolute -right-2 top-0 w-2 h-4 bg-blue-900 border border-blue-700 pixel-art"></div>
        {/* Signal Beam */}
        <motion.div
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-gradient-to-b from-yellow-400 to-transparent opacity-30 pixel-art"
        ></motion.div>
      </motion.div>

      {/* Digital Rain Effect */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`rain-${i}`}
          className="absolute w-0.5 h-4 bg-green-400 pixel-art"
          style={{
            left: `${(i * 6.67)}%`,
          }}
          animate={{
            y: [-20, windowDimensions.height + 20],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default RetroCommBackground;
