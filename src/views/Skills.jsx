import { FaTools } from "react-icons/fa";
import { SkillCard } from "../components/SkillCard";
import { techCategories } from "../data/techCategories";
import { SectionTitle } from "../components/SectionTitle";
import { Section } from "../components/Section";

export const Skills = () => {
    return (
        <Section id="skills">
            <div className='flex flex-col gap-3'>
                <SectionTitle icon={FaTools}>Habilidades y Tecnologías </SectionTitle>

                <div className='
                    mx-auto grid gap-5
                    lg:grid-cols-2 lg:grid-rows-2 
                    md:grid-cols-1 md:grid-rows-4 md:w-[65vw]
                    xs:w-[75vw]
                '>
                    {
                        techCategories.map((value, i) => {
                            return (
                                <SkillCard key={i} title={value.name} bg={value.bg} />
                            )
                        })
                    }


                </div>
            </div>
        </Section>
    )
}