const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const blogRouter = require('./blog.router')
const likeRouter = require('./like.router')
const messageRouter = require('./message.route')


router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/blog', blogRouter)
router.use('/like', likeRouter)
router.use('/message', messageRouter)


module.exports = router