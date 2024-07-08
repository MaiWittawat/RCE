const express = require('express')
const router = express.Router()
const nodemailer = require('../mail')
const User = require('../model/user')
const encrypt = require('../utils/encryption')

router.get('/test', async (req, res) => {
    console.log('/test api in nodemailer.js')
    try {
        const mailOptions = {
            from: 'maiexeccode@gmail.com',
            to: 'mai.wittawat@gmail.com',
            subject: 'Sending Email From /test API',
            text: 'This is the test to send the email for checking the API connection'
        };
        const result = await nodemailer.sendMail(mailOptions)
        console.log(result)
    } catch (err) {
        console.log("send mail error from router : ", err)
        res.status(500).json({ error: "Internal server error" })
    }
})

router.post('/sendMail', async (req, res) => {
    console.log('/sendMail api in nodemailer.js')
    try {
        const mailOptions = {
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text
        }
        const result = await nodemailer.sendMail(mailOptions)
        console.log(result)
        if (!result) {
            console.log(`Fail to send mail`)
            res.status(400).json({ error: "something wrong" })
        }
        else {
            console.log(`Send mail successfully!! : ${result}`)
            res.status(250).json({ message: "Send mail successfully!!" })
        }
    } catch (err) {
        console.log("send mail error from router : ", err)
        res.status(500).json({ error: "Internal server error" })
    }
});

router.post('/resetPassword', async (req, res) => {
    console.log('/resetPassword api in nodemailer.js');
    try {
        const { email } = req.body;
        const user = await User.getUserByEmail(email); 
        console.log(user)        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const result = await nodemailer.resetPassword(email, user.id);
        console.log(result);
        res.status(200).json({ message: 'Password reset email sent!' });

    } catch (err) {
        console.log("send mail error from router : ", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/resetPasswordConfirm', async (req, res) => {
    console.log('/resetPasswordConfirm api in nodemailer.js');
    try {
        const { token, newPassword } = req.body;
        const user = await User.getUserByResetToken(token);

        if (!user || user.resetTokenExpiry < new Date()) {
            return res.status(400).json({ error: 'Invalid or expired token' });
        }

        user.password = newPassword
        user.resetToken = null;
        user.resetTokenExpiry = null;
        await User.updateUser(user.id, user);

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (err) {
        console.log("reset password error from router : ", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router
