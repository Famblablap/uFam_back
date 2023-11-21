const Message = require('../models/message.model')
const User = require('../models/user.model')


async function getAllMessages(req, res) {
    try {
        const message = await Message.findAll({
            include: {
                model: User,
                attributes: ['name'],
            }
        })
        if (message) {
            return res.status(200).json(message)
        } else {
            return res.status(404).send('No message')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneMessage(req, res) {
    try {
        const message = await Message.findByPk(req.params.id, {
            include: {
                model: User,
                attributes: ['name'],
            }
        })
        if (message) {
            return res.status(200).json(message)
        } else {
            return res.status(404).send('Message not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createMessage(req, res) {
    try {
        const message = await Message.create({
            message: req.body.message
        })
        return res.status(200).json({ message: message })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateOneMessage(req, res) {
    try {
        const [messageExist, message] = await Message.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (messageExist !== 0) {
            return res.status(200).json({ message: 'Message updated' })
        } else {
            return res.status(404).send('Message not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOneMessage(req,res) {
    try {
        const message = await Message.destroy ({
            where: {
                id: req.params.id,
            }
        })
        if (message) {
            return res.status(200).send('Message deleted')
        } else {
            return res.status(404).send('Message not found')
        }
    } catch {
        return res.status(500).send(error.message)
    }
}

module.exports = { getAllMessages, getOneMessage, createMessage, updateOneMessage, deleteOneMessage }