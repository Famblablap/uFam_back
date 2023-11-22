async function getAllFamilyProfiles(req, res) {
    try {
      const user = await User.findByPk(req.params.userId, {
        include: Family,
      });
      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      if (!user.Family) {
        return res.status(404).send("El usuario no está asociado a ninguna familia");
      }
      const familyMembers = await User.findAll({
        where: {
          familyId: user.Family.id,
        },
        include: Family,
      });
  
      if (!familyMembers || familyMembers.length === 0) {
        return res.status(404).send("No se encontraron miembros de la familia");
      }
  
      return res.status(200).json(familyMembers);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  