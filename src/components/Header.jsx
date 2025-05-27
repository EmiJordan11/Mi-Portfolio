import { useEffect, useState } from "react"

export const Header = () => {

    const [scrolled, setScrolled] = useState(false)

    const bgHover = "bg-[conic-gradient(at_bottom_right,rgba(29,78,216,0.8),rgba(30,64,175,0.8),rgba(17,24,39,0.8))] backdrop-blur"

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
                `fixed w-[100vw] pl-[10vw] pr-[11vw] flex items-center justify-between py-3 text-white font-bold text-2xl transition-all duration-300 ` +
                (scrolled
                    ? bgHover
                    : "")
            }>
            <p>Emiliano <span className="text-[#808080]">Jordan</span></p>
            <nav className="text-base">
                <ul className="flex gap-3">
                    <li className="relative group hover:cursor-pointer">
                        Inicio
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group hover:cursor-pointer">
                        Habilidades
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group hover:cursor-pointer">
                        Proyectos
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group hover:cursor-pointer">
                        Experiencia
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group hover:cursor-pointer">
                        Sobre Mi
                        <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}