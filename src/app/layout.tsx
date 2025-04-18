import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ayush H | Full Stack Developer & UI/UX Enthusiast",
  description: "Professional portfolio showcasing my expertise in Full Stack Development, MERN stack, UI/UX design, and more. Explore my featured projects including DocCure, FoodFinder, and others.",
  keywords: "Full Stack Developer, MERN Stack, UI/UX Design, Web Development, React, Node.js, Portfolio",
  authors: [{ name: "Ayush H", url: "https://www.linkedin.com/in/ayush-h-541948252/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-[#030014] text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
