import Image, { StaticImageData } from "next/image";
import EksaqLogo from "../../assets/eksaqLogo.png";
import JediteckLogo from "../../assets/jediteckLogo.png";
import ArrowIcon from "../icons/arrowIcon";
import WebsiteLink from "../icons/websiteLink";

const experiences = [
  {
    name: "EKSAQ",
    role: "Associate Software Developer",
    duration: "Jun 2024 - Jan 2025",
    companyWebsite: "https://eksaq.in",
    description: [
      "Developed a Reading Comprehension Assessment App using <b>React Native</b>, achieving cross-platform functionality for mobile and web with over <b>10,000 active users</b>.",
      "Integrated <b>Supabase</b> for backend infrastructure, providing scalable database solutions and secure user authentication to support growing user needs.",
      "Connected <b>Azure Speech Service</b> via <b>AWS EC2</b> to a React Native app to assess student audio submissions.",
      "Deployed app in App Store and Hosted the website using AWS Amplify",
    ],
    imageLogo: EksaqLogo,
    techStack: [
      "Typescript",
      "Supabase",
      "Postgres",
      "React Native",
      "React",
      "Redux",
    ],
    deployedLinks: [
      {
        title: "Android App",
        link: "https://play.google.com/store/apps/details?id=com.eksaq.rcaeksaq&hl=en_US",
      },
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
  {
    name: "EKSAQ",
    role: "SDE Intern",
    duration: "Oct 2023 - May 2024",
    companyWebsite: "https://eksaq.in",
    description: [
      "Designed robust relational schemas and integrated Supabase Buckets for secure media handling.",
      "Designed and managed a robust Supabase PostgreSQL schema and leveraged Supabase Buckets for secure assignment and training material storage.",
      "Enabled real-time group collaboration and scalable content delivery with CometChat SDK, secure role-based access, authentication, and progress tracking to support high-concurrency usage.",
    ],
    imageLogo: EksaqLogo,
    techStack: [
      "Typescript",
      "Supabase",
      "Postgres",
      "React Native",
      "React",
      "Redux",
    ],
    deployedLinks: [
      {
        title: "Website Link - SML",
        link: "https://sml.eksaq.in",
      },
    ],
  },
  {
    name: "Jediteck",
    role: "AI Software Engineer Intern ",
    duration: "May 2023 - Sept 2024",
    companyWebsite: "https://www.jediteck.com/",
    description: [
      "Developed an AI-driven document analysis and retrieval system using FAISS(Facebook AI Similarity Search) for efficient similarity search.",
      "Built and deployed a scalable React-based chat interface on AWS EC2 with Auto Scaling, utilizing S3 for file storage and DynamoDB for user chat management.",
    ],
    imageLogo: JediteckLogo,
    techStack: [
      "FAISS",
      "React",
      "AWS EC2",
      "Auto Scaling",
      "AWS S3",
      "DynamoDB",
    ],
    deployedLinks: [],
  },
];

const HighlightedText = (text: string) => {
  const formattedText = text.split(/(<b>.*?<\/b>)/).map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <span key={index} className="font-bold text-lg text-white md:text-xl">
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="md:text-lg text-white">
        {part}
      </span>
    );
  });

  return <>{formattedText}</>;
};

export default function Experience() {
  return (
    <div className="flex flex-col gap-4">
      <p id="Experience" className="text-2xl mb-2">
        Experience
      </p>
      {experiences.map((individualExperience, index) => (
        <ExperienceCard
          key={index}
          data={individualExperience}
        />
      ))}
    </div>
  );
}

interface ExperienceProps {
  imageLogo: StaticImageData;
  name: string;
  companyWebsite: string;
  role: string;
  duration: string;
  description: string[];
  techStack: string[];
  deployedLinks?: { title: string; link: string }[];
}

function ExperienceCard({
  data
}: { data: ExperienceProps }) {
  return (
    <div
      id="ExperienceCard"
      className="rounded-3xl lg:border-2 hover:border-0 border-gray-800 experience-card cursor-pointer lg:p-4 hover:p-4"
      onClick={() => window.open(data.companyWebsite, "mywindow")}
    >
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between w-[100%]">
        <div className="flex flex-row items-start justify-start md:items-center md:justify-center gap-4">
          <div className="w-12 h-12 bg-white rounded-lg justify-start items-start">
            <Image src={data.imageLogo} alt="eksaq" width={100} height={100} className="rounded-md" />
          </div>
          <div>
            <div className="flex flex-col md:flex-row">
              <p className="text-lg font-bold text-hover">{data.role} &nbsp;</p>
              <div className="flex flex-row md:text-lg font-bold text-hover">
                |&nbsp; {data.name}
                <div className="w-7 h-7 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px]" onClick={() => window.open(data.companyWebsite, "mywindow")}>
                  <ArrowIcon />
                </div>
              </div>
            </div>
            <p className="md:text-lg font-bold text-white">{data.duration}</p>
          </div>
        </div>
      </div>

      <div>
        <ul className={"list-disc list-inside mt-2"}>
          {data.description.map((point, index) => (
            <li key={index} className="text-lg">
              {HighlightedText(point)}
            </li>
          ))}
        </ul>
        <div className={`flex flex-row items-center gap-4 ${ data.deployedLinks && data.deployedLinks.length > 0 ? "my-4" : "hidden" }`}>
          {data.deployedLinks &&
            data.deployedLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-2 link-div cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
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
