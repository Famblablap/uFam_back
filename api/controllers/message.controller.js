const Message = require("../models/message.model");
const User = require("../models/user.model");
const Family = require("../models/family.model")

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
    if (!user.family) {
      return res.status(404).send("User not found in the family");
    }
    const familyMessage = await Message.findAll({
      where: {
        familyId: user.family.id,
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
      const user = await User.findByPk(req.params.id, {
        include: Family,
      });
      const familyMessage = await Message.findAll();
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
      const userR = await User.findByPk(req.params.id)
      const user = await User.findByPk(res.locals.user.id)
      const message = await Message.create({
          message: req.body.message,
          receiver_id: userR.id
      })
      await user.addMessage(message)
      await userR.addMessage(message)
      const result = await User.findByPk(req.params.id, {
          include: Message
      })
      if (result) {
          return res.status(200).json(result)
      } else {
          return res.status(404).send('Message not found')
      }
  } catch (error) {
      res.status(500).send(error.message)
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
