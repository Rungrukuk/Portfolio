import React, { forwardRef } from 'react';
import '../style/Projects.css'

import SocialMediaImage from "../assets/img/projects/SocialMedia.png"
import DoYouHaveABAll from "../assets/img/projects/DoYouHaveABall.webp"
import FinalWar from "../assets/img/projects/FinalWar.png"
import LearningFromYou from "../assets/img/projects/LearningFromYou.png"
import TacosProject from "../assets/img/projects/TacosProject.jpg"
// import Portfolio from "../assets/img/projects/Portfolio.png"
import CarSellingPlatform from "../assets/img/projects/CarSellingPlatform.png"


let projectImages = {
    "Social media": SocialMediaImage,
    "DoYouHaveABall": DoYouHaveABAll,
    "FinalWar": FinalWar,
    "LearningFromYou": LearningFromYou,
    "TacosProject": TacosProject,
    // "Portfolio": Portfolio,
    "CarSellingPlatform": CarSellingPlatform
};

const projectsData = [
    // {
    //     title: "Portfolio",
    //     link: "https://github.com/Rungrukuk/Portfolio",
    //     image: projectImages['Portfolio'],
    //     description: "Used React for the first time to built Portfolio website"
    // },

    {
        title: "Taco Selling Platform",
        link: "https://github.com/Rungrukuk/Spring-In-Action",
        image: TacosProject,
        description: "Engaged in Spring Boot learning through comprehensive study of \"Spring In Action\" literature."
    },
    {
        title: "Social Media Platform",
        link: "https://github.com/Rungrukuk/Social-Media",
        image: projectImages["Social media"],
        description: "Developed an advanced social media platform using Python/Django"
    },
    {
        title: "Mobile Game",
        link: "https://www.youtube.com/watch?v=cyvl2kPsE3o&t=18s&ab_channel=BrothevsOfficial",
        image: projectImages['DoYouHaveABall'],
        description: "Single-handedly created a mobile game over four months using Unity and C#."
    },
    {
        title: "Web/PC Game",
        link: "https://rungrukuk.itch.io/learningfromu",
        image: projectImages["LearningFromYou"],
        description: "Collaborated in a Game Jam event to develop this game using Unity and C#."
    },
    {
        title: "Car Selling Website",
        link: "https://github.com/Rungrukuk/CarSellingPlatform",
        image: projectImages["CarSellingPlatform"],
        description: "Developed a replica of a car selling platform using MySQL and PHP."
    },
    {
        title: "Mobile Game",
        link: "https://www.youtube.com/watch?v=plcNi1XK2L8&ab_channel=BrothevsOfficial",
        image: projectImages['FinalWar'],
        description: "Created this mobile game as part of a three-member team using Unity and C#."
    }
];


const Projects = forwardRef((props, ref) => (
    <div className="section projects" ref={ref} data-section={props['data-section']}>
        <h2>Projects</h2>
        <div className="projects-grid">
            {projectsData.map((project, index) => (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-box">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-details">
                        <h4>{project.title}</h4>
                        <p className="project-description">{project.description}</p>
                    </div>
                </a>
            ))}
        </div>
    </div>
));

export default Projects;
