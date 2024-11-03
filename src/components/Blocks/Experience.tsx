import React from "react";
import Image, { StaticImageData } from "next/image";
import EksaqLogo from "../../assets/eksaqLogo.png";
import ArrowIcon from "../icons/arrowIcon";
import WebsiteLink from "../icons/websiteLink";

const experiences = [
  {
    name: "EKSAQ",
    role: "Associate Software Developer",
    duration: "Oct 2023 - Present",
    description: [
      "Developed a Reading Comprehension Assessment App using <b>React Native</b>, achieving cross-platform functionality for mobile and web with over <b>10,000 active users</b>.",
      "Integrated <b>Supabase</b> for backend infrastructure, providing scalable database solutions and secure user authentication to support growing user needs.",
      "Connected <b>Azure Speech Service</b> via <b>AWS EC2</b> to a React Native app to assess student audio submissions.",
      "Deployed app in App Store and Hosted the website using AWS Amplify",
    ],
    imageLogo: EksaqLogo,
    techStack: [
      "Javascript",
      "Typescript",
      "Supabase",
      "Postgres",
      "React Native",
      "React",
      "Redux",
    ],
    deployedLinks: [
      {
        title: "IOS App",
        link: "https://apps.apple.com/in/app/eksaq-rca/id6717585860",
      },
      {
        title: "Website Link - RCA",
        link: "https://rca.eksaq.in",
      },
    ],
  },
];

const HighlightedText = (text: string) => {
  const formattedText = text.split(/(<b>.*?<\/b>)/).map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <span key={index} className="font-bold text-lg md:text-xl">
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="md:text-lg">
        {part}
      </span>
    );
  });

  return <>{formattedText}</>;
};

export default function Experience() {
  return (
    <div>
      <p id="Experience" className="text-2xl">
        Experience
      </p>
      {experiences.map((individualExperience, index) => (
        <ExperienceCard
          key={index}
          name={individualExperience.name}
          role={individualExperience.role}
          imageLogo={individualExperience.imageLogo}
          duration={individualExperience.duration}
          description={individualExperience.description}
          techStack={individualExperience.techStack}
          deployedLinks={individualExperience.deployedLinks}
        />
      ))}
    </div>
  );
}

function ExperienceCard({
  imageLogo,
  name,
  role,
  duration,
  description,
  techStack,
  deployedLinks,
}: {
  imageLogo: StaticImageData;
  name: string;
  role: string;
  duration: string;
  description: string[];
  techStack: string[];
  deployedLinks?: { title: string; link: string }[];
}) {
  return (
    <div
      id="ExperienceCard"
      className="mt-2 rounded-xl experience-card cursor-pointer lg:p-4"
    >
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between w-[100%]">
        <div className="flex flex-row items-start justify-start md:items-center md:justify-center gap-4">
          <div className="w-12 h-12 bg-white rounded-lg justify-start items-start">
            <Image src={imageLogo} alt="eksaq" width={100} height={100} />
          </div>
          <div>
            <div className="flex flex-col md:flex-row">
              <p className="text-lg font-bold text-hover">{role} &nbsp;</p>
              <div className="flex flex-row md:text-lg font-bold text-hover">
                |&nbsp; {name}
                <div className="w-7 h-7 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]">
                  <ArrowIcon />
                </div>
              </div>
            </div>
            <p className="md:text-lg font-bold">{duration}</p>
          </div>
        </div>
      </div>

      <div>
        <ul className={"list-disc list-inside mt-2"}>
          {description.map((point, index) => (
            <li key={index} className="text-lg">
              {HighlightedText(point)}
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center gap-4 my-4">
          {deployedLinks &&
            deployedLinks.map((link, index) => (
              <div
              key={index}
                className="flex flex-row items-center gap-2 link-div cursor-pointer"
                onClick={() => {
                  window.open(link.link, "mywindow");
                }}
              >
                <WebsiteLink />
                <p className="text-websitelink">{link.title}</p>
              </div>
            ))}
        </div>
        <div className="flex flex-row gap-2 flex-wrap mt-2">
          {techStack.map((individualStack, index) => (
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
