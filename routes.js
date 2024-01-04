/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')

const attendanceRouter = require('./routes/attendance')
const employeeRouter = require('./routes/employee')

module.exports = function(app) {
    app.use(express.json())
    app.use(cors())
    
    app.use('/attendance', attendanceRouter)
    app.use('/employee', employeeRouter)
}