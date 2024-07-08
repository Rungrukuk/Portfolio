import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import '../style/Contact.css';

export const Contact = () => {
    const formInitialDetails = {
        fullName: '',
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
        if (!formDetails.fullName || !formDetails.email || !formDetails.message) {
            setAlert('Please make sure to fill First Name, Email and Message fields.');
            return;
        }
        setButtonText("Sending...");
        var templateParams = {
            to_name: 'Kamal',
            from_name: formDetails.fullName,
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
                    <div className='mb-5'>
                        <h2 className='text-19 opacity-4 text-uppercase fw-600 w-100 mb-0'>Contact Me</h2>
                    </div>
                    {alert && <p className="text-danger mt-3">{alert}</p>}
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                                <Form.Group controlId="formfullName">
                                    <Form.Control
                                        type="text"
                                        value={formDetails.fullName}
                                        placeholder="First Name"
                                        onChange={(e) => onFormUpdate('fullName', e.target.value)}
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
                            <Form.Group size={12} sm={6} className="px-1" controlId="formMessage">
                                <Form.Control
                                    as="textarea"
                                    rows="6"
                                    value={formDetails.message}
                                    placeholder="Message"
                                    onChange={(e) => onFormUpdate('message', e.target.value)}
                                />
                            </Form.Group>
                            <button className="submit-button mt-3"><span>{buttonText}</span></button>
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
