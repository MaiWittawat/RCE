const argon2 = require('argon2')

// ฟังก์ชันสำหรับการเข้ารหัสรหัสผ่าน
async function hashPassword(password) {
  try {
    const hashedPassword = await argon2.hash(password)
    return hashedPassword
  } catch (error) {
    console.error('Error hashing password:', error)
    throw new Error('Hashing failed')
  }
}

// ฟังก์ชันสำหรับการตรวจสอบรหัสผ่าน
async function comparePassword(password, hashedPassword) {
  try {
    const isMatch = await argon2.verify(hashedPassword, password)
    return isMatch
  } catch (error) {
    console.error('Error comparing password:', error)
    throw new Error('Comparison failed')
  }
}

module.exports = {
  hashPassword,
  comparePassword,
}
