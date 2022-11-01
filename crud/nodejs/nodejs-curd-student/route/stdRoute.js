
const express = require('express')
const router = express.Router()
const stdController = require('../controller/stdController')


router.get('/', stdController.index)
router.get('/:id', stdController.stdById)
router.get('/:id/fees', stdController.stdGetFees);
router.get('/:id/result', stdController.stdGetResult);







module.exports = router;