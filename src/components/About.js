import React from 'react';

const About = React.forwardRef((props, ref) => (
    <div className="section about-me" ref={ref} data-section={props['data-section']}>
        <h2>About me</h2>
        <p> Hi There!
            My name is Kamal Azizov, born on October 17, 2002, in Sumgait, Azerbaijan. I am passionate about coding and have been immersed in the world of programming since 2018. With a robust background in game development, I have three years of experience in this field and have successfully created three full games with Unity Engine.
        </p>
        <p>

            Currently, I am expanding my skill set by learning Java Spring Boot. My technical repertoire includes extensive work with Java, C#, Python, and PHP, through which I have developed numerous prototype projects.
        </p>
        <p>

            In my free time, I enjoy playing video games, watching anime and movies, and playing the guitar. I am also an avid reader, currently delving into books on software engineering to further enhance my knowledge and skills in this domain.
        </p>
    </div>
));

export default About;
