import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [selectedSection, setSelectedSection] = useState('about');
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollTo = (ref, section) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const sectionOffsets = [
      { section: 'about', offset: aboutRef.current.offsetTop },
      { section: 'education', offset: educationRef.current.offsetTop },
      { section: 'skills', offset: skillsRef.current.offsetTop },
      { section: 'projects', offset: projectsRef.current.offsetTop },
      { section: 'contact', offset: contactRef.current.offsetTop },
    ];

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionOffsets[i].offset) {
        setSelectedSection(sectionOffsets[i].section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <Navbar
        selectedSection={selectedSection}
        handleScrollTo={handleScrollTo}
        aboutRef={aboutRef}
        educationRef={educationRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className="main-content">
        <About ref={aboutRef} />
        <hr></hr>
        <Education ref={educationRef} />
        <hr></hr>
        <Skills ref={skillsRef} />
        <hr></hr>
        <Projects ref={projectsRef} />
        <hr></hr>
        <Contact ref={contactRef} />
      </div>
    </div>
  );
}

export default App;
