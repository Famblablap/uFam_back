const { getAllLikes, createLike, deleteLike } = require('../controllers/like.controller')

const router = require('express').Router()

router.get('/', getAllLikes)
router.post('/', createLike)
router.delete('/:id', deleteLike)

module.exports = router