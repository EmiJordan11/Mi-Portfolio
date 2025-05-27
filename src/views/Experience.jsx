import { FaBriefcase } from "react-icons/fa6";
import { Timeline } from "../components/Timeline";

export const Experience = ()=>{
    return(
        <section id="experience" className="scroll-mt-[66px]">
            <div className="flex gap-3 font-bold text-3xl mb-">
                <FaBriefcase />
                <h2>Experiencia</h2>
            </div>
            <Timeline />
        </section>
    )
}