// library imports
const express = require('express')
const server = express()
const cors = require('cors')
// route imports
const emailRoute = require('./email/emailRoute')

// middleware
server.use(express.json())
server.use(cors())

// routes
server.use('/email', emailRoute)

module.exports = server