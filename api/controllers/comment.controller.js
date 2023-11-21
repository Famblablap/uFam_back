const Comment_Photos = require('../models/comment_photos.model')
const Comment_Videos = require('../models/comment_videos.model')
const User = require('../models/user.model')
const Photo = require('../models/photo.model')
const Video = require('../models/video.model')

async function createCommentPhoto(req, res) {
    try {
        const comment = await Comment_Photos.create(req.body)
        const user = await User.findByPk(res.locals.user.id)
        if (!user) { res.status(404).send('User not found') }
        const photo = await Photo.findByPk(req.params.photoId)
        await comment.setPhoto(photo)
        await comment.setUser(user)
        return res.status(200).json(comment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getCommentsPhoto(req, res) {
    try {
        const commentPhoto = await Comment_Photos.findAll({
            where: {
                photoId: req.params.id
            }
        })
        if (!commentPhoto) { res.status(404).send('Comment photo not found') }
        return res.status(200).json(commentPhoto)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteCommentPhoto(req, res) {
    try {
        const commentPhoto = await Comment_Photos.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(500).json({ text: 'Comment photo removed', commentPhoto: commentPhoto })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createCommentVideo(req, res) {
    try {
        const comment = await Comment_Videos.create(req.body)
        const user = await User.findByPk(res.locals.user.id)
        if (!user) { res.status(404).send('User not found') }
        const video = await Video.findByPk(req.params.videoId)
        await comment.setVideo(video)
        await comment.setUser(user)
        return res.status(200).json(comment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getCommentsVideo(req, res) {
    try {
        const commentVideo = await Comment_Videos.findAll({
            where: {
                videoId: req.params.id
            }
        })
        if (!commentVideo) { res.status(404).send('Comment video not found') }
        return res.status(200).json(commentVideo)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteCommentVideo(req, res) {
    try {
        const commentVideo = await Comment_Video.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(500).json({ text: 'Comment video removed', commentVideo: commentVideo })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    createCommentPhoto,
    getCommentsPhoto,
    deleteCommentPhoto,
    createCommentVideo,
    getCommentsVideo,
    deleteCommentVideo
}