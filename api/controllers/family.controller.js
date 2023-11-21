const Family = require('../models/family.model')

async function createFamily(req, res) {
    try {
        const family = await Family.create({ user_id: req.body.user_id })
        return res.status(200).json(family)
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

async function getAllFamilies(req, res) {
    try {
        const families = await Family.findAll()
        return res.status(200).json(families)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateFamily(req, res) {
    try {
        const [updated] = await Family.update(req.body, {
            where: { family_id: req.params.id }
        })
        if (updated) {
            return res.status(200).send({ message: 'Family updated' })
        }
        return res.status(404).send('Family not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//res.local.id 
//master can delete, update

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

module.exports = {
    createFamily,
    getFamilyById,
    getAllFamilies,
    updateFamily,
    deleteFamily
}