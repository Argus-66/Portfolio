import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image"
import ArrowDown from "@/assets/icons/arrow-down.svg"

export const HeroSection = () => {
  return (
  <div className="py-32 ">
    <div className="container">
      <Image src={memojiImage} alt="Person peaking from behind laptop" />
      <div>
        <div>

        </div>
        <div>Available for new projects</div>
      </div>
      <h1>building Esceptional User Experiences</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa atque quod commodi. Provident voluptates perferendis est vel sit totam, eveniet dolorem aliquam ullam in itaque ratione odio, quaerat officiis.</p>
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
  )
}
