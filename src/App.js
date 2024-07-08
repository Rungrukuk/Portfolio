import React, { useRef, useState, useEffect, useMemo } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [selectedSection, setSelectedSection] = useState('about');
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const refs = useMemo(() => ({
    about: aboutRef,
    experience: experienceRef,
    education: educationRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  }), [aboutRef, experienceRef, educationRef, skillsRef, projectsRef, contactRef]);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const section = entry.target.getAttribute('data-section');
        if (entry.isIntersecting) {
          setSelectedSection(section);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    const sections = Object.values(refs).map((ref) => ref.current);

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [refs]);

  return (
    <>
      <div className="container">
        <Navbar
          selectedSection={selectedSection}
          handleScrollTo={handleScrollTo}
          refs={refs}
        />
        <div className="main-content">
          <div ref={aboutRef} data-section="about" className='bg-dark-1'>
            <About scrollToSection={handleScrollTo} />
          </div>
          <div ref={experienceRef} data-section="experience" className='bg-dark-2'>
            <Experience scrollToSection={handleScrollTo} />
          </div>
          <div ref={educationRef} data-section="education" className='bg-dark-1'>
            <Education scrollToSection={handleScrollTo} />
          </div>
          <div ref={skillsRef} data-section="skills" className='bg-dark-2'>
            <Skills scrollToSection={handleScrollTo} />
          </div>
          <div ref={projectsRef} data-section="projects" className='bg-dark-1'>
            <Projects scrollToSection={handleScrollTo} />
          </div>
          <div ref={contactRef} data-section="contact" className='bg-dark-2'>
            <Contact scrollToSection={handleScrollTo} />
          </div>
          <div className='bg-dark-1'>
            <Footer />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
