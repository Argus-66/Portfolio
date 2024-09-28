"use client";

import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 w-full transition-all duration-300 ${isScrolled ? 'z-[10]' : 'z-2'}`}>
      {/* Full-width background layer, blur removed on scroll */}
      <div
        className={`absolute top-0 w-full h-16 bg-[#030014] ${
          isScrolled ? 'backdrop-blur-0' : 'backdrop-blur-md'
        } transition-all duration-300`}
      ></div>

      {/* Centered navigation menu */}
      <div className="relative flex justify-center items-center h-16">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">Projects</a>
          <a href="#" className="nav-item">About</a>
          <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </div>
  );
};
