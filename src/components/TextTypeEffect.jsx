"use client";

import React, { useState, useEffect } from "react";

const TypingEffect = () => {
    const words = [
        "Fullstack Developer",
        "Competitive Programmer",
        "Visionary Architect",
        "Tech Enthusiast",
    ];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState(words[0]);

    useEffect(() => {
        const showWord = () => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        };

        const timer = setInterval(() => {
            showWord();
        }, 2000); // Interval between word changes

        return () => clearInterval(timer);
    }, [words]);

    useEffect(() => {
        setDisplayText(words[currentWordIndex]);
    }, [currentWordIndex, words]);

    return (
        <div className="text-xl font-medium">
            {displayText}
            <span className="blinking-cursor">|</span>
        </div>
    );
};

export default TypingEffect;
