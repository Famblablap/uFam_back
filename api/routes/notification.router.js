const router = require("express").Router()
const { checkAuth, checkAdmin} = require("../middleware")

const { createNotification, getNotificationById, deleteNotification} = require("../controllers/notification.controller")

router.post('/', checkAuth, createNotification);
router.get('/:id', checkAuth, getNotificationById);
router.delete('/:id', checkAuth, deleteNotification);

module.exports = router