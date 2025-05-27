import { FaBriefcase } from "react-icons/fa6";
import { Timeline } from "../components/Timeline";
import { SectionTitle } from "../components/SectionTitle";
import { Section } from "../components/Section";

export const Experience = ()=>{
    return(
        <Section id="experience" className="scroll-mt-[66px]">
            <SectionTitle icon={FaBriefcase}>Experiencia</SectionTitle>

            <Timeline />
        </Section>
    )
}