import { useEffect, useState } from "react"

export const Header = () => {

    const [scrolled, setScrolled] = useState(false)

    const bgHover = "bg-[conic-gradient(at_bottom_right,rgba(29,78,216,0.8),rgba(30,64,175,0.8),rgba(17,24,39,0.8))] backdrop-blur-[2.75px]"

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 35) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    return (
        <header
            className={
                `fixed w-[100vw] h-14 pl-[10vw] pr-[11vw] flex items-center justify-between py-3 text-white font-bold text-2xl transition-all duration-300 z-[99999] ` +
                (scrolled
                    ? bgHover
                    : "")
            }
        >
            <p>Emiliano <span className="text-[#808080]">Jordan</span></p>
            <nav className="text-base">
                <ul className="flex gap-3">
                    <li className="relative group hover:cursor-pointer">
                        <a href="#">Inicio</a>
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group hover:cursor-pointer">
                        <a href="#skills">Habilidades</a>
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group hover:cursor-pointer">
                        <a href="#projects">Proyectos</a>
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group hover:cursor-pointer">
                        <a href="#experience">Experiencia</a>
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group hover:cursor-pointer">
                        <a href="#about">Sobre Mi</a>
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}