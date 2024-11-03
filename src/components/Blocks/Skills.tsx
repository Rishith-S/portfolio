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
import FlutterIcon from "../icons/flutterIcon";
import PrismaIcon from "../icons/prismaIcon";
export default function Skills() {
  return (
    <div>
      <p className="text-2xl" id="Skills">
        Skills
      </p>
      <div className="flex flex-row flex-wrap gap-4 mt-2">
        <IndividualSkill title={'Javascript'} SvgIcon={JSIcon} />
        <IndividualSkill title={'Typescript'} SvgIcon={TSIcon} />
        <IndividualSkill title={'React'} SvgIcon={ReactIcon} />
        <IndividualSkill title={'Next JS'} SvgIcon={NextIcon} />
        <IndividualSkill title={'React Native'} SvgIcon={ReactIcon} />
        <IndividualSkill title={'Flutter'} SvgIcon={FlutterIcon} />
        <IndividualSkill title={'Tailwind CSS'} SvgIcon={TailwindIcon} />
        <IndividualSkill title={'Redux'} SvgIcon={ReduxIcon} />
        <IndividualSkill title={'NodeJs'} SvgIcon={NodejsIcon} />
        <IndividualSkill title={'Java'} SvgIcon={JavaIcon} />
        <IndividualSkill title={'C++'} SvgIcon={CppIcon} />
        <IndividualSkill title={'Python'} SvgIcon={PythonIcon} />
        <IndividualSkill title={'Mongo DB'} SvgIcon={mongoDBIcon} />
        <IndividualSkill title={'Postgres'} SvgIcon={PostgressIcon} />
        <IndividualSkill title={'Prisma'} SvgIcon={PrismaIcon} />
        <IndividualSkill title={'Git'} SvgIcon={gitIcon} />
        <IndividualSkill title={'AWS'} SvgIcon={AwsIcon} />
      </div>
    </div>
  );
}

function IndividualSkill({title,SvgIcon}:{title: string, SvgIcon: ()=>React.JSX.Element}) {
  return (
    <div className="w-[47%] flex flex-row items-center md:justify-center gap-2 px-4 py-3 bg-slate-800 rounded-lg backdrop-blur-md md:w-auto">
      <div className="w-7 h-7">
        <SvgIcon />
      </div>
      <p className="font-bold">{title}</p>
    </div>
  );
}
