import { socialData } from "../data/socialData"
import { SocialItem } from "../components/SocialItem"


export const Presentation = () => {
    return (
        <main className='
            mx-auto flex items-center 
            lg:w-[75vw] lg:h-[85vh] lg:justify-around
            md:h-[65vh]
            xs:w-[90vw] h-[65vh]
        '>
            <div className='flex flex-col gap-4'>
                <div className='
                    flex gap-2 
                    lg:text-4xl
                    md:text-3xl
                '>
                    {
                        socialData.map((item, index) => (
                            <SocialItem icon={item.icon} link={item.link} key={index} />
                        ))
                    }
                </div>
                <div>
                    <p className='
                        flex gap-2 items-center
                        xl:text-7xl
                        lg:text-6xl
                        md:text-5xl
                        xs:text-2xl
                    '>
                        <img src="/mano-saludando.svg" alt="" className="lg:w-[70px] md:w-[60px]" />
                        Hola, soy
                    </p>
                    <p className='xl:text-7xl lg:text-6xl md:text-5xl xs:text-2xl'>Emiliano Jordan</p>
                    <p className='xl:text-xl lg:text-lg md:text-base xs:text-xs'>
                        Estudiante avanzado de Ingeniería en Sistemas, especializado en el Desarrollo de Software y en el Análisis de Datos
                    </p>
                </div>
                <div className='flex gap-3'>
                    <a href="/docs/CV - Emiliano Jordan.pdf" download>
                        <ButtonPresentation> Descarga mi CV</ButtonPresentation>
                    </a>
                    <a href="https://www.linkedin.com/in/emiliano-jordan/details/certifications/" target="_blank">
                        <ButtonPresentation> Mira mis Certificaciones</ButtonPresentation>
                    </a>
                </div>
            </div>

            <div>
                <img src="/avatar.png" alt="Avatar Emiliano Jordan" className='lg:w-3xl md:w-xl xs:w-[420px]' />
            </div>
        </main>
    )
}

const ButtonPresentation = ({children})=>{
    return (
        <button
            className="
                border-2 border-white rounded-full cursor-pointer bg-[#ffffff0d]
                transition ease duration-300 
                hover:bg-[#ea7c22] hover:scale-105

                md:text-base md:p-3
                xs:text-[0.625rem] xs:p-2
            "
        >
            {children}
        </button>
    )
}