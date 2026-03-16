"use client";

import Image, { StaticImageData } from "next/image";
import Clipcraft from "../../assets/clipcraft.png";
import Packcheck from "../../assets/packcheck.png";
import Starbucks from "../../assets/starbucks.png";
import VideoTranscoder from "../../assets/videoTranscoder.png";
import YoutubenotesX from "../../assets/youtubenotesx.png";
import WebsiteLink from "../icons/websiteLink";
import LaserEyes from "../../assets/lasereyes.png";
import DepthAi from "../../assets/depthai.png";
import AirpodsPro from "../../assets/airpodspro.png";
import DaysofML from "../../assets/100daysofML.png";
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
    techStack: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS"],
    deployedLinks: [
      {
        title: "Website",
        link: "https://youtubenotesx.onrender.com/",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/YoutubenotesX",
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
    name: "DephtAI",
    description: ["Web app to put text behind the main object in image"],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
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
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
    description: ["Notes for 100DaysofML playlist"],
    techStack: ["docusaurus", "typescript"],
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
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
        <span key={index} className="font-bold text-sm md:text-base text-black dark:text-[#ffffff]">
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="text-sm md:text-base w-full text-neutral-800 dark:text-[#ffffff]">
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

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" ||
      project.category === selectedCategory,
  );

  return (
    <>
      <div className="inline-flex w-fit flex-col">
        <p className="text-xl md:text-2xl font-bold text-black dark:text-white" id="Projects">
          Projects
        </p>
        <div className="w-full h-[4px] rounded-full bg-accent" />
      </div>
      <div className="project-card flex flex-col gap-4">
        <div className="flex flex-col gap-2"></div>
        <ProjectTopBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          categories={categories}
        />
        <div className="flex flex-col gap-6 w-full">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`index-${index}`}
              data={project}
            />
          ))}
        </div>
      </div>
    </>
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
  data,
}: {
  data: ProjectProps;
}) {
  return (
    <div
      id="ProjectCard"
      className="rounded-2xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-100 dark:from-neutral-600 dark:via-neutral-800 dark:to-neutral-800 p-[1px] border-gray-200 dark:border-gray-800 shadow-sm w-full transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 w-full bg-white dark:bg-neutral-900/90 rounded-2xl shadow-sm transition-all duration-300 overflow-hidden">
        <div className="w-full lg:w-2/5 flex-shrink-0">
          <Image
            src={data.image}
            alt={data.name}
            width={420}
            height={260}
            className="w-full h-44 sm:h-56 lg:h-full object-cover select-none"
          />
        </div>

        <div className="flex flex-col justify-between p-4 sm:p-5 lg:py-4 lg:pr-5 lg:pl-0 flex-1">
          <ul className="list-disc list-inside space-y-2 text-neutral-800 dark:text-neutral-200">
            {data.description.map((point, index) => (
              <li key={`${index}-${point}`} className="text-sm sm:text-base lg:text-lg leading-relaxed">
                {HighlightedText(point)}
              </li>
            ))}
          </ul>

          {data.deployedLinks && data.deployedLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-4">
              {data.deployedLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => window.open(link.link, "mywindow")}
                >
                  <div className="svg-icon text-neutral-800 dark:text-white w-4 h-4">
                    <WebsiteLink />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-medium text-neutral-800 dark:text-white text-websitelink hover:text-[--accent]">{link.title}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-row gap-2 flex-wrap mt-4">
            {data.techStack.map((individualStack, index) => (
              <div
                key={index}
                className="rounded-full bg-[--accent-soft] px-3 py-1"
              >
                <p className="font-semibold text-accent text-xs sm:text-sm lg:text-base">{individualStack}</p>
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
  categories,
}: {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categories: string[];
}) {
  return (
    <>
      <div className="hidden lg:flex flex-col p-[1px] rounded-lg bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-600 dark:via-neutral-800 dark:to-neutral-800">
        <div className="flex flex-row gap-4 p-4 bg-white dark:bg-neutral-900/90 rounded-lg">
          {categories.map((category) => (
            <p
              key={category}
              className={`text-sm xl:text-base font-bold cursor-pointer transition-colors duration-200 ${selectedCategory === category ? "text-accent" : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="relative lg:hidden">
        <div
          className={`flex flex-col p-[1px] rounded-lg bg-gradient-to-br ${isDropdownOpen ? "from-accent via-accent to-neutral-200 dark:to-neutral-800" : "from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-600 dark:via-neutral-800 dark:to-neutral-800"}`}
        >
          <div
            className="flex flex-row items-center justify-between p-4 bg-white dark:bg-neutral-900 rounded-lg cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-sm sm:text-base font-bold text-accent">
              {selectedCategory}
            </span>
            <svg
              className={`w-5 h-5 text-neutral-800 dark:text-white transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 z-10 shadow-lg">
              {categories.map((category, index) => (
                <div
                  key={category}
                  className={`p-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-150 ${
                    selectedCategory === category
                        ? "bg-neutral-100 dark:bg-neutral-800 text-accent"
                      : "text-neutral-800 dark:text-white"
                  } ${index === 0 ? "rounded-t-lg" : ""} ${index === categories.length - 1 ? "rounded-b-lg" : ""}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                >
                  <span className="text-sm sm:text-base font-medium">{category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
