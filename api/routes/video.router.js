const { getAllVideos, getOneVideo, getFamVideo, getAllFamVideos, createVideo, deleteVideo } = require('../controllers/video.controller')
const { checkAuth, checkAdmin } = require('../middleware/index')

const router = require('express').Router()

router.get('/admin', checkAuth, checkAdmin, getAllVideos)
router.get('/:videoId', checkAuth, getFamVideo)
router.get('/', checkAuth, getAllFamVideos)
router.get('/admin/:id', checkAuth, getOneVideo)
router.post('/', checkAuth, createVideo)
router.delete('/:id', checkAuth, deleteVideo)

module.exports = router