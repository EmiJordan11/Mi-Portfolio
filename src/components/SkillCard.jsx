import { skills } from "../data/skills"
import { Badge } from "./Badge"

skills

export const SkillCard = ({title, bg}) => {
    return (
        <>
            <article className={` ${bg} rounded-2xl p-3`}>
                <h3 className="mb-3 text-2xl">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {
                        Object.values(skills).map((value, index) => {
                            if(value.tag==title)
                            return (
                                <Badge name={value.name} logo={value.icon} key={index} bg={value.bg} />
                            )
                        })
                    }
                </div>
            </article>
        </>
    )
}