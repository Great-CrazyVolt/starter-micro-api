/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Router } = require('express')
const { saveEmployee, getEmployees, getPresentEmployees, updateEmployeeColumn } = require('../controllers/employee')

const router = Router()

router.post('/saveEmployee', saveEmployee)
router.get('/getEmployees', getEmployees)
router.get('/getPresentEmployees', getPresentEmployees)
router.post('/updateEmployeeColumn', updateEmployeeColumn)


module.exports = router