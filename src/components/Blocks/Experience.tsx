import Image, { StaticImageData } from "next/image";
import EksaqLogo from "../../assets/eksaqLogo.png";
import JediteckLogo from "../../assets/jediteckLogo.png";
import ArrowIcon from "../icons/arrowIcon";
import WebsiteLink from "../icons/websiteLink";
import AimlclubSjsu from "../../assets/aimlclubsjsu.png";

const experiences = [
  {
    name: "EKSAQ",
    role: "Associate Software Engineer",
    duration: "Jun 2024 - Jan 2025",
    companyWebsite: "https://eksaq.in",
    description: [
      "Developed a cross-platform <b>React/React Native</b> learning platform that scaled to <b>10,000+ monthly active students</b>, resolving performance bottlenecks to ensure reliable access across devices.",
      "Integrated <b>Azure Speech Services</b> on <b>AWS EC2</b> for real-time pronunciation scoring, boosting engagement by <b>2.4x</b>.",
      "Containerized backend on <b>AWS ECS</b> and redesigned into <b>microservices</b>, cutting LMS load time by <b>50%+</b> and enabling smoother student workflows.",
      "Migrated from <b>WordPress/Moodle</b> to <b>AWS ECS + Amplify</b>, reducing infrastructure expenses by <b>30%</b> while improving scalability and reliability.",
      "Contributed to <b>system architecture design</b> and authored detailed <b>technical & API documentation</b> for scalable deployment, accelerating engineer onboarding and enhancing collaboration.",
    ],
    imageLogo: EksaqLogo,
    techStack: [
      "React Native",
      "React",
      "Express",
      "Postgresql",
      "AWS ECS",
      "Typescript",
      "Redux",
      "Tailwind CSS",
      "Supabase",
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
    name: "AIML Club SJSU",
    role: "Web Dev Officer",
    duration: "Sep 2025 - Dec 2025",
    companyWebsite: "https://www.ai-ml-club-sjsu.com/about",
    description: [
      "Implemented a <b>check-in feature</b> allowing PR members to attend events using attendance codes.",
      "Resolved multiple <b>frontend bugs</b> to improve user experience and application stability.",
    ],
    imageLogo: AimlclubSjsu,
    techStack: ["Typescript", "Supabase", "Postgres", "NextJS"],
    deployedLinks: [
      {
        title: "Website Link",
        link: "https://www.ai-ml-club-sjsu.com/about",
      },
    ],
  },
  {
    name: "EKSAQ",
    role: "SDE Intern",
    duration: "Oct 2023 - May 2024",
    companyWebsite: "https://eksaq.in",
    description: [
      "Launched an LMS using <b>React + Supabase</b>, enabling <b>1,000+ staff</b> to complete mandatory training.",
      "Designed secure workflows with <b>Supabase Auth + PostgreSQL</b>, streamlining certification tracking and ensuring compliance.",
      "Optimized <b>Supabase Buckets</b> with signed URL access, reducing file latency by <b>40%</b>.",
      "Performed <b>software testing</b> and applied debugging techniques, ensuring application reliability and quicker issue resolution.",
    ],
    imageLogo: EksaqLogo,
    techStack: [
      "React",
      "Node.js",
      "Supabase",
      "PostgreSQL",
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
      "Developed an <b>AI-driven document analysis and retrieval system</b> using <b>FAISS</b> (Facebook AI Similarity Search) for efficient similarity search.",
      "Built and deployed a scalable <b>React-based chat interface</b> on <b>AWS EC2 with Auto Scaling</b>, utilizing <b>S3</b> for file storage and <b>DynamoDB</b> for user chat management.",
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
        <span
          key={index}
          className="font-bold text-[14px] md:text-[16px] text-neutral-900 dark:text-[#ffffff]"
        >
          {part.replace("<b>", "").replace("</b>", "")}
        </span>
      );
    }
    return (
      <span key={index} className="text-[14px] md:text-[16px] text-neutral-800 dark:text-[#ffffff]">
        {part}
      </span>
    );
  });

  return <>{formattedText}</>;
};

export default function Experience() {
  return (
    <>
      <div className="inline-flex w-fit flex-col">
        <p id="Experience" className="text-xl md:text-2xl heading-primary font-bold text-black dark:text-white">
          Experience
        </p>
        <div className="w-full h-[4px] rounded-full bg-accent" />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {experiences.map((individualExperience, index) => (
          <ExperienceCard key={index} data={individualExperience} />
        ))}
      </div>
    </>
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

function ExperienceCard({ data }: { data: ExperienceProps }) {
  return (
    <div
      className="rounded-3xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-100 dark:from-neutral-600 dark:via-neutral-800 dark:to-neutral-800 p-[1px] border-gray-200 dark:border-gray-800 experience-card cursor-pointer transition-all duration-300"
      onClick={() => window.open(data.companyWebsite, "mywindow")}
    >
      <div className="flex flex-col gap-3 w-full h-full bg-white dark:bg-neutral-900/80 rounded-3xl p-4 md:p-6 shadow-sm transition-all duration-300">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between w-[100%]">
          <div className="flex flex-row items-start justify-start md:items-center md:justify-center gap-4">
            <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              <Image
                src={data.imageLogo}
                alt={data.name}
                fill
                className="object-contain select-none rounded-xl"
              />
            </div>
            <div>
              <div className="flex flex-col md:flex-row">
                <p className="text-sm md:text-lg font-bold text-neutral-800 dark:text-white dark:group-hover:text-accent">
                  {data.role} &nbsp;
                </p>
                <div className="flex flex-row text-sm md:text-lg font-bold text-neutral-800 dark:text-white dark:group-hover:text-accent">
                  <p className="hidden text-neutral-400 dark:text-hover md:flex">|&nbsp;</p>{" "}
                  {data.name}
                  <div
                    className="hidden w-7 h-7 md:flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:translate-y-[-1px] skill-icon2 text-neutral-800 dark:text-white"
                    onClick={() => window.open(data.companyWebsite, "mywindow")}
                  >
                    <div className="experience-icon w-5 h-5">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-lg font-bold text-neutral-600 dark:text-[#ffffff]">
                {data.duration}
              </p>
            </div>
          </div>
        </div>

        <div>
          <ul className={"list-disc list-inside md:mt-2 text-neutral-700 dark:text-neutral-300 space-y-1"}>
            {data.description.map((point, index) => (
              <li key={index} className="text-sm md:text-base">
                {HighlightedText(point)}
              </li>
            ))}
          </ul>
          <div
            className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${data.deployedLinks && data.deployedLinks.length > 0 ? "my-4" : "hidden"}`}
          >
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
                  <div className="text-neutral-800 dark:text-white">
                    <WebsiteLink />
                  </div>
                  <p className="text-sm md:text-md text-websitelink text-neutral-800 dark:text-[#ffffff]">
                    {link.title}
                  </p>
                </div>
              ))}
          </div>
          <div className="flex flex-row gap-2 flex-wrap mt-2">
            {data.techStack.map((individualStack, index) => (
              <div
                key={index}
                className="rounded-full bg-[--accent-soft] dark:bg-gray-800 w-auto px-2 py-1 transition-colors duration-300"
              >
                <p className="text-sm md:text-md font-bold text-accent">{individualStack}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
