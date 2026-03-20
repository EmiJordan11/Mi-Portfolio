import { HeaderV2 } from './components-v2/HeaderV2'
import { PresentationV2 } from './views-v2/PresentationV2'
import { ExperienceV2 } from './views-v2/ExperienceV2'
import { SkillsV2 } from './views-v2/SkillsV2'
import { ProjectsV2 } from './views-v2/ProjectsV2'
import { AboutMeV2 } from './views-v2/AboutMeV2'
import { FooterV2 } from './components-v2/FooterV2'

function AppV2() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-onest">
      <HeaderV2 />
      <PresentationV2 />
      <main className="mx-auto max-w-5xl px-6 lg:px-8">
        <ExperienceV2 />
        <SkillsV2 />
        <ProjectsV2 />
        <AboutMeV2 />
      </main>
      <FooterV2 />
    </div>
  )
}

export default AppV2
