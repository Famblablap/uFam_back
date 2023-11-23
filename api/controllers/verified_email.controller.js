const User = require('../models/user.model')
const VerifiedEmail = require('../models/verified_email.model')
const nodemailer = require("nodemailer")

async function getAllVerifiedEmails(req, res) {
    try {
        const verified_emails = await VerifiedEmail.findAll()
        return res.status(200).json(verified_emails)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneVerifiedEmail(req, res) {
    try {
        const verified_email = await VerifiedEmail.findByPk(req.params.id)
        if (!verified_email) { res.status(500).send('Verified Email not found') }
        return res.status(200).json(verified_email)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createVerifiedEmail(req, res) {
    try {
        const verified_email = await VerifiedEmail.create(req.body)
        return res.status(200).json(verified_email)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteVerifiedEmail(req, res) {
    try {
        const verified_email = await VerifiedEmail.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(500).json({ text: 'Verified Email removed', verified_email: verified_email })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function sendInvitation(req, res) {
    const email = req.body.email;
    const user = await User.findByPk(res.locals.user.id)
    console.log(user)
    req.body.familyId = user.familyId
    try {
        const existingInvitation = await VerifiedEmail.findOne({ 
            where: 
            { 
                email: email 
            } 
        });
        if (existingInvitation) {
            return res.status(400).send('This email has already been invited.');
        }
        
        const addEmail = await VerifiedEmail.create(req.body)
        //generar contraseña aleatoria
        //crear usuario con el correo añadido y la contraseña aleatoria
        const transporter = nodemailer.createTransport({
            // Transport configuration (service, auth, etc.)
        });

      /*   const mailOptions = {
            from: "email@email.com",
            to: email,
            subject: 'Family Invitation',
            html: '<p>You have been invited to join a family. Please click the following link to verify your email address:</p>' +
                  '<a href="http://yourfrontenddomain.com/verify?token=' + verifiedEmailEntry.verificationToken + '">Verify Email</a>'
        };

        await transporter.sendMail(mailOptions); */
        res.status(200).send({ message: 'Invitation sent successfully.' });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
}

module.exports = {
    getAllVerifiedEmails,
    getOneVerifiedEmail,
    createVerifiedEmail,
    deleteVerifiedEmail,
    sendInvitation
}