const { getCommentsContent, createCommentContent, deleteCommentContent } = require('../controllers/comment.controller')
const { checkAuth, checkAdmin } = require('../middleware/index')

const router = require('express').Router()

router.get('/commentContent', checkAuth, checkAdmin, getCommentsContent)
router.post('/commentContent/:contentId', checkAuth, createCommentContent)
router.delete('/commentContent/:contentId', checkAuth, deleteCommentContent)


module.exports = router