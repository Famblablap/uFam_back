const { getCommentsPhoto, getCommentsVideo, createCommentPhoto, createCommentVideo, deleteCommentPhoto, deleteCommentVideo } = require('../controllers/comment.controller')

const router = require('express').Router()

router.get('/commentPhoto', getCommentsPhoto)
router.get('/commentVideo', getCommentsVideo)
router.post('/commentPhoto/:photoId', createCommentPhoto)
router.post('/commentVideo/:videoId', createCommentVideo)
router.delete('/commentPhoto/:photoId', deleteCommentPhoto)
router.delete('/commentVideo/:videoId', deleteCommentVideo)


module.exports = router