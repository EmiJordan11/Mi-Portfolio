import { skillsData } from "../data/skillsData"
import { Badge } from "./Badge"


export const SkillCard = ({title, bg}) => {
    return (
        <article className={` ${bg} rounded-2xl p-3 transform ease duration-300 hover:scale-[1.025] `}>
            <h3 className="mb-3 text-[1.375rem] max-md:text-lg">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {
                    Object.values(skillsData).map((value, index) => {
                        if(value.tag==title)
                        return (
                            <Badge skill={value} key={index}/>
                        )
                    })
                }
            </div>
        </article>
    )
}
