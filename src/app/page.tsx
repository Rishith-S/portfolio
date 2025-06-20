"use client";
import About from "@/components/Blocks/About";
import Experience from "@/components/Blocks/Experience";
import Projects from "@/components/Blocks/Projetcs";
import Skills from "@/components/Blocks/Skills";
import IconGitHub from "@/components/icons/github";
import IconLinkedin from "@/components/icons/linkedin";
import IconTwitter from "@/components/icons/twitter";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const texts = ["Full-Stack Developer", "React Native Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animationTimeout: ReturnType<typeof setTimeout>;
    const handleAnimationIteration = () => {
      animationTimeout = setTimeout(() => {
        setCurrentTextIndex((prev) => {
          return (prev + 1) % texts.length;
        });
      }, 4600);
    };

    const spanElement = spanRef.current;
    if (spanElement) {
      spanElement.addEventListener(
        "animationiteration",
        handleAnimationIteration
      );
    }

    setTimeout(() => {
      setCurrentTextIndex(1);
    }, 3400);

    return () => {
      if (spanElement) {
        spanElement.removeEventListener(
          "animationiteration",
          handleAnimationIteration
        );
      }
      clearTimeout(animationTimeout);
    };
  }, []);
  return (
    <div className="bg-black w-screen">
      <div className="px-8 py-12 md:px-16 md:py-24 lg:px-16 flex flex-col lg:gap-8 lg:items-start lg:justify-between lg:fixed lg:w-[40%]">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p id="name" className="text-4xl md:text-[3.5rem] font-bold ">
              Rishith Saginala
            </p>
            <div className="mt-3" id="blinkText">
              <p>
                <span
                  id="textDisplay"
                  className="text-2xl md:text-3xl font-semibold"
                  ref={spanRef}
                >
                  {texts[currentTextIndex]}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-neutral-300 text-lg md:text-xl">
              I develop Machine learning, Deep learning models,
              Web applications
              and Cross Platform Applications           
            </p>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:mt-[15%]">
            <DesktopTab title="SKILLS" value={0} currentValue={0} />
            <DesktopTab title="EXPERIENCE" value={1} currentValue={0} />
            <DesktopTab title="PROJECTS" value={2} currentValue={0} />
          </div>
        </div>
        <div className="flex-row flex gap-8 mt-8 lg:mt-12 cursor-pointer" onClick={()=>{window.open('https://github.com/Rishith-S', "mywindow");}}>
          <div id="githubLogo" className="w-7 h-7 rounded-full">
            <IconGitHub />
          </div>
          <div
            id="linkedinLogo"
            className="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer"
            onClick={()=>{window.open('https://github.com/Rishith-S', "mywindow");}}
          >
            <IconLinkedin />
          </div>
          <div
            id="twitterLogo"
            className="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer"
          >
            <IconTwitter />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll h-[100%] px-8 gap-4 md:px-16 lg:py-24 flex flex-col md:col-span-3 lg:gap-8 lg:items-start lg:pr-28 lg:ml-[40%]">
        <div id="about" className="w-full"><About /></div>
        <div id="skills" className="w-full"><Skills /></div>
        <div id="experience" className="w-full"><Experience /></div>
        <div id="projects" className="w-full"><Projects /></div>
      </div>
    </div>
  );
}

function DesktopTab({
  title,
  value,
  currentValue,
}: {
  title: string;
  value: number;
  currentValue: number;
}) {
  const [onHover,setOnHover] = useState(-1)
  return (
    <div onClick={()=>window.location.href=`#${title.toLowerCase()}`} className="py-4 flex flex-row items-center gap-2 w-48 cursor-pointer" onMouseEnter={()=>setOnHover(value)} onMouseLeave={()=>setOnHover(-1)}>
      <div className={`${currentValue===value || value===onHover ? 'w-16 bg-teal-200' : 'w-8 bg-[#c7c7c7]'} h-[2px] transition-all duration-300`} />
      <p className={`${currentValue===value || value===onHover ? 'text-teal-200 ' : 'text-[#c7c7c7]'} font-extrabold transition-all duration-300`}>{title}</p>
    </div>
  );
}
