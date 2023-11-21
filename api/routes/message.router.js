const router = require('express').Router()

const { getAllMessages, getOneMessage, createMessage, updateOneMessage, deleteOneMessage } = require('../controllers/message.controller')

        
router.get('/', getAllMessages)
router.get('/messages/:id', getOneMessage)
router.post('/messages', createMessage)
router.put('/messages/:id', updateOneMessage)
router.delete('/messages/:id', deleteOneMessage)



module.exports = router