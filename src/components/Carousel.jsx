// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { projectsData } from "../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <div className="slider-container mx-auto w-[65vw] max-md:w-[75vw]">
            <Slider {...settings}>
                {projectsData.map((value, index) => (
                    <div>
                        <ProjectCard key={index} project={value} />
                    </div>

                ))}
            </Slider>
        </div>
    )

}