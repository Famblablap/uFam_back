const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const blogRouter = require('./blog.router') 
const likeRouter = require('./like.router')
const photoRouter = require('./photo.router')
const commentRouter = require('./comment.router')
const familyRouter = require("./family.router")
const notificationRouter = require("./notification.router")
const photoRoutes = require('../../api/routes/photo.router');
const videoRoutes = require('../../api/routes/video.router');

// const messageRouter = require('./message.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/blog', blogRouter) 
router.use('/like', likeRouter)
router.use('/photo', photoRouter)
router.use('/comments', commentRouter)
router.use("/families", familyRouter)
router.use("/notifications", notificationRouter)
router.use('/api/photos', photoRoutes)
router.use('/api/videos', videoRoutes)

// router.use('/messages', messageRouter)

module.exports = router