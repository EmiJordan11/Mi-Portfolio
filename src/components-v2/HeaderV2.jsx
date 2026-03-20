import { useEffect, useState } from "react"
import { HiBars3, HiXMark } from "react-icons/hi2"

export const HeaderV2 = () => {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const sections = ['experience', 'skills', 'projects', 'about']

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            for (const section of [...sections].reverse()) {
                const element = document.getElementById(section)
                if (element && window.scrollY >= element.offsetTop - 100) {
                    setActiveSection(section)
                    return
                }
            }

            setActiveSection('')
        }

        const handleHashChange = () => {
            const sectionFromHash = window.location.hash.replace('#', '')
            if (sections.includes(sectionFromHash)) {
                setActiveSection(sectionFromHash)
            } else {
                setActiveSection('')
            }
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener('hashchange', handleHashChange)

        handleHashChange()
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    const navItems = [
        { id: '#', label: 'Inicio' },
        { id: '#experience', label: 'Experiencia' },
        { id: '#skills', label: 'Skills' },
        { id: '#projects', label: 'Proyectos' },
        { id: '#about', label: 'Sobre Mí' },
    ]

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-500
                ${scrolled 
                    ? 'bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5' 
                    : 'bg-transparent'
                }
            `}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="text-xl font-semibold tracking-tight group">
                    <span className="text-white group-hover:text-emerald-400 transition-colors">Emiliano</span>
                    <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors"> Jordan</span>
                </a>
                
                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={item.id}
                                    onClick={() => setActiveSection(item.id.replace('#', ''))}
                                    className={`
                                        px-4 py-2 text-sm rounded-full transition-all duration-300
                                        ${activeSection === item.id.replace('#', '') 
                                            ? 'text-emerald-400 bg-emerald-400/10' 
                                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                        }
                                    `}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#0a0a0b]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
                    <nav className="px-6 py-4">
                        <ul className="flex flex-col gap-2">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.id}
                                        onClick={() => {
                                            setActiveSection(item.id.replace('#', ''))
                                            setIsMobileMenuOpen(false)
                                        }}
                                        className={`
                                            block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300
                                            ${activeSection === item.id.replace('#', '') 
                                                ? 'text-emerald-400 bg-emerald-400/10' 
                                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}
