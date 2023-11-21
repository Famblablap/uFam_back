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
            return res.status(404).send('No message')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}