const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')


router.post('/login', authController.index)

module.exports = router;