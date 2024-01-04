/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Router } = require('express')
const { saveEmployee, getEmployees } = require('../controllers/employee')

const router = Router()

router.post('/saveEmployee', saveEmployee)
router.get('/getEmployees', getEmployees)


module.exports = router