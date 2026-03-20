import { projectsData } from "../data/projectsData"
import { skillsData } from "../data/skillsData"
import { HiCodeBracket } from "react-icons/hi2"
import { FaGithub } from "react-icons/fa6"
import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import { SectionHeaderV2 } from "../components-v2/SectionHeaderV2"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const ProjectsV2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <section id="projects" className="mb-24 scroll-mt-20">
            <SectionHeaderV2 
                icon={HiCodeBracket}
                title="Proyectos"
                subtitle="Algunos de mis trabajos destacados"
            />

            <div className="slider-container px-6 md:px-12">
                <Slider {...settings}>
                    {projectsData.map((project, index) => (
                        <div key={index} className="px-3 h-full">
                            <article 
                                className="group relative rounded-2xl bg-zinc-900/30 border border-zinc-800/50 overflow-hidden transition-all duration-500 hover:border-zinc-700 h-full flex flex-col"
                            >
                        {/* Imagen */}
                        <div className="relative h-48 overflow-hidden shrink-0">
                            <img 
                                src={project.img} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                            
                            {/* Links overlay */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                {project.links.github && (
                                    <a 
                                        href={project.links.github}
                                        target="_blank"
                                        className="p-3 rounded-full bg-black/80 text-white border border-white/20 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
                                    >
                                        <FaGithub className="text-xl" />
                                    </a>
                                )}
                                {project.links.web && (
                                    <a 
                                        href={project.links.web}
                                        target="_blank"
                                        className="p-3 rounded-full bg-emerald-500 text-white transition-all duration-300 hover:bg-emerald-400 hover:scale-110"
                                    >
                                        <HiArrowTopRightOnSquare className="text-xl" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                {project.title}
                            </h3>
                            
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
                                {project.description}
                            </p>
                            
                            {/* Tecnologías */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techs.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/80 rounded-md border border-zinc-700/50"
                                    >
                                        {skillsData[tech] && (
                                            <img 
                                                src={skillsData[tech].icon} 
                                                alt={tech}
                                                className="w-3 h-3"
                                            />
                                        )}
                                        {skillsData[tech]?.name || tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                                {/* Borde gradient en hover */}
                                <div className="absolute inset-0 rounded-2xl border border-emerald-500/0 group-hover:border-emerald-500/20 transition-all duration-500 pointer-events-none" />
                            </article>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
