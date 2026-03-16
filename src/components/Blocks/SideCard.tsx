"use client";

import React from 'react';
import Image from 'next/image';
import profileD from "@/assets/profile.png";
import profileL from "@/assets/profileL.png"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const SideCard = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const profile = mounted && resolvedTheme === "dark" ? profileD : profileL;

    return (
        <div className="relative w-full lg:w-[35%] h-fit bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-md rounded-[35px] p-6 lg:p-10 flex flex-col items-center overflow-hidden transition-all duration-300">

            {/* Profile Image Container */}
            <div className="relative z-10 mt-6 lg:mt-8 mb-6 group">
                 <div className="relative w-52 h-52 rounded-[24px] overflow-hidden transition-transform duration-500 scale-100 hover:scale-[1.02] border-2 dark:border-neutral-700 border-neutral-300">
                    <Image 
                        src={profile} 
                        alt="Rishith Saginala" 
                        fill
                        className="object-cover object-top scale-[1.01]"
                        priority
                    />
                 </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 w-full flex flex-col items-center">
                <h1 className="text-3xl lg:text-4xl font-black text-black dark:text-white text-center tracking-tight mb-2">
                    Rishith Saginala
                </h1>

                <p className="text-gray-600 dark:text-gray-300 font-medium text-center text-sm lg:text-base max-w-[280px] leading-relaxed mb-4">
                    Software Developer
                </p>

                <a
                    href="https://drive.google.com/file/d/1F94SOYfOrFnGHgDEaYGpbnxWueAhHXv5/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block mt-2 mb-8 group cursor-pointer"
                >
                    <span className="absolute inset-0 bg-accent transform -rotate-3 group-hover:rotate-0 transition-transform duration-200"></span>
                    <span className="relative z-10 font-bold text-white dark:text-black px-2 text-lg">View Resume</span>
                </a>

                <div className="flex gap-5 items-center justify-center w-full pb-2">
                    <SocialLink href="https://github.com/Rishith-S" icon={<GithubIcon />} label="GitHub" />
                    <SocialLink href="https://www.linkedin.com/in/rishith-s/" icon={<LinkedinIcon />} label="LinkedIn" />
                    <SocialLink href="https://x.com/Rishi_83s/" icon={<TwitterIcon />} label="Twitter" />
                    <SocialLink href="mailto:saginalarishith@gmail.com" icon={<EmailIcon />} label="Email" />
                </div>
            </div>
        </div>
    );
};

// Helper Components
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={label}
        className="text-accent hover:scale-110 transition-all duration-200 p-2 rounded-lg hover:bg-accent-soft"
    >
        {icon}
    </a>
);

// Custom SVG Icons
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);



export default SideCard;