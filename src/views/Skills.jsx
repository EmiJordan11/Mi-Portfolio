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
                    mx-auto grid gap-5 grid-cols-2 grid-rows-2 w-[65vw]
                    max-lg:grid-cols-1 max-lg:grid-rows-4
                    max-md:w-[75vw]
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