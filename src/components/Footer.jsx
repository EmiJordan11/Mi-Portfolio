import { socialData } from "../data/socialData"
import { SocialItem } from "./SocialItem"

export const Footer = () =>{
    return (
        <footer className="w-full p-8 flex justify-between text-base bg-[#0e1523]">
            <div>
                <p>© 2025 Emiliano Jordan</p>
                <p className="text-sm">Estudiante de Ing en Sistemas | Desarrollador de Software | Analista de datos</p>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-xl">Contacto</p>
                <div className="flex gap-3 text-3xl">
                    {
                        socialData.map((item, index)=>{
                            return(
                                <SocialItem key={index} icon={item.icon} link={item.link} />
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    )
}