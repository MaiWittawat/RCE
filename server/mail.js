const nodemailer = require('nodemailer')
const crypto = require('crypto')
const User = require('./model/user')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maiexeccode@gmail.com',
    pass: 'nekxusdgaxuecudd'
  }
});


async function sendMail(mailOptions) {
  try {
    const result = await transporter.sendMail(mailOptions);
    return result
  } catch (err) {
    console.log('error: ', err);
    throw err
  }
} 

async function resetPassword(receiver, userId) {
  try {
    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetTokenExpiry = new Date(Date.now() + 3600000)

    // Save the token and its expiry time to the user's record in the database
    await User.saveResetToken(userId, resetToken, resetTokenExpiry)

    const resetLink = `http://localhost:5173/resetPassword?token=${resetToken}&id=${userId}`
    const mailOptions = {
      from: "maiexeccode@gmail.com",
      to: receiver,
      subject: "Reset your password",
      text: `Click here to reset your password: ${resetLink}`
    };
    const result = await sendMail(mailOptions)
    return result
  } catch (err) {
    console.log('error: ', err)
    throw err
  }
}

module.exports = {
  sendMail,
  resetPassword,
} 