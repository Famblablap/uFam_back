const Notification = require('../models/notification.model')

async function getNotificationById(req, res) {
    try {
        const notification = await Notification.findByPk(req.params.id)
        if (notification) {
            return res.status(200).json(notification);
        } else {
            return res.status(404).send('Notification not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNotification(req, res) {
    try {
        console.log(req.body)
        console.log(req.user)
        const notification = await Notification.create({
            content: req.body.content,
            video_id: req.body.video_id,
            photo_id: req.body.photo_id,
            comment_id: req.body.comment_id,
            like_id: req.body.like_id,
            blog_id: req.body.blog_id,
            user_id: req.user.id
        })
        return res.status(200).json(notification)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error.message)
    }
}

async function deleteNotification(req, res) {
    try {
        const deleted = await Notification.destroy({
            where: { notification_id: req.params.id }
        })
        if (deleted) {
            return res.status(200).send({ message: 'Notification deleted' })
        }
        return res.status(404).send('Notification not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createNotification,
    getNotificationById,
    deleteNotification
}