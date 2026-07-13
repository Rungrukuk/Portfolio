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
                <div className='p-4'>
                    <h3 className='text-light-green'>Hi There!</h3>
                    <br />
                    <p className='text-5 text-white-50'>
                        My name is <span className='text-important'>Kamal Azizov</span>, a Software Engineer based in Sumqayit, Azerbaijan, with an M.Sc. in Computer Security from Azerbaijan Technical University. My work centers on backend and microservices development, with a strong focus on reactive programming, distributed systems, and application security.
                    </p>
                    <p className='text-5 text-white-50'>
                        I specialize in building scalable, secure systems using <span className='text-important'>Java</span> and <span className='text-important'>Spring Boot</span>, including reactive architectures with Spring WebFlux and Project Reactor. My recent work includes designing a <span className='text-important'>Reactive Microservices Platform</span> with mTLS-secured inter-service communication, JWT-based authentication, and RBAC/CBAC authorization, as well as optimizing e-commerce data pipelines using <span className='text-important'>Python</span> and GraphQL at MigrationPro, where I improved performance by up to 10x.
                    </p>
                    <p className='text-5 text-white-50'>
                        Beyond backend engineering, my background spans full-stack development, databases (PostgreSQL, MySQL, MongoDB, Redis), and messaging systems like Kafka and RabbitMQ. My master's thesis explored security-oriented improvements in microservice-based e-commerce applications, reflecting my ongoing interest in building systems that are both performant and secure.
                    </p>
                    <p className='text-5 text-white-50'>
                        Outside of engineering, I enjoy game development (three years of experience with Unity and C#), reading technical literature, and exploring new technologies. I'm always looking to grow — both as an engineer and in my understanding of the systems I build.
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
