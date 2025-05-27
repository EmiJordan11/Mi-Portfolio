import { LuCodeXml } from "react-icons/lu";
import { Carousel } from "../components/Carousel";
import { SectionTitle } from "../components/SectionTitle";
import { Section } from "../components/Section";

export const Projects=()=>{
    return (
        <Section id="projects">
            <SectionTitle icon={LuCodeXml}>Proyectos </SectionTitle>
            <Carousel />  
        </Section>
    )

}