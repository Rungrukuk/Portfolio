import React from 'react';
import '../style/Experience.css'

const Experience = React.forwardRef((props, ref) => (
    <div className="section experience" ref={ref} data-section={props['data-section']}>
        <h2>Experience</h2>

        <div className="experience-item">
            <h4>Software Engineer @ MigrationPro</h4>
            <p>Baku | 06.2023 - Present</p>
            <ul>
                <li>Spearheaded the optimization initiative for the Shopify Product Exporter, transitioning from Rest API to GraphQL, resulting in a substantial performance enhancement ranging from 2 to 10 times</li>
                <li>Executed unit and integration tests, fortifying the codebase's reliability while enhancing existing testing suites</li>
                <li>Employed Python and Pandas to streamline and cleanse customer data from CSV files, contributing to improved data organization</li>
                <li>Implemented a strategic overhaul of Python and PHP code using the Strategy Design Pattern, enhancing code readability and overall performance</li>
            </ul>
        </div>

        <div className="experience-item">
            <h4>Backend Developer (Internship) @ CAERC</h4>
            <p>Baku | 02.2023 - 05.2023</p>
            <ul>
                <li>Crafted a dedicated page for volunteers using PHP, incorporating MySQL Database for an efficient admin panel and login system</li>
                <li>Implemented an enhanced security system to prevent unauthorized access to sensitive information</li>
            </ul>
        </div>
    </div>
));

export default Experience;
