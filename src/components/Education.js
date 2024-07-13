import React from 'react';
import '../style/Education.css';
import { Row, Col, Image } from "react-bootstrap";
import logoAzTU from '../assets/img/logos/logoAzTU.png';
import logoBEU from '../assets/img/logos/logoBEU.png';

const Education = React.forwardRef((props, ref) => (
    <div className="section education" ref={ref} data-section={props['data-section']}>
        <div className='position-relative'>
            <h2 className='pl-4 text-19 opacity-4 text-uppercase fw-600 w-100 mb-0'>Education</h2>
        </div>
        <Row>
            <Col md={12}>
                <div className="education-item mt-3 text-white-50">
                    <Row>
                        <Col md={10}>
                            <h4 className='text-light-green'>Computer Security Master @ Azerbaijan Technical University</h4>
                            <p>09.2023 - Present</p>
                            <ul className='text-5'>
                                <li>Related Coursework: Introduction to Cybersecurity, Artificial intelligence methods, Legal aspects of information security, Cryptology, Security of cloud technologies, Ethical hacking methods, Network security</li>
                                <li>Notable Project: Developed model of networking in online games utilizing RSA encryption to ensure the security of information.</li>
                            </ul>
                        </Col>
                        <Col md={2} className="d-flex align-items-center justify-content-center">
                            <Image src={logoAzTU} className="institution-logo" />
                        </Col>
                    </Row>
                </div>
                <div className="divider"></div>
                <div className="education-item text-white-50">
                    <Row>
                        <Col md={10}>
                            <h4 className='text-light-green'>Information Technologies (Eng) Bachelor @ Baku Engineering University</h4>
                            <p>09.2019 - 05.2023</p>
                            <ul className='text-5'>
                                <li>Related Coursework: Object Oriented Programming, Internet Technologies, Web System Technologies, Modern Programming Languages, Computer Architecture, Data Structures and Algorithms, Computer Networks</li>
                                <li>Extracurricular Activities: Participated in numerous hackathons and a renowned Turkish drone creation competition <span className='text-important'>Teknofest</span>, achieving a final placement of 5th.</li>
                            </ul>
                        </Col>
                        <Col md={2} className="d-flex align-items-center justify-content-center">
                            <Image src={logoBEU} className="institution-logo" />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>
));

export default Education;
