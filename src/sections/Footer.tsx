import ArrowUpRighticon from "@/assets/icons/arrow-up-right.svg"

const footerLinks = [
  {
    title: "Linkedin",
    href: "#",
  },
  {
    title: "Github",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
]

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <div>
          <div>&copy; 2024. All rights reserved.</div>
          <nav>
            {footerLinks.map(link =>(
              <a href="" key={link.title}>
                <span>{link.title}</span>
                <ArrowUpRighticon className="" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};
