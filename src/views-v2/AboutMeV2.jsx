import { HiUser } from "react-icons/hi2"
import { SectionHeaderV2 } from "../components-v2/SectionHeaderV2"

export const AboutMeV2 = () => {
    const highlights = [
        { label: "Años de formación", value: "4+", icon: "📚" },
        { label: "Tecnologías aplicadas", value: "15+", icon: "💻" },
    ]

    return (
        <section id="about" className="mb-24 scroll-mt-20">
            <SectionHeaderV2 
                icon={HiUser}
                title="Sobre Mí"
                subtitle="Un poco más sobre mi historia"
            />

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Texto principal */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
                        <div className="space-y-4 text-zinc-400 leading-relaxed">
                            <p>
                                <span className="text-white font-medium">Mi nombre es Emiliano Jordan</span>, tengo 22 años y actualmente estoy en cuarto año de Ingeniería en Sistemas de la UTN (Universidad Tecnológica Nacional).
                            </p>
                            <p>
                                En paralelo a la universidad, me formé con instituciones líderes del sector como 
                                <span className="text-emerald-400"> IBM, Guayerd, Oracle y Alura Latam</span>, lo que me permitió desarrollar habilidades técnicas sólidas en Java, Spring Boot, Excel, Power BI, Looker Studio, MySQL, entre otras tecnologías.
                            </p>
                            <p>
                                Soy <span className="text-white">curioso, autodidacta</span> y estoy en constante aprendizaje. Actualmente, me encuentro profundizando mis conocimientos en Frontend, buscando complementar mi perfil y tener una visión más completa del desarrollo de software.
                            </p>
                            <p>
                                Valoro el trabajo colaborativo, la comunicación clara y los entornos que 
                                fomenten la mejora continua. Mi objetivo es seguir creciendo profesionalmente 
                                mientras aporto valor a los proyectos en los que participo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats y foto */}
                <div className="space-y-6">
                    {/* Avatar decorativo */}
                    <div className="relative p-1 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20">
                        <div className="rounded-2xl bg-zinc-900 p-6 text-center">
                            <img 
                                src="/avatar - sin fondo.png" 
                                alt="Emiliano Jordan"
                                className="w-60 h-46 mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-lg font-semibold text-white">Emiliano Jordan</h3>
                            <p className="text-sm text-zinc-500">Mendoza, Argentina 🇦🇷</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid gap-3">
                        {highlights.map((item, index) => (
                            <div 
                                key={index}
                                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <p className="text-2xl font-bold text-white">{item.value}</p>
                                    <p className="text-xs text-zinc-500">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
