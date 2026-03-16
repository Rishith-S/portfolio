"use client";
import About from "@/components/Blocks/About";
import Experience from "@/components/Blocks/Experience";
import Projects from "@/components/Blocks/Projects";
import Skills from "@/components/Blocks/Skills";
import SideCard from "@/components/Blocks/SideCard";
import Navbar from "@/components/Blocks/Navbar";
import { useState } from "react";
import Contact from "@/components/Blocks/Contact";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className="min-h-screen relative bg-neutral-100 dark:bg-black p-4 md:p-8 md:px-24 lg:p-16 flex flex-col lg:flex-row lg:items-start gap-14 xl:px-26 transition-colors duration-300">
      <SideCard />
      <div
        className="relative p-4 md:p-8 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-700 gap-4 w-full mb-20 lg:mb-0 transition-all duration-500 ease-in-out shadow-md"
      >
        <div className="hidden md:flex sticky top-0 z-20 justify-center mb-6">
          <div className="w-fit px-8 py-4 border border-neutral-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-800/90 rounded-2xl items-center backdrop-blur-sm transition-colors duration-300 flex gap-2">
            <Navbar currentSection={currentSection} onSectionChange={setCurrentSection} />
            <ThemeToggle className="p-1.5" />
          </div>
        </div>
        <div className="transition-all duration-700 ease-in-out transform">
          {currentSection === 0 && (
            <div className="w-full animate-fadeIn">
              <About />
              <div className="mt-4">
                <Skills />
              </div>
            </div>
          )}
          {currentSection === 1 && (
            <div className="w-full animate-fadeIn">
            <Experience />
            </div>
          )}
          {currentSection === 2 && (
            <div className="w-full animate-fadeIn">
            <Projects />
            </div>
          )}
          {currentSection === 3 && (
            <div className="w-full animate-fadeIn">
            <Contact />
            </div>
          )}
        </div>
      </div>
      <div className="fixed flex md:hidden bottom-3 left-3 right-3 h-16 z-30 items-center bg-white/90 dark:bg-neutral-800/90 rounded-2xl backdrop-blur-xl border border-neutral-200 dark:border-neutral-700 shadow-lg px-3 gap-2" >
        <div className="flex-1">
          <Navbar currentSection={currentSection} onSectionChange={setCurrentSection} />
        </div>
        <ThemeToggle className="p-1.5 shrink-0" />
      </div>
    </div>
  );
}