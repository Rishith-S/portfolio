"use client"

import Image, { StaticImageData } from "next/image";
import Clipcraft from "../../assets/clipcraft.png";
import Packcheck from "../../assets/packcheck.png";
import Starbucks from "../../assets/starbucks.png";
import VideoTranscoder from "../../assets/videoTranscoder.png";
import YoutubenotesX from "../../assets/youtubenotesx.png";
import WebsiteLink from "../icons/websiteLink";
import LaserEyes from "../../assets/lasereyes.png";
import FaceAnonymizer from "../../assets/face-anonymization.png";
import AirpodsPro from "../../assets/airpodspro.png";
import { useState } from "react";
export const projects: ProjectProps[] = [
  {
    name: "PackCheck",
    description: [
      "Web app that scans food barcodes and alerts users about allergens based on their allergies.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Gemini API",
      "Postgres",
      "Supabase",
      "Redis",
      "Tailwind CSS",
    ],
    deployedLinks: [
      {
        title: "Website",
        link: "https://packcheck-yrlc.onrender.com/",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/packcheck",
      },
    ],
    image: Packcheck,
    category: "Full Stack",
  },
  {
    name: "AirpodsPro - Frontend",
    description: [
      "Responsive Airpods Pro frontend clone built with React, TypeScript, Tailwind CSS and Framer Motion.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    deployedLinks: [
      {
        title: "Website",
        link: "https://airpodspro.pages.dev/",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/airpodspro",
      },
    ],
    image: AirpodsPro,
    category: "Frontend",
  },
  {
    name: "ClipCraft",
    description: [
      "AI-powered tool that creates 2D math/physics visualizations from text prompts using Manim.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Docker",
      "Postgres",
      "Supabase",
      "Redis",
      "Tailwind CSS",
      "Prompt Engineering",
    ],
    deployedLinks: [
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/clipcraft",
      },
    ],
    image: Clipcraft,
    category: "Full Stack",
  },
  {
    name: "Laser Eyes",
    description: [
      "Fun image editor that adds laser eye effects to faces using MediaPipe and OpenCV.",
    ],
    techStack: [
      "Streamlit",
      "MediaPipe",
      "Python",
      "OpenCV",
      "Computer Vision",
      "Image Processing",
    ],
    deployedLinks: [
      {
        title: "Website",
        link: "https://laser-eyes-8x2c.onrender.com/",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/Laser-eyes",
      },
    ],
    image: LaserEyes,
    category: "ML & DL",
  },
  {
    name: "YoutubenotesX",
    description: [
      "Turn any YouTube playlist into a personalized course—track progress and take detailed notes for deeper learning.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
    ],
    deployedLinks: [
      {
        title: "Website",
        link: "https://youtubenotesx.onrender.com/",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/youtubenotesapp",
      },
    ],
    image: YoutubenotesX,
    category: "Full Stack",
  },
  {
    name: "Video Transcoder",
    description: [
      "Scalable video transcoding system using GCP and FFmpeg for multi-resolution output (360p-1080p).",
    ],
    techStack: [
      "GCP",
      "FFmpeg",
      "React",
      "TypeScript",
      "Node.js",
      "Docker",
      "Tailwind CSS",
    ],
    deployedLinks: [
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/video-transcoder",
      },
    ],
    image: VideoTranscoder,
    category: "Full Stack",
  },
  {
    name: "Starbucks - Frontend",
    description: [
      "Responsive Starbucks frontend clone built with React, TypeScript, Tailwind CSS and Framer Motion.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    deployedLinks: [
      {
        title: "Website",
        link: "starbucks-fe.pages.dev",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/starbucks",
      },
    ],
    image: Starbucks,
    category: "Frontend",
  },
  {
    name: "Face Anonymizer",
    description: [
      "Real-time face anonymization tool with blurring and eye-covering techniques using MediaPipe.",
    ],
    techStack: [
      "Streamlit",
      "MediaPipe",
      "Python",
      "OpenCV",
      "Computer Vision",
      "Image Processing",
    ],
    deployedLinks: [
      {
        title: "Website",
        link: "https://face-anonymizer-8kwh.onrender.com",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/face-anonymizer",
      },
    ],
    image: FaceAnonymizer,
    category: "ML & DL",
  },
];

export const HighlightedText = (text: string) => {
  const formattedText = text.split(/(<b>.*?<\/b>)/).map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <span key={index} className="font-bold text-[16px] text-[#ffffff] 2xl:text-[16px]">
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="text-[16px] w-full text-[#ffffff]">
        {part}
      </span>
    );
  });

  return <>{formattedText}</>;
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categories = ["All", "Full Stack", "Frontend", "ML & DL"];

  return (
    <div className="project-card flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold mb-2" id="Projects">
          Projects
        </p>
        <div className="w-[75px] h-[6px] rounded-full bg-[#64ffda]" />
      </div>
      <ProjectTopBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        categories={categories}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 w-full h-full">
        {projects.filter((project) => selectedCategory === "All" || project.category === selectedCategory).map((project, index) => (
          <div key={`index-${index}`} className="flex flex-col w-full h-full items-center justify-center"  >
            <ProjectCard
              key={index}
              data={{
                ...project,
                description: project.description,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export interface ProjectProps {
  name: string;
  description: string[];
  techStack: string[];
  deployedLinks?: { title: string; link: string }[];
  image: StaticImageData | string;
  category: string;
}

function ProjectCard({
  data
}: { data: ProjectProps }) {
  return (
    <div
      id="ProjectCard"
      className="rounded-3xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] border-gray-800 experience-card cursor-pointer shadow-lg w-full h-full"
    >
      <div className="flex flex-col gap-4 w-full h-full bg-neutral-900/90 rounded-3xl shadow-lg">
        <div className="flex flex-col h-full w-full">
          <Image src={data.image} alt={data.name} width={150} height={150} className="rounded-t-3xl w-full h-48 object-fit select-none" />
          <div className="flex flex-col items-center justify-center gap-4 mt-2 w-full px-6">
            <ul className={"list-disc list-inside mt-2"}>
              {data.description.map((point, index) => (
                <li key={`${index}-${point}`}>
                  {HighlightedText(point)}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row items-center gap-4 my-4 px-6">
            {data.deployedLinks &&
              data.deployedLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 link-div cursor-pointer"
                  onClick={() => {
                    window.open(link.link, "mywindow");
                  }}
                >
                  <div className="svg-icon">
                    <WebsiteLink />
                  </div>
                  <p className="text-[#ffffff] text-websitelink">{link.title}</p>
                </div>
              ))}
          </div>
          <div className="flex flex-row gap-2 flex-wrap px-6 mb-4">
            {data.techStack.map((individualStack, index) => (
              <div
                key={index}
                className="rounded-full bg-gray-800 w-auto px-2 py-1"
              >
                <p className="font-bold text-teal-300">{individualStack}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectTopBar({
  selectedCategory,
  setSelectedCategory,
  isDropdownOpen,
  setIsDropdownOpen,
  categories
}: {
  selectedCategory: string,
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
  isDropdownOpen: boolean,
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>,
  categories: string[]
}) {
  return (
    <>
      <div className="hidden lg:flex flex-col p-[1px] rounded-lg bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800">
        <div className="flex flex-row gap-4 p-4 bg-neutral-900/90 rounded-lg">
          {categories.map((category) => (
            <p
              key={category}
              className={`text-md font-bold cursor-pointer ${selectedCategory === category ? "text-[#64ffda]" : "text-white"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="relative lg:hidden">
        <div className={`flex flex-col p-[1px] rounded-lg bg-gradient-to-br ${isDropdownOpen ? "from-[#64ffda] via-teal-900 to-neutral-800" : "from-neutral-600 via-neutral-800 to-neutral-800" }`}>
          <div
            className="flex flex-row items-center justify-between p-4 bg-neutral-900 rounded-lg cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-md font-bold text-[#64ffda]">{selectedCategory}</span>
            <svg
              className={`w-5 h-5 text-white transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 rounded-lg border border-neutral-700 z-10 shadow-lg">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`p-3 cursor-pointer hover:bg-neutral-800 transition-colors duration-150 ${selectedCategory === category ? 'bg-neutral-800 text-[#64ffda]' : 'text-white'
                    } ${category === categories[0] ? 'rounded-t-lg' : ''} ${category === categories[categories.length - 1] ? 'rounded-b-lg' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                >
                  <span className="text-md font-medium font-bold">{category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}