import { socialData } from "../data/socialData"
import { SocialItem } from "../components/SocialItem"


export const Presentation = () => {
    return (
        <main className='h-[85vh] flex items-center justify-around'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2 text-3xl'>
                    {
                        socialData.map((item, index) => (
                            <SocialItem icon={item.icon} link={item.link} key={index} />
                        ))
                    }
                </div>
                <div>
                    <p className='text-7xl'>👋 Hola, soy</p>
                    <p className='text-7xl'>Emiliano Jordan</p>
                    <p className='text-xl'>
                        Desarrollador Full Stack apasionado por crear soluciones eficientes y escalables, combinando backend sólido con interfaces atractivas y funcionales
                    </p>
                </div>
                <div className='flex gap-2.5'>
                    <button className='border-2 border-solid border-white rounded-full cursor-pointer p-3 bg-[#ffffff0d]'>
                        Contáctame
                    </button>
                    <button className='border-2 border-white rounded-full cursor-pointer p-3 bg-[#ffffff0d]'>
                        Descarga mi CV
                    </button>
                </div>
            </div>

            <div>
                <img src="/avatar.png" alt="Avatar Emiliano Jordan" className='w-5xl' />
            </div>
        </main>
    )
}