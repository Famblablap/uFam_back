const { createNotification, getNotificationById, deleteNotification} = require("../controllers/notification.controller")
const { checkAuth  } = require("../middleware/index");

const router = require("express").Router()

router.post('/', checkAuth, createNotification);
router.get('/:id', checkAuth, getNotificationById);
router.delete('/:id', checkAuth, deleteNotification);

module.exports = router