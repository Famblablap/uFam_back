const Content = require("../models/content.model");
const Family = require("../models/family.model");
const User = require("../models/user.model");

//checkAdmin porque el Admin puede traer todas las fotos de todos los usuarios
async function getAllContent(req, res) {
  try {
    const contents = await Content.findAll();
    return res.status(200).json(contents);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getMyContent(req, res) {
  try {
    const user = res.locals.user.id;
    const contents = await Content.findAll({
      where: {
        userId: user,
      },
    });
    console.log(user);
    return res.status(200).json(contents);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//cheackAdmin porque el Admin puede traer todas las fotos de todos los id de la web
async function getOneContent(req, res) {
  try {
    const content = await Contents.findByPk(req.params.id);
    if (content) {
      return res.status(200).json(content);
    } else {
      return res.status(404).json("Content not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

/*solo checkAuth porque todos pueden acceder a una foto de un usuario especifico 
por el id mientras pertenezca a la familia*/
// async function getFamContent(req, res) {
//   try {
//     const content = await Content.findByPk(req.params.id);
//     const ownerContent = await User.findByPk(content.userId);
//     const user = await User.findByPk(res.locals.user.id, {
//       include: Family,
//     });
//     if (user.familyId !== ownerContent.familyId) {
//       return res.status(500).send("User not authorized");
//     }
//     if (user.familyId === ownerContent.familyId) {
//       return res.status(200).json(content);
//     }
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// }

async function getFamContent(req, res) {
  try {
    const userL = await User.findByPk(res.locals.user.id, {
      include: Family,
    })

    const user = await User.findByPk(req.params.id)

    if (!user) {
      return res.status(404).send("User not found")
    }

    if (user.familyId !== userL.familyId) {
      return res.status(500).send("User not authorized")
    } else {
      const content = await Content.findAll({
        where: {
          userId: user.id,
        },
        include: {
          model: User,
        },
      })
      return res.status(200).json(content)
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

/*solo checkAuth porque todos pueden acceder a todas las fotos de los usuarios 
que pertenezan a la familia*/
async function getAllFamContent(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id, {
      include: Family,
    });
    const contents = await Content.findAll({
      include: [
        {
          model: User,
          where: {
            familyId: user.familyId,
          },
        },
      ],
    });
    return res.status(200).json(contents);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function createContent(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const contentData = {
      ...req.body,
      userId: user.id,
    };
    const content = await Content.create(contentData);
    return res.status(201).json(content);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteContent(req, res) {
  try {
    const content = await Content.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(500).json({ text: "Content removed", content: content });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllContent,
  getMyContent,
  getOneContent,
  getFamContent,
  getAllFamContent,
  createContent,
  deleteContent,
};
