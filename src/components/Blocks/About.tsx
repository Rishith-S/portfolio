import React from 'react'
import Image from 'next/image'
import SjsuLogo from "../../assets/sjsu_logo.jpg"

export default function About() {
  return (
    <div>
        <p className='text-2xl mb-2 heading-primary' id='Overview'>Education</p>
        <div className='flex flex-row rounded-lg p-4 gap-12 items-center justify-between border-2 border-gray-800'>
          <div className='text-[16px]'>
            <p>
              M.S. Artificial Intelligence
            </p>
            <p>
              San Jose State University, San Jose, CA
            </p>
            <p>
              Expected Graduation: December 2026
            </p>
            <p>
              GPA: 3.5/4.00
            </p>
          </div>
          <div className='rounded-full'>
            <Image src={SjsuLogo} alt="San Jose State University" width={125} height={125} className="rounded-full border-2 border-gray-800" />
          </div>
        </div>
    </div>
  )
}