import { socialData } from "../data/socialData"
import { SocialItem } from "../components/SocialItem"


export const Presentation = () => {
    return (
        <main className='
            mx-auto flex items-center w-[75vw] h-[85vh] justify-around
            max-lg:h-[65vh] max-lg:w-[90vw]
        '>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2'>
                    {
                        socialData.map((item, index) => (
                            <SocialItem icon={item.icon} link={item.link} key={index} />
                        ))
                    }
                </div>
                <div>
                    <p className='
                        flex gap-2 items-center text-7xl
                        max-xl:text-6xl
                        max-lg:text-5xl
                        max-md:text-2xl
                    '>
                        <img src="/mano-saludando.svg" alt="" className="w-[70px] max-lg:w-[60px] max-md:w-[1.875rem]" />
                        Hola, soy
                    </p>
                    <p className='text-7xl font-bold max-xl:text-6xl max-lg:text-5xl max-md:text-2xl'>Emiliano Jordan</p>
                    <p className='text-xl max-xl:text-lg max-lg:text-base max-md:text-xs max-xs:text-[0.628rem]'>
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
                <img src="/avatar.png" alt="Avatar Emiliano Jordan" className='w-3xl max-lg:w-xl max-md:w-[420px]' />
            </div>
        </main>
    )
}

const ButtonPresentation = ({children})=>{
    return (
        <button
            className="
                text-base p-3 border-2 border-white rounded-full cursor-pointer bg-[#ffffff0d]
                transition ease duration-300 
                hover:bg-[#ea7c22] hover:scale-105

                max-md:text-[0.625rem] max-md:p-2
                max-xs:text-[0.5rem] max-xs:p-1.5
            "
        >
            {children}
        </button>
    )
}