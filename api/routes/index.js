const router = require('express').Router()

const authRouter = require('./auth.router')
const familyRouter = require("./family.router")
const notificationRouter = require("./notification.router")

router.use("/families", familyRouter)
router.use("/notifications", notificationRouter)

module.exports = router