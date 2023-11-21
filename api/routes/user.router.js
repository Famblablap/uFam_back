const { deleteBlog } = require('../controllers/blog.controller')
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')

const router = require('express').Router()

//CRUD básico de User
router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteBlog)

module.exports = router