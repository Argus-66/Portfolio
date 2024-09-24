import memojiImage from "@/assets/images/img.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import TextTypeEffect from "../components/TextTypeEffect";
import React, { useState, useEffect } from "react";

export const HeroSection = () => {
  return (
    <div className="py-32 ">
      <div className="container">
        <div className="flex flex-row items-center justify-between w-full h-screen">
          {/* Left Section - Moving Text */}
          <div className="flex flex-col justify-center items-center w-1/2 h-full">
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div>✨</div>
              <div className="text-sm font-medium">
                <TextTypeEffect />
              </div>
              <div>✨</div>
            </div>
          </div>

          {/* Right Section - Static Image */}
          <div className="flex justify-center items-center w-1/2 h-full">
            <Image
              src={memojiImage}
              className="w-[500px]" // Set a specific width to avoid resizing issues
              alt="Person peeking from behind laptop"
            />
          </div>
        </div>

        <h1 className="font-serif text-3xl text-center mt-4">
          building Esceptional User Experiences
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ipsa atque quod commodi. Provident voluptates perferendis est vel sit
          totam, eveniet dolorem aliquam ullam in itaque ratione odio, quaerat
          officiis.
        </p>
        <div>
          <button>
            <span>Explore My Work!</span>
            <ArrowDown />
          </button>
          <button>
            <span>My Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};
