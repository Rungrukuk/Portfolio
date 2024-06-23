import React from 'react';
import '../style/Skills.css'

const Skills = React.forwardRef((props, ref) => (
    <div className="section skills" ref={ref} data-section={props['data-section']}>
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
