import React, { forwardRef } from 'react';
import '../style/Projects.css';
import { FaJava } from 'react-icons/fa';
import { SiPython, SiUnity, SiDjango, SiMysql, SiSharp, SiSpring, SiDocker, SiRsocket, SiRabbitmq, SiRedis, SiPostgresql, SiApachekafka} from 'react-icons/si';
import { Row, Col } from "react-bootstrap";

import SocialMediaImage from "../assets/img/projects/SocialMedia.png";
import DoYouHaveABAll from "../assets/img/projects/DoYouHaveABall.webp";
import SmartClinicPlatform from "../assets/img/projects/SmartClinicPlatform.png";
import LearningFromYou from "../assets/img/projects/LearningFromYou.png";
import TacosProject from "../assets/img/projects/TacosProject.jpg";
import Microservices from "../assets/img/projects/Microservices.png";

const projectsData = [
    {
        title: "Reactive Microservices Platform",
        link: "https://github.com/Rungrukuk/Reactive-Microservices-Platform",
        image: Microservices,
        description: "Developed a microservice-architected platform using SpringBoot on Java",
        technologies: ["Java", "Spring", "RSocket", "Postgre", "Redis", "Docker"]
    },
    {
        title: "Smart Clinic Platform",
        link: "https://github.com/Rungrukuk/Smart-clinic-management-system",
        image: SmartClinicPlatform,
        description: "Developed a Smart Clinic Platform as part of the course on Coursera.",
        technologies: ["Java", "Spring", "MySQL", "Docker"]
    }
    ,
    {
        title: "Taco Selling Platform",
        link: "https://github.com/Rungrukuk/Spring-In-Action",
        image: TacosProject,
        description: "Engaged in Spring Boot learning through study of \"Spring In Action\" literature.",
        technologies: ["Java", "Spring", "Rabbit", "Kafka"]
    },
    {
        title: "Social Media Platform",
        link: "https://github.com/Rungrukuk/Social-Media",
        image: SocialMediaImage,
        description: "Developed an advanced social media platform using Python/Django.",
        technologies: ["Python", "Django", "Redis"]
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
    }
];

const Projects = forwardRef((props, ref) => (
    <div className="section projects" ref={ref} data-section={props['data-section']}>
        <h2 className='pl-4 text-19 opacity-4 text-uppercase fw-600 w-100 mb-0'>Projects</h2>
        <div className="projects-grid">
            {projectsData.map((project, index) => (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={`project-box ${index === 0 ? "featured-project" : ""}`}>
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
        case "Unity":
            return <SiUnity size={24} className="technology-icon" />;
        case "Django":
            return <SiDjango size={24} className="technology-icon" />;
        case "MySQL":
            return <SiMysql size={24} className="technology-icon" />;
        case "C#":
            return <SiSharp size={24} className="technology-icon" />;
        case "Spring":
            return <SiSpring size={24} className="technology-icon" />;
        case "Docker":
            return <SiDocker size={24} className="technology-icon" />;
        case "RSocket":
            return <SiRsocket size={24} className="technology-icon" />;
        case "Rabbit":
            return <SiRabbitmq size={24} className="technology-icon" />;
        case "Redis":
            return <SiRedis size={24} className="technology-icon" />;
        case "Postgre":
            return <SiPostgresql size={24} className="technology-icon" />;
        case "Kafka":
            return <SiApachekafka size={24} className="technology-icon" />;
        default:
            return null;
    }
};

export default Projects;
