const Video = require('../models/video.model')
const Family = require('../models/family.model')
const User = require('../models/user.model')

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

/*solo checkAuth porque todos pueden acceder a un video de un usuario especifico 
por el id mientras pertenezca a la familia..*/
async function getFamVideo(req, res) {
    try {
      const famVideo = await Video.findByPk(req.params.videoId);
      const user = await User.findByPk(res.locals.user.id, {
        include: Family,
      });
      const familyVideo = await Video.findOne({
        where: {
          id: famVideo.id,
          familyId: user.family.id,
        },
      });
      if (!familyVideo) {
        return res.status(404).send("Video not found");
      }
  
      return res.status(200).json(familyVideo);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  
  /*solo checkAuth porque todos pueden acceder a todos los videos de los usuarios 
  que pertenezan a la familia*/
  async function getAllFamVideos(req, res) {
    try {
      const user = await User.findByPk(res.locals.user.id, {
        include: Family,
      });
      if (!user) {
        return res.status(404).send("User not found");
      }
      if (!user.family) {
        return res.status(404).send("User not found in the family");
      }
      const familyVideos = await Video.findAll({
        where: {
          familyId: user.family.id,
        },
        include: Family,
      });
      if (!familyVideos || familyVideos.length === 0) {
        return res.status(404).send("Videos not found");
      }
  
      return res.status(200).json(familyVideos);
    } catch (error) {
      return res.status(500).send(error.message);
    }
}

async function createVideo(req, res) {
    try {
        const video = await Video.create(req.body)
        return res.status(200).json(video)
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
    getFamVideo,
    getAllFamVideos,
    createVideo,
    deleteVideo
}