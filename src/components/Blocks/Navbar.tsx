
const Navbar = ({currentSection, onSectionChange }: { currentSection:number, onSectionChange:(sectionIndex: number) => void }) => {
    const sections = ["About", "Experience", "Projects", "Contact"];
  
  return (
    <div className="rounded-t-3xl md:rounded-none flex flex-row w-full justify-evenly md:flex md:w-auto md:gap-8 items-center font-semibold select-none">
        {sections.map((section, index) => (
            <p 
                key={section}
                className={`text-center text-sm md:text-base md:text-left py-1 md:py-0 cursor-pointer transition-colors duration-200 ${
                    currentSection === index 
                        ? 'text-accent'
                        : 'text-neutral-500 dark:text-neutral-400 hover:text-accent'
                }`} 
                onClick={() => onSectionChange(index)}
            >
                {section}
            </p>
        ))}
    </div>
  )
}

export default Navbar