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
  const skillGroups =
    {
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
      ]
    }

  return (
    <>
      <p className="text-2xl heading-primary font-bold" id="Skills">
        Skills
      </p>
      <div className='w-[75px] h-[4px] rounded-full bg-[#64ffda] mb-6' />
      
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row flex-wrap gap-4">
            {skillGroups.skills.map((skill, index) => (
              <IndividualSkill key={`${index}`} title={skill.title} SvgIcon={skill.SvgIcon} />
            ))}
          </div>
        </div>
      </div>
    </>
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

function IndividualSkill({ title, SvgIcon }: { title: string, SvgIcon: () => React.JSX.Element }) {
  return (
    <div
      className="rounded-lg bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] flex justify-start items-center lg:justify-center">
      <div className="w-full h-full p-4 bg-neutral-900/80 rounded-lg flex  justify-start items-center lg:justify-center gap-2">
        <div className="w-7 h-7">
          <SvgIcon />
        </div>
        <p className="font-bold text-[#ffffff]">{title}</p>
      </div>
    </div>
  );
}
