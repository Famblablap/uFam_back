const Message = require("../models/message.model");
const User = require("../models/user.model");

async function getAllMessages(req, res) {
  try {
    const messages = await Message.findAll({
      include: {
        model: User,
        attributes: ["name"],
      },
    });
    if (messages && messages.length > 0) {
      return res.status(200).json(messages);
    } else {
      return res.status(404).send("No messages");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getAllFamMessages(req, res) {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: Family,
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    if (!user.Family) {
      return res.status(404).send("User not found in the family");
    }
    const familyMessage = await Message.findAll({
      where: {
        familyId: user.Family.id,
      },
    });
    if (!familyMessage || familyMessage.length === 0) {
      return res.status(404).send("Not messages in the Family");
    }
    return res.status(200).json(familyMessage);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


async function getOneMessage(req, res) {
    try {
        const message = await Message.findByPk(req.params.id, {
            include: {
                model: User,
                attributes: ["name"],
            },
        });
        if (message) {
            return res.status(200).json(message);
        } else {
            return res.status(404).send("Message not found");
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneFamMessages(req, res) {
    try {
      const user = await User.findByPk(req.params.userId, {
        include: Family,
      });
      if (!user) {
        return res.status(404).send("User not found");
      }
      if (!user.Family) {
        return res.status(404).send("User not found in the family");
      }
      const familyMessage = await Message.findOne({
        where: {
          familyId: user.Family.id,
        },
        include: Family,
      });
      if (!familyMessage || familyMessage.length === 0) {
        return res.status(404).send("Not messages in the Family");
      }
      return res.status(200).json(familyMessage);
    } catch (error) {
      return res.status(500).send(error.message);
    }
}

async function createMessage(req, res) {
  try {
    const message = await Message.create({
      message: req.body.message,
    });
    return res.status(200).json({ message: message });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteOneMessage(req, res) {
  try {
    const message = await Message.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (message) {
      return res.status(200).send("Message deleted");
    } else {
      return res.status(404).send("Message not found");
    }
  } catch {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllMessages,
  getOneMessage,
  getAllFamMessages,
  getOneFamMessages,
  createMessage,
  deleteOneMessage,
};
