import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import { toolboxItems } from "@/components/TechStack";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.jpg"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { hobbies } from "@/components/Hobbies";
import { CardHeader } from "@/components/CardHeader";


export const AboutSection = () => {
  return (
    <div className="py-20 ">
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about I am, what I do, and what Inspires Me."
        />

        <div className="mt-20 ">
          <Card className="h-[320px]">
            <CardHeader title="My Reads" description="Explore the books shaping my perspections."
            />

            <div className="w-40 mx-auto mt-8 ">
              <Image src={bookImage} alt="Book cover" />
            </div>

          </Card>

          <Card>
          <CardHeader title="My Toolbox" description="Explore the Technologies and Tools use to craft Exceptional Digital Experiences."
            />
            
            <div>
              {toolboxItems.map(item => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader title="Beyond The Code" description="Explore my Interests and Hobbies beyond the Digital Realm."
            />

            <div>
              {hobbies.map(hobby => (
                <div key={hobby.title}>
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
