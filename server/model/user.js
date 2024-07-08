const mysql = require('mysql2/promise')
const encrypt = require('../utils/encryption')

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
    user.password = await encrypt.hashPassword(user.password)
    console.log(user.password)
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
    user.password = await encrypt.hashPassword(user.password)
       
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

async function getUserByUsername(username) {
    const conn = await pool.getConnection()
    try {
        const [result] = await conn.query('SELECT * FROM users WHERE username = ?', [username])
        return result[0]
    } finally {
        conn.release()
    }
}

async function getUserByEmail(userEmail) {
    const conn = await pool.getConnection()
    try {
        const [result] = await conn.query('SELECT * FROM users WHERE email = ?', [userEmail])
        return result[0]
    } finally {
        conn.release()
    }
}

async function saveResetToken(userId, resetToken, resetTokenExpiry) {
    const conn = await pool.getConnection();
    try {
        await conn.query('UPDATE users SET resetToken = ?, resetTokenExpiry = ? WHERE id = ?', [resetToken, resetTokenExpiry, userId]);
    } finally {
        conn.release();
    }
}

async function getUserByResetToken(resetToken) {
    const conn = await pool.getConnection();
    try {
        const [result] = await conn.query('SELECT * FROM users WHERE resetToken = ?', [resetToken]);
        return result[0];
    } finally {
        conn.release();
    }
}


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByUsername,
    getUserByEmail,
    saveResetToken,
    getUserByResetToken,
}