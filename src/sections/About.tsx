import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import mapImage from "@/assets/images/map.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { hobbies } from "@/components/Hobbies";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { toolboxItems } from "@/components/TechStack";

export const AboutSection = () => {
  return (
    <div className="py-20 ">
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about I am, what I do, and what Inspires Me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspections."
            />

            <div className="w-40 mx-auto mt-8 ">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>

          <Card className="h-[320px] p-0 ">
            <CardHeader
              title="My Toolbox"
              description="Discover the Technologies and Tools I Leverage to Build Innovative Solutions."
              className="px-6 pt-6"
            />

            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWraperClassName="-translate-x-1/2"
            />
          </Card>

          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond The Code"
              description="Explore my Interests and Hobbies beyond the Digital Realm."
              className="px-6 py-6"
            />

            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="foint-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>
                    {hobby.emoji}
                  </span>
                </div>
              ))}
            </div>
          </Card>


          <Card className="h-[320px] p-0 relative">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image
                src={smileMemoji}
                alt="smiling emoji"
                className="size-20 "
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
