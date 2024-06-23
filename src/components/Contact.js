import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12}>
                        <h2>Contact Me</h2>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <Form.Group controlId="formFirstName">
                                        <Form.Control
                                            type="text"
                                            value={formDetails.firstName}
                                            placeholder="First Name"
                                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <Form.Group controlId="formLastName">
                                        <Form.Control
                                            type="text"
                                            value={formDetails.lastName}
                                            placeholder="Last Name"
                                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <Form.Group controlId="formEmail">
                                        <Form.Control
                                            type="email"
                                            value={formDetails.email}
                                            placeholder="Email Address"
                                            onChange={(e) => onFormUpdate('email', e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <Form.Group controlId="formPhone">
                                        <Form.Control
                                            type="tel"
                                            value={formDetails.phone}
                                            placeholder="Phone No."
                                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col size={12} className="px-1">
                                    <Form.Group controlId="formMessage">
                                        <Form.Control
                                            as="textarea"
                                            rows="6"
                                            value={formDetails.message}
                                            placeholder="Message"
                                            onChange={(e) => onFormUpdate('message', e.target.value)}
                                        />
                                    </Form.Group>
                                    <Button type="submit" className="mt-3"><span>{buttonText}</span></Button>
                                </Col>
                                {status.message && (
                                    <Col size={12} className="px-1 mt-3">
                                        <p className={status.success === false ? "text-danger" : "text-success"}>{status.message}</p>
                                    </Col>
                                )}
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;
