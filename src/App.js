import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  const [selectedSection, setSelectedSection] = useState('about');
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const refs = {
    about: aboutRef,
    experience: experienceRef,
    education: educationRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const handleScrollTo = (ref, section) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          setSelectedSection(section);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    const sections = Object.values(refs).map((ref) => ref.current);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="container">
      <Navbar
        selectedSection={selectedSection}
        handleScrollTo={handleScrollTo}
        refs={refs}
      />
      <div className="main-content">
        <div ref={aboutRef} data-section="about">
          <About />
        </div>
        <hr />
        <div ref={experienceRef} data-section="experience">
          <Experience />
        </div>
        <hr />
        <div ref={educationRef} data-section="education">
          <Education />
        </div>
        <hr />
        <div ref={skillsRef} data-section="skills">
          <Skills />
        </div>
        <hr />
        <div ref={projectsRef} data-section="projects">
          <Projects />
        </div>
        <hr />
        <div ref={contactRef} data-section="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
