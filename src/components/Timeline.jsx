import { experienceData } from "../data/experiencieData"
import { ExperienceItem } from "./ExperiencieItem"

export const Timeline = () => {
    return (
        <ol class="w-[70vw] mx-auto  relative border-s-2 border-gray-400">
            
            {
                experienceData.map((experience, index)=>{
                    return(
                        <ExperienceItem key={index} {...experience}/>
                    )
                })
            }
        </ol>
    )
}


