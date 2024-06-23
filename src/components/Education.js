import React from 'react';
import '../style/Education.css'

const Education = React.forwardRef((props, ref) => (
    <div className="section education" ref={ref} data-section={props['data-section']}>
        <h2>Education</h2>
        <div className="education-item">
            <h4>Computer Security Master @ Azerbaijan Technical University</h4>
            <p>09.2023 - Present</p>
            <ul>
                <li>
                    Related Coursework: Introduction to Cybersecurity, Artificial intelligence methods, Legal aspects of information security, Cryptology, Security of cloud technologies, Ethical hacking methods, Network security
                </li>
            </ul>
        </div>
        <div className="education-item">
            <h4>Information Technologies (Eng) Bachelor  @ Baku Engineering University </h4>
            <p>09.2019 - 05.2023</p>
            <ul>
                <li>
                    Related Coursework: Object Oriented Programming, Internet Technologies, Web System Technologies, Modern Programming Languages, Computer Architecture, Data Structures and Algorithms, Computer Networks
                </li>
            </ul>
        </div>
    </div>
));

export default Education;
