import './App.css'
import { Header } from './components/Header'
import { socialData } from './components/socialData'
import { SocialItem } from './components/SocialItem'

import { FaUser } from "react-icons/fa";

function App() {

  return (
    <>
      <Header />
      <main className='mx-[10vw] h-[85vh] flex items-center justify-around'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2 text-3xl'>
              {
                socialData.map((item, index)=>(
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
            <button className='border-2 border-solid border-white rounded-full cursor-pointer p-3 bg-[#ffffff0d]'>
              Descarga mi CV
            </button>
          </div>
        </div>

        <div>
              <img src="/avatar - sin fondo.png" alt="Avatar Emiliano Jordan" className='w-5xl'/>
        </div>
      </main>

      <section className='mx-[10vw] h-[30vh]'>
        <div className='flex gap-3 text-3xl font-bold'>
          <FaUser />
          <h2> Sobre Mí</h2>
        </div>
      </section>
    </>
  )
}

export default App
