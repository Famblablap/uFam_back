const { getAllPhotos, getOnePhoto, createPhoto, deletePhoto } = require('../controllers/photo.controller')
const { photoUpload } = require('../../config/cloudinaryConfig');

const router = require('express').Router()

router.get('/', getAllPhotos)
router.get('/:id', getOnePhoto)
router.post('/', photoUpload.single('photo'), createPhoto)
router.delete('/:id', deletePhoto)


module.exports = router