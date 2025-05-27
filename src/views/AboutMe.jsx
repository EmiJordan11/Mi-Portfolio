import { FaUser } from "react-icons/fa"

export const AboutMe = ()=>{
    return (
        <section id="about" className="w-[75vw] mx-auto mb-[60px] scroll-mt-[66px]">
            <div className="flex items-center gap-3 font-bold text-3xl mb-4">
                <FaUser />
                <h2>Sobre Mi</h2>
            </div>
            <div className="flex w-[65vw] mx-auto items-center">
                <div className="flex flex-col gap-4">
                    <p>
                        Mi nombre es Emiliano Jordan, tengo 21 años y actualmente estoy en cuarto de año de Ingenería en Sistemas de la UTN (Universidad Tecnológica Nacional).
                    </p>
                    <p>
                        En paralelo a la universidad me formé con instituciones líderes del sector como IBM, Guayerd, Oracle y Alura Latam, lo que me permitió desarrollar habilidades técnicas sólidas en Java, Spring Boot, Excel, Power BI, Looker Studio, MySQL, entre otras tecnologías.
                    </p>
                    <p>
                        Soy curioso, autodidacta y estoy en constante aprendizaje. Actualmente, me encuentro profundizando mis conocimientos en Frontend, buscando complementar mi perfil y tener una visión más completa del desarrollo de software.
                    </p>
                    <p>
                        Estoy abierto a nuevos desafíos donde pueda seguir creciendo y aportar valor con compromiso, creatividad y una mentalidad de mejora continua.
                    </p>
                </div>
                <img src="/avatar-saludando2.png" alt="" className="w-[300px]"/>
            </div>
        </section>
    )
}