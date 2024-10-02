import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/components/TestimonialPeople";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say about Me" description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden z-0">
              {/* Background grain image */}
              <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />

              {/* Testimonial content */}
              <Image src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
              <div className="mt-4 text-white">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.position}</div>
                <p className="mt-2">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};