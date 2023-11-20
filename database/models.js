const User = require("../api/models/user.model")
const Blog = require("../api/models/blog.model")
const Family = require("../api/models/family.model")
const Message = require("../api/models/message.model")
const Photo = require("../api/models/photo.model")
const Notification = require("../api/models/notification.model")
const Video = require("../api/models/video.model")
const Like = require("../api/models/like.model")
const Comment_Photos = require("../api/models/comment_photos.model")
const Comment_Videos = require("../api/models/comment_videos.model")

function setRelations(){
    try {
        //One to many
        User.hasMany(Photo)
        Photo.belongsTo(User)

        User.hasMany(Video)
        Video.belongsTo(User)

        User.hasMany(Like)
        Like.belongsTo(User)

        User.hasMany(Notification)
        Notification.belongsTo(User)

        User.hasMany(Blog)
        Blog.belongsTo(User)

        User.hasMany(Message)
        Message.belongsTo(User)

        Family.hasMany(User)
        User.belongsTo(Family)

        Photo.hasMany(Like)
        Like.belongsTo(Photo)

        Video.hasMany(Like)
        Like.belongsTo(Video)

        //Many to many
        User.belongsToMany(Photo, {through: Comment_Photos })
        Photo.belongsToMany(User, { through: Comment_Photos })

        User.belongsToMany(Video, {through: Comment_Videos })
        Video.belongsToMany(User, { through: Comment_Videos })
    
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }