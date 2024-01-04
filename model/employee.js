/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Schema, model } = require('mongoose')

const employeeSchema = new Schema({
    employeeID: {
        type: String,
        // ref: "attendance",
        required: true
    },

    skills: {
        type: String,
        required: true,
    },

    dayOff: {
        type: String,
        required: true,
    },

    hours: {
        type: Number,
        required: true,
    },

    employeeStatus: {
        type: String,
        required: true,
    },

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    cardNumber: {
        type: String,
        required: true,
    },

    department: {
        type: String,
        required: true,
    },

    isHere: {
        type: String,
        required: true,
    },
    columnId: {
        type: String,
        required: true,
        default: 'justComeIn'
    }
})

const employeeModel = model('employee', employeeSchema)

module.exports = employeeModel