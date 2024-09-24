import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 ">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peaking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex">
            <div></div>
            <div>Available for new projects</div>
          </div>
        </div>

        <h1>building Esceptional User Experiences</h1>
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
