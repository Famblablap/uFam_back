const { getAllPhotos, getOnePhoto, createPhoto, deletePhoto } = require('../controllers/photo.controller')

const router = require('express').Router()

router.get('/', getAllPhotos)
router.get('/:id', getOnePhoto)
router.post('/', createPhoto)
router.delete('/:id', deletePhoto)


module.exports = router