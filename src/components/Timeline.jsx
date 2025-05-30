import { experienceData } from "../data/experiencieData"
import { ExperienceItem } from "./ExperiencieItem"

export const Timeline = () => {
    return (
        <ol class="mx-auto relative border-s-2 border-gray-400 w-[65vw]  max-md:w-[80vw]">
            
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


