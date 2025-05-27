import { skillsData } from "../data/skillsData"
import { Badge } from "./Badge"


export const SkillCard = ({title, bg}) => {
    return (
        <>
            <article className={` ${bg} rounded-2xl p-3`}>
                <h3 className="mb-3 text-2xl">{title}</h3>
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
        </>
    )
}
