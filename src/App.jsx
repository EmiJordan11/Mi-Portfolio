import './App.css'
import { Header } from './components/Header'

import { useState } from 'react'
import { Skills } from './views/Skills'
import { Presentation } from './views/Presentation'
import { Projects } from './views/Projects'
import { AboutMe } from './views/AboutMe'
import { Experience } from './views/Experience'

function App() {

  const [activeButton, setActiveButton] = useState(0)

  return (
    <>
      <Header />
      <Presentation />
      <div className='w-[70vw] mx-auto'>
        <Skills />
        <Projects />
        <Experience />
        <AboutMe />
      </div>
    </>
  )
}

export default App
