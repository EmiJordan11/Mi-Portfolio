import { skillsData } from "../data/skillsData"
import { Badge } from "./Badge"

import { FaGithub } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";


export const ProjectCard = ({ project }) => {
    return (
        <article className="border-none w-[480px] h-[480px] bg-black/30 rounded-2xl flex flex-col mx-auto">
            <img src={project.img} alt="Imagen Proyecto"
                className="rounded-2xl h-[220px] object-cover"
            />
            
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

            <div className="p-3 flex flex-col gap-3">
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-sm">{project.description}</p>

            </div>

            <div className="flex gap-6 mt-auto p-3 justify-around">
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
                            <TfiWorld className="text-xl"/>
                            Ver en línea
                        </a>
                    )
                }
            </div>
        </article>
    )
}


// export const ProjectCard = ({img, title, description, techs}) => {
//     return (
//         <article className="border-none w-[350px] h-[420px] bg-black/30 rounded-2xl">
//             {
//                 techs.map((value, index)=>{
//                     if(value in skillsData){
//                         return(
//                             <Badge  />
//                         )
//                     }
//                 })
//             }
//             <img src={img} alt="Imagen Proyecto"
//                 className="rounded-2xl h-[200px] object-cover"
//             />
//             <div className="p-3 flex flex-col gap-3">
//                 <h3 className="text-2xl">{title}</h3>
//                 <p className="text-sm">{description}</p>
//             </div>

//         </article>
//     )
// }