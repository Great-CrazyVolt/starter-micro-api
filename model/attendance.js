/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Schema, model } = require('mongoose')

const attendanceSchema = new Schema({
    employeeID: {
        type: Schema.Types.ObjectId,
        ref: "employee",
        // required: true,
    }
}, { timestamps: true })

const attendanceModel = model('attendance', attendanceSchema)

module.exports = attendanceModel