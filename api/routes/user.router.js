const { getAllUsers, getOneUser, getProfile, getFamProfile, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { checkAuth, checkAdmin } = require('../middleware/index')
const router = require('express').Router()

//CRUD básico de User
router.get('/', getAllUsers)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.get('/profile', getProfile)
router.get('/profile/:id', checkAuth, getFamProfile)
router.post('/', checkAuth, createUser)
// router.post('/createFam', createFam)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router