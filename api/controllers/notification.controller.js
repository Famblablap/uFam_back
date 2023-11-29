const { application } = require('express');
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

async function createNotification(arg) {
    try {
        const { action, userId, contentId, contentType, like_id } = arg;

        const notificationData = {
            content: `${action} on ${contentType}`,
            user_id: userId,
            content_id: null,
            comment_id: null,
            like_id: like_id,
            blog_id: null,
        };

        if (contentType === 'content') {
            notificationData.content_id = contentId;
        } else if (contentType === 'comment') {
            notificationData.comment_id = contentId;
        }

        const notification = await Notification.create(notificationData);

        return notification
    } catch (error) {
        console.error("Error creating notification:", error.message);
        return res.status(500).send(error.message);
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