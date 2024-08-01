const express = require('express')
const User = require('../model/user')
const encrypt = require('../utils/encryption')
const jwt = require('jsonwebtoken')
const router = express.Router()

const mysecret = "MAIaam1146"

// API ROUTER
router.get('/', async (req, res) => {
    try {
        const authHeader = req.headers['authorization']

        if (!authHeader) {
            return res.status(401).json({ error: "No authorization header provided" })
        }

        const token = authHeader.split(' ')[1]
        const user = jwt.verify(token, mysecret)

        const checkUser = await User.getUserByEmail(user.email)

        if (!checkUser) {
            throw { message: "user not found" }
        }

        const results = await User.getUsers()
        res.status(200).json({
            users: results
        })

    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            console.error(`JWT Error: ${err.message}`)
            res.status(401).json({ error: "Unauthorized: Invalid Token" })
        }
        else {
            console.error(`Error fetching users: ${err}`)
            res.status(500).json({ error: "Internal Server Error" })
        }
    }
})

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.getUserById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json(user)

    } catch (err) {
        console.error(`Error fetch user: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

// create user
router.post('/', async (req, res) => {
    try {
        const user = req.body
        await User.createUser(user)
        res.status(200).json({ message: "Create user successfully!!" })
    } catch (err) {
        console.error()
        console.error(`Error created user: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

// update user
router.put('/:id', async (req, res) => {
    try {
        const authHeader = req.headers['authorization']

        if (!authHeader) {
            return res.status(401).json({ error: "No authorization header provided" })
        }

        const token = authHeader.split(' ')[1]
        const tokenUser = jwt.verify(token, mysecret)
        const userId = req.params.id
        const isSameUser = User.compareUser(tokenUser.email, userId)

        if (!isSameUser) {
            return res.status(403).json({ error: "Forbidden: You can only update your own information" })
        }

        const userBody = req.body
        await User.updateUser(userId, userBody)
        res.status(200).json({ message: "Update user successfully!!" })
    } catch (err) {
        console.error(`Error updating user: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const userId = req.params.id
        await User.deleteUser(userId)
        res.status(200).json({ message: "Delete user successfully!!" })
    } catch (err) {
        console.error(`Error deleted user: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.getUserByEmail(email)
        if (!user) {
            console.log(`User not found`)
            return res.status(404).json({ error: 'User not found' })
        }

        const passwordMatch = await encrypt.comparePassword(password, user.password)
        console.log(`PasswordMatch: ${passwordMatch}`)

        if (!passwordMatch) {
            console.log(`Invalid credentials`)
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        // create jwt token
        const token = jwt.sign({ email }, mysecret, { expiresIn: '1h' })
        res.status(200).json({
            message: 'Login successful',
            token
        })

    } catch (err) {
        console.error(`Error to login: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})



module.exports = router