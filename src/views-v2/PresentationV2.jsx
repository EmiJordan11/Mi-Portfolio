import { socialData } from "../data/socialData"
import { HiOutlineDocumentArrowDown, HiOutlineAcademicCap } from "react-icons/hi2"

export const PresentationV2 = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Gradient orbs decorativos */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Badge de estado */}
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-sm font-medium">Profesional en desarrollo continuo</span>
                </div> */}

                {/* Nombre y título */}
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                    <span className="text-white">Hola, soy </span>
                    <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                        Emiliano
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-zinc-400 mb-6 font-light">
                    Desarrollador de Software & Analista de Datos
                </p>

                <p className="text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Estudiante avanzado de Ingeniería en Sistemas con experiencia en desarrollo
                    de software y análisis de datos. Comprometido con la mejora continua y el
                    trabajo en equipo.
                </p>

                {/* Botones de acción */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a
                        href="/docs/CV - Emiliano Jordan.pdf"
                        download
                        className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-emerald-400 hover:scale-105"
                    >
                        <HiOutlineDocumentArrowDown className="text-xl group-hover:animate-bounce" />
                        Descargar CV
                    </a>
                    <a
                        href="https://www.linkedin.com/in/emiliano-jordan/details/certifications/"
                        target="_blank"
                        className="group flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white rounded-full font-medium transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400 hover:scale-105"
                    >
                        <HiOutlineAcademicCap className="text-xl" />
                        Ver Certificaciones
                    </a>
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-4">
                    {socialData.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-emerald-500/50 hover:text-emerald-400 hover:scale-110 hover:-translate-y-1"
                            >
                                <Icon className="text-xl" />
                            </a>
                        )
                    })}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-5 h-8 border-2 border-zinc-700 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-zinc-600 rounded-full mt-1.5 animate-bounce" />
                </div>
            </div>
        </section>
    )
}
