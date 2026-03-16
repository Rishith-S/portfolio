
const Navbar = ({currentSection, onSectionChange }: { currentSection:number, onSectionChange:(sectionIndex: number) => void }) => {
    const sections = [
      { label: "About", mobileLabel: "About" },
      { label: "Experience", mobileLabel: "Exp" },
      { label: "Projects", mobileLabel: "Proj" },
      { label: "Contact", mobileLabel: "Contact" },
    ];
  
  return (
    <div className="rounded-t-3xl md:rounded-none grid w-full grid-cols-4 items-center font-semibold select-none md:flex md:w-auto md:gap-8">
        {sections.map((section, index) => (
            <button
                key={section.label}
                type="button"
                className={`text-center text-[12px] sm:text-sm md:text-base md:text-left py-1 md:py-0 cursor-pointer transition-colors duration-200 whitespace-nowrap ${
                    currentSection === index 
                        ? 'text-accent'
                        : 'text-neutral-500 dark:text-neutral-400 hover:text-accent'
                }`} 
                onClick={() => onSectionChange(index)}
                aria-current={currentSection === index ? "page" : undefined}
            >
                <span className="md:hidden">{section.mobileLabel}</span>
                <span className="hidden md:inline">{section.label}</span>
            </button>
        ))}
    </div>
  )
}

export default Navbar