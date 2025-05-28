import { FaUser } from "react-icons/fa"
import { SectionTitle } from "../components/SectionTitle"
import { Section } from "../components/Section"

export const AboutMe = ()=>{
    return (
        <Section id="about" className="mb-[60px] scroll-mt-[66px]">
            <SectionTitle icon={FaUser}>Sobre Mí</SectionTitle>
            <div className="flex md:w-[65vw] xs:w-[75vw] mx-auto">
                <div className="flex flex-col gap-4 md:text-base xs:text-sm mt-3">
                    <p>
                        Mi nombre es Emiliano Jordan, tengo 21 años y actualmente estoy en cuarto año de Ingenería en Sistemas de la UTN (Universidad Tecnológica Nacional).
                    </p>
                    <p>
                        En paralelo a la universidad, me formé con instituciones líderes del sector como IBM, Guayerd, Oracle y Alura Latam, lo que me permitió desarrollar habilidades técnicas sólidas en Java, Spring Boot, Excel, Power BI, Looker Studio, MySQL, entre otras tecnologías.
                    </p>
                    <p>
                        Soy curioso, autodidacta y estoy en constante aprendizaje. Actualmente, me encuentro profundizando mis conocimientos en Frontend, buscando complementar mi perfil y tener una visión más completa del desarrollo de software.
                    </p>
                    <p>
                        Estoy abierto a nuevos desafíos donde pueda seguir creciendo y aportar valor con compromiso, creatividad y una mentalidad de mejora continua.
                    </p>
                </div>
                <img src="/avatar-saludando2.png" alt="" className="w-[300px] lg:block xs:hidden"/>
            </div>
        </Section>
    )
}