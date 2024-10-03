import ArrowUpRighticon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14">
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl  text-center relative">
          <div className="absolute inset-0"></div>
          <h2 className="font-serif text-2xl ">Let's Create Something Amazing Together</h2>
          <p className="text-sm mt-2 ">
            Passionate About Turning Visions into Reality? Let’s Connect and Discuss How I Can Help You Achieve Your Goals.
          </p>
          <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
            <span className="font-semibold">Contact Me</span>
            <ArrowUpRighticon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
};
