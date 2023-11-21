const { getCommentsPhoto, createCommentPhoto, deleteCommentPhoto } = require('../controllers/comment.controller')

const router = require('express').Router()

router.get('/commentPhoto', getCommentsPhoto)
router.post('/commentPhoto/:photoId', createCommentPhoto)
router.delete('/commentPhoto/:photoId', deleteCommentPhoto)

module.exports = router