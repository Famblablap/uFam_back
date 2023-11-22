const VerifiedEmail = require('../models/verified_email.model')

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

module.exports = {
    getAllVerifiedEmails,
    getOneVerifiedEmail,
    createVerifiedEmail,
    deleteVerifiedEmail
}