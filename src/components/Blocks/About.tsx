import React from 'react'
import Image from 'next/image'
import SjsuLogo from "../../assets/sjsu_logo.jpg"

export default function About() {
  return (
    <div className='flex flex-col gap-2'>
        <p className='text-xl lg:text-2xl lg:mb-2 mb-1 heading-primary font-bold' id='education'>Education</p>
        <div className='w-[75px] h-[4px] rounded-full bg-[#64ffda]' />
        <div className='flex flex-row rounded-lg py-2 md:p-4 gap-4 lg:gap-12 items-center'>
          <div className='rounded-full'>
            <Image src={SjsuLogo} alt="San Jose State University" width={125} height={125} className="rounded-full border-2 border-gray-800 select-none" />
          </div>
          <div className='text-[14px] md:text-[16px]'>
            <p className='font-bold'>
              M.S. Artificial Intelligence
            </p>
            <p className='font-semibold'>
              San Jose State University,<br className='md:hidden' /> San Jose, CA
            </p>
            <p className='font-semibold'>
              Expected Graduation:<br className='md:hidden' />December 2026
            </p>
            <p className='font-semibold'>
              GPA: 3.5 / 4.00
            </p>
          </div>
        </div>
    </div>
  )
}