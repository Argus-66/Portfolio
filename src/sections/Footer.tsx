import ArrowUpRighticon from "@/assets/icons/arrow-up-right.svg";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
const footerLinks = [
  {
    title: "Linkedin",
    href: "#",
    icon: <FaLinkedin  />,
  },
  {
    title: "Github",
    href: "#",
    icon: <FaGithub />, 
  },
  {
    title: "Twitter",
    href: "#",
    icon: <FaTwitter />, 
  },
  {
    title: "Instagram",
    href: "#",
    icon: <FaInstagram />,
  },
]

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40 ">
            &copy; 2024. All rights reserved.
          </div>
          <nav className="flex flex-col items-center gap-8">
            {footerLinks.map(link => (
              <a 
              href="#"
              key={link.title} 
              className="inline-flex items-center gap-1.5"
              >
                {link.icon}
                <span className="font-semibold ">{link.title}</span>
                <ArrowUpRighticon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};
