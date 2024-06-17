const express = require('express')
const mysql = require('mysql2/promise')

const router = express.Router()

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "exec_code_mysql",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

async function getUsers() {
    const conn = await pool.getConnection()
    try {
        const [results] = await conn.query("SELECT * FROM users")
        console.log(results)
        return results
    } finally {
        conn.release()
    }
}

async function getUserById(userId) {
    const conn = await pool.getConnection()
    try {
        const [result] = await conn.query('SELECT * FROM users WHERE id = ?', [userId])
        console.log(result)
        return result
    } finally {
        conn.release()
    }

}


async function createUser(user) {
    const conn = await pool.getConnection()
    try {
        const [result] = await conn.query('INSERT INTO users SET ?', user)
        console.log(result.insertId)
        return result.insertId

    } finally {
        conn.release()
    }
}

async function updateUser(userId, user) {
    const conn = await pool.getConnection()
    try {
        await conn.query('UPDATE users SET ? WHERE id = ?', [user, userId])
    } finally {
        conn.release()
    }
}

async function deleteUser(userId) {
    const conn = await pool.getConnection()
    try {
        await conn.query('DELETE FROM users WHERE id = ?', [userId])
    } finally {
        conn.release()
    }
}



// API ROUTER

router.get('/', async (req, res) => {
    try {
        const users = await getUsers()
        res.status(200).json(users)
    } catch (err) {
        console.error(`Error fetching users: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const user = await getUserById(userId)
        if (!user) {
            res.status(404).json({ message: "User not found" })
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
        await createUser(user)
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
        await updateUser(userId, user)
        res.status(200).json({ message: "Update user successfully!!" })
    } catch (err) {
        console.error(`Error updating user: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const userId = req.params.id
        await deleteUser(userId)
        res.status(200).json({ message: "Delete user successfully!!" })
    } catch (err) {
        console.error(`Error deleted user: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

module.exports = router