import React from "react";
import ReactIcon from "../icons/reactIcon";
import JSIcon from "../icons/javascriptIcon";
import TSIcon from "../icons/typescriptIcon";
import TailwindIcon from "../icons/tailwindIcon";
import ReduxIcon from "../icons/reduxIcon";
import JavaIcon from "../icons/javaIcon";
import NextIcon from "../icons/nextIcon";
import CppIcon from "../icons/cppIcon";
import PythonIcon from "../icons/pythonIcon";
import NodejsIcon from "../icons/nodejsIcon";
import mongoDBIcon from "../icons/mongoDBIcon";
import PostgressIcon from "../icons/postgressIcon";
import gitIcon from "../icons/gitIcon";
import AwsIcon from "../icons/awsIcon";
import PrismaIcon from "../icons/prismaIcon";
// import WebDevelopmentIcon from "../icons/webDevelopment";
// import MobileDevelopmentIcon from "../icons/mobileDevelopment";
// import BackendDevelopmentIcon from "../icons/backendDevelopment";
// import MachineLearningIcon from "../icons/machineLearningIcon";

export default function Skills() {
  const skillGroups = {
    title: "Backend & Systems",
    skills: [
      { title: "C++", SvgIcon: CppIcon },
      { title: "Java", SvgIcon: JavaIcon },
      { title: "NodeJs", SvgIcon: NodejsIcon },
      { title: "Postgres", SvgIcon: PostgressIcon },
      { title: "AWS", SvgIcon: AwsIcon },
      { title: "Mongo DB", SvgIcon: mongoDBIcon },
      { title: "Prisma", SvgIcon: PrismaIcon },
      { title: "Git", SvgIcon: gitIcon },
      { title: "Javascript", SvgIcon: JSIcon },
      { title: "Typescript", SvgIcon: TSIcon },
      { title: "React", SvgIcon: ReactIcon },
      { title: "Next JS", SvgIcon: NextIcon },
      { title: "React Native", SvgIcon: ReactIcon },
      { title: "Tailwind CSS", SvgIcon: TailwindIcon },
      { title: "Redux", SvgIcon: ReduxIcon },
      { title: "Python", SvgIcon: PythonIcon },
    ],
  };

  return (
    <div>
      <div className="inline-flex w-fit flex-col">
        <p
          className="text-2xl heading-primary font-bold text-black dark:text-white"
          id="Skills"
        >
          Skills
        </p>
        <div className="w-full h-[5px] rounded-full bg-accent mb-4" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {skillGroups.skills.map((skill, index) => (
            <IndividualSkill
              key={`${index}`}
              title={skill.title}
              SvgIcon={skill.SvgIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// function WhatICanBuild({ title, description, SvgIcon }: { title: string, description: string, SvgIcon: () => React.JSX.Element }) {
//   return (
//     <div className="rounded-lg bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] flex items-start justify-start lg:items-center lg:justify-center shadow-lg">
//       <div className="flex flex-row gap-6 w-full h-full bg-neutral-900/80 rounded-lg p-6">
//         <div className="w-12 h-12">
//           <SvgIcon />
//         </div>
//         <div className="flex flex-col gap-2">
//           <p className="font-bold text-[#ffffff] text-lg">{title}</p>
//           <p className="text-[#ffffff] text-md">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

function IndividualSkill({
  title,
  SvgIcon,
}: {
  title: string;
  SvgIcon: () => React.JSX.Element;
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/80 px-4 py-2">
      <div className="w-6 h-6 text-neutral-800 dark:text-white flex items-center justify-center">
        <SvgIcon />
      </div>
      <p className="font-medium text-neutral-900 dark:text-white">{title}</p>
    </div>
  );
}
