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
                            <h4 className='text-light-green'>
                                M.Sc. in Computer Security @ Azerbaijan Technical University
                            </h4>
                            <p>09.2023 - 06.2025</p>

                            <ul className='text-5'>
                                <li>
                                    Related Coursework: Information Security Management Systems,
                                    Cryptography, Network Security, Security in Cloud-based Systems,
                                    Ethical Hacking, Data Analysis, and Introduction to AI.
                                </li>

                                <li>
                                    Master's Thesis:
                                    <span className='text-important'>
                                        {" "}Security-Oriented Improvements in Microservice Architecture-Based E-Commerce Applications
                                    </span>,
                                    focusing on mTLS, RBAC/CBAC authorization,
                                    REST vs RSocket performance, and secure microservice communication.
                                </li>
                            </ul>
                        </Col>

                        <Col md={2} className="d-flex align-items-center justify-content-center">
                            <Image src={logoAzTU} alt="Azerbaijan technical University" className="institution-logo" />
                        </Col>
                    </Row>
                </div>

                <div className="divider"></div>

                <div className="education-item text-white-50">
                    <Row>
                        <Col md={10}>
                            <h4 className='text-light-green'>
                                B.Sc. in Information Technologies (English) @ Baku Engineering University
                            </h4>
                            <p>09.2019 - 05.2023</p>

                            <ul className='text-5'>
                                <li>
                                    Related Coursework: Object-Oriented Programming,
                                    Internet Technologies, Web System Technologies,
                                    Modern Programming Languages, Computer Architecture,
                                    Data Structures & Algorithms, and Computer Networks.
                                </li>

                                <li>
                                    Represented the university
                                    in the international drone competition
                                    <span className='text-important'> Teknofest</span>,
                                    where our team achieved
                                    <span className='text-important'> 5th place</span> and won monetary award.
                                </li>
                            </ul>
                        </Col>

                        <Col md={2} className="d-flex align-items-center justify-content-center">
                            <Image src={logoBEU} alt="Baku Engineering University" className="institution-logo" />
                        </Col>
                    </Row>
                </div>

            </Col>
        </Row>
    </div>
));

export default Education;