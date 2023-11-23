const { getCommentsPhoto, getCommentsVideo, createCommentPhoto, createCommentVideo, deleteCommentPhoto, deleteCommentVideo } = require('../controllers/comment.controller')
const { checkAuth, checkAdmin } = require('../middleware/index')

const router = require('express').Router()

router.get('/commentPhoto', checkAuth, checkAdmin, getCommentsPhoto)
router.get('/commentVideo', checkAuth, checkAdmin, getCommentsVideo)
router.post('/commentPhoto/:photoId', checkAuth, createCommentPhoto)
router.post('/commentVideo/:videoId', checkAuth, createCommentVideo)
router.delete('/commentPhoto/:photoId', checkAuth, deleteCommentPhoto)
router.delete('/commentVideo/:videoId', checkAuth, deleteCommentVideo)


module.exports = router