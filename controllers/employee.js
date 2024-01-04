/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const attendanceModel = require('../model/attendance')
const employeeModel = require('../model/employee')

const saveEmployee = async (req, res) => {
    const employeeDetails = req.body
    // const employeeDetails = {
    //     employeeID: '023R-32',
    //     skills: 'Scientist',
    //     dayOff: '1',
    //     hours: 8,
    //     employeeStatus: 'Active',
    //     firstName: 'Affan',
    //     lastName: 'Shaffiq',
    //     cardNumber: '32',
    //     department: 'BS Information Technology',
    //     isHere: 'True',
    // }

    const employee = new employeeModel(employeeDetails)
    employee.save()

    res.status(200).send("Employee Data Successfully Saved")
}

const getEmployees = async (req, res) => {
    const employees = await employeeModel.find()
    res.status(200).send(employees)
}

const getPresentEmployees = async (req, res) => {
    const presentEmployees = await attendanceModel.find()
        .populate('employeeID')
        .exec()

    res.status(200).send(presentEmployees)
}

const updateEmployeeColumn = async (req, res) => {
    try {
        const { id, columnId } = req.body

        await employeeModel.findByIdAndUpdate(id, { columnId: columnId })

        res.status(200).send("Successfully updated the column")

    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    saveEmployee,
    getEmployees,
    getPresentEmployees,
    updateEmployeeColumn,
}