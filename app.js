const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const router = require('./router')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', router)

module.exports = app
