"use client";

import { motion } from "framer-motion";
import { Background } from "../effects";
import {
  HelloMessage,
  NameTitle,
  TypewriterRole,
  Description,
  ActionButtons,
  CharacterAvatar,
  StatusDisplay,
} from "./intro";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="h-screen flex items-center justify-center relative overflow-hidden w-full"
    >
      {/* Animated background elements */}
      <Background />

      <div className="w-full px-6 relative z-10 h-full flex items-center justify-center">
        {/* Main Content - Centered Layout */}
         <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full px-6">
           {/* Left Side - Character/Avatar & Status */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex flex-col items-center lg:items-start"
           >
            <CharacterAvatar />
            <StatusDisplay />
          </motion.div>

           {/* Right Side - Text Content */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="flex-1 text-center lg:text-left max-w-2xl"
           >
            <HelloMessage />
            <NameTitle />
            <TypewriterRole />
            <Description />
            <ActionButtons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
