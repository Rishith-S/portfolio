import React from 'react'

const Navbar = ({currentSection, setCurrentSection }: { currentSection:number, setCurrentSection:React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div className="rounded-t-3xl  md:rounded-none flex flex-row gap-8 text-white font-semibold select-none">
        <p className={`cursor-pointer ${currentSection === 0 ? 'text-[#64ffda]' : 'text-white'}`} onClick={() => setCurrentSection(0)}>About</p>
        <p className={`cursor-pointer ${currentSection === 1 ? 'text-[#64ffda]' : 'text-white'}`} onClick={() => setCurrentSection(1)}>Experience</p>
        <p className={`cursor-pointer ${currentSection === 2 ? 'text-[#64ffda]' : 'text-white'}`} onClick={() => setCurrentSection(2)}>Projects</p>
        <p className={`cursor-pointer ${currentSection === 3 ? 'text-[#64ffda]' : 'text-white'}`} onClick={() => setCurrentSection(3)}>Contact</p>
    </div>
  )
}

export default Navbar