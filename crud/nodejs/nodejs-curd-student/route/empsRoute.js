const express = require('express')
const router = express.Router()
const empController = require('../controller/empController')


router.get('/', empController.index)
router.get('/:empID', empController.empsById)
router.delete('/:empId', empController.empDelete);
router.post('/', empController.empCreate);



module.exports = router;