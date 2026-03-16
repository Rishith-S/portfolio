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
import GolangIcon from "../icons/golangIcon";

export default function Skills() {
  const skillGroups = {
    title: "Backend & Systems",
    skills: [
      { title: "Go", SvgIcon: GolangIcon },
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
          className="text-xl md:text-2xl heading-primary font-bold text-black dark:text-white"
          id="Skills"
        >
          Skills
        </p>
        <div className="w-full h-[5px] rounded-full bg-accent mb-4" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 md:flex md:flex-wrap md:gap-2">
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

function IndividualSkill({
  title,
  SvgIcon,
}: {
  title: string;
  SvgIcon: () => React.JSX.Element;
}) {
  return (
    <div className="flex w-full items-center gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/80 px-3 py-2 md:w-auto md:gap-3 md:px-4">
      <div className="w-5 h-5 md:w-6 md:h-6 text-neutral-800 dark:text-white flex items-center justify-center shrink-0">
        <SvgIcon />
      </div>
      <p className="font-medium text-[13px] leading-none md:text-base text-neutral-900 dark:text-white truncate">{title}</p>
    </div>
  );
}
