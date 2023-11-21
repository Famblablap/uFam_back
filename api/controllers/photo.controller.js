const Photo = require('../models/photo.model')

async function getAllPhotos(req, res) {
    try {
        const photos = await Photo.findAll()
        return res.status(200).json(photos)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOnePhoto(req, res) {
    try {
        const photo = await Photo.findByPk(req.params.id)
        if (!photo) { res.status(500).send('Photo not found') }
        return res.status(200).json(photo)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createPhoto(req, res) {
    try {
        const photoUrl = req.file.path
        const photo = await Photo.create({ ...req.body, photoUrl })
        return res.status(200).json(photo)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deletePhoto(req, res) {
    try {
        const photo = await Photo.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(500).json({ text: 'Photo removed', photo: photo })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllPhotos,
    getOnePhoto,
    createPhoto,
    deletePhoto
}