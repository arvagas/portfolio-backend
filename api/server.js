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

// test route
server.get('/', (req, res) => {
  res.status(200).json({ message: "Hello World!" })
})

module.exports = server