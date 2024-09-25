import { HeroSection } from "@/sections/Hero";
import React from "react";
//import black from "@assets/video/blackhole.webm";

export const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="absolute top-[-50%] left-0 w-full h-full object-cover z-[-1]" 
            >
                <source src="./video/blackhole.webm" type="video/webm" />
            </video>
            <HeroSection />
        </div>
    );
};
