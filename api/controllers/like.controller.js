const Like = require ('../models/like.model')
const { createNotification } = require("./notification.controller")

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
        const likeData = { userId: res.locals.user.id };

        if (req.body.contentId) {
            likeData.contentId = req.body.contentId;
            req.body = { ...req.body, action: 'Liked', contentId: req.body.contentId, contentType: 'content' };
        } else if (req.body.commentId) {
            likeData.commentId = req.body.commentId;
            req.body = { ...req.body, action: 'Liked', contentId: req.body.commentId, contentType: 'comment' };
        }
        
        const like = await Like.create(likeData);
        req.body.like_id = like.id
        const notification = await createNotification(req.body);

        return res.status(200).send(notification);
    } catch (error) {
        return res.status(500).send(error.message);
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