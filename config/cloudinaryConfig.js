const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const photoStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Home/test',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    },
})

const videoStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Home/test',
        resource_type: 'video',
        allowedFormats: ['mp4', 'avi', 'mov'],
    },
})

module.exports = {
    photoUpload: multer({ storage: photoStorage }),
    videoUpload: multer({ storage: videoStorage }),
}