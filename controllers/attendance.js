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

        if (employee) {
            const attendance = new attendanceModel({ employeeID: employee._id })
            await attendance.save()
        }

        res.status(200).send(employee)
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

const deleteAttendance = async (req, res) => {
    try {
        const { id } = req.body
        const response = await attendanceModel.findOneAndDelete({ employeeID: id })
        const update = await employeeModel.findByIdAndUpdate(id , { columnId: 'justComeIn' })
        
        if (response && update) {
            res.status(200).send("Removed Successfully")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports = {
    markAttendance,
    deleteAttendance
}