/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Router } = require('express')
const { markAttendance, deleteAttendance } = require('../controllers/attendance')

const router = Router()

router.post('/markAttendance', markAttendance)
router.post('/deleteAttendance', deleteAttendance)


module.exports = router