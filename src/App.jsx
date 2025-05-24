import './App.css'
import { Header } from './components/Header'
import { socialData } from './data/socialData'
import { SocialItem } from './components/SocialItem'

import { FaUser } from "react-icons/fa"
import { ButtonSkills } from './components/ButtonSkills'
import { useState } from 'react'
import { SkillCard } from './components/SkillCard'
import { techCategories } from './data/techCategories'
import { FaTools } from "react-icons/fa";
import { Skills } from './views/Skills'
import { Presentation } from './views/Presentation'
import { Projects } from './views/Projects'

function App() {

  const [activeButton, setActiveButton] = useState(0)

  return (
    <>
      <Header />
      <div className='w-[80vw] mx-auto'>
        <Presentation />
        <Skills />
        <Projects />
      </div>
    </>
  )
}

export default App
