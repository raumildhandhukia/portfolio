import React, { useEffect, useRef } from "react";

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    const lettersArray = letters.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array.from({ length: columns }, () => 1);

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop, i) => {
        const text =
          lettersArray[Math.floor(Math.random() * lettersArray.length)];
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(text, i * fontSize, drop * fontSize);

        drops[i]++;
        if (drop * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      });
    };

    const intervalId = setInterval(draw, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <canvas className="h-[10.5rem] w-[30.5rem]" ref={canvasRef}></canvas>;
};

export default MatrixRain;
