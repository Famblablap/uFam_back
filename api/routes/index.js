const router = require("express").Router();

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const blogRouter = require('./blog.router') 
const likeRouter = require('./like.router')
const photoRouter = require('./photo.router')
const commentRouter = require('./comment.router')
const familyRouter = require("./family.router")
const notificationRouter = require("./notification.router")
const verifiedEmail  = require("./verified_email.router")
const messageRouter = require('./message.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/blog', blogRouter) 
router.use('/like', likeRouter)
router.use('/photo', photoRouter)
router.use('/comments', commentRouter)
router.use("/families", familyRouter)
router.use("/notifications", notificationRouter)
router.use("/verified-email", verifiedEmail)
router.use('/messages', messageRouter)

module.exports = router;