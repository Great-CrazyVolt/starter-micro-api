/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const attendanceModel = require('../model/attendance')
const employeeModel = require('../model/employee')

const markAttendance = async (req, res) => {
    try {
        const { employeeID } = req.body

        const employee = await employeeModel.findOne({
            employeeID: employeeID
        })

        // if (employee) {
        //     const attendance = new attendanceModel({ employeeID: employeeID })
        //     attendance.save()
        // }

        res.status(200).send(employee)
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

module.exports = {
    markAttendance
}