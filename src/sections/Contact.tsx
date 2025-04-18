import ArrowUpRighticon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-10 px-10 rounded-3xl text-center md:text-left relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]">
          <div
            className="absolute inset-0 opacity-5 z-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          
          {/* Animated background elements */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white rounded-full opacity-10 animate-pulse [animation-delay:1s]"></div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center z-10 relative">
            <div className="md:max-w-2xl">
              <h2 className="font-serif text-2xl md:text-4xl font-bold z-10">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-sm mt-3 md:text-base z-10 text-gray-800">
                Passionate about turning visions into reality? Let's connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="md:ml-auto">
              <a href="https://www.linkedin.com/in/ayush-h-541948252/" target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-gray-900 inline-flex items-center px-8 h-14 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <span className="font-semibold z-10">Contact Me</span>
                  <ArrowUpRighticon className="size-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
