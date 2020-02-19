// library imports
const router = require('express').Router()
const nodemailer = require('nodemailer')

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) console.log(error)
  else console.log('Server is ready to take our messages.')
})

router.post('/send', (req, res) => {
  let { name, email, message } = req.body
  let content = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message} `

  let mail = {
    from: name,
    to: 'arvagas@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) res.json({ message: 'Fail' })
    else res.json({ message: 'Success' })
  })
})

module.exports = router