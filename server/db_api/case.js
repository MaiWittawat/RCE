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

async function getCases() {
    const conn = await pool.getConnection()
    try {
        const [results] = await conn.query("SELECT * FROM cases")
        console.log(results)
        return results
    } finally {
        conn.release()
    }

}

async function getCaseById(caseId) {
    const conn = await pool.getConnection()
    try {
        const [result] = await conn.query("SELECT * FROM cases WHERE id = ?", [caseId])
        console.log(result)
        return result
    } finally {
        conn.release()
    }
}


async function createCase(problemCase) {
    const conn = await pool.getConnection()
    try {
        const [result] = await conn.query("INSERT INTO cases SET ?", [problemCase])
        console.log(result.insertId)
        return result.insertId
    } finally {
        conn.release()
    }

}

async function updateCase(caseId, problemCase) {
    const conn = await pool.getConnection()
    try {
        await conn.query("UPDATE cases SET ? WHERE id = ?", [problemCase, caseId])
    } finally {
        conn.release()
    }
}

async function deleteCase(caseId) {
    const conn = await pool.getConnection()
    try {
        await conn.query("DELETE FROM cases WHERE id = ?", [caseId])
    } finally {
        conn.release()
    }
}

async function getProblemCase(problemId, category) {
    const conn = await pool.getConnection()
    try {
        const query_cmd = "SELECT * FROM cases WHERE problem_id = ? AND category = ?"
        const [results] = await conn.query(query_cmd, [problemId, category])
        return results
    } finally {
        conn.release()
    }
}

// API ROUTER

router.get('/', async (req, res) => {
    try {
        const problemCases = await getCases()
        res.status(200).json(problemCases)
    } catch (err) {
        console.error(`Error fetching cases: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


router.get('/:problem_id/:category', async (req, res) => {
    try {
        const problemId = req.params.problem_id;
        const category = req.params.category;
        const problemCase = await getProblemCase(problemId, category);
        res.status(200).json(problemCase);
    } catch (err) {
        console.error(`Error fetching problem case: ${err}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const caseId = req.params.id
        const problemCase = await getCaseById(caseId)
        if (!problemCase.length) {
            res.status(404).json({ message: "Case not found" })
        }
        res.status(200).json(problemCase)
    } catch (err) {
        console.error(`Error fetch case: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


router.post('/', async (req, res) => {
    try {
        const problemCase = req.body
        await createCase(problemCase)
        res.status(200).json({ message: "Create case successfully!!" })
    } catch (err) {
        console.error()
        console.error(`Error created case: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


router.put('/:id', async (req, res) => {
    try {
        const caseId = req.params.id
        const problemCase = req.body
        await updateCase(caseId, problemCase)
        res.status(201).json({ message: "Update case successfully!!" })
    } catch (err) {
        console.error(`Error updating case: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const caseId = req.params.id
        await deleteCase(caseId)
        res.status(200).json({ message: "Delete case successfully!!" })
    } catch (err) {
        console.error(`Error deleted case: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


module.exports = router