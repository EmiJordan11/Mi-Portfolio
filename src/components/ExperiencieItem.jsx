import { skillsData } from "../data/skillsData"
import { Badge } from "./Badge"


export const ExperienceItem = ({ date, title, description, skills }) => {
    return (
        <li class="mb-10 ms-4 w-[90%]">
            <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-[#ae876f]">{date}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p class="text-base font-normal text-[#c7c6c6]">{description}</p>

            <div className="flex gap-2.5 mt-1.5">
                {
                    skills.map((skill, index) => {
                        return (
                            <Badge
                                key={index}
                                skill={skillsData[skill]}
                                bg={skillsData[skill].bg}
                                height="h-6"
                                fontSize="text-xs"
                                widhtImg="w-3" />
                        )
                    })
                }
            </div>
        </li>
    )
}


