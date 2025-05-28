import './App.css'
import { Header } from './components/Header'

import { useState } from 'react'
import { Skills } from './views/Skills'
import { Presentation } from './views/Presentation'
import { Projects } from './views/Projects'
import { AboutMe } from './views/AboutMe'
import { Experience } from './views/Experience'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Presentation />
      <div className='mx-auto w-[70vw] max-md:w-[85vw]'>
        <Experience />
        <Skills />
        <Projects />
        <AboutMe />
      </div>
      <Footer />
    </>
  )
}

export default App
