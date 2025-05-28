import { useEffect, useState } from "react"
import { NavItem } from "./NavItem"

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
            className={`
                fixed w-[100vw] h-14 text-2xl font-bold py-3 pl-[10vw] pr-[11vw] transition-all duration-300 z-[99999] flex items-center justify-between
                max-lg:px-5 
                max-sm:px-4 max-sm:text-xs max-sm:h-10
                max-xs:justify-center
                ` +
                (scrolled
                    ? bgHover
                    : "")
            }
        >
            <p className="max-xs:hidden">
                Emiliano <span className="text-[#808080]">Jordan</span>
            </p>
            <nav className="
                text-base
                max-md:text-xs
                max-xs:text-sm
            ">
                <ul className="flex gap-3 ">
                    <NavItem id={'#'} >Inicio</NavItem>
                    <NavItem id={'#experience'} >Experiencia</NavItem>
                    <NavItem id={'#skills'} >Habilidades</NavItem>
                    <NavItem id={'#projects'} >Proyectos</NavItem>
                    <NavItem id={'#about'} >Sobre Mí</NavItem>
                </ul>
            </nav>
        </header>
    )
}