'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaBriefcase, FaCode, FaCog, FaEnvelope } from 'react-icons/fa';
import Logo from './navigation/Logo';
import NavButton from './navigation/NavButton';
import MobileMenu from './navigation/MobileMenu';
import ProgressBar from './navigation/ProgressBar';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [score, setScore] = useState(0);

  const navItems = useMemo(() => [
    { id: 'intro', label: 'INTRO', icon: FaGamepad },
    { id: 'experience', label: 'EXPERIENCE', icon: FaBriefcase },
    { id: 'projects', label: 'PROJECTS', icon: FaCode },
    { id: 'technologies', label: 'TECH STACK', icon: FaCog },
    { id: 'contact', label: 'CONTACT', icon: FaEnvelope },
  ], []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = navItems.map(item => item.id);
        const navBarHeight = 60; // Same offset as scrollToSection
        const scrollPosition = window.scrollY + navBarHeight + 100; // Account for nav bar + some buffer
        let newActiveSection = 'intro'; // Default to intro

        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element && element.offsetTop <= scrollPosition) {
            newActiveSection = sections[i];
            break;
          }
        }

        // Only update if the section actually changed
        setActiveSection(prev => {
          if (prev !== newActiveSection) {
            return newActiveSection;
          }
          return prev;
        });
      }, 50); // Debounce scroll events
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set active section immediately on click
      setActiveSection(sectionId);
      
      // Calculate the offset to account for the fixed navigation bar
      const navBarHeight = 60; // Approximate height of the navigation bar
      const elementPosition = element.offsetTop - navBarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setScore(prev => prev + 10); // Gamification: points for navigation
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/98 backdrop-blur-sm border-b-4 border-gray-700 shadow-lg !py-3 !px-4"
      >
        <div className="w-full px-4 py-4 my-8">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
            <Logo />

            {/* Spacer - Takes up space in between */}
            <div className="flex-1"></div>

            {/* Navigation Buttons - Right Side */}
            <div className="hidden md:flex items-center gap-5">
              {navItems.map((item, index) => (
                <NavButton
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  icon={item.icon}
                  isActive={activeSection === item.id}
                  index={index}
                  onClick={() => scrollToSection(item.id)}
                />
              ))}
            </div>

            {/* Score Display - Right Side */}
            {/* <ScoreDisplay score={score} /> */}

            {/* Mobile Menu */}
            <MobileMenu 
              navItems={navItems}
              activeSection={activeSection}
              onItemClick={scrollToSection}
            />
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar score={score} />
      </motion.nav>
    </>
  );
};

export default Navigation;
