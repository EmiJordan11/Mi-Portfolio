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
                fixed w-[100vw] font-bold py-3 transition-all duration-300 z-[99999] flex items-center justify-between
                lg:h-14 lg:pl-[10vw] lg:pr-[11vw]
                md:h-14  md:px-5 md:text-2xl
                xs:text-xs xs:px-4
                ` +
                (scrolled
                    ? bgHover
                    : "")
            }
        >
            <p className="

            ">
                Emiliano <span className="text-[#808080]">Jordan</span>
            </p>
            <nav className="
                md:text-base
                xs:text-xs
            ">
                <ul className="flex gap-3">
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