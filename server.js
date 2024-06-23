require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

app.post("/contact", (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mailOptions, (error) => {
        if (error) {
            res.json({ code: 500, status: "Message Failed" });
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});

app.listen(5000, () => console.log("Server Running on port 5000"));
