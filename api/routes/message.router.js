const router = require('express').Router()

const { getAllMessages, getOneMessage, createMessage, updateOneMessage, deleteOneMessage } = require('../controllers/message.controller')
const { checkAuth, checkAdmin, checkMaster } = require('../middleware/index')
        
router.get('/', checkAuth, checkMaster, getAllMessages)
router.get('/messages/:id', checkAuth, getOneMessage)
router.post('/messages', checkAuth, createMessage)
router.put('/messages/:id', checkAuth, checkMaster, checkAdmin, updateOneMessage)
router.delete('/messages/:id', checkAuth, deleteOneMessage)



module.exports = router