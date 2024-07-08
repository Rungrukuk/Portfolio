import React from 'react';
import '../style/Skills.css';
import { Row, Col } from "react-bootstrap";
import { FaPython, FaJava, FaPhp, FaHtml5, FaCss3, FaJsSquare, FaDocker, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiMysql, SiSqlite, SiMongodb, SiPostman, SiJupyter, SiUnity, SiUnrealengine, SiPandas, SiCsharp } from 'react-icons/si';

const Skills = React.forwardRef((props, ref) => (
    <div className="section skills" ref={ref} data-section={props['data-section']}>
        <div className='position-relative'>
            <h2 className='pl-4 text-19 opacity-4 text-uppercase fw-600 w-100 mb-0'>Skills</h2>
        </div>
        <Row>
            <Col md={12}>
                <div className='p-4 text-5 text-white-50'>
                    <div className="skills-item">
                        <h4 className='text-light-green'>Programming Languages:</h4>
                        <div className='skill-icons'>
                            <FaPython size={30} className='mr-3' />
                            <FaJava size={30} className='mr-3' />
                            <SiCsharp size={30} className='mr-3' />
                            <FaPhp size={30} className='mr-3' />
                            <FaJsSquare size={30} className='mr-3' />
                            <FaHtml5 size={30} className='mr-3' />
                            <FaCss3 size={30} className='mr-3' />
                        </div>
                        <p>Python, Java, C#, PHP, JavaScript, HTML, CSS</p>
                    </div>
                    <div className="divider"></div>
                    <div className="skills-item">
                        <h4 className='text-light-green'>Developer Tools:</h4>
                        <div className='skill-icons'>
                            <SiDjango size={30} className='mr-3' />
                            <SiMysql size={30} className='mr-3' />
                            <SiSqlite size={30} className='mr-3' />
                            <SiMongodb size={30} className='mr-3' />
                            <FaGitAlt size={30} className='mr-3' />
                            <FaDocker size={30} className='mr-3' />
                            <FaLinux size={30} className='mr-3' />
                            <SiPostman size={30} className='mr-3' />
                            <SiJupyter size={30} className='mr-3' />
                            <SiUnity size={30} className='mr-3' />
                            <SiUnrealengine size={30} className='mr-3' />
                            <SiPandas size={30} className='mr-3' />
                        </div>
                        <p>Spring, Django, MySQL, SQL Lite, MongoDB, Git, Docker, Linux, Postman, Jupyter, Unity, Unreal Engine, Pandas</p>
                    </div>
                    <div className="divider"></div>
                    <div className="skills-item">
                        <h4 className='text-light-green'>Technical Skills:</h4>
                        <p>Data Structures, Algorithms, OOP, Design Patterns, S.O.L.I.D, CI/CD, REST API, GraphQL, AJAX, WebSockets, Test Automation, Manual Testing</p>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
));

export default Skills;
