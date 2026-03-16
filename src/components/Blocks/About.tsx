import React from "react";
import Image from "next/image";
import SjsuLogo from "../../assets/sjsu_logo.jpg";

export default function About() {
  return (
    <div>
      <div>
        <div className="inline-flex w-fit flex-col">
          <p
            className="text-xl lg:text-2xl heading-primary font-bold text-black dark:text-white"
            id="about"
          >
            About
          </p>
          <div className="w-full h-[4px] rounded-full bg-accent" />
        </div>
        <div className="flex flex-col p-[1px] rounded-lg my-4 bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-100 dark:from-neutral-600 dark:via-neutral-800 dark:to-neutral-800">
          <div className="flex flex-col p-4 rounded-lg bg-white dark:bg-neutral-900/95 shadow-sm">
            <p className="text-md text-neutral-800 dark:text-neutral-200 lg:hidden">
              Hi, this is Rishith. I like building cool stuff using
              <span className="font-bold text-blue-500"> Go</span>,
              <span className="inline-flex items-center gap-1 mx-1 align-[1px]">
                <TechBadge variant="ts">Ts</TechBadge>
                <span>/</span>
                <TechBadge variant="js">Js</TechBadge>
              </span>
              and
              <span className="font-bold text-black dark:text-white"> Python</span>.
            </p>
            <div className="hidden lg:block lg:text-[16px] text-neutral-800 dark:text-neutral-200 space-y-4">
              <p>
                Hi,<br />
                This is Rishith. I like building stuff using
                <span className="font-bold text-blue-500"> Go</span>,
                <span className="inline-flex items-center gap-1 mx-1 align-[1px]">
                  <TechBadge variant="ts">Ts</TechBadge>
                  <span>/</span>
                  <TechBadge variant="js">Js</TechBadge>
                </span>
                and
                <span className="font-bold text-black dark:text-white"> Python</span>.
              </p>
              <div>
                <p className="font-semibold">What I am into:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Web servers</li>
                  <li>APIs and databases</li>
                  <li>Message brokers</li>
                  <li>Real-time data systems</li>
                  <li>Serverless architecture</li>
                  <li>Distributed services</li>
                </ul>
              </div>
              <p>
                I’ve built backend systems, full stack products, and infrastructure that actually
                runs in production. I enjoy exploring internals and re-implementing ideas from
                papers just to understand them better.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex w-fit flex-col">
        <p
          className="text-xl lg:text-2xl heading-primary font-bold text-black dark:text-white"
          id="education"
        >
          Education
        </p>
        <div className="w-full h-[4px] rounded-full bg-accent" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row rounded-lg py-2 md:p-4 gap-4 lg:gap-12 items-center">
          <div className="rounded-full">
            <Image
              src={SjsuLogo}
              alt="San Jose State University"
              width={125}
              height={125}
              className="rounded-full border-2 hidden md:flex border-neutral-200 dark:border-neutral-700 select-none"
            />
          </div>
          <div className="text-[14px] md:text-[16px]">
            <p className="font-bold text-black dark:text-white">M.S. Artificial Intelligence</p>
            <p className="font-semibold text-neutral-600 dark:text-neutral-400">
              San Jose State University,
              <br className="md:hidden" /> San Jose, CA
            </p>
            <p className="font-semibold text-neutral-600 dark:text-neutral-400">
              <span className="hidden md:inline">Expected Graduation</span>
              <span className="inline md:hidden">Exp. Grad</span>: Dec 2026
            </p>
            <p className="font-semibold text-neutral-600 dark:text-neutral-400">GPA: 3.5 / 4.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechBadge({ children, variant }: { children: React.ReactNode; variant: "ts" | "js" }) {
  const classes =
    variant === "ts"
      ? "bg-blue-500 text-white"
      : "bg-yellow-400 text-black";

  return (
    <span className={`inline-flex items-center rounded-md p-1.5 text-[0.8em] leading-none font-bold ${classes}`}>
      {children}
    </span>
  );
}
