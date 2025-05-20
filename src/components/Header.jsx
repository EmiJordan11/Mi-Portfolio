import { useEffect, useState } from "react"

export const Header = ()=>{

    const [scrolled, setScrolled] = useState(false)

    const classHeader = scrolled 
    ? "bg-[conic-gradient(at_bottom_right,rgba(29,78,216,0.8),rgba(30,64,175,0.8),rgba(17,24,39,0.8)) fixed w-[100vw] flex items-center justify-around gap-14 py-3 text-white font-bold text-2xl" 
    : "fixed w-[100vw] flex items-center justify-around gap-14 py-3 text-white font-bold text-2xl"

    useEffect(()=>{
        
        const handleScroll = ()=>{
            const offset = window.scrollY
            setScrolled(offset>5)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    return(
        <header className={classHeader}>
            <p>Emiliano <span className="text-[#808080]">Jordan</span></p>
            {/* bg-[conic-gradient(at_bottom_right,rgba(29,78,216,0.8),rgba(30,64,175,0.8),rgba(17,24,39,0.8))] */}
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