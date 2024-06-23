import React from 'react';
import profileImage from "../assets/img/ProfileImg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ selectedSection, handleScrollTo, aboutRef, educationRef, skillsRef, projectsRef, contactRef }) => {
    return (
        <div className="sidebar bg-dark text-white vh-100 position-fixed d-flex flex-column align-items-center py-3">
            <div className="profile-picture mb-4">
                <img src={profileImage} alt="Profile" className="profile-image rounded-circle border border-light" />
            </div>
            <div className="menu w-100">
                <div
                    className={`menu-item p-3 text-center ${selectedSection === 'about' ? 'bg-primary text-white' : 'bg-dark text-white'}`}
                    onClick={() => handleScrollTo(aboutRef, 'about')}
                >
                    About me
                </div>
                <div
                    className={`menu-item p-3 text-center ${selectedSection === 'education' ? 'bg-primary text-white' : 'bg-dark text-white'}`}
                    onClick={() => handleScrollTo(educationRef, 'education')}
                >
                    Education
                </div>
                <div
                    className={`menu-item p-3 text-center ${selectedSection === 'skills' ? 'bg-primary text-white' : 'bg-dark text-white'}`}
                    onClick={() => handleScrollTo(skillsRef, 'skills')}
                >
                    Skills
                </div>
                <div
                    className={`menu-item p-3 text-center ${selectedSection === 'projects' ? 'bg-primary text-white' : 'bg-dark text-white'}`}
                    onClick={() => handleScrollTo(projectsRef, 'projects')}
                >
                    Projects
                </div>
                <div
                    className={`menu-item p-3 text-center ${selectedSection === 'contact' ? 'bg-primary text-white' : 'bg-dark text-white'}`}
                    onClick={() => handleScrollTo(contactRef, 'contact')}
                >
                    Contact
                </div>
            </div>
        </div>
    );
};

export default Navbar;
