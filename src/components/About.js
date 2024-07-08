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
                    <h3 className='text-light-green'>Hi There!  </h3>
                    <br />
                    <p className='text-5 text-white-50'>

                        My name is <span className='text-important'>Kamal Azizov</span>, born and living in Sumgait, Azerbaijan. I am passionate about coding and have been immersed in the world of programming since 2018. With a robust background in game development, I have three years of experience in this field and currently, I am expanding my skill set by learning software engineering.
                    </p>
                    <p className='text-5 text-white-50'>
                        My technical repertoire includes extensive work with Java, C#, Python, and PHP, through which I have developed numerous prototype projects such as "Social Media Platform" using <span className='text-important'>Python</span>/Django, "Taco Selling Platform" using <span className='text-important'>Java</span>/Spring, numerous games using <span className='text-important'>C#</span>/Unity and "Car Selling Platform" using <span className='text-important'>PHP</span>.
                    </p>
                    <p className='text-5 text-white-50'>
                        In my free time, I enjoy playing video games, watching anime and movies, and playing the guitar. I am also an avid reader, currently delving into books on software engineering to further enhance my knowledge and skills in this domain.
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
