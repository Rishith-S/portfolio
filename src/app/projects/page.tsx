"use client"

import React from 'react'
import { projects, ProjectProps, HighlightedText } from '@/components/Blocks/Projects';
import Image from 'next/image';
import WebsiteLink from '@/components/icons/websiteLink';
import ArrowIcon from '@/components/icons/arrowIcon';

export default function Projects() {
  return (
    <div>
      <div className='flex flex-row backtoHomePage gap-2 px-6 mb-2 mt-4 cursor-pointer' onClick={() => window.location.href = "/"}>
        <div className='arrow-icon'><ArrowIcon /></div>
        <p className='text-lg font-bold text-hover'>Rishith Saginala</p>
      </div>
      <div className="flex flex-row gap-4 w-full h-full items-center justify-center">
        <div className="flex flex-col lg:flex-row flex-wrap w-full h-full px-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  data
}: { data: ProjectProps }) {
  return (
    <div
      id="ProjectCard"
      className="rounded-3xl experience-card cursor-pointer border-2 border-gray-800 w-full lg:w-[24%] m-2"
    >
      <Image
        src={data.image}
        alt={data.name}
        width={400}
        height={200}
        className="rounded-t-3xl object-cover w-full h-48"
      />

      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <p className="text-lg font-bold text-hover">{data.name} &nbsp;</p>
          <ul className={"list-disc list-inside"}>
            {data.description.map((point, index) => (
              <li key={`${index}-${point}`} className="text-[15px] text-white text-justify">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center gap-2">
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
                <p className="text-websitelink text-white text-sm">{link.title}</p>
              </div>
            ))}
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
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
  );
}
