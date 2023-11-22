const express = require('express');
const router = express.Router();
const verifiedEmailController = require('../controllers/verified_email.controller');
const { checkAuth } = require('../middleware');

router.post("/send-invitation", checkAuth, verifiedEmailController.sendInvitation);

module.exports = router;
