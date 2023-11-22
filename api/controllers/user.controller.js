const Family = require("../models/family.model");
const User = require("../models/user.model");

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findOne();
    if (!user) {
      res.status(500).send("User not found");
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getProfile(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id);
    if (!user) {
      res.status(500).send("User not found");
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getFamProfile(req, res) {
  try {
    const famProfile = await User.findByPk(req.params.userId);
    const user = await User.findByPk(res.locals.user.id, {
      include: Family,
    });
    if (!user || !user.Family) {
      return res.status(404).send("User not found in Family");
    }
    const familyMember = await User.findOne({
      where: {
        id: famProfile,
        familyId: user.Family.id,
      },
    });
    if (!familyMember) {
      return res.status(404).send("Family member not found");
    }
    return res.status(200).json(familyMember);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(500).json({ text: "User removed", user: user });
  } catch (error) {}
}

module.exports = {
  getAllUsers,
  getOneUser,
  getProfile,
  getFamProfile,
  createUser,
  updateUser,
  deleteUser,
};
