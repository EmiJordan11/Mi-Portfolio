import { LuCodeXml } from "react-icons/lu";
import { Carousel } from "../components/Carousel";

export const Projects=()=>{
    return (
        <section id="projects" className="mb-[60px] scroll-mt-[66px]" >
            <div className="flex items-center gap-3 font-bold text-3xl mb-4">
                <LuCodeXml className="text-4xl" />
                <h2>Proyectos</h2>
            </div>
            <Carousel />  
        </section>
    )

}