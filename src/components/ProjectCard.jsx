import { skillsData } from "../data/skillsData"
import { Badge } from "./Badge"

import { FaGithub } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";


export const ProjectCard = ({ project }) => {
    return (
        <article className="
            border-none bg-black/30 rounded-2xl flex flex-col mx-auto w-[400px] md:h-[500px]
            max-md:w-[320px] max-md:h-[450px]
            max-xs:w-[300px]
        ">
        {/* <article className="
            border-none bg-black/30 rounded-2xl flex flex-col mx-auto
            md:w-[400px] md:h-[500px]
            xs:w-[320px] xs:h-[450px]
        "> */}
            <img src={project.img} alt="Imagen Proyecto"
                className="rounded-2xl h-[220px] max-md:h-[150px] object-cover"
            />

            <div className="p-3 flex flex-col gap-3">
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-sm max-xs:text-xs">{project.description}</p>

            </div>

            <div className="flex flex-wrap mt-2 gap-2 p-1.5">
                {
                    project.techs.map((value, index) => {
                        return (
                            <Badge skill={skillsData[value]}
                                bg={skillsData[value].bg}
                                height="h-6"
                                fontSize="text-xs"
                                widhtImg="w-3"
                                key={index}
                            />
                        )
                    })
                }
            </div>

            <div className="flex gap-6 mt-auto mb-1 p-3 justify-around">
                {
                    "github" in project.links && (
                        <a href={project.links["github"]} target="_blank"
                            className="relative group flex items-center gap-2 text-sm hover:underline">
                            <FaGithub className="text-xl" />
                            Ver Código
                            {/* <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span> */}
                        </a>
                    )
                }
                {

                    "web" in project.links && (
                        <a href={project.links["web"]} target="_blank"
                            className="flex items-center gap-2 text-sm hover:underline">
                            <TfiWorld className="text-xl" />
                            Ver en línea
                        </a>
                    )
                }
            </div>
        </article>
    )
}