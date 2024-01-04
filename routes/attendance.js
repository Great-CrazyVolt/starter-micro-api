/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Router } = require('express')
const { markAttendance } = require('../controllers/attendance')

const router = Router()

router.post('/markAttendance', markAttendance)


module.exports = router