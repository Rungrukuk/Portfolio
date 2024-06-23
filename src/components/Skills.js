import React from 'react';

const Skills = React.forwardRef((props, ref) => (
    <div className="section skills" ref={ref}>
        <h2>Skills</h2>
        <h4>Programming Languages:</h4>
        <p>Python, C#, Java, PHP, HTML, CSS, JavaScript</p>
        <h4>Developer Tools:</h4>
        <p>Django, MySQL, SQL Lite, MongoDB, Git, Docker, Linux, Postman, Jupyter, Unity, Unreal Engine, Pandas</p>
        <h4>Technical Skills:</h4>
        <p>Data Structures, Algorithms, OOP, Design Patterns, S.O.L.I.D, CI/CD, REST API, GraphQL, AJAX, WebSockets, Test Automation, Manual Testing</p>
    </div>
));

export default Skills;
