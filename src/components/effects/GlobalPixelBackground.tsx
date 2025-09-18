"use client";

const GlobalPixelBackground = () => {


  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Static Retro 8-bit Background */}
      
      {/* Base Circuit Board Pattern */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          imageRendering: 'pixelated',
        }}
      />

      {/* Larger Grid for Depth */}
      <div 
        className="absolute inset-0 opacity-4"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 136, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 136, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          imageRendering: 'pixelated',
        }}
      />

      {/* Diagonal Circuit Lines */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(0, 255, 255, 0.08) 0px,
            rgba(0, 255, 255, 0.08) 2px,
            transparent 2px,
            transparent 40px
          )`,
          imageRendering: 'pixelated',
        }}
      />

      {/* Corner Terminal UI */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <div className="absolute top-3 left-3 w-10 h-1 bg-cyan-400 opacity-25 pixel-art"></div>
        <div className="absolute top-3 left-3 w-1 h-10 bg-cyan-400 opacity-25 pixel-art"></div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16">
        <div className="absolute top-3 right-3 w-10 h-1 bg-cyan-400 opacity-25 pixel-art"></div>
        <div className="absolute top-3 right-3 w-1 h-10 bg-cyan-400 opacity-25 pixel-art"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16">
        <div className="absolute bottom-3 left-3 w-10 h-1 bg-cyan-400 opacity-25 pixel-art"></div>
        <div className="absolute bottom-3 left-3 w-1 h-10 bg-cyan-400 opacity-25 pixel-art"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16">
        <div className="absolute bottom-3 right-3 w-10 h-1 bg-cyan-400 opacity-25 pixel-art"></div>
        <div className="absolute bottom-3 right-3 w-1 h-10 bg-cyan-400 opacity-25 pixel-art"></div>
      </div>

      {/* Static Status Lights */}
      <div className="absolute top-4 right-4 flex gap-2">
        <div
          className="w-2 h-2 bg-green-400 opacity-60 pixel-art"
          style={{
            boxShadow: '0 0 4px #00ff41',
            imageRendering: 'pixelated',
          }}
        />
        <div
          className="w-2 h-2 bg-blue-400 opacity-60 pixel-art"
          style={{
            boxShadow: '0 0 4px #0088ff',
            imageRendering: 'pixelated',
          }}
        />
        <div
          className="w-2 h-2 bg-cyan-400 opacity-60 pixel-art"
          style={{
            boxShadow: '0 0 4px #00ffff',
            imageRendering: 'pixelated',
          }}
        />
      </div>

      {/* Static Scanlines Effect */}
      <div 
        className="absolute inset-0 opacity-4 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0, 255, 65, 0.2) 3px,
            rgba(0, 255, 65, 0.2) 4px
          )`,
          imageRendering: 'pixelated',
        }}
      />

      {/* Bottom Terminal Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 opacity-20 pixel-art"></div>
      
      {/* Static Circuit Nodes */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-green-400 opacity-40 pixel-art" style={{ boxShadow: '0 0 3px #00ff41' }}></div>
      <div className="absolute top-32 right-32 w-1 h-1 bg-blue-400 opacity-40 pixel-art" style={{ boxShadow: '0 0 3px #0088ff' }}></div>
      <div className="absolute bottom-24 left-24 w-1 h-1 bg-cyan-400 opacity-40 pixel-art" style={{ boxShadow: '0 0 3px #00ffff' }}></div>
      <div className="absolute bottom-36 right-36 w-1 h-1 bg-green-400 opacity-40 pixel-art" style={{ boxShadow: '0 0 3px #00ff41' }}></div>
      <div className="absolute top-1/2 left-16 w-1 h-1 bg-blue-400 opacity-40 pixel-art" style={{ boxShadow: '0 0 3px #0088ff' }}></div>
      <div className="absolute top-1/2 right-16 w-1 h-1 bg-cyan-400 opacity-40 pixel-art" style={{ boxShadow: '0 0 3px #00ffff' }}></div>

      {/* Static Data Blocks */}
      <div className="absolute top-16 left-1/4 w-8 h-2 bg-green-400 opacity-15 pixel-art"></div>
      <div className="absolute top-24 right-1/4 w-6 h-2 bg-blue-400 opacity-15 pixel-art"></div>
      <div className="absolute bottom-16 left-1/3 w-10 h-2 bg-cyan-400 opacity-15 pixel-art"></div>
      <div className="absolute bottom-24 right-1/3 w-4 h-2 bg-green-400 opacity-15 pixel-art"></div>
    </div>
  );
};

export default GlobalPixelBackground;
