import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import mapImage from "@/assets/images/map.jpg"
import smileMemoji from "@/assets/images/memoji-smile.png"
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

            <ToolboxItems
              items={toolboxItems}
              className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6" 
              itemsWraperClassName="-translate-x-1/2"
            />
          </Card>


          <Card>
            <CardHeader
              title="Beyond The Code"
              description="Explore my Interests and Hobbies beyond the Digital Realm."
            />

            <div>
              {hobbies.map(hobby => (
                <div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full">
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smiling emoji" />
          </Card>

        </div>
      </div>
    </div>
  )
};
