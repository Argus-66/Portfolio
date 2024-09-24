"use client";

import React, { useState, useEffect } from "react";

const TypingEffect = () => {
    const words = [
        "Fullstack Developer",
        "Competitive Programmer",
        "Innovative Solutions Architect",
        "Tech Enthusiast",
    ];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing letters one by one
                setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
                setTypingSpeed(150); // Typing speed
            } else {
                // Deleting letters one by one
                setDisplayText((prev) => currentWord.slice(0, prev.length - 1));
                setTypingSpeed(200); // Deleting speed
            }

            // When the word is fully typed
            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000); // Wait before starting to delete
            }

            // When the word is fully deleted
            else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
                setTypingSpeed(150); // Reset typing speed for the next word
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, typingSpeed, currentWordIndex, words]);

    return (
        <div className="text-xl font-medium">
            {displayText}
            <span className="blinking-cursor">|</span>
        </div>
    );
};

export default TypingEffect;
