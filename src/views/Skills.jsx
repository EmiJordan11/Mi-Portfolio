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

                <div className='w-[65vw] mx-auto grid grid-cols-2 grid-rows-2 gap-5'>
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