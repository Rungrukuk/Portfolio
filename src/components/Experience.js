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
                        <p>Baku | 06.2023 - Present</p>
                        <ul className='text-5'>
                            <li>Spearheaded the optimization initiative for the Shopify Product Exporter, transitioning from<span className='text-important'> Rest API to GraphQL</span>, resulting in a substantial performance enhancement ranging from 2 to 10 times</li>
                            <li>Executed unit and integration tests, fortifying the codebase's reliability while enhancing existing testing suites</li>
                            <li>Developed complex SQL queries with multiple joins to accurately retrieve data from the database.</li>
                            <li>Implemented a strategic overhaul of Python and PHP code using the Strategy Design Pattern, enhancing code readability and overall performance</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h4 className='text-light-green'>Backend Developer (Internship) @ CAERC</h4>
                        <p>Baku | 02.2023 - 05.2023</p>
                        <ul className='text-5'>
                            <li>Crafted a dedicated page for volunteers using PHP, incorporating MySQL Database for an efficient admin panel and login system</li>
                            <li>Implemented an enhanced security system to prevent unauthorized access to sensitive information</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
));

export default Experience;
