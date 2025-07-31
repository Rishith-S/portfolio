"use client"

import Image, { StaticImageData } from "next/image";
import VideoTranscoder from "../../assets/videoTranscoder.png";
import Clipcraft from "../../assets/clipcraft.png";
import Packcheck from "../../assets/packcheck.png";
import YoutubenotesX from "../../assets/youtubenotesx.png";
import ArrowIcon from "../icons/arrowIcon";
import WebsiteLink from "../icons/websiteLink";
import Starbucks from "../../assets/starbucks.png";
export const projects: ProjectProps[] = [
  {
    name: "PackCheck",
    description: [
      "Built a web app that scans food product barcodes and flags allergens based on user preferences with real-time alerts.",
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
        link: "https://github.com/Rishith-S/video-transcoder",
      },
    ],
    image: Packcheck,
  },
  {
    name: "ClipCraft",
    description: [
      "Converts user prompts into LLM-generated math/physics visualizations using Manim and a scalable video pipeline.",
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
        link: "https://github.com/Rishith-S/video-transcoder",
      },
    ],
    image: Clipcraft,
  },
  {
    name: "Video Transcoder",
    description: [
      "Built scalable video transcoding system using GCP Storage/Pub/Sub with FFmpeg for multi-resolution output (360p-1080p).",
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
    name: "YoutubenotesX",
    description: [
      "Developed a web app to import YouTube videos, take timestamped notes, manage playlists, and collaborate using Supabase and YouTube API.",
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
        link: "https://github.com/Rishith-S/video-transcoder",
      },
    ],
    image: YoutubenotesX,
  },
  {
    name: "Starbucks - Frontend",
    description: [
      "Built a responsive and visually appealing frontend interface for Starbucks, utilizing React, TypeScript, and Tailwind CSS.",
    ],
    techStack: [  
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    deployedLinks: [
      {
        title: "GitHub",
        link: "https://github.com/Rishith-S/starbucks",
      },
    ],
    image: Starbucks, 
  },
];

export const HighlightedText = (text: string) => {
  const formattedText = text.split(/(<b>.*?<\/b>)/).map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <span key={index} className="font-bold text-md text-white 2xl:text-xl">
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="text-md w-full text-white">
        {part}
      </span>
    );
  });

  return <>{formattedText}</>;
};

export default function Projects() {
  return (
    <div className="project-card">
      <p className="text-2xl mb-2" id="Projects">
        Projects
      </p>
      <div className="flex flex-col items-center justify-center gap-4">
        {projects.slice(0, 3).map((project, index) => (
          <div key={`index-${index}`} className="flex flex-col items-center justify-center"  >
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
      <div
        className="flex view-full-project-archive flex-row p-4 items-center cursor-pointer"
        onClick={() => window.location.href = "/projects"}
      >
        <p className="text-md font-bold text-hover">View Full Project Archive</p>
        <div className="skill-icon">
          <ArrowIcon />
        </div>
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
      className="rounded-3xl border-2 hover:border-0 border-gray-800 experience-card cursor-pointer lg:p-4 hover:p-4"
    >
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between w-[100%]">
        <div className="flex flex-row items-start justify-start md:items-center md:justify-center gap-4">
          <div>
            <div className="flex flex-col md:flex-row">
              <p className="text-xl font-bold text-hover">{data.name} &nbsp;</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-row items-center justify-center gap-4 mt-2 w-full">
          {typeof data.image === "string" ? (
            <video
              src={data.image}
              width={150}
              height={150}
              className="rounded-lg border-2 border-gray-800 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <Image src={data.image} alt={data.name} width={150} height={150} className="rounded-lg border-2 border-gray-800" />
          )}
          <ul className={"list-disc list-inside mt-2"}>
            {data.description.map((point, index) => (
              <li key={`${index}-${point}`}>
                {HighlightedText(point)}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center gap-4 my-4">
          {data.deployedLinks &&
            data.deployedLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-2 link-div cursor-pointer"
                onClick={() => {
                  window.open(link.link, "mywindow");
                }}
              >
                <WebsiteLink />
                <p className="text-websitelink text-white">{link.title}</p>
              </div>
            ))}
        </div>
        <div className="flex flex-row gap-2 flex-wrap mt-2">
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
  );
}
