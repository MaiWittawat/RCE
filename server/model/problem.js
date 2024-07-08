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

async function getProblems() {
    const conn = await pool.getConnection()
    try {
        const [results] = await conn.query('SELECT * FROM problems')
        return results
    } finally {
        conn.release()
    }
}

async function getProblemById(problemId) {
    const conn = await pool.getConnection()
    try {
        const [result] = await conn.query("SELECT * FROM problems WHERE id = ?", [problemId])
        return result
    } finally {
        conn.release()
    }
}

async function createProblem(problem) {
    const conn = await pool.getConnection()
    try {
        await conn.query("INSERT INTO problems SET ?", [problem])
    } finally {
        conn.release()
    }
}

async function updateProblem(problemId, problem) {
    const conn = await pool.getConnection()
    try {
        await conn.query("UPDATE problems SET ? WHERE id = ?", [problem, problemId])
    } finally {
        conn.release()
    }
}

async function deleteProblem(problemId) {
    const conn = await pool.getConnection()
    try {
        await conn.query("DELETE FROM problems WHERE id = ?", [problemId])
    } finally {
        conn.release()
    }
}


module.exports = {
    getProblems,
    getProblemById,
    createProblem,
    updateProblem,
    deleteProblem,
}

