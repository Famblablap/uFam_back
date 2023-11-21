const { getAllUsers, getOneUser, getProfile, getFamProfile, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { checkAuth, checkAdmin } = require('../middleware/index')
const router = require('express').Router()

//CRUD básico de User
router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.get('/profile', checkAuth, getProfile)
router.get('/profile/:id', checkAuth, getFamProfile)
router.post('/', createUser)
// router.post('/createFam', createFam)
router.put('/:id',checkAuth, updateUser)
router.delete('/:id',checkAuth, deleteUser)

module.exports = router