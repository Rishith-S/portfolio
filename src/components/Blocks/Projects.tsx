"use client";

import Image, { StaticImageData } from "next/image";
import Clipcraft from "../../assets/clipcraft.png";
import Packcheck from "../../assets/packcheck.png";
import VideoTranscoder from "../../assets/videoTranscoder.png";
import YoutubenotesX from "../../assets/youtubenotesx.png";
import WebsiteLink from "../icons/websiteLink";
import LaserEyes from "../../assets/lasereyes.png";
import RAFTSLMRAG from "../../assets/RAFTSLMRAG.png";
export const projects: ProjectProps[] = [
  {
    name: "ClipCraft",
    description: [
      "AI-powered platform that turns natural-language prompts into <b>Manim animation videos</b> via a scalable async rendering pipeline (<b>Redis job queues + SSE</b>), secured with JWT, OAuth, rate limiting, and Cloudflare Turnstile.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Docker",
      "Redis",
      "SSE",
      "Supabase",
      "JWT/OAuth",
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
      "Turn YouTube playlists into courses with progress tracking and notes.",
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
      "Edge + cloud support assistant with RAG, delivering <b>90% cost reduction</b> and <b>10x token efficiency</b>.",
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
      "Scan food barcodes and get allergen alerts based on your profile.",
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
    name: "Laser Eyes",
    description: [
      "Image editor that adds laser-eye effects using MediaPipe and OpenCV.",
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
      "Scalable GCP + FFmpeg transcoder for multi-resolution video output.",
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
  return (
    <>
      <div className="inline-flex w-fit flex-col">
        <p className="text-xl md:text-2xl font-bold text-black dark:text-white" id="Projects">
          Projects
        </p>
        <div className="w-full h-[4px] rounded-full bg-accent" />
      </div>
      <div className="project-card mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-6 w-full">
          {projects.map((project, index) => (
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
      className="rounded-2xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-100 dark:from-neutral-600 dark:via-neutral-800 dark:to-neutral-800 p-[1px] border-gray-200 dark:border-gray-800 shadow-sm w-full h-[420px] sm:h-[450px] lg:h-[200px] transition-all duration-300 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 w-full h-full bg-white dark:bg-neutral-900/90 rounded-2xl shadow-sm transition-all duration-300 overflow-hidden">
        <div className="w-full lg:w-2/5 flex-shrink-0">
          <Image
            src={data.image}
            alt={data.name}
            width={420}
            height={260}
            className="w-full h-40 sm:h-48 lg:h-full object-cover select-none"
          />
        </div>

        <div className="flex flex-col p-4 sm:p-5 lg:py-4 lg:pr-5 lg:pl-0 flex-1 gap-2 min-h-0">
          <ul className="list-disc list-inside space-y-1 text-neutral-800 dark:text-neutral-200 max-h-[100px] sm:max-h-[118px] lg:max-h-[94px] overflow-hidden">
            {data.description.map((point, index) => (
              <li key={`${index}-${point}`} className="text-sm sm:text-base lg:text-base leading-relaxed overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                {HighlightedText(point)}
              </li>
            ))}
          </ul>

          {data.deployedLinks && data.deployedLinks.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-auto">
              {data.deployedLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 cursor-pointer"
                  onClick={() => window.open(link.link, "mywindow")}
                >
                  <div className="svg-icon text-neutral-800 dark:text-white w-3.5 h-3.5">
                    <WebsiteLink />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-white text-websitelink hover:text-[--accent]">{link.title}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-row gap-1.5 flex-wrap max-h-[56px] sm:max-h-[60px] overflow-hidden">
            {data.techStack.map((individualStack, index) => (
              <div
                key={index}
                className="rounded-full bg-[--accent-soft] px-2.5 py-0.5"
              >
                <p className="font-bold text-accent sm:text-sm md:text-md">{individualStack}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
