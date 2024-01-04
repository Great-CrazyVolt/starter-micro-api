/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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

module.exports = {
    saveEmployee,
    getEmployees
}