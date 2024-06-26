import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer'

function App() {
  const [selectedSection, setSelectedSection] = useState('about');
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const refs = React.useMemo(() => ({
    about: aboutRef,
    experience: experienceRef,
    education: educationRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  }), [aboutRef, experienceRef, educationRef, skillsRef, projectsRef, contactRef]);

  const handleScrollTo = (ref, section) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px -90% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const section = entry.target.getAttribute('data-section');
        if (section === 'contact' && entry.isIntersecting && entry.intersectionRatio === 1) {
          setSelectedSection('contact');
        } else if (entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight / 2) {
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

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setSelectedSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
      window.removeEventListener('scroll', handleScroll);
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
          <div ref={aboutRef} data-section="about">
            <About scrollToSection={handleScrollTo} />
          </div>
          <hr />
          <div ref={experienceRef} data-section="experience">
            <Experience scrollToSection={handleScrollTo} />
          </div>
          <hr />
          <div ref={educationRef} data-section="education">
            <Education scrollToSection={handleScrollTo} />
          </div>
          <hr />
          <div ref={skillsRef} data-section="skills">
            <Skills scrollToSection={handleScrollTo} />
          </div>
          <hr />
          <div ref={projectsRef} data-section="projects">
            <Projects scrollToSection={handleScrollTo} />
          </div>
          <hr />
          <div ref={contactRef} data-section="contact">
            <Contact scrollToSection={handleScrollTo} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
