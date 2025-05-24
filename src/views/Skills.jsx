import { FaTools } from "react-icons/fa";
import { SkillCard } from "../components/SkillCard";
import { techCategories } from "../data/techCategories";

export const Skills = () => {
    return (
        <section className='h-[80vh] w-[75vw] m-auto'>
            <div className='flex flex-col gap-3 text-3xl'>
                <div className='flex gap-3 font-bold'>
                    <FaTools />
                    <h2 className='mb-2'> Habilidades y Tecnologías</h2>
                </div>
                {/* <ul className='flex justify-center text-xl text-nowrap bg-[#655593] w-min m-auto rounded-[12px]'>
                      {
                        ["Todo", "Desarrollo FullStack", "Análisis de datos"].map((value, i) => {
                          return (
                            <ButtonSkills key={i} id={i} isActive={activeButton == i} onClick={setActiveButton}>
                              {value}
                            </ButtonSkills>
                          )
                        })
        
                      }
                    </ul> */}
                <div className='grid grid-cols-2 grid-rows-2 gap-4'>
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