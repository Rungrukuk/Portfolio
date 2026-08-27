import React from 'react';
import '../style/Publications.css';
import { Row, Col } from "react-bootstrap";
import { FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';

const publicationsData = [
    {
        title: "Performance and Security Tradeoffs in Microservices Communication: Evaluating Reactive and Virtual-Thread Architectures Under Security-Enabled Systems",
        authors: "Kamal Azizov",
        date: "July 2026",
        venue: "2026 International Conference on Service-Oriented System Engineering (SOSE)",
        description: "Evaluates a reactive microservices architecture integrating multi-layered security mechanisms (mTLS, JWT, RBAC/CBAC) and RSocket against a virtual-thread-based REST implementation. Load testing reveals that while virtual threads reduce latency differences, reactive execution remains up to 6x more resource-efficient at the API Gateway.",
        link: "https://ieeexplore.ieee.org/abstract/document/11652941",
    }
];

const Publications = React.forwardRef((props, ref) => (
    <div className="section publications" ref={ref} data-section={props['data-section']}>
        <div className='position-relative'>
            <h2 className='pl-4 text-19 opacity-4 text-uppercase fw-600 w-100 mb-0'>Publications</h2>
        </div>

        <Row>
            <Col md={12}>
                {publicationsData.map((pub, index) => (
                    <React.Fragment key={index}>
                        <div className="publication-item mt-3 text-white-50">
                            <Row>
                                <Col md={10}>
                                    <h4 className='text-light-green publication-title'>
                                        {pub.title}
                                    </h4>
                                    <p className="publication-meta">
                                        <span className="text-important">{pub.authors}</span> <span className="meta-separator">•</span> {pub.venue} <span className="meta-separator">•</span> {pub.date}
                                    </p>
                                    <p className="text-5 publication-desc">{pub.description}</p>
                                    {pub.link && (
                                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                                            View on IEEE Xplore <FaExternalLinkAlt className="ms-2" size={14} />
                                        </a>
                                    )}
                                </Col>
                                <Col md={2} className="d-flex align-items-center justify-content-center">
                                    <div className="publication-icon-wrapper">
                                        <FaBookOpen className="publication-icon" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {index < publicationsData.length - 1 && <div className="divider"></div>}
                    </React.Fragment>
                ))}
            </Col>
        </Row>
    </div>
));

export default Publications;