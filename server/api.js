const express = require('express')
const userRouter = require('./db_api/users')

const router = express.Router()

router.use('/users', userRouter)


module.exports = router
