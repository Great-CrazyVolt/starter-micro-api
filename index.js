/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')

const PORT = 8000
const mongooseURI = 'mongodb+srv://CrazyVolt:warface@cluster0.pyjvl3x.mongodb.net/Fiverr_testing'

mongoose.connect(mongooseURI)
    .then(() => {
        console.log('Successfully connected with database')
        app.listen(PORT, () => console.log(`Server is listing on PORT: ${PORT}`))
    })
    .catch(e => console.log(e))

const app = express()

require('./routes')(app)