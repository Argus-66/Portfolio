import MyPic from "@/assets/images/img.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import TextTypeEffect from "../components/TextTypeEffect";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
import ResumeFile from "../components/ResumeFile";

export const HeroSection = () => {
  return (
    <div className="py-32 z-[1] ">
      <div className="container">
        {/* {Section for Image and Intro Text} */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full h-auto py-20">
          {/* Left Section - Moving Text and Additional Text */}
          <div className="sm:w-3/5 pr-10">
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <TextTypeEffect />
            </div>
            <p className="mt-4 text-base text-white leading-relaxed text-justify">
              Hello! I&rsquo;m Ayush H, a passionate computer science student
              specializing in Full Stack Development and open-source projects.
              With a strong foundation in programming and a knack for
              problem-solving, I enjoy creating innovative solutions and
              collaborating on exciting projects. Welcome to my portfolio!
            </p>
          </div>

          {/* Right Section - Static Image */}
          <div className="flex justify-center items-center sm:w-3/5 mt-4 sm:mt-0">
            <Image
              src={MyPic}
              className="w-[600px] h-auto" // Adjust width for better size control
              alt="Person peeking from behind laptop"
            />
          </div>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl text-center mt-[-60px] tracking-wide">
          Building Esceptional User Experiences
        </h1>
        <p className="mt-4 text-center text-[#ffffffb0] md:text-lg">
          
I specialize in transforming creative designs into seamless, high-performance web applications tailored to your needs. Let’s collaborate and bring your next project to life!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work!</span>
            <ArrowDown className="size-5" />
          </button>
          <ResumeFile />
        </div>
      </div>
    </div>
  );
};
