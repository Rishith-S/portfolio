"use client"

import Image, { StaticImageData } from "next/image";
import Clipcraft from "../../assets/clipcraft.png";
import Packcheck from "../../assets/packcheck.png";
import Starbucks from "../../assets/starbucks.png";
import VideoTranscoder from "../../assets/videoTranscoder.png";
import YoutubenotesX from "../../assets/youtubenotesx.png";
import WebsiteLink from "../icons/websiteLink";
import LaserEyes from "../../assets/lasereyes.png";
import DepthAi from "../../assets/depthai.png"
import AirpodsPro from "../../assets/airpodspro.png";
import DaysofML from "../../assets/100daysofML.png"
import RAFTSLMRAG from "../../assets/RAFTSLMRAG.png";
import { useState } from "react";
export const projects: ProjectProps[] = [
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
    name: "YoutubenotesX",
    description: [
      "Turn any YouTube playlist into a personalized course, track progress and take detailed notes for deeper learning.",
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
    name: "RAFT SLM RAG",
    description: [
      "Privacy-preserving, cost-efficient customer support assistant combining Edge AI with Cloud LLMs, achieving <b>90% cost reduction</b> and <b>10x token efficiency</b> through hierarchical RAG pipeline.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "MLX",
      "FAISS",
      "Llama 3",
      "Gemini API",
      "Sentence-Transformers",
      "RAG",
    ],
    deployedLinks: [
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/context-aware-support-llm",
      },
    ],
    image: RAFTSLMRAG,
    category: "ML & DL",
  },
  {
    name: "PackCheck",
    description: [
      "Web app to put text behind the main object in image",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    deployedLinks: [
      {
        title: "Website",
        link: "https://depth-ai-eta.vercel.app/",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/depth.ai",
      },
    ],
    image: DepthAi,
    category: "Frontend",
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
    name: "100DaysofML",
    description: [
      "Notes for 100DaysofML playlist",
    ],
    techStack: [
      "docusaurus",
      "typescript"
    ],
    deployedLinks: [
      {
        title: "Website",
        link: "https://rishith-s.github.io/100daysofML/",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/100daysofML",
      },
    ],
    image: DaysofML,
    category: "ML & DL",
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
        link: "https://starbucks-fe.pages.dev",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/starbucks",
      },
    ],
    image: Starbucks,
    category: "Frontend",
  },
];

export const HighlightedText = (text: string) => {
  const formattedText = text.split(/(<b>.*?<\/b>)/).map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <span key={index} className="font-bold text-sm text-[#ffffff]">
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="text-sm w-full text-[#ffffff]">
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
      <div className="flex flex-col gap-6 w-full">
        {projects.filter((project) => selectedCategory === "All" || project.category === selectedCategory).map((project, index) => (
          <div key={`index-${index}`} className="flex flex-col w-full items-center justify-center"  >
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
      className="rounded-2xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] border-gray-800 experience-card cursor-pointer shadow-lg w-full"
    >
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 w-full bg-neutral-900/90 rounded-2xl shadow-lg">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 flex-shrink-0">
          <Image src={data.image} alt={data.name} width={300} height={250} className="rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none w-full h-56 lg:h-full object-cover select-none" />
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col justify-between p-5 lg:py-4 lg:pr-5 lg:pl-0 flex-1">
          <div className="flex flex-col gap-3">
            <ul className={"list-disc list-inside space-y-1"}>
              {data.description.map((point, index) => (
                <li key={`${index}-${point}`} className="text-sm lg:text-sm">
                  {HighlightedText(point)}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex flex-row items-center gap-3 flex-wrap">
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
                    <p className="text-[#ffffff] text-websitelink text-sm">{link.title}</p>
                  </div>
                ))}
            </div>
            
            <div className="flex flex-row gap-1.5 flex-wrap">
              {data.techStack.map((individualStack, index) => (
                <div
                  key={index}
                  className="rounded-full bg-gray-800 w-auto px-2 py-1"
                >
                  <p className="font-semibold text-teal-300 text-xs">{individualStack}</p>
                </div>
              ))}
            </div>
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
                  <span className="text-md font-medium">{category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}