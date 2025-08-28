"use client";
import About from "@/components/Blocks/About";
import Experience from "@/components/Blocks/Experience";
import Projects from "@/components/Blocks/Projects";
import Skills from "@/components/Blocks/Skills";
import SideCard from "@/components/Blocks/SideCard";
import Navbar from "@/components/Blocks/Navbar";
import { useState } from "react";
import Contact from "@/components/Blocks/Contact";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <div className="relative bg-black p-4 md:p-8 md:px-24 lg:p-16 flex flex-col lg:flex-row gap-8 2xl:px-64">
      <SideCard />
      <div className="relative overflow-y-scroll p-4 md:p-8 bg-neutral-900 rounded-3xl border-[1px] border-neutral-700 gap-4 w-full mb-16 lg:mb-0 transition-all duration-500 ease-in-out">
        <div className="absolute hidden md:flex top-0 right-0 w-fit px-8 py-6 border-b-[1px] border-l-[1px] border-neutral-700 z-10 bg-neutral-800/90 rounded-bl-3xl">
          <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </div>
        <div className="transition-all duration-700 ease-in-out transform">
          {currentSection === 0 && (
            <div id="about" className="w-full animate-fadeIn">
              <About />
              <Skills />
            </div>
          )}
          {currentSection === 1 && (
            <div id="experience" className="w-full animate-fadeIn">
              <Experience />
            </div>
          )}
          {currentSection === 2 && (
            <div id="projects" className="w-full animate-fadeIn">
              <Projects />
            </div>
          )}
          {currentSection === 3 && (
            <div id="contact" className="w-full animate-fadeIn">
              <Contact />
            </div>
          )}
        </div>
      </div>
      <div className="fixed flex md:hidden bottom-0 left-0 w-full h-16 z-10 flex items-center justify-center bg-neutral-800/30 rounded-t-2xl backdrop-blur-xl" >
        <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </div>
    </div>
  );
}