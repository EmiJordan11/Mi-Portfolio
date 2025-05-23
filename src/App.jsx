import './App.css'
import { Header } from './components/Header'
import { socialData } from './components/socialData'
import { SocialItem } from './components/SocialItem'

import { FaUser } from "react-icons/fa"
import { ButtonSkills } from './components/ButtonSkills'
import { useState } from 'react'
import { SkillCard } from './components/SkillCard'
import { techCategories } from './components/techCategories'

function App() {

  const [activeButton, setActiveButton] = useState(0)

  return (
    <>
      <Header />
      <div className='w-[85vw] mx-auto'>
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
            <img src="/avatar - sin fondo.png" alt="Avatar Emiliano Jordan" className='w-5xl' />
          </div>
        </main>

        <section className='h-[80vh] w-[75vw] m-auto'>
          <div className='flex flex-col gap-3 text-3xl'>
            <div className='flex gap-3 font-bold'>
              <FaUser />
              <h2 className='mb-2'> Habilidades y Tecnologías</h2>
            </div>
            {/* <ul className='flex justify-center text-xl text-nowrap bg-[#655593] w-min m-auto rounded-[12px]'>
              {
                ["Todo", "Desarrollo FullStack", "Análisis de datos"].map((value, i) => {
                  return (
                    <ButtonSkills key={i} id={i} isActive={activeButton == i} onClick={setActiveButton}>
                      {value}
                    </ButtonSkills>
                  )
                })

              }
            </ul> */}
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
              {
                techCategories.map((value, i) => {
                  return (
                    <SkillCard key={i} title={value.name} bg={value.bg} />
                  )
                })
              }

              
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
