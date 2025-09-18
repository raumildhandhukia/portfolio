'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
  onComplete?: () => void;
  loop?: boolean;
  showCursor?: boolean;
}

const TypewriterEffect = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = '',
  cursorClassName = 'animate-pulse',
  onComplete,
  loop = true,
  showCursor = true
}: TypewriterEffectProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (isPaused || texts.length === 0) return;

    const currentString = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting phase
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          if (loop || currentIndex < texts.length - 1) {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
          onComplete?.();
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseTime, onComplete, loop]);

  // Start the effect after a short delay
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsPaused(false);
    }, 500);

    return () => clearTimeout(startTimer);
  }, []);

  return (
    <span className={className}>
      {currentText}
      {showCursor && <span className={cursorClassName}>|</span>}
    </span>
  );
};

export default TypewriterEffect;
