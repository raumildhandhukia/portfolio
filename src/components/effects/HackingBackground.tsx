"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HackingCode {
  id: string;
  text: string;
  x: number;
  y: number;
  type: 'system' | 'warning' | 'success' | 'error';
}
// Move hackingCommands outside component to prevent recreation
const hackingCommands = [
  "nmap -sS target.dev",
  "hydra -l admin -P wordlist.txt",
  "sqlmap --dbs",
  "metasploit > exploit",
  "john --wordlist hashes.txt",
  "nikto -h target.dev",
  "dirb /usr/share/wordlists/",
  "gobuster dir -u target.dev",
  "hashcat -m 1000 hashes.txt",
  "aircrack-ng capture.cap",
  "./exploit.py --target",
  "msfconsole -q",
  "enum4linux -a target.dev",
  "./buffer_overflow.py",
  "nc -lvp 4444",
  "python3 pty.spawn",
  "wget SecLists.zip",
  "chmod +x exploit.sh",
  "searchsploit apache",
  "crackmapexec smb",
  "responder -I eth0",
  "steghide extract",
  "binwalk -e firmware.bin",
  "strings | grep password",
  "ltrace ./binary",
  "gdb -q ./overflow",
  "objdump -d binary",
  "tcpdump -i eth0",
  "wireshark &",
  "volatility imageinfo",
  "nmap -sS target.dev",
  "hydra -l admin -P wordlist.txt",
  "sqlmap --dbs",
  "metasploit > exploit",
  "john --wordlist hashes.txt",
  "nikto -h target.dev",
  "dirb /usr/share/wordlists/",
  "gobuster dir -u target.dev",
  "hashcat -m 1000 hashes.txt",
  "aircrack-ng capture.cap",
  "./exploit.py --target",
  "msfconsole -q",
  "enum4linux -a target.dev",
  "./buffer_overflow.py",
  "nc -lvp 4444",
  "python3 pty.spawn",
  "wget SecLists.zip",
  "chmod +x exploit.sh",
  "searchsploit apache",
  "crackmapexec smb",
  "responder -I eth0",
  "steghide extract",
  "binwalk -e firmware.bin",
  "strings | grep password",
  "ltrace ./binary",
  "gdb -q ./overflow",
  "objdump -d binary",
  "tcpdump -i eth0",
  "wireshark &",
  "volatility imageinfo"
];

const HackingBackground = () => {
  const [hackingCodes, setHackingCodes] = useState<HackingCode[]>([]);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });

  

  // Get window dimensions safely
  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    let codeIndex = 0;
    
    const spawnMultipleCodes = () => {
      // Spawn 2-4 codes at once for more activity
      const numCodes = Math.floor(Math.random() * 3) + 2; // 2-4 codes
      
      for (let i = 0; i < numCodes; i++) {
        setTimeout(() => {
          const randomType = Math.random();
          const code: HackingCode = {
            id: Math.random().toString(36).substr(2, 9),
            text: hackingCommands[codeIndex % hackingCommands.length],
            // Use more of the screen width, but leave margins
            x: Math.random() * (windowDimensions.width - 400) + 50,
            // Use full section height more effectively
            y: Math.random() * Math.max(windowDimensions.height - 200, 600) + 100,
            type: randomType > 0.8 ? 'success' : randomType > 0.6 ? 'warning' : randomType > 0.4 ? 'error' : 'system',
          };
          
          setHackingCodes(prev => {
            const newCodes = [...prev, code];
            return newCodes.length > 35 ? newCodes.slice(-35) : newCodes; // Keep max 35 codes
          });
          
          // Remove code after 5-7 seconds (random for more dynamic feel)
          const duration = Math.random() * 2000 + 5000; // 5-7 seconds
          setTimeout(() => {
            setHackingCodes(prev => prev.filter(c => c.id !== code.id));
          }, duration);
          
          codeIndex++;
        }, i * 200); // Stagger spawning by 200ms
      }
    };

    // Only start spawning if we have window dimensions
    if (windowDimensions.width > 0) {
      const interval = setInterval(spawnMultipleCodes, 1500); // Spawn every 1.5 seconds
      spawnMultipleCodes(); // Initial spawn burst
      
      return () => clearInterval(interval);
    }
  }, [windowDimensions]); // Depend on windowDimensions

  const getCodeColor = (type: string) => {
    switch (type) {
      case 'warning': return '#ffff00';
      case 'success': return '#00ff00';
      case 'error': return '#ff0040';
      default: return '#00bfff';
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
      {/* Subtle Grid Background */}
      {/* <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      /> */}

      {/* Randomly Spawning Hacking Codes */}
      {hackingCodes.map((code, index) => (
        <motion.div
          key={code.id}
          initial={{ 
            opacity: 0, 
            scale: 0.3,
            x: code.x,
            y: code.y,
            rotate: Math.random() * 10 - 5, // Random slight rotation
          }}
          animate={{ 
            opacity: [0, 0.9, 0.9, 0.6, 0],
            scale: [0.3, 1.1, 1, 1, 0.8],
            rotate: [
              Math.random() * 10 - 5,
              Math.random() * 6 - 3,
              Math.random() * 4 - 2
            ],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            delay: index * 0.1, // Stagger animation slightly
          }}
          className="absolute text-xs font-mono bg-black bg-opacity-70 px-3 py-1.5 border border-opacity-60 rounded-sm shadow-lg"
          style={{ 
            color: getCodeColor(code.type),
            borderColor: getCodeColor(code.type),
            boxShadow: `0 0 12px ${getCodeColor(code.type)}50, inset 0 0 4px ${getCodeColor(code.type)}20`,
            textShadow: `0 0 4px ${getCodeColor(code.type)}`,
          }}
        >
          <span className="text-gray-400 mr-1">$</span>
          <span className="font-semibold">{code.text}</span>
        </motion.div>
      ))}

      {/* Subtle Scanning Line */}
      {/* <motion.div
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"
        animate={{
          y: [0, windowDimensions.height],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          boxShadow: '0 0 8px #00ff00',
        }}
      /> */}

      {/* Very Subtle Glitch Effect
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 0, 0, 0.03, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 6,
        }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
        }}
      /> */}
    </div>
  );
};

export default HackingBackground;
