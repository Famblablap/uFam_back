const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Family = require('../models/family.model')

async function signup(req, res) {
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
    req.body.password = hashedPassword
    try {
        const family = await Family.create({ family_name: req.body.family_name })
        req.body.role = "master"
        const user = await User.create({...req.body, familyId: family.id})
        const payload = { email: user.email }
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
        return res.status(200).json({ token: token })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!user) return res.status(404).send('Error: Email or password incorrect')
        const comparePass = bcrypt.compareSync(req.body.password, user.password)

        if (comparePass) {
            const payload = { email: user.email }
            const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
            return res.status(200).send({ token: token })
        } else {
            return res.status(404).send('Error: Email or Password incorrect')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { signup, login }