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
        link: "https://laser-eyes.onrender.com",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/Laser-eyes",
      },
    ],
    image: LaserEyes,
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
  },
  {
    name: "Starbucks - Frontend",
    description: [
      "Responsive Starbucks frontend clone built with React, TypeScript, and Tailwind CSS.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    deployedLinks: [
      {
        title: "Website",
        link: "https://starbucks-m8ec.onrender.com/",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/starbucks",
      },
    ],
    image: Starbucks,
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
        link: "https://face-anonymizer-hj7m.onrender.com/",
      },
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/face-anonymizer",
      },
    ],
    image: FaceAnonymizer,
  },
];

export const HighlightedText = (text: string) => {
  const formattedText = text.split(/(<b>.*?<\/b>)/).map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <span key={index} className="font-bold text-[16px] text-white 2xl:text-[16px]">
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="text-[16px] w-full text-white">
        {part}
      </span>
    );
  });

  return <>{formattedText}</>;
};

export default function Projects() {
  return (
    <div className="project-card flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold mb-2" id="Projects">
          Projects
        </p>
        <div className="w-[75px] h-[6px] rounded-full bg-[#64ffda]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 w-full h-full">
        {projects.map((project, index) => (
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
}

function ProjectCard({
  data
}: { data: ProjectProps }) {
  return (
    <div
      id="ProjectCard"
      className="rounded-3xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[2px] border-gray-800 experience-card cursor-pointer shadow-lg w-full h-full"
    >
      <div className="flex flex-col gap-4 w-full h-full bg-neutral-900/90 rounded-3xl shadow-lg">
        <div className="flex flex-col h-full w-full">
          <Image src={data.image} alt={data.name} width={150} height={150} className="rounded-t-3xl w-full h-48 object-fit" />
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
                  <p className="text-white">{link.title}</p>
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
