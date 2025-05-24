import { useEffect, useState } from "react"

export const Header = () => {

    const [scrolled, setScrolled] = useState(false)

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
                    ? "bg-[conic-gradient(at_bottom_right,rgba(29,78,216,0.8),rgba(30,64,175,0.8),rgba(17,24,39,0.8))] backdrop-blur"
                    : "")
            }>
            <p>Emiliano <span className="text-[#808080]">Jordan</span></p>
            <nav className="text-base">
                <ul className="flex gap-3">
                    <li>Inicio</li>
                    <li>Sobre Mi</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                    <li>Experiencia</li>
                </ul>
            </nav>
        </header>
    )
}