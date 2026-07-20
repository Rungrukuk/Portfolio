import React from 'react';
import '../style/Experience.css';
import { Row, Col } from "react-bootstrap";

const Experience = React.forwardRef((props, ref) => (
    <div className="section experience" ref={ref} data-section={props['data-section']}>
        <div className='position-relative'>
            <h2 className='pl-4 text-19 opacity-4 text-uppercase fw-600 w-100 mb-0'>Experience</h2>
        </div>

        <Row>
            <Col md={12}>
                <div className='p-4 text-white-50'>

                    <div className="experience-item">
                        <h4 className='text-light-green'>Software Engineer @ MigrationPro</h4>
                        <p>Baku | 06.2023 - 08.2024</p>
                        <ul className='text-5'>
                            <li>
                                Spearheaded the optimization of the Shopify Product Exporter by migrating from
                                <span className='text-important'> REST API to GraphQL</span>,
                                achieving a <span className='text-important'>2–10× performance improvement</span>.
                            </li>
                            <li>
                                Designed and implemented unit and integration tests using Python,
                                improving code reliability and expanding the existing testing suite.
                            </li>
                            <li>
                                Utilized <span className='text-important'>Python</span> and
                                <span className='text-important'> Pandas</span> to clean, transform,
                                and organize customer CSV datasets, improving data quality and pipeline efficiency.
                            </li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <h4 className='text-light-green'>Backend Developer (Internship) @ CAERC</h4>
                        <p>Baku | 02.2023 - 05.2023</p>
                        <ul className='text-5'>
                            <li>
                                Developed a volunteer management page using PHP with a
                                MySQL-backed admin panel and secure authentication system.
                            </li>
                            <li>
                                Implemented enhanced security measures to prevent unauthorized
                                access to sensitive administrative information.
                            </li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <h4 className='text-light-green'>Software Developer (Internship) @ LiderSoft</h4>
                        <p>Baku | 08.2021 - 01.2022</p>
                        <ul className='text-5'>
                            <li>
                                Learned and applied the 1C programming language for enterprise
                                resource planning (ERP) and business automation.
                            </li>
                            <li>
                                Gained practical experience with accounting principles and
                                integrating software solutions into business workflows.
                            </li>
                        </ul>
                    </div>

                </div>
            </Col>
        </Row>
    </div>
));

export default Experience;