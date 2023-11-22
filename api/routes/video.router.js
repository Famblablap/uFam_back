const { getAllVideos, getOneVideo, createVideo, deleteVideo } = require('../controllers/video.controller')

const router = require('express').Router()

router.get('/', getAllVideos)
router.get('/:id', getOneVideo)
router.post('/', createVideo)
router.delete('/:id', deleteVideo)

module.exports = router