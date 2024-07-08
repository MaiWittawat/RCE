const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "exec_code_mysql",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

async function getCase() {
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

module.exports = {
    getCase,
    getCaseById,
    getProblemCase,
    createCase,
    updateCase,
    deleteCase
}