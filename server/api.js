const express = require('express')

// Database API
const userRouter = require('./db_api/users')
const problemRouter = require('./db_api/problems')
const caseRouter = require('./db_api/case')


// Email API
const mailRouter = require('./mail_api/nodemailer')


const router = express.Router()

router.use('/users', userRouter)
router.use('/problems', problemRouter)
router.use('/case', caseRouter)
router.use('/mail',  mailRouter)


module.exports = router
