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

async function getProblems() {
    const conn = await pool.getConnection()
    try {
        const results = await conn.query('SELECT * FROM problems')
        return results
    } finally {
        conn.release()
    }
}

async function getProblemById(id) {
    const conn = await pool.getConnection()
    try {
        const result = await conn.query(`SELECT * FROM users WHERE id = ${id}`)
        return result
    } finally {
        conn.release()
    }
}

async function createProblem(problem) {
    const conn = await pool.getConnection()
    try {
        await conn.query(`INSERT INTO problems SET ${problem}`)
    } finally {
        conn.release()
    }
}

async function updateProblem(id, problem) {
    const conn = await pool.getConnection()
    try {
        await conn.query(`UPDATE problems SET ${problem} WHERE id = ${id}`)
    } finally {
        conn.release()
    }
}

async function deleteProblem(id) {
    const conn = await pool.getConnection()
    try {
        await conn.query(`DELETE FROM problems WHERE id = ${id}`)
    } finally {
        conn.release()
    }
}


// API ROUTER

router.get('/', async (req, res) => {
    try {
        const users = await getProblems()
        res.status(200).json(users)
    } catch (err) {
        console.error(`Error fetching problems: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const problem = await getProblemById(req.params.id)
        if (!problem) {
            res.status(200).json({ message: "Problem not found" })
        }
        res.status(200).json(problem)
    } catch (err) {
        console.error(`Error fetch problem: ${req.params.id}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.post('/', async (req, res) => {
    try {
        const problem = req.body
        await createProblem(problem)
        res.status(200).json({ message: "Create problem successfully!!" })
    } catch (err) {
        console.error()
        console.error(`Error created problem: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.put('/:id', async (req, res) => {
    try {
        await updateProblem(req.params.id, req.body)
        res.status(200).json({ message: "Update problem successfully!!" })
    } catch (err) {
        console.error(`Error updating problem: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await deleteProblem(req.params.id)
        res.status(200).json({ message: "Delete problem successfully!!" })
    } catch (err) {
        console.error(`Error deleted problem: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

module.exports = router

