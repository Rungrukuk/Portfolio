import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import '../style/Contact.css';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [alert, setAlert] = useState('');

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlert('');
        if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
            setAlert('Please make sure to fill First Name, Email and Message fields.');
            return;
        }
        setButtonText("Sending...");
        var templateParams = {
            to_name: 'Kamal',
            from_name: formDetails.firstName + " " + formDetails.lastName,
            message: formDetails.message,
            email: formDetails.email,
            phone: formDetails.phone
        };
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID).then((response) => {
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: 'Message sent successfully' });
        }).catch((err) => {
            setButtonText("Send");
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        });
    };

    return (
        <div className="section contact" id="connect">
            <Row className="align-items-center">
                <Col size={12}>
                    <div className='position-relative d-flex text-center mb-5'>
                        <h2 className='text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0'>Contact Me</h2>
                    </div>
                    {alert && <p className="text-danger mt-3">{alert}</p>}
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
                                <button className="submit-button mt-3"><span>{buttonText}</span></button>
                            </Col>
                            {status.message && (
                                <p className={status.success === false ? "text-danger mt-3" : "text-success mt-3"}>{status.message}</p>
                            )}
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
