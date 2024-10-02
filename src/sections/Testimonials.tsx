import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/components/TestimonialPeople";
import Image from "next/image";
import { Card } from "@/components/Card";

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-full md:max-w-4xl lg:max-w-[100rem] mx-auto">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say about Me" description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div
          className="mt-16 flex overflow-x-clip"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}>
          <div className=" flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-[23rem] md:max-w-md md:p-8 lg:max-w-lg">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 lg:size-20">


                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-height-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold lg:text-2xl">{testimonial.name}</div>
                    <div className="text-sm text-white/40 lg:text-lg">{testimonial.position}</div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm text-justify md:text-base lg:text-lg">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};