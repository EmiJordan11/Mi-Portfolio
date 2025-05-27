import { socialData } from "../data/socialData"
import { SocialItem } from "../components/SocialItem"


export const Presentation = () => {
    return (
        <main className='h-[85vh] flex items-center justify-around'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2 text-4xl'>
                    {
                        socialData.map((item, index) => (
                            <SocialItem icon={item.icon} link={item.link} key={index} />
                        ))
                    }
                </div>
                <div>
                    <p className='text-7xl flex gap-2'>
                        <img src="/mano-saludando.svg" alt="" className="w-[70px]" />
                        Hola, soy
                    </p>
                    <p className='text-7xl'>Emiliano Jordan</p>
                    <p className='text-xl'>
                        Estudiante avanzado de Ingeniería en Sistemas, especializado en el Desarrollo de Software y en el Análisis de Datos
                    </p>
                </div>
                <div className='flex gap-3'>
                    <ButtonPresentation> Contáctame</ButtonPresentation>
                    <ButtonPresentation> Descarga mi CV</ButtonPresentation>
                </div>
            </div>

            <div>
                <img src="/avatar.png" alt="Avatar Emiliano Jordan" className='w-3xl' />
            </div>
        </main>
    )
}

const ButtonPresentation = ({children})=>{
    return (
        <button
            className="
                border-2 border-white rounded-full cursor-pointer p-3 bg-[#ffffff0d]
                transition ease duration-300 
                hover:bg-[#ea7c22] hover:scale-105
            "
        >
            {children}
        </button>
    )
}