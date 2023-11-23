const nodemailer = require("nodemailer");

const mailConfig = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
    },
};

const mailer = nodemailer.createTransport(mailConfig);

module.exports =  {mailer} 