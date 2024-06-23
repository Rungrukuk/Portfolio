import React, { forwardRef, useState } from 'react';

import SocialMediaImage from "../assets/img/projects/SocialMedia.png"

const PlaceholderImage = "https://via.placeholder.com/150"

let projectImages = {
    "Social media": SocialMediaImage,
    "Mobile Game": PlaceholderImage,
    // Add more projects as needed
};

const projectsData = [
    {
        title: "Social media",
        link: "https://github.com/Rungrukuk/Social-Media",
        image: projectImages["Social media"],
        description: "An advanced social media platform with real-time chat."
    },
    {
        title: "Mobile Game",
        link: "https://play.google.com/store/apps/details?id=com.Brothevs.DoYouHaveABAll",
        image: "https://via.placeholder.com/150", // Add an image URL here
        description: "A captivating mobile game with dynamic background lighting."
    },
    {
        title: "Project 3",
        link: "https://example.com/project3",
        image: "https://via.placeholder.com/150", // Add an image URL here
        description: "Description for Project 3."
    },
    {
        title: "Project 4",
        link: "https://example.com/project4",
        image: "https://via.placeholder.com/150", // Add an image URL here
        description: "Description for Project 4."
    },
    {
        title: "Project 5",
        link: "https://example.com/project5",
        image: "https://via.placeholder.com/150", // Add an image URL here
        description: "Description for Project 5."
    },
    {
        title: "Project 6",
        link: "https://example.com/project6",
        image: "https://via.placeholder.com/150", // Add an image URL here
        description: "Description for Project 6."
    },
    {
        title: "Project 7",
        link: "https://example.com/project7",
        image: "https://via.placeholder.com/150", // Add an image URL here
        description: "Description for Project 7."
    },
    {
        title: "Project 8",
        link: "https://example.com/project8",
        image: "https://via.placeholder.com/150", // Add an image URL here
        description: "Description for Project 8."
    },
    {
        title: "Project 9",
        link: "https://example.com/project9",
        image: "https://via.placeholder.com/150", // Add an image URL here
        description: "Description for Project 9."
    },
    {
        title: "Project 10",
        link: "https://example.com/project10",
        image: "https://via.placeholder.com/150", // Add an image URL here
        description: "Description for Project 10."
    }
];

const Projects = forwardRef((props, ref) => (
    <div className="section projects" ref={ref}>
        <h2>Projects</h2>
        <div className="projects-grid">
            {projectsData.map((project, index) => (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-box">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h4>{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                </a>
            ))}
        </div>
    </div>
));

export default Projects;
