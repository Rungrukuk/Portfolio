import React from 'react';
import '../style/About.css';
import { Row, Col } from "react-bootstrap";
import book1 from '../assets/img/books/book1.png'
import book2 from '../assets/img/books/book2.png'
import book3 from '../assets/img/books/book3.png'
import book4 from '../assets/img/books/book4.png'
import book5 from '../assets/img/books/book5.png'
import book6 from '../assets/img/books/book6.png'

const About = React.forwardRef((props, ref) => (
    <div className="section about-me" ref={ref} data-section={props['data-section']}>
        <div className='position-relative'>
            <h2 className='pl-4 text-19 opacity-4 text-uppercase fw-600 w-100 mb-0'>About me</h2>
        </div>
        <Row>
            <Col md={8}>
                <div className="p-4">
                    <h3 className="text-light-green">Hi There!</h3>
                    <br />

                    <p className="text-5 text-white-50">
                        I'm <span className="text-important">Kamal Azizov</span>, a software
                        engineer from <span className="text-important">Sumqayit, Azerbaijan</span>.
                        I enjoy building systems that are reliable, scalable, and secure.
                        Understanding how software works beneath the surface has naturally
                        drawn me toward backend engineering, distributed systems, and
                        application security.
                    </p>

                    <p className="text-5 text-white-50">
                        Most of my work revolves around the{" "}
                        <span className="text-important">Java</span> ecosystem, particularly{" "}
                        <span className="text-important">Spring Boot</span>,{" "}
                        <span className="text-important">Spring WebFlux</span>, and reactive
                        programming. I enjoy designing microservices, working with
                        asynchronous architectures, and solving performance challenges.
                        Whether I'm improving an existing application or designing one from
                        scratch, my goal is always to write clean, maintainable code that
                        can continue to evolve.
                    </p>

                    <p className="text-5 text-white-50">
                        During my{" "}
                        <span className="text-important">
                            Master's in Computer Security
                        </span>
                        , I developed a strong interest in secure software design. That
                        interest continues to shape the way I approach development, from
                        authentication and authorization to secure communication between
                        services and resilient system architecture.
                    </p>

                    <p className="text-5 text-white-50">
                        I enjoy learning just as much as I enjoy building. Reading technical
                        books, exploring new technologies, and creating personal projects
                        help me grow as an engineer. Outside of backend development, I spent
                        three years building games with{" "}
                        <span className="text-important">Unity</span> and{" "}
                        <span className="text-important">C#</span>, an experience that taught
                        me to approach problems from different perspectives. For me,
                        software engineering is about more than writing code. It is about
                        understanding why systems work the way they do and continuously
                        finding better ways to build them.
                    </p>
                </div>
            </Col>
            <Col md={4}>
                <div className='p-3'>
                    <h3 className='text-light-green'>Books I'm reading</h3>
                    <br />
                    <Row>
                        <Col xs={6} className="book-col">
                            <img src={book1} alt='Spring In Action' className="book-img" />
                        </Col>
                        <Col xs={6} className="book-col">
                            <img src={book2} alt='Design Patterns' className="book-img" />
                        </Col>
                        <Col xs={6} className="book-col">
                            <img src={book3} alt='Introduction To Algorithms' className="book-img" />
                        </Col>
                        <Col xs={6} className="book-col">
                            <img src={book4} alt='Clean Architecture' className="book-img" />
                        </Col>
                        <Col xs={6} className="book-col">
                            <img src={book5} alt='The Pragmatic Programmer' className="book-img" />
                        </Col>
                        <Col xs={6} className="book-col">
                            <img src={book6} alt='Soft Skills' className="book-img" />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>
));

export default About;
