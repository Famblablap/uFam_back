const Photo = require ('../models/photo.model')
const Comment_Photos = require ('../models/comment_photos.model')

async function getAllPhotos (req, res){
    try {
        const photos = await Photo.findAll()
        return res.status(200).json(photos)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOnePhoto (req, res){
    try {
        const photo = await Photo.findOne()
        if (!photo) { res.status(500).send('Photo not found') }
        return res.status(200).json(photo)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createPhoto (req, res){
    try {
        const photo = await Photo.create(req.body)
        return res.status(200).json(photo)
    } catch (error) {
        return res.status(500).send(error.message)
    
    }
}

async function createPhotoComment (req, res){
    try {
        const commentPhoto = await Comment_Photos.create(req.body)
        return res.status(200).json(commentPhoto)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deletePhoto(req, res) {
    try {
        const blog = await Photo.destroy({
            where: {
                id: req.params.id
            },
        })
        res.status(500).json({ text: 'Photo removed', photo: photo })
    } catch (error) {

    }
}

module.exports = {
    getAllPhotos,
    getOnePhoto,
    createPhoto,
    deletePhoto
}