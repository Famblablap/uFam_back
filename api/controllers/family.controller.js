const { sendMailCreateAccount } = require('../../mailer/senders');
const Family = require('../models/family.model')
const User = require("../models/user.model");

async function getAllFamilies(req, res) {
    try {
        const families = await Family.findAll()
        return res.status(200).json(families)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getFamilyById(req, res) {
    try {
        const family = await Family.findByPk(req.params.id)
        if (family) {
            return res.status(200).json(family)
        } else {
            return res.status(404).send('Family not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getAllFamProfiles(req, res) {
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
      const familyMembers = await User.findAll({
        where: {
          familyId: user.family.id,
        },
        include: Family,
      });
      if (!familyMembers || familyMembers.length === 0) {
        return res.status(404).send("Family members not found");
      }
  
      return res.status(200).json(familyMembers);
    } catch (error) {
      return res.status(500).send(error.message);
    }
}
//Solo se crea familia cuando se hace el SignUp, por lo que no necesitamos createFamily
/* async function createFamily(req, res) {
    try {
        const family = await Family.create({ family_name: req.body.family_name })
        return res.status(200).json(family)
    } catch (error) {
        return res.status(500).send(error.message)
    }
} */

async function updateFamily(req, res) {
    try {
        const family = await Family.update(req.body, {
            where: { 
                id: req.params.id 
            }
        })
        if (family == 0) {
            return res.status(404).send("Family not found")
        }
        return res.status(200).send("Family has been updated")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteFamily(req, res) {
    try {
        const deleted = await Family.destroy({
            where: { family_id: req.params.id }
        });
        if (deleted) {
            return res.status(200).send({ message: 'Family deleted' })
        }
        return res.status(404).send('Family not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//if role master->delete family

async function authEmailFam(req, res){
    try {
        
        const resMail = await mailer.sendMail(sendMailCreateAccount(user.email))
        console.log(resMail)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getFamilyById,
    getAllFamilies,
    getAllFamProfiles,
    updateFamily,
    deleteFamily, 
    authEmailFam
}


  