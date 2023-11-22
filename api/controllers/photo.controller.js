const Photo = require('../models/photo.model')
const Family = require('../models/family.model')
const User = require('../models/user.model')

//checkAdmin porque el Admin puede traer todas las fotos de todos los usuarios
async function getAllPhotos(req, res) {
  try {
    const photos = await Photo.findAll()
    return res.status(200).json(photos)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//cheackAdmin porque el Admin puede traer todas las fotos de todos los id de la web
async function getOnePhoto(req, res) {
  try {
    const photo = await Photo.findByPk(req.params.id)
    if (!photo) { res.status(500).send('Photo not found') }
    return res.status(200).json(photo)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

/*solo checkAuth porque todos pueden acceder a una foto de un usuario especifico 
por el id mientras pertenezca a la familia*/
async function getFamPhoto(req, res) {
  try {
    const famPhoto = await Photo.findByPk(req.params.photoId);
    console.log(famPhoto)
    const user = await User.findByPk(res.locals.user.id, {
      include: Family,
    });
    const familyPhoto = await Photo.findOne({
      where: {
        // id: famPhoto.id,
        familyId: user.family.id,
      },
    });
    if (!familyPhoto) {
      return res.status(404).send("Photo not found");
    }

    return res.status(200).json(familyPhoto);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

/*solo checkAuth porque todos pueden acceder a todas las fotos de los usuarios 
que pertenezan a la familia*/
async function getAllFamPhotos(req, res) {
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

    const familyPhotos = await Photo.findAll({
      where: {
        familyId: user.family.id,
      },
      include: Family,
    });
    if (!familyPhotos || familyPhotos.length === 0) {
      return res.status(404).send("Photos not found");
    }

    return res.status(200).json(familyPhotos);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function createPhoto(req, res) {
  try {
    const photo = await Photo.create(req.body)
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
  getFamPhoto,
  getAllFamPhotos,
  createPhoto,
  deletePhoto
}