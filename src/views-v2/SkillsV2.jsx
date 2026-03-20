import { skillsData } from "../data/skillsData"
import { techCategories } from "../data/techCategories"
import { HiCommandLine } from "react-icons/hi2"
import { MdOutlinePalette } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import { VscTools } from "react-icons/vsc";

import { SectionHeaderV2 } from "../components-v2/SectionHeaderV2"

export const SkillsV2 = () => {
    // Agrupar skills por categoría
    const skillsByCategory = {}
    Object.values(skillsData).forEach(skill => {
        if (!skillsByCategory[skill.tag]) {
            skillsByCategory[skill.tag] = []
        }
        skillsByCategory[skill.tag].push(skill)
    })

    const categories = [
        { name: "FrontEnd", icon: MdOutlinePalette, color: "from-blue-500 to-cyan-500" },
        { name: "BackEnd", icon: IoSettingsOutline, color: "from-emerald-500 to-green-500" },
        { name: "Análisis de Datos", icon: ImStatsDots, color: "from-purple-500 to-pink-500" },
        { name: "Desarrollo y DevOps", icon: VscTools, color: "from-orange-500 to-amber-500" },
    ]

    return (
        <section id="skills" className="mb-24 scroll-mt-20">
            <SectionHeaderV2
                icon={HiCommandLine}
                title="Skills & Tecnologías"
                subtitle="Herramientas con las que trabajo"
            />

            <div className="grid md:grid-cols-2 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="group relative p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 transition-all duration-500 hover:border-zinc-700 overflow-hidden"
                    >
                        {/* Gradient decoration */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-5">
                            <category.icon className="text-xl" />
                            <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        </div>

                        {/* Skills grid */}
                        <div className="flex flex-wrap gap-2">
                            {skillsByCategory[category.name]?.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="group/skill flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700/30 transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-800"
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-4 h-4 group-hover/skill:scale-110 transition-transform"
                                    />
                                    <span className="text-sm text-zinc-300 group-hover/skill:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
