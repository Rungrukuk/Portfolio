import React, { forwardRef, useState } from 'react';

import SocialMediaImage from "../assets/img/projects/SocialMedia.png"
import DoYouHaveABAll from "../assets/img/projects/DoYouHaveABall.webp"
import FinalWar from "../assets/img/projects/FinalWar.png"
import LearningFromYou from "../assets/img/projects/LearningFromYou.png"
import TacosProject from "../assets/img/projects/TacosProject.jpg"



const PlaceholderImage = "https://via.placeholder.com/50"

let projectImages = {
    "Social media": SocialMediaImage,
    "DoYouHaveABall": DoYouHaveABAll,
    "FinalWar": FinalWar,
    "LearningFromYou": LearningFromYou,
    "TacosProject": TacosProject
};

const projectsData = [
    {
        title: "Social Media Platform",
        link: "https://github.com/Rungrukuk/Social-Media",
        image: projectImages["Social media"],
        description: "Developed an advanced social media platform using Python/Django"
    },
    {
        title: "Taco Selling Platform",
        link: "https://github.com/Rungrukuk/Spring-In-Action",
        image: TacosProject,
        description: "Engaged in Spring Boot learning through comprehensive study of \"Spring In Action\" literature."
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
        title: "Mobile Game",
        link: "https://www.youtube.com/watch?v=plcNi1XK2L8&ab_channel=BrothevsOfficial",
        image: projectImages['FinalWar'],
        description: "Created this mobile game as part of a three-member team using Unity and C#."
    },
    {
        title: "Volunteer Project",
        link: "https://github.com/Rungrukuk/Internship/tree/main/VolunteerProject",
        image: PlaceholderImage,
        description: "Developed an administrative panel for a volunteer's website using MySQL and PHP."
    },
    {
        title: "Car Selling Website",
        link: "https://github.com/Rungrukuk/Internship/tree/main/VolunteerProject",
        image: PlaceholderImage,
        description: "Developed a replica of a car selling platform using MySQL and PHP."
    },
];


const Projects = forwardRef((props, ref) => (
    <div className="section projects" ref={ref} data-section={props['data-section']}>
        <h2>Projects</h2>
        <div className="projects-grid">
            {projectsData.map((project, index) => (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-box">
                    <h4>{project.title}</h4>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <p className="project-description">{project.description}</p>
                </a>
            ))}
        </div>
    </div>
));

export default Projects;
