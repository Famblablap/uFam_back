const Video = require('../models/video.model')

async function getAllVideos(req, res) {
    try {
        const videos = await Video.findAll()
        return res.status(200).json(videos)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneVideo(req, res) {
    try {
        const video = await Video.findByPk(req.params.id)
        if (!video) { res.status(500).send('Video not found') }
        return res.status(200).json(video)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createVideo(req, res) {
    try {
        const videoUrl = req.file.path
        const video = await Video.create({ ...req.body, videoUrl })
        return res.status(200).json(video);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteVideo(req, res) {
    try {
        const video = await Video.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(500).json({ text: 'Video removed', video: video })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllVideos,
    getOneVideo,
    createVideo,
    deleteVideo
}