const Like = require ('../models/like.model')

async function getAllLikes (req, res){
    try {
        const likes = await Like.findAll()
        return res.status(200).json(likes)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createLike(req, res) {
    try {
        const like = await Like.create(req.body)
        return res.status(200).send(like)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteLike(req, res) {
    try {
        const like = await Like.destroy({
            where: {
                id: req.params.id
            },
        })
        res.status(500).json({ text: 'Like removed', like: like })
    } catch (error) {

    }
}

module.exports = {
    getAllLikes,
    createLike,
    deleteLike
}