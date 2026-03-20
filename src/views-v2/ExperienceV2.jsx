import { experienceData } from "../data/experiencieData"
import { skillsData } from "../data/skillsData"
import { HiBriefcase } from "react-icons/hi2"
import { SectionHeaderV2 } from "../components-v2/SectionHeaderV2"

export const ExperienceV2 = () => {
    return (
        <section id="experience" className="mb-24 scroll-mt-20">
            <SectionHeaderV2 
                icon={HiBriefcase}
                title="Experiencia"
                subtitle="Mi trayectoria profesional"
            />

            <div className="relative">
                {/* Línea vertical */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />

                <div className="space-y-12">
                    {experienceData.map((experience, index) => (
                        <div 
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-8 ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Punto en la línea */}
                            <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-emerald-500 rounded-full -translate-x-1/2 mt-6 ring-4 ring-emerald-500/20" />
                            
                            {/* Contenido */}
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                                <div className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 transition-all duration-500 hover:border-emerald-500/30 hover:bg-zinc-900/80">
                                    {/* Fecha */}
                                    <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full mb-4">
                                        {experience.date}
                                    </span>
                                    
                                    {/* Título */}
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {experience.title}
                                    </h3>
                                    
                                    {/* Descripción */}
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        {experience.description}
                                    </p>
                                    
                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {experience.skills.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800 rounded-full border border-zinc-700/50"
                                            >
                                                {skillsData[skill] && (
                                                    <img 
                                                        src={skillsData[skill].icon} 
                                                        alt={skill} 
                                                        className="w-3 h-3"
                                                    />
                                                )}
                                                {skillsData[skill]?.name || skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Espacio para el otro lado */}
                            <div className="hidden md:block md:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
