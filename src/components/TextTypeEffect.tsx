"use client";

import React, { useState, useEffect } from 'react';

const TextTypeEffect = () => {
  const phrases = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "UI/UX Enthusiast",
    "Open Source Contributor"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        
        // Once we've typed the full phrase, start deleting
        if (currentText === currentPhrase) {
          // Pause before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        
        // Once we've deleted the phrase, move to the next one
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100); // Type slower, delete faster
    
    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting]);
  
  return (
    <span className="text-white relative">
      {currentText}
      <span className="absolute -right-[4px] top-0 animate-blink">|</span>
    </span>
  );
};

export default TextTypeEffect; 