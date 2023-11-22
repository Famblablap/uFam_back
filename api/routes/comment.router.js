const { getCommentsPhoto, getCommentsVideo, createCommentPhoto, createCommentVideo, deleteCommentPhoto, deleteCommentVideo } = require('../controllers/comment.controller')

const router = require('express').Router()

router.get('/admin', getCommentsPhoto)
router.get('/admin', getCommentsVideo)
router.post('/:photoId', createCommentPhoto)
router.post('/:videoId', createCommentVideo)
router.delete('/:photoId', deleteCommentPhoto)
router.delete('/:videoId', deleteCommentVideo)


module.exports = router