import { FaTools } from "react-icons/fa";
import { SkillCard } from "../components/SkillCard";
import { techCategories } from "../data/techCategories";

export const Skills = () => {
    return (
        <section id="skills" className='mb-[60px] scroll-mt-[66px]'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-3 font-bold text-3xl mb-4'>
                    <FaTools />
                    <h2> Habilidades y Tecnologías</h2>
                </div>

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
        </section>
    )
}