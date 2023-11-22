const Family = require("../models/family.model");
const User = require("../models/user.model");

async function getAllFamProfiles(req, res) {
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
      const familyMembers = await User.findAll({
        where: {
          familyId: user.Family.id,
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
  
module.exports = { getAllFamProfiles }