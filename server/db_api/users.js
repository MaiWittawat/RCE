const express = require('express')
const User = require('../model/user')
const encrypt = require('../utils/encryption')

const router = express.Router()


// API ROUTER
router.get('/', async (req, res) => {
    try {
        const users = await User.getUsers()
        res.status(200).json(users)
    } catch (err) {
        console.error(`Error fetching users: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
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

router.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const user = req.body
        await User.updateUser(userId, user)
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
        const { username, password } = req.body
        const user = await User.getUserByUsername(username)
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

        res.status(200).json({ message: 'Login successful' })

    } catch (err) {
        console.error(`Error to login: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

module.exports = router