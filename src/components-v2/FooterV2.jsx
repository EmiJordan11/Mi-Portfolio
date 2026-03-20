import { socialData } from "../data/socialData"
import { FaHeart } from "react-icons/fa6"

export const FooterV2 = () => {
    return (
        <footer className="border-t border-zinc-800/50">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo y copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-xl font-semibold mb-1">
                            <span className="text-white">Emiliano</span>
                            <span className="text-zinc-500"> Jordan</span>
                        </p>
                        <p className="text-sm text-zinc-500">
                            © 2025 · Hecho con <FaHeart className="inline text-emerald-500 mx-1" /> en Argentina
                        </p>
                    </div>

                    {/* Links de contacto */}
                    <div className="flex items-center gap-3">
                        {socialData.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <a 
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-emerald-500/50 hover:text-emerald-400"
                                >
                                    <Icon className="text-lg" />
                                </a>
                            )
                        })}
                    </div>
                </div>

                {/* Decorative line */}
                <div className="mt-8 pt-6 border-t border-zinc-800/30 text-center">
                    <p className="text-xs text-zinc-600">
                        Desarrollador de Software · Analista de Datos · Estudiante de Ing. en Sistemas UTN
                    </p>
                </div>
            </div>
        </footer>
    )
}
