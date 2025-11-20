import React, { forwardRef } from 'react';
import '../style/Projects.css';
import { FaJava, FaPhp } from 'react-icons/fa';
import { SiPython, SiHtml5, SiCss3, SiJavascript, SiUnity, SiDjango, SiMysql, SiCsharp, SiSpring } from 'react-icons/si';
import { Row, Col } from "react-bootstrap";

import SocialMediaImage from "../assets/img/projects/SocialMedia.png";
import DoYouHaveABAll from "../assets/img/projects/DoYouHaveABall.webp";
import FinalWar from "../assets/img/projects/FinalWar.png";
import LearningFromYou from "../assets/img/projects/LearningFromYou.png";
import TacosProject from "../assets/img/projects/TacosProject.jpg";
import ECommerce from "../assets/img/projects/ECommerce.png";

const projectsData = [
    {
        title: "E-Commerce Platform",
        link: "https://github.com/Rungrukuk/eCommerce",
        image: ECommerce,
        description: "Developed a microservice-architected E-Commerce platform using SpringBoot on Java",
        technologies: ["Java", "Spring"]
    },
    {
        title: "Taco Selling Platform",
        link: "https://github.com/Rungrukuk/Spring-In-Action",
        image: TacosProject,
        description: "Engaged in Spring Boot learning through study of \"Spring In Action\" literature.",
        technologies: ["Java", "Spring"]
    },
    {
        title: "Social Media Platform",
        link: "https://github.com/Rungrukuk/Social-Media",
        image: SocialMediaImage,
        description: "Developed an advanced social media platform using Python/Django.",
        technologies: ["Python", "Django"]
    },
    {
        title: "Mobile Game",
        link: "https://www.youtube.com/watch?v=cyvl2kPsE3o&t=18s&ab_channel=BrothevsOfficial",
        image: DoYouHaveABAll,
        description: "Single-handedly created a mobile game over four months using Unity and C#.",
        technologies: ["C#", "Unity"]
    },
    {
        title: "Web/PC Game",
        link: "https://rungrukuk.itch.io/learningfromu",
        image: LearningFromYou,
        description: "Collaborated in a Game Jam event to develop this game using Unity and C#.",
        technologies: ["C#", "Unity"]
    },
    {
        title: "Mobile Game",
        link: "https://www.youtube.com/watch?v=plcNi1XK2L8&ab_channel=BrothevsOfficial",
        image: FinalWar,
        description: "Created this mobile game as part of a three-member team using Unity and C#.",
        technologies: ["C#", "Unity"]
    }
];

const Projects = forwardRef((props, ref) => (
    <div className="section projects" ref={ref} data-section={props['data-section']}>
        <h2 className='pl-4 text-19 opacity-4 text-uppercase fw-600 w-100 mb-0'>Projects</h2>
        <div className="projects-grid">
            {projectsData.map((project, index) => (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-box">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-details">

                        <h4 className="text-light-green">{project.title}</h4>

                        <Row className="align-items-center">
                            <Col sm={8}>

                                <p className="project-description">{project.description}</p>
                            </Col>
                            <Col sm={4}>
                                <div className="technology-icons">
                                    {project.technologies.map((tech, idx) => (
                                        <TechnologyIcon key={idx} technology={tech} />
                                    ))}
                                </div>
                            </Col>

                        </Row>
                    </div>
                </a>
            ))}
        </div>
    </div >
));

const TechnologyIcon = ({ technology }) => {
    switch (technology) {
        case "Python":
            return <SiPython size={24} className="technology-icon" />;
        case "Java":
            return <FaJava size={24} className="technology-icon" />;
        case "PHP":
            return <FaPhp size={24} className="technology-icon" />;
        case "HTML":
            return <SiHtml5 size={24} className="technology-icon" />;
        case "CSS":
            return <SiCss3 size={24} className="technology-icon" />;
        case "JavaScript":
            return <SiJavascript size={24} className="technology-icon" />;
        case "Unity":
            return <SiUnity size={24} className="technology-icon" />;
        case "Django":
            return <SiDjango size={24} className="technology-icon" />;
        case "MySQL":
            return <SiMysql size={24} className="technology-icon" />;
        case "C#":
            return <SiCsharp size={24} className="technology-icon" />;
        case "Spring":
            return <SiSpring size={24} className="technology-icon" />;
        default:
            return null;
    }
};

export default Projects;
